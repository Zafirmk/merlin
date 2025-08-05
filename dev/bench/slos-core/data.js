window.BENCHMARK_DATA = {
  "lastUpdate": 1754426846909,
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
        "date": 1754426846493,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 22808.8372807449,
            "unit": "iter/sec",
            "range": "stddev: 0.000027751680876085936",
            "extra": "mean: 43.8426557080222 usec\nrounds: 3285"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 8630.079291400478,
            "unit": "iter/sec",
            "range": "stddev: 0.00004574253419216806",
            "extra": "mean: 115.87379052200126 usec\nrounds: 5571"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 2317.102985358945,
            "unit": "iter/sec",
            "range": "stddev: 0.00005246216012553973",
            "extra": "mean: 431.5733941558445 usec\nrounds: 1403"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 418.20303426958054,
            "unit": "iter/sec",
            "range": "stddev: 0.005494643927690951",
            "extra": "mean: 2.3911830332521773 msec\nrounds: 421"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 22963.091374995078,
            "unit": "iter/sec",
            "range": "stddev: 0.000028237008319969646",
            "extra": "mean: 43.54814356959437 usec\nrounds: 13833"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 8834.602973863153,
            "unit": "iter/sec",
            "range": "stddev: 0.000042431356879028175",
            "extra": "mean: 113.1912778603026 usec\nrounds: 6712"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 2114.3623746779713,
            "unit": "iter/sec",
            "range": "stddev: 0.0017990073885029334",
            "extra": "mean: 472.95582440181545 usec\nrounds: 1549"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 412.1609824783797,
            "unit": "iter/sec",
            "range": "stddev: 0.005781683688631209",
            "extra": "mean: 2.426236452530914 msec\nrounds: 316"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 6170.056434000761,
            "unit": "iter/sec",
            "range": "stddev: 0.000009042618307448709",
            "extra": "mean: 162.07307189110819 usec\nrounds: 1238"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 4669.748927805453,
            "unit": "iter/sec",
            "range": "stddev: 0.000014848155188727655",
            "extra": "mean: 214.14427530474316 usec\nrounds: 2539"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 3313.7744254509485,
            "unit": "iter/sec",
            "range": "stddev: 0.00002122835903231301",
            "extra": "mean: 301.770691547273 usec\nrounds: 1822"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 1714.7096641940934,
            "unit": "iter/sec",
            "range": "stddev: 0.000021540991638269536",
            "extra": "mean: 583.1891082680728 usec\nrounds: 1524"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 6148.983425864227,
            "unit": "iter/sec",
            "range": "stddev: 0.000015389362560570617",
            "extra": "mean: 162.62850795689891 usec\nrounds: 4587"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 4696.647994040226,
            "unit": "iter/sec",
            "range": "stddev: 0.000016190106830836735",
            "extra": "mean: 212.91780888602722 usec\nrounds: 3961"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3251.149693415116,
            "unit": "iter/sec",
            "range": "stddev: 0.00001637725750815379",
            "extra": "mean: 307.5834994695574 usec\nrounds: 2827"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1636.890710936233,
            "unit": "iter/sec",
            "range": "stddev: 0.00003456105698368343",
            "extra": "mean: 610.9143349149082 usec\nrounds: 1475"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 6330.112629061971,
            "unit": "iter/sec",
            "range": "stddev: 0.000012984415220303102",
            "extra": "mean: 157.9750722615792 usec\nrounds: 4373"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 4921.594639129422,
            "unit": "iter/sec",
            "range": "stddev: 0.000015643813584795246",
            "extra": "mean: 203.18617710801342 usec\nrounds: 4150"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 6292.1380203196195,
            "unit": "iter/sec",
            "range": "stddev: 0.000009437599585338749",
            "extra": "mean: 158.92849088348567 usec\nrounds: 4278"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 4897.626380944267,
            "unit": "iter/sec",
            "range": "stddev: 0.00001119183812616873",
            "extra": "mean: 204.1805401675411 usec\nrounds: 4058"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 6234.044126301126,
            "unit": "iter/sec",
            "range": "stddev: 0.000009247595065012551",
            "extra": "mean: 160.40951583596416 usec\nrounds: 4957"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 4697.187662344525,
            "unit": "iter/sec",
            "range": "stddev: 0.000011161925281303649",
            "extra": "mean: 212.89334637757824 usec\nrounds: 3961"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 6197.145176086521,
            "unit": "iter/sec",
            "range": "stddev: 0.000009898173022778133",
            "extra": "mean: 161.36462380432678 usec\nrounds: 4184"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 4674.572778342584,
            "unit": "iter/sec",
            "range": "stddev: 0.000010975077725148926",
            "extra": "mean: 213.92329254836417 usec\nrounds: 3449"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 6078.292684560669,
            "unit": "iter/sec",
            "range": "stddev: 0.000009402310446041288",
            "extra": "mean: 164.51988278551917 usec\nrounds: 4078"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 4449.838585279821,
            "unit": "iter/sec",
            "range": "stddev: 0.000016164360057521395",
            "extra": "mean: 224.72725264867483 usec\nrounds: 3681"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 6070.8888720977875,
            "unit": "iter/sec",
            "range": "stddev: 0.000010141170296654287",
            "extra": "mean: 164.72052463290294 usec\nrounds: 4689"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 4417.70314625574,
            "unit": "iter/sec",
            "range": "stddev: 0.000010649141299796102",
            "extra": "mean: 226.36197292875102 usec\nrounds: 3620"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 5804.504960942579,
            "unit": "iter/sec",
            "range": "stddev: 0.000020025545413081285",
            "extra": "mean: 172.2799802444501 usec\nrounds: 4505"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 3945.7861121528067,
            "unit": "iter/sec",
            "range": "stddev: 0.000013490843449629118",
            "extra": "mean: 253.4349231247113 usec\nrounds: 3200"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 5791.475441279336,
            "unit": "iter/sec",
            "range": "stddev: 0.000010098321820635149",
            "extra": "mean: 172.6675715263156 usec\nrounds: 4383"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 3907.757691223539,
            "unit": "iter/sec",
            "range": "stddev: 0.000012275788011521963",
            "extra": "mean: 255.9012300701006 usec\nrounds: 2860"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 5359.870596826548,
            "unit": "iter/sec",
            "range": "stddev: 0.000016067427226615136",
            "extra": "mean: 186.57166846380142 usec\nrounds: 4081"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 3245.321680386834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003427655869410725",
            "extra": "mean: 308.1358640172775 usec\nrounds: 2743"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 5386.064869133743,
            "unit": "iter/sec",
            "range": "stddev: 0.000010144872512741405",
            "extra": "mean: 185.66430674289913 usec\nrounds: 3811"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3173.5280312484706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001666441884091153",
            "extra": "mean: 315.1067172413153 usec\nrounds: 2610"
          }
        ]
      }
    ]
  }
}