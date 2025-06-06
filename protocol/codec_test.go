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

package protocol

import (
	"fmt"
	"io"
	"math/rand"
	"reflect"
	"testing"

	"github.com/algorand/go-algorand/test/partitiontest"
	"github.com/algorand/go-codec/codec"
	"github.com/stretchr/testify/require"
)

type TestArray [4]uint64

type TestStruct struct {
	_struct struct{} `codec:",omitempty,omitemptyarray"`
	A       int      `codec:",omitempty"`
	B       struct {
		B1 bool
		B2 string
	}
	C []byte
	E [8]string `codec:",omitemptyarray"`
	F [2]struct {
		F1 uint64
		F2 struct{}
	}
	G TestArray
	HelperStruct1
	H HelperStruct2
}

type HelperStruct1 struct {
	I map[string]string
}

type HelperStruct2 struct {
	J byte
	K string
}

func TestOmitEmpty(t *testing.T) {
	partitiontest.PartitionTest(t)

	var x TestStruct
	enc := EncodeReflect(&x)
	require.Equal(t, 1, len(enc))
}

func TestEncodeOrder(t *testing.T) {
	partitiontest.PartitionTest(t)

	var a struct {
		A int
		B string
	}
	a.A = 1
	a.B = "foo"

	var b struct {
		B string
		A int
	}
	b.A = 1
	b.B = "foo"

	require.Equal(t, EncodeReflect(&a), EncodeReflect(&b))

	var c struct {
		A int    `codec:"x"`
		B string `codec:"y"`
	}
	c.A = 1
	c.B = "foo"

	var d struct {
		A string `codec:"y"`
		B int    `codec:"x"`
	}
	d.B = 1
	d.A = "foo"

	type QQ struct {
		Q string `codec:"y"`
	}
	type RR struct {
		R int `codec:"x"`
	}

	var e struct {
		QQ
		RR
	}
	e.R = 1
	e.Q = "foo"

	require.Equal(t, EncodeReflect(&c), EncodeReflect(&d))
	require.Equal(t, EncodeReflect(&c), EncodeReflect(&e))
}

type InlineChild struct {
	X int `codec:"x"`
}

type InlineParent struct {
	InlineChild
}

func TestEncodeInline(t *testing.T) {
	partitiontest.PartitionTest(t)

	a := InlineChild{X: 5}
	b := InlineParent{InlineChild: a}

	require.Equal(t, EncodeReflect(a), EncodeReflect(b))
}

type embeddedMsgp struct {
	TxType
	A uint64
}

func TestEncodeEmbedded(t *testing.T) {
	partitiontest.PartitionTest(t)

	var x embeddedMsgp

	x.TxType = PaymentTx
	x.A = 5

	require.Equal(t, Encode(x), Encode(&x))
	require.Equal(t, Encode(x.TxType), Encode(&x.TxType))
	require.NotEqual(t, Encode(&x), Encode(&x.TxType))

	var y embeddedMsgp

	require.NoError(t, Decode(Encode(&x), &y))
	require.Equal(t, x, y)
}

func TestEncodeJSON(t *testing.T) {
	partitiontest.PartitionTest(t)

	type ar []string
	type mp struct {
		Map map[int]ar `codec:"ld,allocbound=bounds.MaxEvalDeltaAccounts"`
	}

	var v mp
	v.Map = make(map[int]ar)
	v.Map[0] = []string{"test0"}
	v.Map[1] = []string{"test1"}

	nonStrict := EncodeJSON(&v)
	require.Contains(t, string(nonStrict), `0:`)
	require.Contains(t, string(nonStrict), `1:`)

	strict := EncodeJSONStrict(&v)
	require.Contains(t, string(strict), `"0":`)
	require.Contains(t, string(strict), `"1":`)

	var nsv mp
	err := DecodeJSON(nonStrict, &nsv)
	require.NoError(t, err)

	var sv mp
	err = DecodeJSON(strict, &sv)
	require.NoError(t, err)

	require.True(t, reflect.DeepEqual(v, nsv))
	require.True(t, reflect.DeepEqual(v, sv))

	decodeJSONStrict := func(b []byte, objptr interface{}) error {
		dec := codec.NewDecoderBytes(b, JSONStrictHandle)
		return dec.Decode(objptr)
	}

	nsv = mp{}
	decodeJSONStrict(nonStrict, &nsv)

	sv = mp{}
	decodeJSONStrict(strict, &sv)

	require.True(t, reflect.DeepEqual(v, nsv))
	require.True(t, reflect.DeepEqual(v, sv))
}

func TestMsgpDecode(t *testing.T) {
	partitiontest.PartitionTest(t)

	var tag Tag = "test"
	dec := NewMsgpDecoderBytes([]byte{1, 2, 3})
	err := dec.Decode(&tag)
	require.Error(t, err)

	data := EncodeMsgp(tag)
	dec = NewMsgpDecoderBytes(data)
	var tag2 Tag
	err = dec.Decode(&tag2)
	require.Equal(t, tag, tag2)
	require.NoError(t, err)

	limit := rand.Intn(30)
	tags := make([]Tag, limit)
	buf := make([]byte, 0, limit*10)
	for i := 0; i < limit; i++ {
		tags[i] = Tag(fmt.Sprintf("tag_%d", i))
		buf = append(buf, EncodeMsgp(tags[i])...)
	}

	dec = NewMsgpDecoderBytes(buf)
	for i := 0; i < limit; i++ {
		err = dec.Decode(&tag2)
		require.NoError(t, err)
		require.Equal(t, tags[i], tag2)
	}
	err = dec.Decode(&tag2)
	require.Error(t, err)
	require.ErrorIs(t, err, io.EOF)
}

func TestRandomizeObjectWithPtrField(t *testing.T) {
	partitiontest.PartitionTest(t)

	type testObjA struct {
		U64 uint64
	}
	type testObjB struct {
		U16  uint16
		ObjA *testObjA
	}

	// run a few and fail if all ints are zero
	sawNonZeroU16 := false
	sawNonZeroU64 := false
	for i := 0; i < 10; i++ {
		obj, err := RandomizeObject(&testObjB{})
		require.NoError(t, err)
		objB, ok := obj.(*testObjB)
		require.True(t, ok)
		require.NotNil(t, objB.ObjA)
		if objB.U16 != 0 {
			sawNonZeroU16 = true
		}
		if objB.ObjA.U64 != 0 {
			sawNonZeroU64 = true
		}
	}
	require.True(t, sawNonZeroU16, "RandomizeObject made all zeroes for testObjB.U16")
	require.True(t, sawNonZeroU64, "RandomizeObject made all zeroes for testObjA.U64")
}
