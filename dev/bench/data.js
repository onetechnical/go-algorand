window.BENCHMARK_DATA = {
  "lastUpdate": 1685976366701,
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
      },
      {
        "commit": {
          "author": {
            "email": "55754073+algonautshant@users.noreply.github.com",
            "name": "Shant Karakashian",
            "username": "algonautshant"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d389196e9ccd023216ccaade1b4d93bcc31c2e69",
          "message": "BatchVerifier: rename and unexport local functions in verify/txn (#4578)",
          "timestamp": "2022-09-30T03:57:49-04:00",
          "tree_id": "b352d8cf2f50196a6e252a2b47fc0ab3d0e75049",
          "url": "https://github.com/onetechnical/go-algorand/commit/d389196e9ccd023216ccaade1b4d93bcc31c2e69"
        },
        "date": 1664546920015,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.42,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26844918 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.07,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29823524 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 81.53,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15430549 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.48,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14435396 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11539688 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 84.26,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14378922 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.88,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14221802 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11610576 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 84.19,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14368419 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11180259 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 893.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1346667 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 100.9,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11906374 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 91.92,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13000453 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 448.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2679058 times\n2 procs"
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
          "id": "bb7c59f3982eb107a294e8be0e5b7b13962f33a3",
          "message": "Remove dead link from kmd README. (#4608)",
          "timestamp": "2022-10-12T10:06:45-04:00",
          "tree_id": "41dfde3b6c4437a95e75b75aee1364649dbe6b63",
          "url": "https://github.com/onetechnical/go-algorand/commit/bb7c59f3982eb107a294e8be0e5b7b13962f33a3"
        },
        "date": 1665764326311,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.41,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26766542 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.33,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29779934 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.45,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15527492 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 85.12,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14641863 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11699034 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.84,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14526670 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.71,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14342576 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11776520 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 83.28,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14330107 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 105.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11396176 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 906.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1333310 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 100.7,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12029258 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 92.06,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12925272 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 432.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2776545 times\n2 procs"
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
          "id": "f57a2763f120ec05ddc0baee63a8a7af2e0b6a1f",
          "message": "Tools: add check for DeterministicKeys == true when checking length of cfg.GeneratedAccountsMnemonics (#4662)",
          "timestamp": "2022-10-18T10:42:47-04:00",
          "tree_id": "5d99ad9159c06aeca18f1b1ea6d216ad2db82991",
          "url": "https://github.com/onetechnical/go-algorand/commit/f57a2763f120ec05ddc0baee63a8a7af2e0b6a1f"
        },
        "date": 1666119771226,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 51.1,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "24463428 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 47.13,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "25209670 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 92.43,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13129848 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 96.43,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12622642 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 121.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9920229 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 99.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11715120 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 104.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11439350 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 116.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10208455 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 106.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11080100 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 158.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7377610 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1080,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 114.7,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10441321 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 140.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8349856 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 531.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2204464 times\n2 procs"
          }
        ]
      },
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
          "id": "3f1f3e4060a7781ed26c796c8e86388039bcf9b5",
          "message": "V1 Deprecation: Remove algod and kmd client affinity and consolidate APIs to use newest version (#4641)",
          "timestamp": "2022-10-18T16:48:10-04:00",
          "tree_id": "e667bed06cc04027b82e275158a573985e356904",
          "url": "https://github.com/onetechnical/go-algorand/commit/3f1f3e4060a7781ed26c796c8e86388039bcf9b5"
        },
        "date": 1666200998006,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.89,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28130316 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.97,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "29850997 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.56,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15771014 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.87,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15083313 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.45,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11954911 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14778465 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.26,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14819895 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 100.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12102163 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.51,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13591042 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 134.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8962012 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 933.1,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1284609 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.41,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12890041 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 117.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10148116 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 461.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2571022 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55754073+algonautshant@users.noreply.github.com",
            "name": "Shant Karakashian",
            "username": "algonautshant"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abaed4b0d7ea32a5bd8996ef69f5293270dae67b",
          "message": "batchverifier: preserve the memory until the end (#4672)",
          "timestamp": "2022-10-19T18:31:48-04:00",
          "tree_id": "bcbb2716446166035937daef605e37f3e54f4aa5",
          "url": "https://github.com/onetechnical/go-algorand/commit/abaed4b0d7ea32a5bd8996ef69f5293270dae67b"
        },
        "date": 1666219775135,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 68.21,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "17226228 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 63.14,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "20437806 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 118.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11822773 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 127.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8950324 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 175.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7019881 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 129.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8957239 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 123.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9262651 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 156.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7391446 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 131.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9453058 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 201.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "5997301 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1448,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "917810 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 144.5,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8502368 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 181.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6897248 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 716.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1652221 times\n2 procs"
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
          "id": "7666348a508b664f6ee2f4ae757fa71c0038e94b",
          "message": "catchpoints: don't make duplicate account hashes in prepareNormalizedBalances (#4668)",
          "timestamp": "2022-10-19T15:01:33-04:00",
          "tree_id": "9a1882cc422b6cda8263efb54bb1559e312bacff",
          "url": "https://github.com/onetechnical/go-algorand/commit/7666348a508b664f6ee2f4ae757fa71c0038e94b"
        },
        "date": 1666219773734,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 65.28,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "18962486 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 62.53,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16454730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 116.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10373269 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 128.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8760700 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 148.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8014803 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 127.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9938311 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 126,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10106410 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 150.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7958860 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 132.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9270127 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 198.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "5960366 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1351,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "903110 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 128.5,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9715393 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 165.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7407123 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 707.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1742937 times\n2 procs"
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
          "id": "36c81fbdfb5cc143ea95a6e2bd9f64d133c62439",
          "message": "Tests: Consistent resource/account struct tests (#4669)",
          "timestamp": "2022-10-20T08:59:04-04:00",
          "tree_id": "4b52e3297e503ee115e2953ba04c461b303a7e39",
          "url": "https://github.com/onetechnical/go-algorand/commit/36c81fbdfb5cc143ea95a6e2bd9f64d133c62439"
        },
        "date": 1666275673567,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 41.87,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28870814 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.37,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30526716 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.85,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13519722 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 79.84,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14847939 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 98.79,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12211468 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.41,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14938698 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.03,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15040444 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.27,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12192300 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.52,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13607400 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 134.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9001694 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 901.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1325977 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 93.09,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13043197 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 117.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10315324 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 450.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2680370 times\n2 procs"
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
          "id": "36fc7f9b0a0831d2658353ecfaf3702ea6784c6b",
          "message": "algod: turn off cadaver trace file by default (#4676)",
          "timestamp": "2022-10-20T14:56:43-04:00",
          "tree_id": "f653e1a6765743b479be743df9413a8fdd88b38a",
          "url": "https://github.com/onetechnical/go-algorand/commit/36fc7f9b0a0831d2658353ecfaf3702ea6784c6b"
        },
        "date": 1666296102540,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.43,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26080351 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.34,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30375901 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15647047 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.79,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15093142 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12126668 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.31,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14696188 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.07,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14731297 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.48,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12025702 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.79,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13591946 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 134.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8953377 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 936.6,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1269170 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.85,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12908943 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10104819 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 461.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2594184 times\n2 procs"
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
          "id": "a3e90ad357dab65c8796d7070662333ecf8b423a",
          "message": "test: metrics gathering improvements (#4639)",
          "timestamp": "2022-10-26T11:23:32-04:00",
          "tree_id": "29f62aae8acdb6f1f745fb21fd7956835eba9302",
          "url": "https://github.com/onetechnical/go-algorand/commit/a3e90ad357dab65c8796d7070662333ecf8b423a"
        },
        "date": 1666804523706,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 37.65,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31221182 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 35.35,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30554674 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 72.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16018762 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 71.58,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15137557 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 87.25,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13518367 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 71.43,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16691034 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 70.93,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16756176 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 87.02,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13682496 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 78.36,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15506140 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 118,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10149244 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 795.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1497448 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 82.7,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14535711 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 103.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11330712 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 395.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "3045222 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tzaffi@users.noreply.github.com",
            "name": "Zeph Grunschlag",
            "username": "tzaffi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "959fb5ae8c9a7f20090ada0c1c4813d16a9a1398",
          "message": "blank import needs commenting out for indexer's lint (#4720)",
          "timestamp": "2022-11-01T12:04:39-04:00",
          "tree_id": "a216bef9dc90d71d79eaff19498c148b19de5764",
          "url": "https://github.com/onetechnical/go-algorand/commit/959fb5ae8c9a7f20090ada0c1c4813d16a9a1398"
        },
        "date": 1667321293342,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 56.8,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22188666 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 53.82,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "21039733 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 110.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11843629 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 110.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10946200 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 138.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9126697 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 109.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11135869 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 110.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10454107 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 134,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9100705 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 119,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10013554 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 177.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7000711 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1234,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "907872 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 119.1,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10478206 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 160.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7664418 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 618.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1919908 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eric.warehime@gmail.com",
            "name": "Eric Warehime",
            "username": "Eric-Warehime"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23890a82bcd996cc6c9e2410dd4823d63614a68e",
          "message": "algod: Consolidate models (#4714)",
          "timestamp": "2022-11-14T12:13:42-05:00",
          "tree_id": "a9687a5da624719e9a75c2ddefe09823d496432c",
          "url": "https://github.com/onetechnical/go-algorand/commit/23890a82bcd996cc6c9e2410dd4823d63614a68e"
        },
        "date": 1668454728878,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 55.06,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22553628 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 52.45,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22679199 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 98.79,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11668425 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 104.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11016386 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 132,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8791984 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 111.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11286933 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 106.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11339128 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 130.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8990404 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 109.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11296676 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 163,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7119378 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1086,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 112.5,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10381636 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 145.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8523422 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 572.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2110947 times\n2 procs"
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
          "id": "3ece6bd2b308dbf4e3436fa3ab9cdd15e95ef0af",
          "message": "test: large generated accountdb cluster test (#4772)",
          "timestamp": "2022-11-17T17:46:21-05:00",
          "tree_id": "2d04e6a9d611a2276a6c59661b661a891c2f8f35",
          "url": "https://github.com/onetechnical/go-algorand/commit/3ece6bd2b308dbf4e3436fa3ab9cdd15e95ef0af"
        },
        "date": 1668781469627,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.77,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27206275 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.96,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29733151 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.94,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15413110 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.05,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14526740 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 106.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11742844 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14608033 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.17,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14558710 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11762401 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.67,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14524304 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 104.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11493954 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 877.2,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1356067 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.3,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12136750 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 90.69,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13191075 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 430.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2798691 times\n2 procs"
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
          "id": "fd9bd683b34f6c4f56a62bd7bafa00759f0352da",
          "message": "test: disable TestWebsocketNetworkTelemetryTCP on CI (#4827)",
          "timestamp": "2022-11-22T12:26:28-05:00",
          "tree_id": "c510b0d10ca75ed043c319f286577b9c89b9c5c5",
          "url": "https://github.com/onetechnical/go-algorand/commit/fd9bd683b34f6c4f56a62bd7bafa00759f0352da"
        },
        "date": 1669138969810,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.64,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28909200 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.35,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30339990 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.28,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15919112 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.71,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14988434 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 98.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12313832 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14954476 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.22,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14766823 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 98.85,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12233862 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.52,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13415102 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 134.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8916626 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 913.1,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1314434 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 93.54,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12961839 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10117848 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 452.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2628242 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "64482439+algojohnlee@users.noreply.github.com",
            "name": "John Lee",
            "username": "algojohnlee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b1416707f231d769058e0347254378b81ad59d",
          "message": "Merge pull request #4843 from Algo-devops-service/relstable3.12.2-remerge\n\nCICD: go-algorand relstable3.12.2-remerge mergeback",
          "timestamp": "2022-11-30T13:25:15-05:00",
          "tree_id": "351068cacde735dc249ad54e8734b8b51f57f552",
          "url": "https://github.com/onetechnical/go-algorand/commit/e8b1416707f231d769058e0347254378b81ad59d"
        },
        "date": 1669906248206,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.88,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26801986 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.73,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29205726 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 90.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13539096 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 102.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14318450 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 109.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11202646 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.47,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14423014 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.16,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14397128 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11637991 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 83.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14382098 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 109.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10263019 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 884.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1300825 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 100.4,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12045942 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 91.94,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13131388 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 430.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2799051 times\n2 procs"
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
          "id": "fb95de1302570bf2c2dffb6304cfa541e7ab0c6f",
          "message": "testing: defi txn group benchmark (#4886)\n\nCo-authored-by: John Jannotti <jannotti@gmail.com>",
          "timestamp": "2022-12-11T22:27:48-05:00",
          "tree_id": "ad47f5274571bac09cacf275732333c06325b769",
          "url": "https://github.com/onetechnical/go-algorand/commit/fb95de1302570bf2c2dffb6304cfa541e7ab0c6f"
        },
        "date": 1670881762772,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.91,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27937282 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.71,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29480745 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.24,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15427708 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.89,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14767364 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.68,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12131265 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.78,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14639488 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.77,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14556256 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 100,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12135915 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 90.72,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13303273 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8916739 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 970.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1252888 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 98.37,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12781281 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10113987 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 468.6,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2555342 times\n2 procs"
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
          "id": "80476a7a5c1d1e8be78cc6f6abd49ff20840fdd2",
          "message": "teal: optimize CheckSignature (#4893)",
          "timestamp": "2022-12-13T09:58:48-05:00",
          "tree_id": "c54a1ca9f3f58169262b03313c046829ac0e6e96",
          "url": "https://github.com/onetechnical/go-algorand/commit/80476a7a5c1d1e8be78cc6f6abd49ff20840fdd2"
        },
        "date": 1670959759857,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 48.1,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "24332871 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.25,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29565003 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.59,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15447937 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.34,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14520960 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 116.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9385639 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.29,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14550240 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.18,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14631742 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11601843 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14568254 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 104.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11524238 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 873.4,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1380817 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.15,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12145446 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 90.54,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13258856 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 444.6,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2726905 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eric.warehime@gmail.com",
            "name": "Eric Warehime",
            "username": "Eric-Warehime"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c487b92141510974415287a56def621c30d3e772",
          "message": "docs: update API docs, remove unused codegen configs (#4896)",
          "timestamp": "2022-12-13T14:59:13-05:00",
          "tree_id": "9978637e1fded97853b9010157b8d2c6dc21ca59",
          "url": "https://github.com/onetechnical/go-algorand/commit/c487b92141510974415287a56def621c30d3e772"
        },
        "date": 1670963905596,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 55.15,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22229844 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 51.53,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23350410 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 99.85,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10964497 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 110.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11064793 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 139.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8975324 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 108.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11353506 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 108.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10851543 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 130.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9288415 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 115.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10792485 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 169.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6709552 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1156,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "974690 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 118,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10720872 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 155.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7304018 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 593.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2002922 times\n2 procs"
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
          "id": "bd64ce81fc43f2648b0083044079b4e4c0145b0a",
          "message": "metrics: update some new metric names (#4899)",
          "timestamp": "2022-12-13T15:39:46-05:00",
          "tree_id": "e30bcf615d42a47d0aec67dbe626874cf04c2308",
          "url": "https://github.com/onetechnical/go-algorand/commit/bd64ce81fc43f2648b0083044079b4e4c0145b0a"
        },
        "date": 1671032567612,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 55.58,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "21950842 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 55.07,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "18612997 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 103.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12131726 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 109.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11668052 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 124.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8692714 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 112.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11082532 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 102.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11482090 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 125,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8989600 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 114.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10482403 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 168.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7164550 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1208,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "964287 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 115.1,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10332602 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 146.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8249127 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 610.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1947384 times\n2 procs"
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
          "id": "1313a7b52eb48ed72554b59ef3d59e1aee05704f",
          "message": "log: stderr offending large log messages (#4930)",
          "timestamp": "2022-12-22T09:57:26-05:00",
          "tree_id": "8c60067ed5d9e705414a00afa9d11b1e59e473df",
          "url": "https://github.com/onetechnical/go-algorand/commit/1313a7b52eb48ed72554b59ef3d59e1aee05704f"
        },
        "date": 1671726898819,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.56,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26377672 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.99,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29702245 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.24,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15530257 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.39,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14549184 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10720873 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14674454 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.93,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14675926 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11823508 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.29,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14560959 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 105.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11511434 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 880.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1360330 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 98.64,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12212690 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 90.04,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13395314 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 428.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2804565 times\n2 procs"
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
          "id": "49d914a55da0ef78740f215e8a3a65b4113dd51d",
          "message": "remove unused node PoolStats() (#4956)",
          "timestamp": "2023-01-04T08:20:04-05:00",
          "tree_id": "009110820dcb8940d61e2adcb94fc1485a13c0a1",
          "url": "https://github.com/onetechnical/go-algorand/commit/49d914a55da0ef78740f215e8a3a65b4113dd51d"
        },
        "date": 1672843294748,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.6,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26646334 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.85,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26960809 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15467803 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.55,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14820639 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.73,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12162741 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.61,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14630804 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.18,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14807354 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.82,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12016099 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13502437 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8935407 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 932.4,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1296750 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.34,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12758839 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 119,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10099435 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 460.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2626568 times\n2 procs"
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
          "id": "19fa6c2471181d494245b0a36d7d8d57ca18ddab",
          "message": "AVM: Catch any panic in edcsa verifying (#4368)",
          "timestamp": "2023-01-06T17:10:01-05:00",
          "tree_id": "d0c211dd7b4b70c0c597f155e5898c504dca1a2b",
          "url": "https://github.com/onetechnical/go-algorand/commit/19fa6c2471181d494245b0a36d7d8d57ca18ddab"
        },
        "date": 1673275716424,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 48.21,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "24768198 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 47.84,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23667585 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 100.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11841138 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 102.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12703800 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 124,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9767598 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 101.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11878489 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 106.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11760421 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 129.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9193873 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 108.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11039836 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 171.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7494434 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1070,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1056636 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 107.9,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11019772 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 144.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8505392 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 488.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2199909 times\n2 procs"
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
          "id": "ecdcbf90ece61e457cd7d32d2ee7fbc4a3f85c2a",
          "message": "config: add HeartbeatUpdateInterval (#4832)",
          "timestamp": "2023-01-10T10:33:02-05:00",
          "tree_id": "291d6783b5d621a6cac4626233044d43a55d6e3d",
          "url": "https://github.com/onetechnical/go-algorand/commit/ecdcbf90ece61e457cd7d32d2ee7fbc4a3f85c2a"
        },
        "date": 1673366387388,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.15,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27311668 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.34,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29762949 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.05,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15526826 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.53,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14638984 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.58,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12144954 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.67,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14688141 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12869929 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.85,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12125348 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.65,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13413826 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 135.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8935492 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 929.3,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1304349 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.08,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12908390 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10164249 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 464.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2608960 times\n2 procs"
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
          "id": "1652e7d5569d20eab7c313f7b8485b8f8ee373db",
          "message": "agreement: fix receivedAt proposal performance timing (#5041)",
          "timestamp": "2023-01-23T12:47:25-05:00",
          "tree_id": "d7ce95b356ffe3127f57916eb1f9f36e22656ecb",
          "url": "https://github.com/onetechnical/go-algorand/commit/1652e7d5569d20eab7c313f7b8485b8f8ee373db"
        },
        "date": 1674498496724,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.6,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27246853 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.15,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30136126 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.99,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15521001 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 81.33,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14843778 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 99.18,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12141984 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 85.35,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14889417 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 81.13,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14705005 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 99.99,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12145840 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89.87,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13181650 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 134.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8922644 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 937,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1281392 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 94.71,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12909508 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 120.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10008669 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 464.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2613637 times\n2 procs"
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
          "id": "2594c329de9142ac21c9a2b30479962483614c85",
          "message": "lint: fix warnings (#5047)\n\n* fix some deadcode/unused/structcheck errors\r\n* make golangci lint warnings clean",
          "timestamp": "2023-01-24T12:00:46-05:00",
          "tree_id": "6712b9ab307c0b554b6b377b5d266b7746aea4d4",
          "url": "https://github.com/onetechnical/go-algorand/commit/2594c329de9142ac21c9a2b30479962483614c85"
        },
        "date": 1674587713388,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 63.2,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "20992938 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 56.88,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22061522 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 110.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11147253 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 112.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10312772 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 136.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9080223 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 110.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10893972 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 110.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11034290 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 137.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8876437 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 115.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10326138 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 173.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7052004 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1153,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1080087 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 114.2,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10315814 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 154.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7982554 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 585.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2074220 times\n2 procs"
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
          "id": "c8b5debee20ec295a34af0f0aaf2e6173288b86d",
          "message": "tests: add more logging to expect test (#5078)",
          "timestamp": "2023-01-30T15:34:43-05:00",
          "tree_id": "3a52d0ee8350bbe818e4fcfa46f203beed2e953d",
          "url": "https://github.com/onetechnical/go-algorand/commit/c8b5debee20ec295a34af0f0aaf2e6173288b86d"
        },
        "date": 1675185689588,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.24,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28235347 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.13,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "30133818 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15259348 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.36,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14240546 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11683371 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.55,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14129060 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 86.82,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14458887 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11737687 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 92.09,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12908260 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 138.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8672452 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 931.4,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1300314 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 95.14,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12482739 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 121.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9781350 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 462.3,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2607854 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eric.warehime@gmail.com",
            "name": "Eric Warehime",
            "username": "Eric-Warehime"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6487b374ca303e98317739a5f129b12a35f76176",
          "message": "tests: fix TestDelta by sorting results (#5103)",
          "timestamp": "2023-02-02T13:46:23-05:00",
          "tree_id": "55c84d3bf146249c0ded92368448adc8f3c05d17",
          "url": "https://github.com/onetechnical/go-algorand/commit/6487b374ca303e98317739a5f129b12a35f76176"
        },
        "date": 1675369134986,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.76,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27527005 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.31,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29937865 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.67,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14954978 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.38,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14242752 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11706886 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 86.34,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12869160 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.37,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14266305 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 107,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11900080 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 93.13,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12626941 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 139.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8528683 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 954,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1262199 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 96.39,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12538660 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 124.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9849380 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 498.6,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2564194 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eltociear@gmail.com",
            "name": "Ikko Eltociear Ashimine",
            "username": "eltociear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71cec0570dca35937d1d0b9c2456e0adb31149a1",
          "message": "cmd: fix typo in relayCmd.go (#5135)",
          "timestamp": "2023-02-13T09:28:50-05:00",
          "tree_id": "7c2a88de39bccfbc14f269b8f4e83002cf91c6c2",
          "url": "https://github.com/onetechnical/go-algorand/commit/71cec0570dca35937d1d0b9c2456e0adb31149a1"
        },
        "date": 1676302082523,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 46,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26155333 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.29,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29244141 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.89,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14824052 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 85.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14012126 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 110.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11181655 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 85.57,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13736797 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 85.57,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13978143 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 105.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11330905 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 85.64,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13922791 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 108.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11010867 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 900.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1348135 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 101.6,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11770630 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 93.82,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12693043 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 468.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2407153 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "78746954+algobarb@users.noreply.github.com",
            "name": "algobarb",
            "username": "algobarb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d14c9ddfc862d9393cad2d2309c9abf0909a9c3",
          "message": "CircleCI: Fix cached Results issue in self-hosted runner (#5137)",
          "timestamp": "2023-02-15T10:15:43-05:00",
          "tree_id": "f28eb48701f29b98e0fba9a208fd3ceb94131d95",
          "url": "https://github.com/onetechnical/go-algorand/commit/4d14c9ddfc862d9393cad2d2309c9abf0909a9c3"
        },
        "date": 1676486259381,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.72,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26576151 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.85,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29715122 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.77,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15032948 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.97,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14088219 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 115.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11380935 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 107.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11152833 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 99.66,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13096045 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 105.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9657610 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 84.92,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14030058 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 108.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11099170 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 884.5,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1354794 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 101.2,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11766302 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 94.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12790002 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 442.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2716813 times\n2 procs"
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
          "id": "9220f7b48e93f79959365b26e7939ccda90f6f52",
          "message": "fix(follower): add experimental tag to deltas endpoint. (#5169)",
          "timestamp": "2023-02-28T13:51:03-05:00",
          "tree_id": "9f98dd5286c853bc432baf6f37a715e1c123796a",
          "url": "https://github.com/onetechnical/go-algorand/commit/9220f7b48e93f79959365b26e7939ccda90f6f52"
        },
        "date": 1677685500031,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 49.98,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "20673188 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 48.53,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23520666 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 99.57,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12910766 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 101.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11853114 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 123.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10135852 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 106.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10833926 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 106.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11312364 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 133.4,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9169549 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 103.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11887992 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 157,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7715466 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1029,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1126602 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 106.4,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10742114 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 136.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8751574 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 530.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2134012 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113933518+AlgoAxel@users.noreply.github.com",
            "name": "AlgoAxel",
            "username": "AlgoAxel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25e8e94b9594ef3faa7535d413785a118f14a83c",
          "message": "refactor: Push test-only functionality of storage interfaces into test-interface. (#5175)",
          "timestamp": "2023-03-02T16:51:19-05:00",
          "tree_id": "7ad03ab114adc306376508cf77ae0793f7b08122",
          "url": "https://github.com/onetechnical/go-algorand/commit/25e8e94b9594ef3faa7535d413785a118f14a83c"
        },
        "date": 1677862824320,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 46.85,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28102288 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.49,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29698994 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.64,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15049083 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.61,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14177702 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 103.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11628769 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.73,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14341555 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.58,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14283649 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11741420 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 92.29,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13068968 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 137.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8629867 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 986.9,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1219458 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 96.16,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12479676 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 121.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9705750 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 478.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2451165 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87964331+ahangsu@users.noreply.github.com",
            "name": "Hang Su",
            "username": "ahangsu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dba5a0820af0b4e721e821a3bba4ebc7d46baddd",
          "message": "Enhancement: minor change in `agreement/type.go` comment, numbers are not matching (#5186)",
          "timestamp": "2023-03-10T12:59:24-05:00",
          "tree_id": "2f0a431b00715d69c0b8c803a8b245e3faa4eaf2",
          "url": "https://github.com/onetechnical/go-algorand/commit/dba5a0820af0b4e721e821a3bba4ebc7d46baddd"
        },
        "date": 1678477708489,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.77,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "27434641 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 42.01,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29211165 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.96,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15154774 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.37,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14265189 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 107.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10944678 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 84.78,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14102254 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 84.64,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13900730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11504276 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 92.82,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12984648 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 138.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8669280 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 990.9,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1227360 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 97.53,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12390188 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 122,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9818776 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 472.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2530880 times\n2 procs"
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
          "id": "ae331194876e94e930c5990062c78700aca397de",
          "message": "telemetry: fine-grained breakdown of AssembleBlockStats.StopReason (#5191)",
          "timestamp": "2023-03-10T14:47:32-05:00",
          "tree_id": "9db4f7b49286c046fc99c2e3103ab23a8bdef1cd",
          "url": "https://github.com/onetechnical/go-algorand/commit/ae331194876e94e930c5990062c78700aca397de"
        },
        "date": 1678478679764,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 59.3,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "18899290 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 53.6,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "23494371 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 104.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11870588 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 114.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10836504 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 138.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8972600 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 111.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11142050 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 111.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11011718 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 141.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8372673 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 117.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10576744 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 171.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6998384 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1163,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "891044 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 121.3,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10181124 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 156.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7722152 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 585.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2090902 times\n2 procs"
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
          "id": "c556cfc41894a3e5d52850cf20de8b89ff4d5ba0",
          "message": "catchpoints: small tweaks, mostly to comments (#5195)",
          "timestamp": "2023-03-13T14:11:57-04:00",
          "tree_id": "b1e4c32784971e08f824cc7ceae2df83109df9f8",
          "url": "https://github.com/onetechnical/go-algorand/commit/c556cfc41894a3e5d52850cf20de8b89ff4d5ba0"
        },
        "date": 1678806633550,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 45.99,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26122627 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.04,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29413558 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.69,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14938131 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.36,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14084919 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 106.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11291298 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 89.15,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13966948 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 84.84,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14094759 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 105.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11394166 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 85.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13941230 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11082774 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 898.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1325850 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 101.6,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11791190 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 93.35,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12727717 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 440.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2731596 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "113933518+AlgoAxel@users.noreply.github.com",
            "name": "AlgoAxel",
            "username": "AlgoAxel"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f4fa3cb37f99f374880237e2af073e61ff9199d6",
          "message": "Fix: Tech Debt (wsNetwork \"auto\" and OnlineAccountsDelete comment) (#5207)",
          "timestamp": "2023-03-17T18:12:06-04:00",
          "tree_id": "59cfcc330eda15c090868210c469906e29c93e4b",
          "url": "https://github.com/onetechnical/go-algorand/commit/f4fa3cb37f99f374880237e2af073e61ff9199d6"
        },
        "date": 1679335307500,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 46.23,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "26219083 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.3,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "29483656 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 80.14,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15081584 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 84.98,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14068076 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 106.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11194947 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 85.59,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13872735 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 95.87,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13929062 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 105.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11328373 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 85.93,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13899231 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11053611 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 916.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1280240 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 102,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "11703864 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 93.48,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12765987 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 453.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2672034 times\n2 procs"
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
          "id": "e659181f75fb8b054c2c902fbc1d7af33febd043",
          "message": "test: enable runtime metrics in custom templates (#5231)",
          "timestamp": "2023-03-24T15:31:49-04:00",
          "tree_id": "c22639c83091f7ffe8582b7ce9a35fefc42edbc8",
          "url": "https://github.com/onetechnical/go-algorand/commit/e659181f75fb8b054c2c902fbc1d7af33febd043"
        },
        "date": 1679689201963,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 54.6,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "22356939 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 52.81,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "25105876 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 102,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12008396 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 112.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11080831 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 139.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8692521 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 110.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11042288 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 108.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10333605 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 132.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8925650 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 113.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10480765 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 171.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6940905 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1161,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "883431 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 114.7,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "10410502 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 153,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7639936 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 578.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2021113 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tzaffi@users.noreply.github.com",
            "name": "Zeph Grunschlag",
            "username": "tzaffi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ff7947f32e7085867f4b6ddec4f05b09765ef2f",
          "message": "follower: Set initial sync round to latest tracker committed round. (#5251)",
          "timestamp": "2023-04-07T13:36:12-04:00",
          "tree_id": "39b31548c37f9db0afd95e988f2b6ed4dd8814d2",
          "url": "https://github.com/onetechnical/go-algorand/commit/9ff7947f32e7085867f4b6ddec4f05b09765ef2f"
        },
        "date": 1680893110218,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.91,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28468261 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.16,
            "unit": "ns/op\t         1.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "28584630 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.04,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15334791 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 82.58,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14396205 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 104.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11817098 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14249578 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.89,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14479393 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11695486 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 91.76,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13136228 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 137.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8801755 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 929.1,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1306411 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 95.18,
            "unit": "ns/op\t         2.000 extra/op\t       6 B/op\t       0 allocs/op",
            "extra": "12567255 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 121.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9983457 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 458.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2636452 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80276844+shiqizng@users.noreply.github.com",
            "name": "shiqizng",
            "username": "shiqizng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d17c1b5b3472b9b17dd424577dfa023a8969d7af",
          "message": "tools: block generator data reporting (#5339)",
          "timestamp": "2023-05-03T09:37:23-04:00",
          "tree_id": "3441cb17cc6c2ec6526121ede6fa88eaceb6d6d2",
          "url": "https://github.com/onetechnical/go-algorand/commit/d17c1b5b3472b9b17dd424577dfa023a8969d7af"
        },
        "date": 1683122338252,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.95,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26536785 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.49,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28924384 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 79.44,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15148759 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.77,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14034970 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 106.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11547831 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.82,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14452473 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 83.86,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14080507 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11718705 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 92.62,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12882885 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 138.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8615391 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 936,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1282840 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 96.16,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12484280 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 121.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9798565 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 463.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2571813 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87964331+ahangsu@users.noreply.github.com",
            "name": "Hang Su",
            "username": "ahangsu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e980d3ecce678818e9a25cdef58612f990ccb8b",
          "message": "Algod: Simulation run with extra budget per transaction group (#5354)\n\nMoar opcode budget",
          "timestamp": "2023-05-05T18:10:12-04:00",
          "tree_id": "71d60c233ec80656494cd45911d8794027236ad4",
          "url": "https://github.com/onetechnical/go-algorand/commit/9e980d3ecce678818e9a25cdef58612f990ccb8b"
        },
        "date": 1683652208654,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 60.08,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "20088858 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 56.37,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "21511494 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 109.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10981108 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 120.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9882716 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 155.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8081628 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 116.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9732944 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 117.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9951238 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 144.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8271655 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 125.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9782702 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 187.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6550994 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1239,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "952748 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 123.8,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9319617 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 163.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "6924218 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 618.8,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1929309 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eric.warehime@gmail.com",
            "name": "Eric Warehime",
            "username": "Eric-Warehime"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7c5e54b5e179fc828389eb3acc72b8fcac7d9bf",
          "message": "txn tracer: Fix pointer bug copying deltas for txn groups (#5375)",
          "timestamp": "2023-05-11T19:18:54-04:00",
          "tree_id": "c042fa7c6b528325edb585a3c65e8e10bfef71aa",
          "url": "https://github.com/onetechnical/go-algorand/commit/d7c5e54b5e179fc828389eb3acc72b8fcac7d9bf"
        },
        "date": 1683905350318,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 58.01,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "21458901 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 51.31,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "22013361 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 99.89,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12096326 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 113.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11610313 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 131.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8691892 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 106.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11832140 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 106.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11658466 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 136.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8813875 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 116.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9868848 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 173.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7118718 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1215,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "914512 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 118.6,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10411369 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 156.4,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7670533 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 613.4,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "1880284 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tzaffi@users.noreply.github.com",
            "name": "Zeph Grunschlag",
            "username": "tzaffi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cee1c810f4e4789bcbe5c5b6c4f6f7aa7be0dd10",
          "message": "tests: reduce flakiness in TestSyncRoundWithRemake (#5367)",
          "timestamp": "2023-05-15T21:03:24-04:00",
          "tree_id": "db26971891bcf6bdf6294e3ff69cda06c1857d07",
          "url": "https://github.com/onetechnical/go-algorand/commit/cee1c810f4e4789bcbe5c5b6c4f6f7aa7be0dd10"
        },
        "date": 1684246954779,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.15,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "27074812 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 43.02,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30371254 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.42,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15515845 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 82.22,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14555761 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 101.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11835374 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14565601 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.51,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14528972 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 101.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11813248 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.18,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14518777 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11439907 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 924.1,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1322258 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 107.8,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10068038 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 90.51,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13222719 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 430.2,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2796278 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "78746954+algobarb@users.noreply.github.com",
            "name": "algobarb",
            "username": "algobarb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57feb2c0f400944d225c6b12870621cd81bcdf99",
          "message": "Dependency: Update codec version to 1.1.9 (#5395)",
          "timestamp": "2023-05-17T11:47:55-04:00",
          "tree_id": "0a2c5840093135342fb6aeb98d30f9ee6bd09c5b",
          "url": "https://github.com/onetechnical/go-algorand/commit/57feb2c0f400944d225c6b12870621cd81bcdf99"
        },
        "date": 1684343549055,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 44.51,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26340426 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.4,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30917534 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 76.91,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15469080 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 83.42,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14452983 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11876842 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 96.94,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13553154 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 84.65,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14551957 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11801416 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 82.74,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14072282 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 105.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11403404 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 886.7,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1360352 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 99.64,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12241152 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 98.33,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10409608 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 431,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2784020 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eric.warehime@gmail.com",
            "name": "Eric Warehime",
            "username": "Eric-Warehime"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a497df043cdd8627e76b192c1208029d0734fbd5",
          "message": "algod: Don't return a top level array from algod (#5404)",
          "timestamp": "2023-05-19T16:15:26-04:00",
          "tree_id": "2a8964c3e13ea010fb81efcb4bdf08d286eccebe",
          "url": "https://github.com/onetechnical/go-algorand/commit/a497df043cdd8627e76b192c1208029d0734fbd5"
        },
        "date": 1684527972961,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.21,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "27114699 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 38.71,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31293720 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 74.69,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16063251 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 79.64,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14814392 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 97.29,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12457189 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.22,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14698335 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 79.85,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14736422 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 98.16,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12429370 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 88.73,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13422129 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 132.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9104852 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 913.5,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1297684 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 92.86,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13055906 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 117.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10222873 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 450.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2655288 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eltociear@gmail.com",
            "name": "Ikko Eltociear Ashimine",
            "username": "eltociear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "06b77278a077572d0461a8544d31419db0d900a1",
          "message": "typo: fix typo in event.go (#5405)",
          "timestamp": "2023-05-22T09:36:23-04:00",
          "tree_id": "62eac7eac8e086c89fdba5bc2a38280684f377f6",
          "url": "https://github.com/onetechnical/go-algorand/commit/06b77278a077572d0461a8544d31419db0d900a1"
        },
        "date": 1684763637899,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 48.55,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "21369249 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 45.16,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "27390165 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 86.52,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14118476 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 92.88,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13369800 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 112.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10411125 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 91.26,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13594819 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 92.69,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13281576 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 113.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10552789 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 99.06,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12390265 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 145.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8272074 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1001,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1211892 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 101.9,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11716135 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 130.8,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9037447 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 505.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2289624 times\n2 procs"
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
          "id": "99081cbb0d3998ef54a412f31be57c1257424288",
          "message": "consensus: Introduce versions v37 and v38 (#5397)",
          "timestamp": "2023-05-22T11:17:44-04:00",
          "tree_id": "dfc3a4e8875b808d97761c03c234aca39c8be6b2",
          "url": "https://github.com/onetechnical/go-algorand/commit/99081cbb0d3998ef54a412f31be57c1257424288"
        },
        "date": 1684769227215,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.02,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26851520 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.78,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31040960 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 78.48,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16059430 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 80.37,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14902194 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 98.28,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11817483 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.58,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14931882 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.39,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14985848 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 97.76,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12472202 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 89,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13494865 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 133.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9085944 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1010,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1209044 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 93.62,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13035876 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 117.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10087399 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 480.4,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2492032 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80276844+shiqizng@users.noreply.github.com",
            "name": "shiqizng",
            "username": "shiqizng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1abbd50ae3c6e447690a1c8c3ce22f1b95341383",
          "message": "bug fix: block generator test  (#5410)",
          "timestamp": "2023-05-22T16:36:45-04:00",
          "tree_id": "ba84afcdd7d684ef36f25099fc39e965abbbf389",
          "url": "https://github.com/onetechnical/go-algorand/commit/1abbd50ae3c6e447690a1c8c3ce22f1b95341383"
        },
        "date": 1684868609532,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.17,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28378860 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 40.47,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31926282 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 73.45,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15143541 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 79.93,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14766828 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 97.04,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12393808 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 79.22,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14880340 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15080756 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 97.48,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12460861 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 88.47,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13542890 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 132,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9170042 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 947,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1250403 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 92.13,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13005564 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 117.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10166304 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 456.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2638297 times\n2 procs"
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
          "id": "9d2bfef24ffa960522ff1d7961813359e9234d21",
          "message": "docker: Fix ADMIN_TOKEN and add missing variables to echo statements. (#5357)",
          "timestamp": "2023-05-24T12:48:11-04:00",
          "tree_id": "46dded716df95a86575cb3fddc4509da4b0ce83f",
          "url": "https://github.com/onetechnical/go-algorand/commit/9d2bfef24ffa960522ff1d7961813359e9234d21"
        },
        "date": 1684954985047,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 51.96,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "23620802 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 47.78,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "24516986 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 91.95,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12784185 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 101,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12256890 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 119.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10118073 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 97.02,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12379723 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 100.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11835667 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 119.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10229120 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 108.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11054738 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 163.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7338212 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1205,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "953997 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 113.6,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10710386 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 144.9,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7885868 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 566.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2089599 times\n2 procs"
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
          "id": "3fb696411c131d9e334f84639a95865af64601cb",
          "message": "ledger: report catchpoint writing only when it actually started (#5413)",
          "timestamp": "2023-05-24T14:58:24-04:00",
          "tree_id": "6b555f8c51eb8aa758f1978db8c9915fe6aee725",
          "url": "https://github.com/onetechnical/go-algorand/commit/3fb696411c131d9e334f84639a95865af64601cb"
        },
        "date": 1684955144456,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.14,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28459741 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 41.69,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31903136 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 73.85,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15842812 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 79.88,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15022047 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 97.07,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11388553 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 80.7,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14910870 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 80.13,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15064062 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 97.52,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12019268 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 88.54,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13742445 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 132,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9158008 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 946.1,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1286958 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 92.54,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12708739 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 118,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10161675 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 457.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2578051 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87964331+ahangsu@users.noreply.github.com",
            "name": "Hang Su",
            "username": "ahangsu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "058a9d58a4eb1575977a990a1f8eeba57c8c80b2",
          "message": "Goal: rename `--allow-extra-opcode-budget` to `--allow-more-opcode-budget` (#5407)\n\nextra more double plus good",
          "timestamp": "2023-05-24T15:10:29-04:00",
          "tree_id": "a3042f92381843357665c03f2d8aa2778e39abc5",
          "url": "https://github.com/onetechnical/go-algorand/commit/058a9d58a4eb1575977a990a1f8eeba57c8c80b2"
        },
        "date": 1684955921040,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 51.4,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "23802012 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 49.86,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "26263872 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 91.52,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12875701 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 97.95,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12428245 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 120.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10343074 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 99.35,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10496131 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 98.47,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11437590 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 121.9,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9922633 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 110.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11046036 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 159.5,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "7268935 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 1124,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "985296 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 112.7,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10785800 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 143.1,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "8246266 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 567.1,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2026276 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80276844+shiqizng@users.noreply.github.com",
            "name": "shiqizng",
            "username": "shiqizng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ad660f96949ef349c68274fad52d4cbb40ed4c9",
          "message": "tools: enable consecutive test runs in the block generator (#5409)\n\nCo-authored-by: Zeph Grunschlag <tzaffi@users.noreply.github.com>",
          "timestamp": "2023-05-26T17:04:37-04:00",
          "tree_id": "704589517c14eb0b00529427e509249b47620fe4",
          "url": "https://github.com/onetechnical/go-algorand/commit/6ad660f96949ef349c68274fad52d4cbb40ed4c9"
        },
        "date": 1685468037621,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.03,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "28077427 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 38.45,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31015224 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 73.36,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16457955 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 78.67,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15447283 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 96.66,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12417637 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 82.48,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15275030 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 78.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15374214 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 96.56,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12533458 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 87.79,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13605463 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 133.2,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9046269 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 909,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1307506 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 91.82,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13059541 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 116.2,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10220851 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 452.8,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2656820 times\n2 procs"
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
          "id": "aa6a5bbed5de22d7bceb8bd3ef8abb8f178302d3",
          "message": "AVM: Make apps and app accounts available while creation is \"pending\" (#5425)",
          "timestamp": "2023-05-30T14:51:50-04:00",
          "tree_id": "e4c618318eb7578963c7d51378d2f32dda259053",
          "url": "https://github.com/onetechnical/go-algorand/commit/aa6a5bbed5de22d7bceb8bd3ef8abb8f178302d3"
        },
        "date": 1685474429890,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 47.81,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "27162106 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.82,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30498795 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 82.51,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15069919 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 89.63,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11402420 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11765660 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.49,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14310859 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.54,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14464730 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 102.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11661204 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 83.3,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14323995 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 106.6,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11212909 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 915.1,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1343124 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 98.22,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12274424 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 91.5,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13106262 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 434.5,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2782118 times\n2 procs"
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
          "distinct": false,
          "id": "04fc60d21b268c5201ad79d0317419af24a43f47",
          "message": "CICD: fix ci-build target for buildsrc-special support (#5433)\n\nCo-authored-by: Zeph Grunschlag <tzaffi@users.noreply.github.com>",
          "timestamp": "2023-05-30T17:19:39-04:00",
          "tree_id": "01b6f7f3aa81297b7f188cb947d4ada2490b00bc",
          "url": "https://github.com/onetechnical/go-algorand/commit/04fc60d21b268c5201ad79d0317419af24a43f47"
        },
        "date": 1685540025656,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 42.37,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "27750758 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 38.91,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "31119369 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 74.18,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "16182028 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 79.25,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15069049 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 98.91,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12324327 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 81.97,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14052853 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 79.13,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15195643 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 98.51,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12343636 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 87.96,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13545477 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 132.7,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "9064305 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 929.8,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1304256 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 92.72,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12984860 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 116.6,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "10285350 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 458.9,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2620174 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eltociear@gmail.com",
            "name": "Ikko Eltociear Ashimine",
            "username": "eltociear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5faa4d09e03b0d25bf83007b63cd54b1ee2dc9a2",
          "message": "typo: Fix typo in blockService_test.go (#5448)",
          "timestamp": "2023-06-03T19:36:11-04:00",
          "tree_id": "78e635f756fd2f58d57046869572033e8b40911c",
          "url": "https://github.com/onetechnical/go-algorand/commit/5faa4d09e03b0d25bf83007b63cd54b1ee2dc9a2"
        },
        "date": 1685976366088,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkUintMath/dup",
            "value": 43.81,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "25012576 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop1",
            "value": 39.57,
            "unit": "ns/op\t         1.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "30664430 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/pop",
            "value": 77.15,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "15461530 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/add",
            "value": 87.26,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14272654 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/addw",
            "value": 102.1,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11720534 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sub",
            "value": 83.28,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14375034 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mul",
            "value": 82.67,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14520238 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/mulw",
            "value": 103.3,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11733553 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/div",
            "value": 83.04,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "14418940 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divw",
            "value": 107.8,
            "unit": "ns/op\t         4.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "11292640 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/divmodw",
            "value": 877.4,
            "unit": "ns/op\t         8.000 extra/op\t     311 B/op\t      11 allocs/op",
            "extra": "1370503 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/sqrt",
            "value": 98.26,
            "unit": "ns/op\t         2.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "12240825 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/exp",
            "value": 91.78,
            "unit": "ns/op\t         3.000 extra/op\t       7 B/op\t       0 allocs/op",
            "extra": "13125580 times\n2 procs"
          },
          {
            "name": "BenchmarkUintMath/expw",
            "value": 429.7,
            "unit": "ns/op\t         4.000 extra/op\t     111 B/op\t       5 allocs/op",
            "extra": "2780485 times\n2 procs"
          }
        ]
      }
    ]
  }
}