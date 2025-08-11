window.BENCHMARK_DATA = {
  "lastUpdate": 1754920468082,
  "repoUrl": "https://github.com/Zafirmk/merlin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "zafirmk0@gmail.com",
            "name": "zafirmk",
            "username": "Zafirmk"
          },
          "committer": {
            "email": "zafirmk0@gmail.com",
            "name": "zafirmk",
            "username": "Zafirmk"
          },
          "distinct": true,
          "id": "4ae8be24bc1c532d318b0a1375df16ad2d9eeee0",
          "message": "Add Continuous Benchmarking to Merlin",
          "timestamp": "2025-08-05T20:43:24Z",
          "tree_id": "b4c0f90f1170c8914d206853b15a9cc7d263884c",
          "url": "https://github.com/Zafirmk/merlin/commit/4ae8be24bc1c532d318b0a1375df16ad2d9eeee0"
        },
        "date": 1754426849486,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 175.6261228087244,
            "unit": "iter/sec",
            "range": "stddev: 0.00005664398826476282",
            "extra": "mean: 5.693913775509961 msec\nrounds: 147"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 53.37267900810567,
            "unit": "iter/sec",
            "range": "stddev: 0.00013864939535789353",
            "extra": "mean: 18.736177733333015 msec\nrounds: 45"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 21.83511899193593,
            "unit": "iter/sec",
            "range": "stddev: 0.0003458484788023934",
            "extra": "mean: 45.7977811052606 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 9.800684059978792,
            "unit": "iter/sec",
            "range": "stddev: 0.008154043310915366",
            "extra": "mean: 102.03369416666656 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 267.8572876549687,
            "unit": "iter/sec",
            "range": "stddev: 0.000049147332958692",
            "extra": "mean: 3.7333313151745053 msec\nrounds: 257"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 134.88737765635116,
            "unit": "iter/sec",
            "range": "stddev: 0.000059941903029411347",
            "extra": "mean: 7.413592119402545 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 78.06758990250479,
            "unit": "iter/sec",
            "range": "stddev: 0.0000958932019729841",
            "extra": "mean: 12.809412987500401 msec\nrounds: 80"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 50.06373701007808,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842690287870076",
            "extra": "mean: 19.97453765384504 msec\nrounds: 52"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 263.62033557444346,
            "unit": "iter/sec",
            "range": "stddev: 0.000059420641494870716",
            "extra": "mean: 3.7933340681815917 msec\nrounds: 264"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 132.36570527329744,
            "unit": "iter/sec",
            "range": "stddev: 0.00007406991814193989",
            "extra": "mean: 7.554826969231079 msec\nrounds: 130"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 76.07538945423718,
            "unit": "iter/sec",
            "range": "stddev: 0.00007622175572355665",
            "extra": "mean: 13.144855480517068 msec\nrounds: 77"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 48.51758455177804,
            "unit": "iter/sec",
            "range": "stddev: 0.00011264860958480606",
            "extra": "mean: 20.611083780001422 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 255.1938279668619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004000403375480028",
            "extra": "mean: 3.9185900692310414 msec\nrounds: 260"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 129.079252661991,
            "unit": "iter/sec",
            "range": "stddev: 0.00007135023499711327",
            "extra": "mean: 7.747178414633496 msec\nrounds: 123"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 73.30833934711868,
            "unit": "iter/sec",
            "range": "stddev: 0.00009624610786852709",
            "extra": "mean: 13.64101286301071 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 45.40516786144251,
            "unit": "iter/sec",
            "range": "stddev: 0.00022638359221173002",
            "extra": "mean: 22.023924744680603 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 252.35328853521503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005513961643531007",
            "extra": "mean: 3.962698508129223 msec\nrounds: 246"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 122.53234709990745,
            "unit": "iter/sec",
            "range": "stddev: 0.00006167739925913477",
            "extra": "mean: 8.161110299998125 msec\nrounds: 120"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 68.78953586979266,
            "unit": "iter/sec",
            "range": "stddev: 0.00010547273901612287",
            "extra": "mean: 14.53709473913062 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 40.18915517957486,
            "unit": "iter/sec",
            "range": "stddev: 0.0004658021125578684",
            "extra": "mean: 24.88233443902362 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 78.55887514373617,
            "unit": "iter/sec",
            "range": "stddev: 0.00006937067648445757",
            "extra": "mean: 12.72930650000192 msec\nrounds: 76"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 23.511779935171177,
            "unit": "iter/sec",
            "range": "stddev: 0.0010262442216436656",
            "extra": "mean: 42.53187137499973 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 13.362151973013342,
            "unit": "iter/sec",
            "range": "stddev: 0.0019912818782849176",
            "extra": "mean: 74.83824476922834 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 3.613235567763964,
            "unit": "iter/sec",
            "range": "stddev: 0.05475878078733751",
            "extra": "mean: 276.76025579999646 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 11.78096857392199,
            "unit": "iter/sec",
            "range": "stddev: 0.0015730112212414557",
            "extra": "mean: 84.88266424999817 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 2.961365056005756,
            "unit": "iter/sec",
            "range": "stddev: 0.049038695488580246",
            "extra": "mean: 337.68210979999367 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zafirmk0@gmail.com",
            "name": "Zafir Khalid",
            "username": "Zafirmk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7358df41ce48f0a851ebed68ad625441fa2730b2",
          "message": "Update benchmark.yml with permissions",
          "timestamp": "2025-08-11T09:42:09-04:00",
          "tree_id": "89c65e6fd949eb2e079f8cb8fa136458b34612fb",
          "url": "https://github.com/Zafirmk/merlin/commit/7358df41ce48f0a851ebed68ad625441fa2730b2"
        },
        "date": 1754919963057,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 176.08576047976737,
            "unit": "iter/sec",
            "range": "stddev: 0.00006805333002228421",
            "extra": "mean: 5.6790509197074 msec\nrounds: 137"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 53.046985860832656,
            "unit": "iter/sec",
            "range": "stddev: 0.0007074957844978183",
            "extra": "mean: 18.851212444444503 msec\nrounds: 45"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 21.35257991653228,
            "unit": "iter/sec",
            "range": "stddev: 0.0008401479978544138",
            "extra": "mean: 46.83274826316177 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 9.834418147511464,
            "unit": "iter/sec",
            "range": "stddev: 0.000995764438361964",
            "extra": "mean: 101.68369749999329 msec\nrounds: 6"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 264.9057692765623,
            "unit": "iter/sec",
            "range": "stddev: 0.000050297328038197114",
            "extra": "mean: 3.774927223106257 msec\nrounds: 251"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 134.45500999382378,
            "unit": "iter/sec",
            "range": "stddev: 0.00006383189993640864",
            "extra": "mean: 7.437432045454722 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 76.88482249410592,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593447282072806",
            "extra": "mean: 13.00646821518852 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 49.38399364951887,
            "unit": "iter/sec",
            "range": "stddev: 0.00025972982776270175",
            "extra": "mean: 20.249476117647742 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 260.3913061520751,
            "unit": "iter/sec",
            "range": "stddev: 0.00007453374392124179",
            "extra": "mean: 3.84037399242498 msec\nrounds: 264"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 130.61955654660292,
            "unit": "iter/sec",
            "range": "stddev: 0.00006761725422007252",
            "extra": "mean: 7.655821428571581 msec\nrounds: 126"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 73.18629704036107,
            "unit": "iter/sec",
            "range": "stddev: 0.0019049738027597627",
            "extra": "mean: 13.663760026668873 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 48.19824579828514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271844411466554",
            "extra": "mean: 20.747643061224842 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 257.18371943496885,
            "unit": "iter/sec",
            "range": "stddev: 0.00003816391445864518",
            "extra": "mean: 3.8882710079665785 msec\nrounds: 251"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 128.7625535815394,
            "unit": "iter/sec",
            "range": "stddev: 0.00006808492748013094",
            "extra": "mean: 7.766233056000601 msec\nrounds: 125"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 73.19268083017475,
            "unit": "iter/sec",
            "range": "stddev: 0.00013688807610647648",
            "extra": "mean: 13.6625682876714 msec\nrounds: 73"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 45.20171519913309,
            "unit": "iter/sec",
            "range": "stddev: 0.00016310779985732578",
            "extra": "mean: 22.123054304345928 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 254.6983354619218,
            "unit": "iter/sec",
            "range": "stddev: 0.00003621179747875051",
            "extra": "mean: 3.9262133307090386 msec\nrounds: 254"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 124.51492887353041,
            "unit": "iter/sec",
            "range": "stddev: 0.00006178887860965875",
            "extra": "mean: 8.031165491936298 msec\nrounds: 124"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 69.66083167328944,
            "unit": "iter/sec",
            "range": "stddev: 0.00010819962469785863",
            "extra": "mean: 14.355269323944022 msec\nrounds: 71"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 39.10534077916743,
            "unit": "iter/sec",
            "range": "stddev: 0.0013965548296010308",
            "extra": "mean: 25.571954624999194 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 81.30450031370255,
            "unit": "iter/sec",
            "range": "stddev: 0.00020368560686866074",
            "extra": "mean: 12.299442172839555 msec\nrounds: 81"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 24.432383351708058,
            "unit": "iter/sec",
            "range": "stddev: 0.00012481853366044522",
            "extra": "mean: 40.92928576000304 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 13.354237726393514,
            "unit": "iter/sec",
            "range": "stddev: 0.0019677156811278413",
            "extra": "mean: 74.88259685714483 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 3.592046146585695,
            "unit": "iter/sec",
            "range": "stddev: 0.05354769988410384",
            "extra": "mean: 278.3928600000081 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 11.722786599609208,
            "unit": "iter/sec",
            "range": "stddev: 0.00215722765129392",
            "extra": "mean: 85.30394983333878 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 2.9617361109473697,
            "unit": "iter/sec",
            "range": "stddev: 0.04498159622481449",
            "extra": "mean: 337.63980400000264 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zafirmk0@gmail.com",
            "name": "Zafir Khalid",
            "username": "Zafirmk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f7cdaebd674a912cd2be93a9c71339bf87b65be",
          "message": "Remove custom push url",
          "timestamp": "2025-08-11T09:50:34-04:00",
          "tree_id": "63e02a24d64e4c56d1cadc6d5ff839c02284599f",
          "url": "https://github.com/Zafirmk/merlin/commit/9f7cdaebd674a912cd2be93a9c71339bf87b65be"
        },
        "date": 1754920467486,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 156.0605975749256,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241250035469621",
            "extra": "mean: 6.407767338708891 msec\nrounds: 124"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 46.19530764717933,
            "unit": "iter/sec",
            "range": "stddev: 0.00026635908923645983",
            "extra": "mean: 21.647220268291896 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 18.749828411496967,
            "unit": "iter/sec",
            "range": "stddev: 0.0009538798982565708",
            "extra": "mean: 53.333821411764106 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 9.086102278480706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006657366341978173",
            "extra": "mean: 110.05819320000114 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 245.80417722564434,
            "unit": "iter/sec",
            "range": "stddev: 0.00037231769563011806",
            "extra": "mean: 4.06827911261254 msec\nrounds: 222"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 127.27116060199762,
            "unit": "iter/sec",
            "range": "stddev: 0.00029016748110832194",
            "extra": "mean: 7.857239576271329 msec\nrounds: 118"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 67.79168346315545,
            "unit": "iter/sec",
            "range": "stddev: 0.0004423064070344682",
            "extra": "mean: 14.751071944444286 msec\nrounds: 72"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 41.0439104362332,
            "unit": "iter/sec",
            "range": "stddev: 0.0006061897723888012",
            "extra": "mean: 24.364150232557005 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 236.75418513512574,
            "unit": "iter/sec",
            "range": "stddev: 0.00017909096029629563",
            "extra": "mean: 4.2237901705064145 msec\nrounds: 217"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 126.24575785643316,
            "unit": "iter/sec",
            "range": "stddev: 0.000283195036065509",
            "extra": "mean: 7.921058235772178 msec\nrounds: 123"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 66.03025058799193,
            "unit": "iter/sec",
            "range": "stddev: 0.00043878219611034744",
            "extra": "mean: 15.144573753622208 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 42.02244889647428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003432487992853557",
            "extra": "mean: 23.796804476187987 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 224.25049524015856,
            "unit": "iter/sec",
            "range": "stddev: 0.0002610529291376323",
            "extra": "mean: 4.459298959090641 msec\nrounds: 220"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 118.45139306326664,
            "unit": "iter/sec",
            "range": "stddev: 0.00039924841807281383",
            "extra": "mean: 8.44228146363703 msec\nrounds: 110"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 62.07461430713908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005681929983698124",
            "extra": "mean: 16.109645000001102 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 38.548342694520606,
            "unit": "iter/sec",
            "range": "stddev: 0.00040749148446319743",
            "extra": "mean: 25.94145247500208 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 235.8488730171664,
            "unit": "iter/sec",
            "range": "stddev: 0.00013619658532870735",
            "extra": "mean: 4.240003300449159 msec\nrounds: 223"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 113.13407380637643,
            "unit": "iter/sec",
            "range": "stddev: 0.0004555254076239377",
            "extra": "mean: 8.839070019801923 msec\nrounds: 101"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 61.63633755528217,
            "unit": "iter/sec",
            "range": "stddev: 0.0006201803824586878",
            "extra": "mean: 16.22419565573784 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 35.926469140250006,
            "unit": "iter/sec",
            "range": "stddev: 0.0011292145724307663",
            "extra": "mean: 27.83463067567795 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 69.96411750304468,
            "unit": "iter/sec",
            "range": "stddev: 0.000596193793548807",
            "extra": "mean: 14.293041000002356 msec\nrounds: 70"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 20.42949114237244,
            "unit": "iter/sec",
            "range": "stddev: 0.0008702716639175326",
            "extra": "mean: 48.948845227276266 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 11.599804135759825,
            "unit": "iter/sec",
            "range": "stddev: 0.004562678803433084",
            "extra": "mean: 86.20835216667189 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 3.2530780500893126,
            "unit": "iter/sec",
            "range": "stddev: 0.07266654004934878",
            "extra": "mean: 307.4011703999986 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 10.705445293118581,
            "unit": "iter/sec",
            "range": "stddev: 0.0031052525053454284",
            "extra": "mean: 93.41040681818217 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 2.709343100539757,
            "unit": "iter/sec",
            "range": "stddev: 0.06312981817845169",
            "extra": "mean: 369.09315760000254 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}