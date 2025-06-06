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

package testsuite

import (
	"fmt"
	"testing"

	"github.com/algorand/go-algorand/config"
	"github.com/algorand/go-algorand/ledger/store/trackerdb/pebbledbdriver"
	"github.com/algorand/go-algorand/logging"
	"github.com/stretchr/testify/require"
)

func TestPebbleDB(t *testing.T) {
	// partitiontest.PartitionTest(t) // partitioning inside subtest
	dbFactory := func(proto config.ConsensusParams) dbForTests {
		// create a tmp dir for the db, the testing runtime will clean it up automatically
		dir := fmt.Sprintf("%s/db", t.TempDir())

		db, err := pebbledbdriver.Open(dir, false, proto, logging.TestingLog(t))
		require.NoError(t, err)

		seedDb(t, db)

		return db
	}

	// run the suite
	runGenericTestsWithDB(t, dbFactory)
}
