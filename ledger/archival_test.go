// Copyright (C) 2019-2025 Algorand, Inc.
// This file is part of go-algorand
//
// go-algorand is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// go-algorand is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with go-algorand.  If not, see <https://www.gnu.org/licenses/>.

package ledger

import (
	"context"
	"crypto/rand"
	"database/sql"
	"fmt"
	mathrand "math/rand"
	"path/filepath"
	"reflect"
	"runtime"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/algorand/go-algorand/agreement"
	"github.com/algorand/go-algorand/config"
	"github.com/algorand/go-algorand/crypto"
	"github.com/algorand/go-algorand/data/basics"
	basics_testing "github.com/algorand/go-algorand/data/basics/testing"
	"github.com/algorand/go-algorand/data/bookkeeping"
	"github.com/algorand/go-algorand/data/transactions"
	"github.com/algorand/go-algorand/data/transactions/logic"
	"github.com/algorand/go-algorand/ledger/eval"
	"github.com/algorand/go-algorand/ledger/ledgercore"
	"github.com/algorand/go-algorand/ledger/store/blockdb"
	"github.com/algorand/go-algorand/ledger/store/trackerdb"
	"github.com/algorand/go-algorand/logging"
	"github.com/algorand/go-algorand/protocol"
	"github.com/algorand/go-algorand/test/partitiontest"
	"github.com/algorand/go-algorand/util/db"
)

type wrappedLedger struct {
	l               *Ledger
	minQueriedBlock basics.Round
}

func (wl *wrappedLedger) recordBlockQuery(rnd basics.Round) {
	if rnd < wl.minQueriedBlock {
		wl.minQueriedBlock = rnd
	}
}

func (wl *wrappedLedger) Block(rnd basics.Round) (bookkeeping.Block, error) {
	wl.recordBlockQuery(rnd)
	return wl.l.Block(rnd)
}

func (wl *wrappedLedger) BlockHdr(rnd basics.Round) (bookkeeping.BlockHeader, error) {
	wl.recordBlockQuery(rnd)
	return wl.l.BlockHdr(rnd)
}

func (wl *wrappedLedger) trackerEvalVerified(blk bookkeeping.Block, accUpdatesLedger eval.LedgerForEvaluator) (ledgercore.StateDelta, error) {
	return wl.l.trackerEvalVerified(blk, accUpdatesLedger)
}

func (wl *wrappedLedger) Latest() basics.Round {
	return wl.l.Latest()
}

func (wl *wrappedLedger) trackerDB() trackerdb.Store {
	return wl.l.trackerDB()
}

func (wl *wrappedLedger) blockDB() db.Pair {
	return wl.l.blockDB()
}

func (wl *wrappedLedger) trackerLog() logging.Logger {
	return wl.l.trackerLog()
}

func (wl *wrappedLedger) GenesisHash() crypto.Digest {
	return wl.l.GenesisHash()
}

func (wl *wrappedLedger) GenesisProto() config.ConsensusParams {
	return wl.l.GenesisProto()
}

func (wl *wrappedLedger) GenesisProtoVersion() protocol.ConsensusVersion {
	return wl.l.GenesisProtoVersion()
}

func (wl *wrappedLedger) GenesisAccounts() map[basics.Address]basics.AccountData {
	return wl.l.GenesisAccounts()
}

func getInitState() (genesisInitState ledgercore.InitState) {
	blk := bookkeeping.Block{}
	blk.CurrentProtocol = protocol.ConsensusCurrentVersion
	blk.RewardsPool = testPoolAddr
	blk.FeeSink = testSinkAddr

	accts := make(map[basics.Address]basics.AccountData)
	accts[testPoolAddr] = basics_testing.MakeAccountData(basics.NotParticipating, basics.MicroAlgos{Raw: 1234567890})
	accts[testSinkAddr] = basics_testing.MakeAccountData(basics.NotParticipating, basics.MicroAlgos{Raw: 1234567890})

	genesisInitState.Accounts = accts
	genesisInitState.Block = blk
	genesisInitState.GenesisHash = crypto.Digest{}
	return genesisInitState
}

