window.BENCHMARK_DATA = {
  "lastUpdate": 1664288657624,
  "repoUrl": "https://github.com/onetechnical/go-algorand",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "86622919+algochoi@users.noreply.github.com",
            "name": "algochoi",
            "username": "algochoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bd8ab638214430c314c51a7869e0c874163360f",
          "message": "Tools: Add benchmark warnings for PRs and push graphs for commits into master (#3998)",
          "timestamp": "2022-05-19T14:08:58-04:00",
          "tree_id": "b9447c54c4e7ed44e1e7230eb2cd61d6d64c07c8",
          "url": "https://github.com/algorand/go-algorand/commit/8bd8ab638214430c314c51a7869e0c874163360f"
        },
        "date": 1652984050649,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 41.69,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29080629 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.24,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30263080 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.25,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15573020 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.36,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15007250 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.25,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12100771 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.98,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15036736 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.65,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14888068 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.29,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12095306 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.82,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13347735 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.6,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8914254 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 895.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1340305 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 93.64,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12806161 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10122567 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 450.4,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2670493 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wwinder.unh@gmail.com",
            "name": "Will Winder",
            "username": "winder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d06c9aa33d7cfdf55174dcc76b9465407fb05de9",
          "message": "use tag to determine channel if possible (#4017)",
          "timestamp": "2022-05-20T17:38:20-04:00",
          "tree_id": "6a94c6ee079847d1bfabbe142a21daf7fb3467b0",
          "url": "https://github.com/algorand/go-algorand/commit/d06c9aa33d7cfdf55174dcc76b9465407fb05de9"
        },
        "date": 1653082989772,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.56,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26981827 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.57,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29350918 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 80.43,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14952345 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 85.47,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13970780 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 107.3,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11222079 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 85.78,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13917148 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 86.06,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14137296 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 106.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11107156 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 85.79,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13966260 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 108.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11041188 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 886,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1353211 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 101,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11901438 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 94.32,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12799282 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 433.6,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2759766 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jannotti@gmail.com",
            "name": "John Jannotti",
            "username": "jannotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a922c405f6847854e569a2624c97b7549078091",
          "message": "base64_decode can decode padded or unpadded encodings (#4015)",
          "timestamp": "2022-05-21T23:38:15-04:00",
          "tree_id": "ce698fe9f47c94e085b38a3f4c9e19cd6afe0f60",
          "url": "https://github.com/algorand/go-algorand/commit/4a922c405f6847854e569a2624c97b7549078091"
        },
        "date": 1653190991275,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 41.64,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28389694 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.28,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30792085 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.74,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15928520 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.42,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14976067 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.45,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12062668 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.83,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14590981 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.43,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14462902 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.44,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11924718 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 90.24,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13396202 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 136,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8885370 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 898.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1336909 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.14,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12827544 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.2,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10071489 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 448.1,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2677401 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "91566643+algoidurovic@users.noreply.github.com",
            "name": "algoidurovic",
            "username": "algoidurovic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3e19e7c5f3bd1d25c624e18dd17f163ff7a8bc8",
          "message": "AVM: Allow immutable access to foreign app accounts (#3994)\n\n* allow foreign app accounts to be accessed (immutably)",
          "timestamp": "2022-05-23T14:40:31-04:00",
          "tree_id": "23e20648671b1830fe87dbcd25cc82b85a59b04a",
          "url": "https://github.com/algorand/go-algorand/commit/b3e19e7c5f3bd1d25c624e18dd17f163ff7a8bc8"
        },
        "date": 1653331520110,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.66,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27151742 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.67,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29470299 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.81,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15011929 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 85.48,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13992582 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 106.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11172351 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 85.77,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14102131 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 85.22,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14134071 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 107.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11112448 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 85.94,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13888563 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 108.5,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11026452 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 882.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1360858 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 100.8,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11969226 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 93.92,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12678433 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 433.3,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2759246 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jannotti@gmail.com",
            "name": "John Jannotti",
            "username": "jannotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8088e04b523f44a1a304fd2c83afbf7ae875dcb6",
          "message": "AVM: Add bn256 pairing opcodes experimentally (#4013)\n\n* add bn256 add, scalar multiply and pairing opcode\r\n* replace with gnark bn254 and bench\r\n* update opcost for bn256 according to benchmark\r\n\r\n\r\nSome doc tweaks, and moved implementation to pairing.go\r\n\r\nThese opcodes should stay in vFuture until\r\n\r\n1. We consider the serialization format\r\n2. We have unit tests\r\n3. We consider BLS 12-381 (and the opcodes of eip 2537)\r\n4. Audit of gnark-crypto library\r\n\r\nCo-authored-by: Bo Yao <by677@nyu.edu>\r\nCo-authored-by: Bo Yao <bo@abstrlabs.com>\r\nCo-authored-by: bo-abstrlabs <96916614+bo-abstrlabs@users.noreply.github.com>\r\nCo-authored-by: chris erway <chris.erway@algorand.com>",
          "timestamp": "2022-05-24T09:14:01-04:00",
          "tree_id": "995f998c4483b01f1e259fe4ac9a5674756b0026",
          "url": "https://github.com/algorand/go-algorand/commit/8088e04b523f44a1a304fd2c83afbf7ae875dcb6"
        },
        "date": 1653398355330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.98,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28609860 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.51,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30035172 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.97,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15885462 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.74,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14931496 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 100.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12014640 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.06,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14348632 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.57,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14698472 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11870779 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.01,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13084359 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8835219 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 945.6,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1278649 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 95.22,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12700041 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10075036 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 449.9,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2681427 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51567+cce@users.noreply.github.com",
            "name": "cce",
            "username": "cce"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "280102c72ec9e6c106724dabdd6a57eeec1072f0",
          "message": "metrics: make metrics easier to use with prometheus (#4020)\n\n* make TagCounter metrics easier to use with prometheus\r\n\r\n* ensure 0 counters are logged\r\n\r\n* allow for pre-declaring TagCounter tags for use with prometheus\r\n\r\n* fix expected in TestTagCounterWriteMetric\r\n\r\n* deregister counter used in test\r\n\r\n* fix lint warning\r\n\r\n* CR comment\r\n\r\n* Log incorrect metrics for debugging test failures\r\n\r\n* deregister more counters and tagcounters used by tests\r\n\r\n* remove unused Segment",
          "timestamp": "2022-05-24T17:05:00-04:00",
          "tree_id": "e7a2b720eeebb07f0fe78b610906e0e2a55f9c88",
          "url": "https://github.com/algorand/go-algorand/commit/280102c72ec9e6c106724dabdd6a57eeec1072f0"
        },
        "date": 1653426621699,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 52.19,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22029985 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 46.22,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27000336 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 90.95,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13725756 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 95.45,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12938955 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 119,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10481948 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 98.69,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12230994 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 97.32,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11498259 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 123.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9882183 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 102,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11708571 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 151.4,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8107504 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 978.7,
            "unit": "ns/op\t         8.000 extra/op\t     310 B/op\t      11 allocs/op",
            "extra": "1217941 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 106.7,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11934229 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 137.4,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8446070 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 536.8,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2346409 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brianolson@users.noreply.github.com",
            "name": "Brian Olson",
            "username": "brianolson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c4c8fb0bd7a0632453ded8130156f58026e287c",
          "message": "network: non-participating nodes request TX gossip only if ForceFetchTransactions: true (#3918)\n\nSave bandwidth by having non-participating non-relay nodes\r\nopt-out of TX transaction gossip traffic using message-of-interest.\r\nTo enable set localConfig.ForceFetchTransactions = true\r\n\r\nManual testing has started local private networks to ensure\r\nthat the new message-of-interest propagated.\r\nCluster tests were run to check bandwidth usage.\r\n\r\nCo-authored-by: cce <51567+cce@users.noreply.github.com>",
          "timestamp": "2022-05-24T21:49:18-04:00",
          "tree_id": "a70436ffe17b161ef02740cda023d2a01335da3c",
          "url": "https://github.com/algorand/go-algorand/commit/3c4c8fb0bd7a0632453ded8130156f58026e287c"
        },
        "date": 1653443662959,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28987072 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.25,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30019779 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.45,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15743168 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14874644 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12017370 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.54,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14487516 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.78,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14693922 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.94,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12068809 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 90.15,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13246796 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 137.4,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8816834 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 918.6,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1330746 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 93.93,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12873868 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.1,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10119730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 445.8,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2680022 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lucky.baar@algorand.com",
            "name": "algolucky",
            "username": "algolucky"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9f4151785d0328155dc793465544b8f13166a64",
          "message": " fix: place updater in same directory as update.sh and add verify option (#3983)",
          "timestamp": "2022-05-25T09:47:34-04:00",
          "tree_id": "219ecbe3abd6ab320151a9971e0c7be7dbf89ff5",
          "url": "https://github.com/algorand/go-algorand/commit/c9f4151785d0328155dc793465544b8f13166a64"
        },
        "date": 1653486838800,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 57.03,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "21526094 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 54.72,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23018557 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 100.4,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11786556 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 108.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11127818 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 134,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8538868 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 108.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11061420 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 109.4,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11237280 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 137.7,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9094478 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 119.6,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9843416 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 174,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "6880671 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1197,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "916680 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 120.6,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9933202 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 155.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7760907 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 601.6,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2006352 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nullun@users.noreply.github.com",
            "name": "nullun",
            "username": "nullun"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2df7468fa4ef71fefceff4ab1688c8badb3d1464",
          "message": "Added generate-docs command to tealdbg (#3830)\n\nWhen generating the CLI documentation for the Developer Portal\r\nit was noticed that tealdbg was missing. Much like goal, kmd, and algokey,\r\nadded the \"generate-docs\" command option to generate the markdown output.",
          "timestamp": "2022-05-25T10:43:23-04:00",
          "tree_id": "a2571ab66abe2459fd2179610bad883feea3e135",
          "url": "https://github.com/algorand/go-algorand/commit/2df7468fa4ef71fefceff4ab1688c8badb3d1464"
        },
        "date": 1653490178261,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 53.27,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23386305 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 52.53,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "25127174 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 94.33,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12265256 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 99.93,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11995268 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 127.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9476030 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 100.6,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12449613 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 99.79,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12415094 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 126.6,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8549336 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 110.7,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10864909 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 164.1,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7401888 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1060,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1136058 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 109.9,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11177181 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 147.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8196412 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 553.4,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2180550 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "or.aharonee@algorand.com",
            "name": "Or Aharonee",
            "username": "Aharonee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3003ec5668d20e81c9b1d24b09dfaf8eff524fc",
          "message": "Add missing HashType to GetProof endpoint (#3985)",
          "timestamp": "2022-05-26T09:21:32-04:00",
          "tree_id": "eedab762bca0d359fba2825232ff0a0ac666134b",
          "url": "https://github.com/algorand/go-algorand/commit/a3003ec5668d20e81c9b1d24b09dfaf8eff524fc"
        },
        "date": 1653571638669,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 52.54,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22163901 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 49.88,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27039301 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 95.39,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12993996 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 103.6,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12384310 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 134,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9018788 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 104.2,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11546125 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 106.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11183803 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 131.3,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8616392 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 111.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10945590 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 165.7,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "6938215 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1087,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1123218 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 112.5,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10796629 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 144.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8415711 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 568.2,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2107562 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "91566643+algoidurovic@users.noreply.github.com",
            "name": "algoidurovic",
            "username": "algoidurovic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7147d015abf8ffb3b1039a859699771a7c275ddd",
          "message": "Dryrun: Split dryrun cost field into BudgetConsumed and BudgetAdded (#3957)",
          "timestamp": "2022-05-26T10:25:37-04:00",
          "tree_id": "f397e9545caaae97649f67dbf862b3c9504eda2d",
          "url": "https://github.com/algorand/go-algorand/commit/7147d015abf8ffb3b1039a859699771a7c275ddd"
        },
        "date": 1653575504065,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.2,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28506730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.17,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30413469 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.04,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15954566 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14838148 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.47,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12015913 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.71,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14708311 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.78,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14901997 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.77,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12068946 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.97,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13338018 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8890836 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 905.7,
            "unit": "ns/op\t         8.000 extra/op\t     310 B/op\t      11 allocs/op",
            "extra": "1323907 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.35,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12768644 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10085702 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 446.6,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2700475 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eltociear@gmail.com",
            "name": "Ikko Ashimine",
            "username": "eltociear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a893dd5f996e3ea5e495ec928300a0ec90b36af",
          "message": "Fix typo in bandwidthFilter_test.go (#4028)\n\nreseting -> resetting",
          "timestamp": "2022-05-26T13:25:11-04:00",
          "tree_id": "79aa8ef4974b52a30b28ac24e41bb021c5477c81",
          "url": "https://github.com/algorand/go-algorand/commit/8a893dd5f996e3ea5e495ec928300a0ec90b36af"
        },
        "date": 1653586266369,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 52.55,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23758810 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 48.55,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "25429690 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 94.28,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13187215 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 103.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12292246 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 120.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9566205 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 97.77,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11912649 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 97.86,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11643884 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 119.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10143145 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 109.6,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11259990 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 162.3,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7366256 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1109,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "970350 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 112.6,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10755356 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 141.4,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8404965 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 542.5,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2220615 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51567+cce@users.noreply.github.com",
            "name": "cce",
            "username": "cce"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c516ac37ef1e27090c36a22e434479ccd24196af",
          "message": "metrics: collect and report Go runtime.metrics (#4041)\n\n* add metrics.RuntimeMetrics\r\n* hook up EnableRuntimeMetrics as new config variable\r\n* set EnableRuntimeMetrics: true in netgoal-generated configs\r\n* add EnableRuntimeMetrics to bootstrappedScenario and custom recipes\r\n* check that all defaultRuntimeMetrics are supported by current version of go\r\n* add TestSanitizePrometheusName\r\n* add partitiontest to new tests\r\n* use algod_go_ prefix for prometheus runtime metrics",
          "timestamp": "2022-05-26T15:10:16-04:00",
          "tree_id": "c7088a61719c0346086d0a46c4f7f58d741d2cba",
          "url": "https://github.com/algorand/go-algorand/commit/c516ac37ef1e27090c36a22e434479ccd24196af"
        },
        "date": 1653592530265,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.3,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28338760 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.5,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29038207 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.98,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15451892 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 78.96,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15526185 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 97.25,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12011905 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.52,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14712206 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.85,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15598909 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.29,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12030662 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.33,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13114125 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8796333 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 921.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1309635 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.58,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12707083 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10098208 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 460.8,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2591233 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51567+cce@users.noreply.github.com",
            "name": "cce",
            "username": "cce"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "26465a692a21691cdedb3a28ab1617ed3c171363",
          "message": "update node_exporter to include https://github.com/algorand/node_exporter/pull/1 (#4047)",
          "timestamp": "2022-05-26T18:11:19-04:00",
          "tree_id": "38ce6b8b2087f5cf6a14b501ab95b32eeddccaa9",
          "url": "https://github.com/algorand/go-algorand/commit/26465a692a21691cdedb3a28ab1617ed3c171363"
        },
        "date": 1653603442498,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 57.73,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "20800432 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 52.45,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22420287 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 101.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12052897 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 107.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10727122 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 132.6,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9372658 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 109,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11371724 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 112.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10409473 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 137.5,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8129529 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 116.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10229914 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 167.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7037769 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1113,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "994410 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 117,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10417760 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 155,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8143947 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 589,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2080972 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "john@onetechnical.com",
            "name": "John Lee",
            "username": "onetechnical"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92027a0804448cb0b6e2161c47dbf64b43d98ce9",
          "message": "Devops: Use Cloudflare API token instead of auth key (#4039)",
          "timestamp": "2022-05-27T12:00:08-04:00",
          "tree_id": "6a3b9c6e48f7552b5201dc257f308168d192b33c",
          "url": "https://github.com/algorand/go-algorand/commit/92027a0804448cb0b6e2161c47dbf64b43d98ce9"
        },
        "date": 1653667556871,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 53.93,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23441823 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 50.36,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23882758 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 97.31,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12466428 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 103.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11416120 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 127.1,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9241248 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 106.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11496126 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 104.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11129587 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 129.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9481412 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 109.2,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11366001 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 161.6,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7388766 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1060,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 113.3,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10420095 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 143,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8587987 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 550.4,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2174660 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vu.voth@gmail.com",
            "name": "Vu Vo",
            "username": "vuvoth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "923731671c13c25bc1de8f0ab47030760cc08a38",
          "message": "Developer Tools: Add manjaro support to build script (#3893)",
          "timestamp": "2022-05-27T12:06:15-04:00",
          "tree_id": "2094cfbfe6cfef4deaf713e50bbd75a0b936db8e",
          "url": "https://github.com/algorand/go-algorand/commit/923731671c13c25bc1de8f0ab47030760cc08a38"
        },
        "date": 1653667901610,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.91,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28006030 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.21,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "31396917 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.85,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15626356 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.1,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14692522 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.6,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11534524 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14223127 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.64,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14668044 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.1,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11932942 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.8,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12818766 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 139.1,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8771690 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 932.2,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1241390 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 90.09,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13888591 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 113.2,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10602288 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 460,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2695254 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tolik@algorand.com",
            "name": "Tolik Zinovyev",
            "username": "tolikzinovyev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e968a2217066c6f5a61525aac95636088643636",
          "message": "pingpong: improve transaction scheduling (#3478)",
          "timestamp": "2022-06-01T19:20:18-04:00",
          "tree_id": "22d9824929d6359d439794afbfd7de6cd3b33585",
          "url": "https://github.com/algorand/go-algorand/commit/4e968a2217066c6f5a61525aac95636088643636"
        },
        "date": 1654125923016,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.15,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29000844 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.77,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30207310 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.37,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15817088 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.41,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14611461 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 104.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12031611 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.59,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14636742 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.43,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14557390 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 100.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11934328 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.23,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13236938 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 138.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8882204 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 919.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1293404 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.5,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12744091 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10143280 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 452.4,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2634097 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87339414+algojack@users.noreply.github.com",
            "name": "Jack",
            "username": "algojack"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9adda1d6b890bd4927c73c1bdd304c0ce4dc4d49",
          "message": "removing-pingpong-deprecated-flag-rest (#4070)",
          "timestamp": "2022-06-03T12:40:32-04:00",
          "tree_id": "28ec26bcd0a617bfa5c3a77120f8563af8096444",
          "url": "https://github.com/algorand/go-algorand/commit/9adda1d6b890bd4927c73c1bdd304c0ce4dc4d49"
        },
        "date": 1654274725155,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.29,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27021001 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.92,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29816394 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15348774 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 82.77,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14564161 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.3,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11721452 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.46,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14613930 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.31,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14564197 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11721818 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.51,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14471617 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.5,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11197123 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 893.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1339328 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.68,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12037171 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 92.38,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13043377 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 444.3,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2685140 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tolik@algorand.com",
            "name": "Tolik Zinovyev",
            "username": "tolikzinovyev"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e6c918c9d7a727bc7c75c3ee6c91ebdaf2d525b",
          "message": "Fix another flakiness in TestReproducibleCatchpointLabels. (#4074)",
          "timestamp": "2022-06-03T21:32:13-04:00",
          "tree_id": "87d7af1e6d07934b449548bedf88d7272c2b585f",
          "url": "https://github.com/algorand/go-algorand/commit/5e6c918c9d7a727bc7c75c3ee6c91ebdaf2d525b"
        },
        "date": 1654306627139,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.26,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28730144 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.78,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30516618 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 75.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15822862 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.66,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14680206 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.06,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12135996 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.75,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14890257 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.51,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14954611 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.34,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12148526 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 90.08,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13472163 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 136.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8824352 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 900.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1333830 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 93.6,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12807265 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10107754 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 443.6,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2723428 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85183435+AlgoStephenAkiki@users.noreply.github.com",
            "name": "AlgoStephenAkiki",
            "username": "AlgoStephenAkiki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "febeb1e7ff8b90c64149d153a7046b03d44c5750",
          "message": "PKI: Enable full usage of REST API to install participation keys (#4002)\n\n* Migrate goal account commands to REST API (#3916)\r\n* PKI: 3924 handle stateproof in rest api goal (#3950)\r\n\r\nSome additional refactoring:\r\n* Remove Node Key Monitoring Function\r\n* Removes function which calls loadParticipationKeys() every 60 seconds\r\n  since MakeFull() for the FullNode does the same thing\r\n\r\nCo-authored-by: Will Winder <wwinder.unh@gmail.com>",
          "timestamp": "2022-06-06T14:00:48-04:00",
          "tree_id": "621a75fa026d1a6b6ad648d2d70dc7f4e9add371",
          "url": "https://github.com/algorand/go-algorand/commit/febeb1e7ff8b90c64149d153a7046b03d44c5750"
        },
        "date": 1654538748665,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 47.4,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27274503 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.02,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29835760 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.65,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15266608 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.1,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12707990 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11682202 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.58,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14562460 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.58,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14513550 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103.1,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11602056 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.96,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14531828 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 108.5,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11166105 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 891.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1345138 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.99,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11979336 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 93.26,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12711813 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 446,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2675019 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85183435+AlgoStephenAkiki@users.noreply.github.com",
            "name": "AlgoStephenAkiki",
            "username": "AlgoStephenAkiki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5838f72c81d51057057c2bc3600eb47eea6114a6",
          "message": "Bug Fix: Adds validity round check for failing tests (#4085)",
          "timestamp": "2022-06-07T16:53:28-04:00",
          "tree_id": "98037efa7e6af163f95b5e3439c9cd958066927d",
          "url": "https://github.com/algorand/go-algorand/commit/5838f72c81d51057057c2bc3600eb47eea6114a6"
        },
        "date": 1654635590658,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 65.65,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "19322128 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 54.9,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "21282826 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 110,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11239112 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 120.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9272590 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 147.9,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8528408 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 119.7,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10285850 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 121.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10047655 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 145.4,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7895944 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 122.7,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10012862 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 187.6,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "6566348 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1224,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "911130 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 129.6,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9660646 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 163.9,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "6768792 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 621.9,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "1933653 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87339414+algojack@users.noreply.github.com",
            "name": "Jack",
            "username": "algojack"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1036d5a091030aae49372aefd3c7e1a5c2a0e2c",
          "message": "CICD: Optimizing CircleCI cache usage (#4087)",
          "timestamp": "2022-06-08T09:20:38-04:00",
          "tree_id": "a1e47c77fa13fd4ea800b9f3e413761ead9f2592",
          "url": "https://github.com/algorand/go-algorand/commit/f1036d5a091030aae49372aefd3c7e1a5c2a0e2c"
        },
        "date": 1654694784199,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.41,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26953652 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.01,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29974063 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.24,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15300240 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14508068 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.5,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11682504 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.83,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14513226 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 84.59,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14602536 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 104.2,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11524544 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.64,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14496973 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.3,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11200594 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 896.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1340629 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 100.1,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12008991 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 92.55,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12988981 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 447.2,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2670634 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eric_gieseke@yahoo.com",
            "name": "Eric Gieseke",
            "username": "egieseke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0c60b37f0f91578cb26cd008eedee23b3830f5f",
          "message": "DevOps: Define recipe for Alpha Net. (#4066)",
          "timestamp": "2022-06-08T09:27:35-04:00",
          "tree_id": "3fa942aa70a58244b63c8dd946a8ade2eda9aa7c",
          "url": "https://github.com/algorand/go-algorand/commit/f0c60b37f0f91578cb26cd008eedee23b3830f5f"
        },
        "date": 1654695183210,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.54,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27700526 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.25,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30110482 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.78,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15699609 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.58,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14731724 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 100.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11960230 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.01,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12975511 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.97,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14790645 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 100.4,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11976405 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 90.67,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "13299246 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 137.1,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "8823745 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 946.6,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1267449 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.87,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12692215 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10074216 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 462.7,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2608552 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "982483+gmalouf@users.noreply.github.com",
            "name": "Gary",
            "username": "gmalouf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08dcebc62e4a54de102e244eb6dcd275fb1c7fbc",
          "message": "AVM: Version downgrade check ported to master (#4093)\n\n* Allow app downgrades in old protocol versions\r\n\r\n* Tweak comments to reflect MinInnerApplVersion better.\r\n\r\n* Update ledger/internal/apptxn_test.go\r\n\r\nCo-authored-by: John Jannotti <jannotti@gmail.com>\r\n\r\n* Update data/transactions/transaction.go\r\n\r\nCo-authored-by: John Jannotti <jannotti@gmail.com>\r\n\r\n* Update ledger/internal/apptxn_test.go\r\n\r\nCo-authored-by: John Jannotti <jannotti@gmail.com>\r\n\r\n* Update ledger/internal/apptxn_test.go\r\n\r\nCo-authored-by: John Jannotti <jannotti@gmail.com>\r\n\r\nCo-authored-by: John Jannotti <jannotti@gmail.com>",
          "timestamp": "2022-06-08T11:00:07-04:00",
          "tree_id": "48e3ffcd23acacac092ec53064b7aded404708e3",
          "url": "https://github.com/algorand/go-algorand/commit/08dcebc62e4a54de102e244eb6dcd275fb1c7fbc"
        },
        "date": 1654700710810,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.28,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27468422 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.51,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29494731 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.79,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "15038164 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 85.17,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14065066 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 106.5,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11276094 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 85.25,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14059562 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 85.1,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14153703 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 106.8,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11258744 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 85.37,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "14065413 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 108.3,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11076362 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 889.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1346218 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 100.5,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11891709 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 93.31,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12862584 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 453.7,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2640076 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jannotti@gmail.com",
            "name": "John Jannotti",
            "username": "jannotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53a6da7e2c0d72edf9b3940a7f3057f93a086ec",
          "message": "AVM: Set proper costs for json_ref (#4096)\n\nUse Algorand’s JSON codec to improve performance\r\n\r\nAdd stack depth parameter to linear cost model\r\n\r\nUse stack label for linear cost depth doc\r\n\r\nCo-authored-by: Jacob Daitzman <jdtzmn@gmail.com>",
          "timestamp": "2022-06-08T13:14:40-04:00",
          "tree_id": "aa88e76df2bda4009094b81fb39edb8d693c597d",
          "url": "https://github.com/algorand/go-algorand/commit/b53a6da7e2c0d72edf9b3940a7f3057f93a086ec"
        },
        "date": 1654708829614,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 53.72,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22160916 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 52.94,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23685902 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 94.73,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12614161 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 101.6,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11686396 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 126,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9868772 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 103.7,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11765682 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 102.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11708886 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 123.4,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9853156 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 113.3,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10870460 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 165.4,
            "unit": "ns/op\t         4.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7326793 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1156,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "901285 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 117.5,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "9445803 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 146.5,
            "unit": "ns/op\t         3.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "7974776 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 561.6,
            "unit": "ns/op\t         4.000 extra/op\t     110 B/op\t       5 allocs/op",
            "extra": "2071258 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michaeldiamant@users.noreply.github.com",
            "name": "Michael Diamant",
            "username": "michaeldiamant"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1b6a0303e5a107e8ea040218a67d13f31cc9f38",
          "message": "CI:  Ensure algod_expect_test.go tests run by avoiding double partitioning (#4421)\n\n* Ensure all expect tests run by avoiding double partitioning\r\n* Update test/e2e-go/cli/algod/expect/algod_expect_test.go\r\n\r\nCo-authored-by: John Jannotti <jannotti@gmail.com>",
          "timestamp": "2022-08-17T09:39:04-04:00",
          "tree_id": "477551c7ef62aa7f08e8c7ac96c4dc63f59c6bce",
          "url": "https://github.com/onetechnical/go-algorand/commit/c1b6a0303e5a107e8ea040218a67d13f31cc9f38"
        },
        "date": 1660758636445,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 60.72,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "21366235 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 54.32,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "21753306 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 105.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10281718 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 110.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11249553 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 137.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8997452 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 112.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10047736 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 118,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10195371 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 140.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8968275 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 118,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9892812 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 176.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6691124 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1193,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "906925 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 121,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9661645 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 161.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7475104 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 614.4,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1909728 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jannotti@gmail.com",
            "name": "John Jannotti",
            "username": "jannotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c094079b08641ce10a63d6b9750221a4dfa0412",
          "message": "Initialize the accountUpdatesLedgerEvaluator properly (#4456)",
          "timestamp": "2022-08-24T13:13:10-04:00",
          "tree_id": "2052be05379a0193a49f53235f5e55a18fb5e9c0",
          "url": "https://github.com/onetechnical/go-algorand/commit/0c094079b08641ce10a63d6b9750221a4dfa0412"
        },
        "date": 1661362913779,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.43,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "27431300 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.94,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29149412 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.24,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15190870 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 82.95,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14584618 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11740044 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.76,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14534449 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.26,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14404832 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11871202 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.04,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13220548 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 136.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8857940 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 957.2,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1252728 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 95.88,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12759355 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 120.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9998121 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 465,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2565180 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87339414+algojack@users.noreply.github.com",
            "name": "Jack",
            "username": "algojack"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7de989aa62a01ce9971b48cb1c2ca6cc2f18f3bf",
          "message": "build: add valid_nightly_branch var to upload_binaries step (#4459)",
          "timestamp": "2022-08-24T21:13:57-04:00",
          "tree_id": "6714cd6f62dfdc70777c5676f9412c28fec09afc",
          "url": "https://github.com/onetechnical/go-algorand/commit/7de989aa62a01ce9971b48cb1c2ca6cc2f18f3bf"
        },
        "date": 1661392100267,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 41.97,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29040153 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.53,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29765300 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13769709 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14688730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.56,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12103328 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.56,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14732607 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.45,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14481409 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.99,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12087998 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13517000 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8934078 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 892.4,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1329820 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.34,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12834315 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10059081 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 437.8,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2733690 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "65323360+algorandskiy@users.noreply.github.com",
            "name": "Pavel Zbitskiy",
            "username": "algorandskiy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00a61504c68580ae6fa84dd2a7f96210e653bebd",
          "message": "ledger: extend catchpoint blocks lookback (#4463)\n\n* replaying transactions after catchpoint requires 1001 blocks\r\n  from the very first replayed block",
          "timestamp": "2022-08-25T17:31:07-04:00",
          "tree_id": "69c4feea699f384a64e3a032bd69228cc2da39f1",
          "url": "https://github.com/onetechnical/go-algorand/commit/00a61504c68580ae6fa84dd2a7f96210e653bebd"
        },
        "date": 1661521393565,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.3,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29014248 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.02,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29341444 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.65,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15584216 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14875280 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 100.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12097267 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.24,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13226764 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.03,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14713548 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 100.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11964372 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 90.36,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13264178 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8875119 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 903.2,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1326950 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.43,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12791216 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10103298 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 444.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2709331 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "65323360+algorandskiy@users.noreply.github.com",
            "name": "Pavel Zbitskiy",
            "username": "algorandskiy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4be5892209616e7f07aa805987301ef985f5f352",
          "message": "tests: ledger reload accessing txtail history (#4473)\n\n* Ensure blk opcode can be replayed after restart\r\n* Fix e2e fast catchup tests",
          "timestamp": "2022-08-26T12:00:57-04:00",
          "tree_id": "9e06e5db0423d75b477c126acfbcfa2e8b376dc2",
          "url": "https://github.com/onetechnical/go-algorand/commit/4be5892209616e7f07aa805987301ef985f5f352"
        },
        "date": 1661530103547,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 54.64,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "18420306 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 53.26,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "23818610 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 98.09,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12243543 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 100.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12204145 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 126.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9438126 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 109.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11700588 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 106.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10943366 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 126.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8656987 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 115,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10990052 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 174.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6711262 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1228,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "855571 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 125,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10060111 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 154.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7197908 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 578.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2060892 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jasonpaulos@users.noreply.github.com",
            "name": "Jason Paulos",
            "username": "jasonpaulos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edce4c1da83d1268e06b752e375d9933a81c48a9",
          "message": "Tests: Convert goal app info expect test to e2e (#4449)",
          "timestamp": "2022-08-26T12:56:26-04:00",
          "tree_id": "047f2c3f17a5258ca3b5cbe842ad490e20c8e480",
          "url": "https://github.com/onetechnical/go-algorand/commit/edce4c1da83d1268e06b752e375d9933a81c48a9"
        },
        "date": 1661536709352,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 56.19,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "22158908 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 52.53,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "22788440 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 101.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10296356 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 108.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11404920 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 135,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9292642 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 108.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10736782 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 107.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11137844 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 132.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9078175 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 117,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10368078 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 171.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6740608 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1170,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "874587 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 117.6,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10469454 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 157,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7870850 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 587.4,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1959279 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brianolson@users.noreply.github.com",
            "name": "Brian Olson",
            "username": "brianolson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c64c26e9a36a63dd3e22ac05d37c8f00cbd6aa3",
          "message": "TagCounter gains a tag set to filter on (#4503)\n\nunknown tags can be counted under one substitute tag e.g. \"UNK\"\r\nlimit protocol counters to known protocol tags",
          "timestamp": "2022-09-08T14:06:45-04:00",
          "tree_id": "379e22df96228d24e72e16496e436478763dca85",
          "url": "https://github.com/onetechnical/go-algorand/commit/3c64c26e9a36a63dd3e22ac05d37c8f00cbd6aa3"
        },
        "date": 1662663121970,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 49.47,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "24111723 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.43,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29522533 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.26,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15337495 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.13,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13736650 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11531094 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 84.33,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14162227 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 84.15,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14175409 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 105,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11471952 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 84.52,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14065894 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11143650 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 898.5,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1329742 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.78,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12094622 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 92.63,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12841676 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 447.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2691441 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85506383+algonathan@users.noreply.github.com",
            "name": "Jonathan Weiss",
            "username": "algonathan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc2df6b3ca566a8982def8ec4001dd465219644d",
          "message": "StateProofs: Add timeout to stateproof api (#4515)",
          "timestamp": "2022-09-08T15:40:49-04:00",
          "tree_id": "7f02d5c35af41f074324db207e9966d905cc353d",
          "url": "https://github.com/onetechnical/go-algorand/commit/dc2df6b3ca566a8982def8ec4001dd465219644d"
        },
        "date": 1662666974919,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 56.42,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "20320056 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 51.97,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "22697630 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 100,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12308944 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 108.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11222060 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 133.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8599734 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 108.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11148016 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 108.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11224465 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 129.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8955508 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 119.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10163289 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 173.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7502239 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1182,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "891639 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 116.3,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10662596 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 150.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7816646 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 581,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2159919 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "john.lee@algorand.com",
            "name": "John Lee",
            "username": "onetechnical"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b243e18dc3346647c1551e3de1ffc26c9dacd1ed",
          "message": "update node_exporter to include algorand/node_exporter#6 (#4518)",
          "timestamp": "2022-09-08T16:59:58-04:00",
          "tree_id": "f027bf3bd7ce14a9bcf202170497f91cc44c5c99",
          "url": "https://github.com/onetechnical/go-algorand/commit/b243e18dc3346647c1551e3de1ffc26c9dacd1ed"
        },
        "date": 1662671324186,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.65,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28418654 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.45,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29524099 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.97,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15573026 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 85.43,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14406174 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 100.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12000924 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.83,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14552385 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.87,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14411936 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11894142 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.92,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13045382 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8860687 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 912.9,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1308297 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 95.28,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12816706 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10153462 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 453.4,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2652952 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51567+cce@users.noreply.github.com",
            "name": "cce",
            "username": "cce"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb4219ddd3e47d9d89b23fff9751c8b2a56467bc",
          "message": "set filtered TagCounters from init() (#4524)",
          "timestamp": "2022-09-09T16:27:50-04:00",
          "tree_id": "b7e6f6177045b52e8f11be011f87943a21b64ca7",
          "url": "https://github.com/onetechnical/go-algorand/commit/cb4219ddd3e47d9d89b23fff9751c8b2a56467bc"
        },
        "date": 1662755705643,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 47.02,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "24077941 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.74,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29646776 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.52,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15394036 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.23,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14527431 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11733933 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.42,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14492307 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.37,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14381841 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11409730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 83.95,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14349734 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11287544 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 876.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1368124 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.26,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12126602 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 92.37,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13166625 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 437.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2736127 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "65323360+algorandskiy@users.noreply.github.com",
            "name": "Pavel Zbitskiy",
            "username": "algorandskiy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22b6101f746bdad6f3538fc710f10a501844c110",
          "message": "metrics: network tag filtering test (#4526)",
          "timestamp": "2022-09-09T18:25:02-04:00",
          "tree_id": "12ff02c9313f595df3964356995bf3de4334ccb4",
          "url": "https://github.com/onetechnical/go-algorand/commit/22b6101f746bdad6f3538fc710f10a501844c110"
        },
        "date": 1662942490412,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 60.12,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "19453185 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 50.64,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "23484321 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 99.43,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12186222 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 105.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11963558 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 128.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9531566 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 105.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11723529 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 104.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10932813 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 132.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9178910 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 116.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9889443 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 167.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7208103 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1114,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "919957 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 115.2,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10850367 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 153.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7903066 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 555,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2182501 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wwinder.unh@gmail.com",
            "name": "Will Winder",
            "username": "winder"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3c10f41f2ac3e2bf84d8ddfd134c1cfba3d0908",
          "message": " REST API: Add GetBlockHash API to algod v2 (#4580)\n\nCo-authored-by: Eric Warehime <eric.warehime@gmail.com>",
          "timestamp": "2022-09-26T14:07:13-04:00",
          "tree_id": "c8d400de69eaf3d3868e6ec5c8e97348fbf62000",
          "url": "https://github.com/onetechnical/go-algorand/commit/d3c10f41f2ac3e2bf84d8ddfd134c1cfba3d0908"
        },
        "date": 1664288656742,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.17,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28155657 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.98,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30147373 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.57,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15492848 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.35,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14867098 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 100.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11929452 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 86.85,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14563588 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.57,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14741913 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 100.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12019270 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.83,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13297945 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8850016 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 902.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1315113 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.57,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12807451 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10055052 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 443.6,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2694129 times\n2 procs"
          }
        ]
      }
    ]
  }
}