func TestArchival(t *testing.T) {
	partitiontest.PartitionTest(t)

	// This test ensures that trackers return the correct value from
	// committedUpTo() -- that is, if they return round rnd, then they
	// do not ask for any round before rnd on a subsequent call to
	// loadFromDisk().
	//
	// We generate mostly empty blocks, with the exception of timestamps,
	// which affect participationTracker.committedUpTo()'s return value.
	dbName := fmt.Sprintf("%s.%d", t.Name(), crypto.RandUint64())
	genesisInitState := getInitState()
	const inMem = true
	cfg := config.GetDefaultLocal()
	cfg.Archival = true
	log := logging.TestingLog(t)
	log.SetLevel(logging.Info)
	l, err := OpenLedger(log, dbName, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	defer l.Close()
	wl := &wrappedLedger{
		l: l,
	}

	nonZeroMinSaves := 0
	blk := genesisInitState.Block

	for i := 0; i < 2000; i++ {
		blk.BlockHeader.Round++
		blk.BlockHeader.TimeStamp += int64(crypto.RandUint64() % 100 * 1000)
		wl.l.AddBlock(blk, agreement.Certificate{})

		// Don't bother checking the trackers every round -- it's too slow..
		if crypto.RandUint64()%23 > 0 {
			continue
		}

		wl.l.WaitForCommit(blk.Round())
		minMinSave, err := checkTrackers(t, wl, blk.Round())
		require.NoError(t, err)
		if err != nil {
			// Return early, to help with iterative debugging
			return
		}

		if minMinSave > 0 {
			nonZeroMinSaves++
		}

		if nonZeroMinSaves > 20 {
			// Every tracker has given the ledger a chance to GC a few blocks
			return
		}
	}

	t.Error("Did not observe every tracker GCing the ledger")
}

func TestArchivalRestart(t *testing.T) {
	partitiontest.PartitionTest(t)

	// Start in archival mode, add 2K blocks, restart, ensure all blocks are there

	dbName := fmt.Sprintf("%s.%d", t.Name(), crypto.RandUint64())
	dbPrefix := filepath.Join(t.TempDir(), dbName)

	genesisInitState := getInitState()
	const inMem = false // use persistent storage
	cfg := config.GetDefaultLocal()
	cfg.Archival = true

	l, err := OpenLedger(logging.Base(), dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	blk := genesisInitState.Block

	const maxBlocks = 2000
	for i := 0; i < maxBlocks; i++ {
		blk.BlockHeader.Round++
		blk.BlockHeader.TimeStamp += int64(crypto.RandUint64() % 100 * 1000)
		l.AddBlock(blk, agreement.Certificate{})
	}
	l.WaitForCommit(blk.Round())

	var latest, earliest basics.Round
	err = l.blockDBs.Rdb.Atomic(func(ctx context.Context, tx *sql.Tx) error {
		latest, err = blockdb.BlockLatest(tx)
		require.NoError(t, err)

		earliest, err = blockdb.BlockEarliest(tx)
		require.NoError(t, err)
		return err
	})
	require.NoError(t, err)
	require.Equal(t, basics.Round(maxBlocks), latest)
	require.Equal(t, basics.Round(0), earliest)
	// close and reopen the same DB, ensure latest/earliest are not changed
	l.Close()
	l, err = OpenLedger(logging.Base(), dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	defer l.Close()

	err = l.blockDBs.Rdb.Atomic(func(ctx context.Context, tx *sql.Tx) error {
		latest, err = blockdb.BlockLatest(tx)
		require.NoError(t, err)

		earliest, err = blockdb.BlockEarliest(tx)
		require.NoError(t, err)
		return err
	})
	require.NoError(t, err)
	require.Equal(t, basics.Round(maxBlocks), latest)
	require.Equal(t, basics.Round(0), earliest)
}

func makeUnsignedAssetCreateTx(firstValid, lastValid basics.Round, total uint64, defaultFrozen bool, manager string, reserve string, freeze string, clawback string, unitName string, assetName string, url string, metadataHash []byte) (transactions.Transaction, error) {
	var tx transactions.Transaction
	var err error

	tx.Type = protocol.AssetConfigTx
	tx.FirstValid = firstValid
	tx.LastValid = lastValid
	tx.AssetParams = basics.AssetParams{
		Total:         total,
		DefaultFrozen: defaultFrozen,
	}
	tx.AssetParams.Manager, err = basics.UnmarshalChecksumAddress(manager)
	if err != nil {
		return tx, err
	}
	tx.AssetParams.Reserve, err = basics.UnmarshalChecksumAddress(reserve)
	if err != nil {
		return tx, err
	}
	tx.AssetParams.Freeze, err = basics.UnmarshalChecksumAddress(freeze)
	if err != nil {
		return tx, err
	}
	tx.AssetParams.Clawback, err = basics.UnmarshalChecksumAddress(clawback)
	if err != nil {
		return tx, err
	}
	tx.AssetParams.URL = url
	copy(tx.AssetParams.MetadataHash[:], metadataHash)
	tx.AssetParams.UnitName = unitName
	tx.AssetParams.AssetName = assetName
	return tx, nil
}

func makeUnsignedAssetDestroyTx(firstValid, lastValid basics.Round, assetIndex basics.AssetIndex) (transactions.Transaction, error) {
	var txn transactions.Transaction
	txn.Type = protocol.AssetConfigTx
	txn.ConfigAsset = assetIndex
	txn.FirstValid = firstValid
	txn.LastValid = lastValid
	return txn, nil
}

func makeUnsignedApplicationCallTx(appIdx basics.AppIndex, onCompletion transactions.OnCompletion) (tx transactions.Transaction, err error) {
	tx.Type = protocol.ApplicationCallTx
	tx.ApplicationID = appIdx
	tx.OnCompletion = onCompletion

	// If creating, set programs
	if appIdx == 0 {
		testprog := `#pragma version 2
			// Write global["foo"] = "bar"
			byte base64 Zm9v
			byte base64 YmFy
			app_global_put

			// Write sender.local["foo"] = "bar"
			// txn.Sender
			int 0
			byte base64 Zm9v
			byte base64 YmFy
			app_local_put

			int 1
		`
		ops, err := logic.AssembleString(testprog)
		if err != nil {
			return tx, err
		}
		tx.ApprovalProgram = ops.Program
		tx.ClearStateProgram = ops.Program
		tx.GlobalStateSchema = basics.StateSchema{
			NumByteSlice: 1,
		}
		tx.LocalStateSchema = basics.StateSchema{
			NumByteSlice: 1,
		}
	}

	return tx, nil
}

func TestArchivalCreatables(t *testing.T) {
	partitiontest.PartitionTest(t)

	// Start in archival mode, add 2K blocks with asset + app txns
	// restart, ensure all assets are there in index unless they were
	// deleted

	dbName := fmt.Sprintf("%s.%d", t.Name(), crypto.RandUint64())
	dbPrefix := filepath.Join(t.TempDir(), dbName)

	genesisInitState := getInitState()

	// Enable assets
	genesisInitState.Block.BlockHeader.GenesisHash = crypto.Digest{}
	genesisInitState.Block.CurrentProtocol = protocol.ConsensusFuture
	genesisInitState.GenesisHash = crypto.Digest{1}
	genesisInitState.Block.BlockHeader.GenesisHash = crypto.Digest{1}

	type ActionEnum uint64
	const AssetCreated ActionEnum = 0
	const AppCreated ActionEnum = 1
	const AssetDeleted ActionEnum = 2
	const AppDeleted ActionEnum = 3

	creatableIdxs := make(map[basics.CreatableIndex]ActionEnum)
	allCreators := make(map[basics.CreatableIndex]basics.Address)

	// keep track of existing/deleted assets for sanity check at end
	var expectedExisting int
	var expectedDeleted int

	// give creators money for min balance
	const maxBlocks = 2000
	var creators []basics.Address
	for i := 0; i < maxBlocks; i++ {
		creator := basics.Address{}
		_, err := rand.Read(creator[:])
		require.NoError(t, err)
		creators = append(creators, creator)
		genesisInitState.Accounts[creator] = basics_testing.MakeAccountData(basics.Offline, basics.MicroAlgos{Raw: 1234567890})
	}

	// open ledger
	const inMem = false // use persistent storage
	cfg := config.GetDefaultLocal()
	cfg.Archival = true
	l, err := OpenLedger(logging.Base(), dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	blk := genesisInitState.Block

	// keep track of max created idx
	var maxCreated uint64

	// create apps and assets
	for i := 0; i < maxBlocks; i++ {
		blk.BlockHeader.Round++
		blk.BlockHeader.TimeStamp += int64(crypto.RandUint64() % 100 * 1000)

		// make a transaction that will create an asset or application
		creatorEncoded := creators[i].String()
		createdIdx := basics.CreatableIndex(blk.BlockHeader.TxnCounter + 1)
		var tx transactions.Transaction
		if mathrand.Float32() < 0.5 {
			creatableIdxs[createdIdx] = AssetCreated
			tx, err = makeUnsignedAssetCreateTx(blk.BlockHeader.Round-1, blk.BlockHeader.Round+3, 100, false, creatorEncoded, creatorEncoded, creatorEncoded, creatorEncoded, "m", "m", "", nil)
		} else {
			creatableIdxs[createdIdx] = AppCreated
			tx, err = makeUnsignedApplicationCallTx(0, transactions.OptInOC)
		}
		require.NoError(t, err)

		maxCreated = uint64(createdIdx)

		tx.Sender = creators[i]
		expectedExisting++

		allCreators[createdIdx] = tx.Sender
		blk.BlockHeader.TxnCounter++

		// make a payset
		var payset transactions.Payset
		stxnib := makeSignedTxnInBlock(tx)
		payset = append(payset, stxnib)
		blk.Payset = payset

		// for some of the assets/apps, delete it in the same block
		if i >= maxBlocks/2 && i < (3*(maxBlocks/4)) {
			switch creatableIdxs[createdIdx] {
			case AssetCreated:
				tx, err = makeUnsignedAssetDestroyTx(blk.BlockHeader.Round-1, blk.BlockHeader.Round+3, basics.AssetIndex(createdIdx))
				creatableIdxs[createdIdx] = AssetDeleted
			case AppCreated:
				tx, err = makeUnsignedApplicationCallTx(basics.AppIndex(createdIdx), transactions.DeleteApplicationOC)
				creatableIdxs[createdIdx] = AppDeleted
			default:
				panic("unknown action")
			}
			require.NoError(t, err)
			tx.Sender = allCreators[createdIdx]
			blk.Payset = append(blk.Payset, makeSignedTxnInBlock(tx))
			blk.BlockHeader.TxnCounter++
			expectedExisting--
			expectedDeleted++
		}

		// Add the block
		err = l.AddBlock(blk, agreement.Certificate{})
		require.NoError(t, err)
	}
	l.WaitForCommit(blk.Round())

	// check that we can fetch creator for all created assets/apps and
	// can't for deleted assets/apps
	var existing, deleted int
	for aidx, status := range creatableIdxs {
		switch status {
		case AssetCreated:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AppCreated:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AssetDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		case AppDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		default:
			panic("unknown action")
		}
	}

	require.Equal(t, expectedExisting, existing)
	require.Equal(t, expectedDeleted, deleted)
	require.Equal(t, len(creatableIdxs), existing+deleted)

	// close and reopen the same DB
	l.Close()
	l, err = OpenLedger(logging.Base(), dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)

	// check that we can fetch creator for all created assets and can't for
	// deleted assets
	existing = 0
	deleted = 0
	for aidx, status := range creatableIdxs {
		switch status {
		case AssetCreated:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AppCreated:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AssetDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		case AppDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		default:
			panic("unknown action")
		}
	}
	require.Equal(t, expectedExisting, existing)
	require.Equal(t, expectedDeleted, deleted)
	require.Equal(t, len(creatableIdxs), existing+deleted)

	// delete an old creatable and a new creatable
	creatableToDelete := basics.CreatableIndex(1)
	var tx0 transactions.Transaction
	switch creatableIdxs[creatableToDelete] {
	case AssetCreated:
		tx0, err = makeUnsignedAssetDestroyTx(blk.BlockHeader.Round-1, blk.BlockHeader.Round+3, basics.AssetIndex(creatableToDelete))
		creatableIdxs[creatableToDelete] = AssetDeleted
	case AppCreated:
		tx0, err = makeUnsignedApplicationCallTx(basics.AppIndex(creatableToDelete), transactions.DeleteApplicationOC)
		creatableIdxs[creatableToDelete] = AppDeleted
	default:
		panic("unknown action")
	}
	require.NoError(t, err)
	tx0.Sender = allCreators[creatableToDelete]
	blk.BlockHeader.TxnCounter++
	expectedExisting--
	expectedDeleted++

	creatableToDelete = basics.CreatableIndex(maxCreated)
	var tx1 transactions.Transaction
	switch creatableIdxs[creatableToDelete] {
	case AssetCreated:
		tx1, err = makeUnsignedAssetDestroyTx(blk.BlockHeader.Round-1, blk.BlockHeader.Round+3, basics.AssetIndex(creatableToDelete))
		creatableIdxs[creatableToDelete] = AssetDeleted
	case AppCreated:
		tx1, err = makeUnsignedApplicationCallTx(basics.AppIndex(creatableToDelete), transactions.DeleteApplicationOC)
		creatableIdxs[creatableToDelete] = AppDeleted
	default:
		panic("unknown action")
	}
	require.NoError(t, err)
	tx1.Sender = allCreators[creatableToDelete]
	blk.BlockHeader.TxnCounter++
	expectedExisting--
	expectedDeleted++

	// start mining a block with the deletion txns
	blk.BlockHeader.Round++
	blk.BlockHeader.TimeStamp += int64(crypto.RandUint64() % 100 * 1000)

	// make a payset
	var payset transactions.Payset
	payset = append(payset, makeSignedTxnInBlock(tx0))
	payset = append(payset, makeSignedTxnInBlock(tx1))
	blk.Payset = payset

	// add the block
	err = l.AddBlock(blk, agreement.Certificate{})
	require.NoError(t, err)
	l.WaitForCommit(blk.Round())

	// check that we can fetch creator for all created assets and can't for
	// deleted assets
	existing = 0
	deleted = 0
	for aidx, status := range creatableIdxs {
		switch status {
		case AssetCreated:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AppCreated:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AssetDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		case AppDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		default:
			panic("unknown action")
		}
	}
	require.Equal(t, expectedExisting, existing)
	require.Equal(t, expectedDeleted, deleted)
	require.Equal(t, len(creatableIdxs), existing+deleted)

	// Mine another maxBlocks blocks
	for i := 0; i < maxBlocks; i++ {
		blk.BlockHeader.Round++
		blk.BlockHeader.TimeStamp += int64(crypto.RandUint64() % 100 * 1000)
		blk.Payset = nil
		err = l.AddBlock(blk, agreement.Certificate{})
		require.NoError(t, err)
	}
	l.WaitForCommit(blk.Round())

	// close and reopen the same DB
	l.Close()
	l, err = OpenLedger(logging.Base(), dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	defer l.Close()

	// check that we can fetch creator for all created assets and can't for
	// deleted assets
	existing = 0
	deleted = 0
	for aidx, status := range creatableIdxs {
		switch status {
		case AssetCreated:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AppCreated:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.True(t, ok)
			require.Equal(t, allCreators[aidx], c)
			existing++
		case AssetDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AssetCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		case AppDeleted:
			c, ok, err := l.GetCreator(aidx, basics.AppCreatable)
			require.NoError(t, err)
			require.False(t, ok)
			require.Equal(t, basics.Address{}, c)
			deleted++
		default:
			panic("unknown action")
		}
	}
	require.Equal(t, expectedExisting, existing)
	require.Equal(t, expectedDeleted, deleted)
	require.Equal(t, len(creatableIdxs), existing+deleted)
}

func makeSignedTxnInBlock(tx transactions.Transaction) transactions.SignedTxnInBlock {
	return transactions.SignedTxnInBlock{
		SignedTxnWithAD: transactions.SignedTxnWithAD{
			SignedTxn: transactions.SignedTxn{
				Txn: tx,
			},
		},
		HasGenesisID: true,
	}
}

func TestArchivalFromNonArchival(t *testing.T) {
	partitiontest.PartitionTest(t)

	// Start in non-archival mode, add 2K blocks, restart in archival mode ensure only genesis block is there

	dbName := fmt.Sprintf("%s.%d", t.Name(), crypto.RandUint64())
	dbPrefix := filepath.Join(t.TempDir(), dbName)

	genesisInitState := getInitState()

	genesisInitState.Block.BlockHeader.GenesisHash = crypto.Digest{}
	genesisInitState.Block.CurrentProtocol = protocol.ConsensusFuture
	genesisInitState.GenesisHash = crypto.Digest{1}
	genesisInitState.Block.BlockHeader.GenesisHash = crypto.Digest{1}

	balanceRecords := []basics.BalanceRecord{}

	for i := 0; i < 50; i++ {
		addr := basics.Address{}
		_, err := rand.Read(addr[:])
		require.NoError(t, err)
		br := basics.BalanceRecord{AccountData: basics_testing.MakeAccountData(basics.Offline, basics.MicroAlgos{Raw: 1234567890}), Addr: addr}
		genesisInitState.Accounts[addr] = br.AccountData
		balanceRecords = append(balanceRecords, br)
	}

	const inMem = false // use persistent storage
	cfg := config.GetDefaultLocal()
	cfg.Archival = false

	log := logging.TestingLog(t)
	log.SetLevel(logging.Info)
	l, err := OpenLedger(log, dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	blk := genesisInitState.Block

	// The next operations are heavy on the memory.
	// Garbage collection helps prevent trashing
	runtime.GC()

	const maxBlocks = 2000
	for i := 0; i < maxBlocks; i++ {
		blk.BlockHeader.Round++
		blk.BlockHeader.TimeStamp += int64(crypto.RandUint64() % 100 * 1000)
		blk.Payset = transactions.Payset{}

		for j := 0; j < 5; j++ {
			x := (j + i) % len(balanceRecords)
			creatorEncoded := balanceRecords[x].Addr.String()
			tx, err := makeUnsignedAssetCreateTx(blk.BlockHeader.Round-1, blk.BlockHeader.Round+3, 100, false, creatorEncoded, creatorEncoded, creatorEncoded, creatorEncoded, "m", "m", "", nil)
			require.NoError(t, err)
			tx.Sender = balanceRecords[x].Addr
			stxnib := makeSignedTxnInBlock(tx)
			blk.Payset = append(blk.Payset, stxnib)
			blk.BlockHeader.TxnCounter++
		}

		err := l.AddBlock(blk, agreement.Certificate{})
		require.NoError(t, err)
	}
	l.WaitForCommit(blk.Round())

	var latest, earliest basics.Round
	err = l.blockDBs.Rdb.Atomic(func(ctx context.Context, tx *sql.Tx) error {
		latest, err = blockdb.BlockLatest(tx)
		require.NoError(t, err)

		earliest, err = blockdb.BlockEarliest(tx)
		require.NoError(t, err)
		return err
	})
	require.NoError(t, err)
	require.Equal(t, basics.Round(maxBlocks), latest)
	require.True(t, basics.Round(0) < earliest, fmt.Sprintf("%d < %d", basics.Round(0), earliest))

	// close and reopen the same DB, ensure the DB truncated
	l.Close()

	cfg.Archival = true
	l, err = OpenLedger(log, dbPrefix, inMem, genesisInitState, cfg)
	require.NoError(t, err)
	defer l.Close()

	err = l.blockDBs.Rdb.Atomic(func(ctx context.Context, tx *sql.Tx) error {
		latest, err = blockdb.BlockLatest(tx)
		require.NoError(t, err)

		earliest, err = blockdb.BlockEarliest(tx)
		require.NoError(t, err)
		return err
	})
	require.NoError(t, err)
	require.Equal(t, basics.Round(0), earliest)
	require.Equal(t, basics.Round(0), latest)

	// Minimize the impact of the memory consumption here on other tests.
	runtime.GC()
}

func checkTrackers(t *testing.T, wl *wrappedLedger, rnd basics.Round) (basics.Round, error) {
	minMinSave := rnd
	var minSave basics.Round
	var cleanTracker ledgerTracker
	var trackerType reflect.Type
	wl.l.trackerMu.RLock()
	defer wl.l.trackerMu.RUnlock()
	for _, trk := range wl.l.trackers.trackers {
		if _, ok := trk.(*accountUpdates); ok {
			wl.l.trackers.waitAccountsWriting()
			minSave, _ = trk.committedUpTo(rnd)
			wl.l.trackers.committedUpTo(rnd)
			wl.l.trackers.waitAccountsWriting()
			if minSave < minMinSave {
				minMinSave = minSave
			}
			wl.minQueriedBlock = rnd

			trackerType = reflect.TypeOf(trk).Elem()
			cleanTracker = reflect.New(trackerType).Interface().(ledgerTracker)

			au := cleanTracker.(*accountUpdates)
			cfg := config.GetDefaultLocal()
			cfg.Archival = true
			au.initialize(cfg)
		} else {
			minSave, _ = trk.committedUpTo(rnd)
			if minSave < minMinSave {
				minMinSave = minSave
			}
			wl.minQueriedBlock = rnd

			trackerType = reflect.TypeOf(trk).Elem()
			cleanTracker = reflect.New(trackerType).Interface().(ledgerTracker)
		}

		cleanTracker.close()
		err := cleanTracker.loadFromDisk(wl, wl.l.trackers.dbRound)
		require.NoError(t, err)

		cleanTracker.close()

		// Special case: initAccounts reflects state after block 0,
		// so it's OK to return minSave=0 but query block 1.
		if minSave > wl.minQueriedBlock && minSave != 0 && wl.minQueriedBlock != 1 {
			return minMinSave, fmt.Errorf("tracker %v: committed %d, minSave %d > minQuery %d", trackerType, rnd, minSave, wl.minQueriedBlock)
		}
	}

	return minMinSave, nil
}
