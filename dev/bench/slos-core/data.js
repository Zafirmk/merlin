window.BENCHMARK_DATA = {
  "lastUpdate": 1754925824939,
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
        "date": 1754919961518,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 22796.104321023387,
            "unit": "iter/sec",
            "range": "stddev: 0.00002663250740965964",
            "extra": "mean: 43.86714439965797 usec\nrounds: 3241"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 8950.120837944083,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034946631149267",
            "extra": "mean: 111.73033505430394 usec\nrounds: 6972"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 2398.641390244637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000520784322794186",
            "extra": "mean: 416.90267001438264 usec\nrounds: 2091"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 389.052007525168,
            "unit": "iter/sec",
            "range": "stddev: 0.007218192073892503",
            "extra": "mean: 2.5703504432766855 msec\nrounds: 476"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 22726.50313469908,
            "unit": "iter/sec",
            "range": "stddev: 0.00002622515818240185",
            "extra": "mean: 44.00148998167645 usec\nrounds: 10331"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 8935.65314090393,
            "unit": "iter/sec",
            "range": "stddev: 0.000041091812486769836",
            "extra": "mean: 111.91123740271324 usec\nrounds: 6946"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 2312.312504139986,
            "unit": "iter/sec",
            "range": "stddev: 0.00008357674688448988",
            "extra": "mean: 432.46749659035737 usec\nrounds: 1613"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 413.28000996243674,
            "unit": "iter/sec",
            "range": "stddev: 0.006320242904119892",
            "extra": "mean: 2.4196669954854353 msec\nrounds: 443"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 6148.88660192925,
            "unit": "iter/sec",
            "range": "stddev: 0.000011882411258050507",
            "extra": "mean: 162.63106879971474 usec\nrounds: 1250"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 4718.7027868804735,
            "unit": "iter/sec",
            "range": "stddev: 0.000012779111236967707",
            "extra": "mean: 211.9226501784187 usec\nrounds: 3922"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 3322.942303011237,
            "unit": "iter/sec",
            "range": "stddev: 0.000013742757747569647",
            "extra": "mean: 300.93811713005186 usec\nrounds: 2732"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 1710.9396243964975,
            "unit": "iter/sec",
            "range": "stddev: 0.000014497664820776454",
            "extra": "mean: 584.474160128667 usec\nrounds: 1555"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 6175.019994033777,
            "unit": "iter/sec",
            "range": "stddev: 0.000016434844945561284",
            "extra": "mean: 161.9427954834457 usec\nrounds: 3897"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 4735.005010196334,
            "unit": "iter/sec",
            "range": "stddev: 0.000011605693512076684",
            "extra": "mean: 211.1930183487885 usec\nrounds: 3924"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3260.596027629273,
            "unit": "iter/sec",
            "range": "stddev: 0.00001548370700992725",
            "extra": "mean: 306.692393515269 usec\nrounds: 2714"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1647.905223290722,
            "unit": "iter/sec",
            "range": "stddev: 0.000032262407621768584",
            "extra": "mean: 606.8310154409778 usec\nrounds: 1360"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 6415.256587986884,
            "unit": "iter/sec",
            "range": "stddev: 0.000011123777546023998",
            "extra": "mean: 155.8784105179184 usec\nrounds: 5001"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 4952.406394060418,
            "unit": "iter/sec",
            "range": "stddev: 0.000010885980665366316",
            "extra": "mean: 201.92203959661558 usec\nrounds: 4167"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 6317.572629951261,
            "unit": "iter/sec",
            "range": "stddev: 0.000010391050615252433",
            "extra": "mean: 158.28864321385964 usec\nrounds: 4406"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 4813.054475578221,
            "unit": "iter/sec",
            "range": "stddev: 0.00002505342397639033",
            "extra": "mean: 207.76826962463664 usec\nrounds: 4102"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 6236.061519160879,
            "unit": "iter/sec",
            "range": "stddev: 0.00000996382080750463",
            "extra": "mean: 160.3576226641458 usec\nrounds: 5030"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 4752.651049217375,
            "unit": "iter/sec",
            "range": "stddev: 0.00001166319596978498",
            "extra": "mean: 210.40888330412375 usec\nrounds: 3959"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 6182.055505732444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001199235800298107",
            "extra": "mean: 161.75849587127266 usec\nrounds: 4965"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 4772.285876558438,
            "unit": "iter/sec",
            "range": "stddev: 0.000010706160701869305",
            "extra": "mean: 209.5431887079564 usec\nrounds: 3932"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 6059.504254215373,
            "unit": "iter/sec",
            "range": "stddev: 0.000010225016698034148",
            "extra": "mean: 165.03000213331595 usec\nrounds: 4218"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 4496.821375138612,
            "unit": "iter/sec",
            "range": "stddev: 0.000012265532485741776",
            "extra": "mean: 222.37930230643764 usec\nrounds: 3642"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 6094.676323361392,
            "unit": "iter/sec",
            "range": "stddev: 0.000009653452860163703",
            "extra": "mean: 164.0776223286737 usec\nrounds: 4165"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 4381.023647502493,
            "unit": "iter/sec",
            "range": "stddev: 0.000023882138430963798",
            "extra": "mean: 228.25715642280858 usec\nrounds: 3612"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 5857.657720634838,
            "unit": "iter/sec",
            "range": "stddev: 0.000010782229826685335",
            "extra": "mean: 170.71670071764152 usec\nrounds: 4180"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 3988.604896452212,
            "unit": "iter/sec",
            "range": "stddev: 0.000016481085984836913",
            "extra": "mean: 250.71422864909007 usec\nrounds: 3302"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 5828.043855199511,
            "unit": "iter/sec",
            "range": "stddev: 0.000013696735761427608",
            "extra": "mean: 171.58415839782094 usec\nrounds: 4495"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 3777.282191022041,
            "unit": "iter/sec",
            "range": "stddev: 0.00004714810908093586",
            "extra": "mean: 264.74061227853997 usec\nrounds: 3046"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 5456.189447473324,
            "unit": "iter/sec",
            "range": "stddev: 0.000010314553854975945",
            "extra": "mean: 183.27809355356683 usec\nrounds: 4297"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 3294.6581100124313,
            "unit": "iter/sec",
            "range": "stddev: 0.000014566875291365848",
            "extra": "mean: 303.5216300474427 usec\nrounds: 2749"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 5421.422559435562,
            "unit": "iter/sec",
            "range": "stddev: 0.0000107521912758078",
            "extra": "mean: 184.45343247771345 usec\nrounds: 4169"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3209.0105052848794,
            "unit": "iter/sec",
            "range": "stddev: 0.00001299546428765758",
            "extra": "mean: 311.62253858412504 usec\nrounds: 2514"
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
        "date": 1754920457391,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 23084.273704151357,
            "unit": "iter/sec",
            "range": "stddev: 0.00002671237792309871",
            "extra": "mean: 43.31953488405248 usec\nrounds: 4257"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 8930.90680787193,
            "unit": "iter/sec",
            "range": "stddev: 0.00004115963522066057",
            "extra": "mean: 111.97071266252318 usec\nrounds: 7218"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 2363.062295631839,
            "unit": "iter/sec",
            "range": "stddev: 0.00005434700026716164",
            "extra": "mean: 423.17970281550225 usec\nrounds: 1669"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 412.0479447269932,
            "unit": "iter/sec",
            "range": "stddev: 0.005702470060320068",
            "extra": "mean: 2.42690204573781 msec\nrounds: 481"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 22784.242518373718,
            "unit": "iter/sec",
            "range": "stddev: 0.000027428989796459142",
            "extra": "mean: 43.88998226267904 usec\nrounds: 13700"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 8864.253132173555,
            "unit": "iter/sec",
            "range": "stddev: 0.00004228814289236573",
            "extra": "mean: 112.81266284808763 usec\nrounds: 7071"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 2337.431497900036,
            "unit": "iter/sec",
            "range": "stddev: 0.0000638990643892941",
            "extra": "mean: 427.8200242010971 usec\nrounds: 1157"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 445.34422627623917,
            "unit": "iter/sec",
            "range": "stddev: 0.005078779710421698",
            "extra": "mean: 2.2454540577780335 msec\nrounds: 450"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 6012.140941697054,
            "unit": "iter/sec",
            "range": "stddev: 0.000009806620396694569",
            "extra": "mean: 166.3300993269344 usec\nrounds: 1188"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 4597.904973527717,
            "unit": "iter/sec",
            "range": "stddev: 0.000012402959469362951",
            "extra": "mean: 217.490358273489 usec\nrounds: 2085"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 3241.702307118809,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799792787048378",
            "extra": "mean: 308.47989891113394 usec\nrounds: 2572"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 1677.8901056975,
            "unit": "iter/sec",
            "range": "stddev: 0.000051469419678296135",
            "extra": "mean: 595.9865885163554 usec\nrounds: 1463"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 5998.0276378521785,
            "unit": "iter/sec",
            "range": "stddev: 0.00000921222772266839",
            "extra": "mean: 166.72147252027136 usec\nrounds: 4476"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 4582.425747420448,
            "unit": "iter/sec",
            "range": "stddev: 0.000011286214307670537",
            "extra": "mean: 218.22503082846958 usec\nrounds: 3406"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3178.9983468810533,
            "unit": "iter/sec",
            "range": "stddev: 0.000015198805143052985",
            "extra": "mean: 314.5644919825485 usec\nrounds: 2744"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1630.4448535951026,
            "unit": "iter/sec",
            "range": "stddev: 0.000017615850364133428",
            "extra": "mean: 613.3295448754476 usec\nrounds: 1415"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 6164.781009166215,
            "unit": "iter/sec",
            "range": "stddev: 0.000014897949051838072",
            "extra": "mean: 162.21176364791094 usec\nrounds: 4781"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 4787.040926234927,
            "unit": "iter/sec",
            "range": "stddev: 0.000023688801370771124",
            "extra": "mean: 208.89731577593045 usec\nrounds: 4006"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 6110.319415158094,
            "unit": "iter/sec",
            "range": "stddev: 0.000009821302616701633",
            "extra": "mean: 163.6575655143761 usec\nrounds: 4976"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 4752.856189148951,
            "unit": "iter/sec",
            "range": "stddev: 0.00001336387670005797",
            "extra": "mean: 210.39980176195076 usec\nrounds: 3859"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 6047.871411227003,
            "unit": "iter/sec",
            "range": "stddev: 0.000010762655583066859",
            "extra": "mean: 165.34743085701922 usec\nrounds: 4563"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 4600.950313257181,
            "unit": "iter/sec",
            "range": "stddev: 0.000011988890014040712",
            "extra": "mean: 217.3464027895714 usec\nrounds: 3585"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 5998.948697902369,
            "unit": "iter/sec",
            "range": "stddev: 0.000010608505096564462",
            "extra": "mean: 166.69587462044248 usec\nrounds: 4283"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 4588.342955271761,
            "unit": "iter/sec",
            "range": "stddev: 0.000011148301637910818",
            "extra": "mean: 217.94360398693684 usec\nrounds: 3813"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 5899.829168748717,
            "unit": "iter/sec",
            "range": "stddev: 0.00001010961499605136",
            "extra": "mean: 169.49643309961937 usec\nrounds: 4701"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 4344.606365083623,
            "unit": "iter/sec",
            "range": "stddev: 0.000012555678590969694",
            "extra": "mean: 230.17044951108073 usec\nrounds: 3377"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 5890.482046814161,
            "unit": "iter/sec",
            "range": "stddev: 0.000009769580821903108",
            "extra": "mean: 169.76539306165023 usec\nrounds: 4727"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 4313.599585778279,
            "unit": "iter/sec",
            "range": "stddev: 0.000012082930671232453",
            "extra": "mean: 231.82494807745942 usec\nrounds: 3563"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 5668.397373346325,
            "unit": "iter/sec",
            "range": "stddev: 0.00000958289196351491",
            "extra": "mean: 176.41670725170988 usec\nrounds: 4468"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 3894.4764679372047,
            "unit": "iter/sec",
            "range": "stddev: 0.000019258032083394366",
            "extra": "mean: 256.7739228193801 usec\nrounds: 2993"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 5681.806021673197,
            "unit": "iter/sec",
            "range": "stddev: 0.000010658842920491173",
            "extra": "mean: 176.00037667345717 usec\nrounds: 4407"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 3825.203767031218,
            "unit": "iter/sec",
            "range": "stddev: 0.000013981162739435704",
            "extra": "mean: 261.4239818068857 usec\nrounds: 3188"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 5305.577911853418,
            "unit": "iter/sec",
            "range": "stddev: 0.000011109802825685054",
            "extra": "mean: 188.48088118089026 usec\nrounds: 4166"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 3231.6573643613415,
            "unit": "iter/sec",
            "range": "stddev: 0.000012876436564974612",
            "extra": "mean: 309.43874527911953 usec\nrounds: 2489"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 5253.794935784685,
            "unit": "iter/sec",
            "range": "stddev: 0.000011474670903780662",
            "extra": "mean: 190.33860518399624 usec\nrounds: 4012"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3148.360070670816,
            "unit": "iter/sec",
            "range": "stddev: 0.000016000559932871603",
            "extra": "mean: 317.62567735364894 usec\nrounds: 2464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "94611630+CassNot@users.noreply.github.com",
            "name": "Cassandre Notton",
            "username": "CassNot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc51fcb24ff74f52b112647a567eedf9caafd71e",
          "message": "Merge branch 'main' into main",
          "timestamp": "2025-08-11T10:07:57-04:00",
          "tree_id": "16140e62e4ca62d437d864f60c4bf533ec0b9ea2",
          "url": "https://github.com/Zafirmk/merlin/commit/dc51fcb24ff74f52b112647a567eedf9caafd71e"
        },
        "date": 1754921517603,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 22766.667135152114,
            "unit": "iter/sec",
            "range": "stddev: 0.00002723411190330264",
            "extra": "mean: 43.92386439629467 usec\nrounds: 3289"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 8982.915701516775,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171607720959881",
            "extra": "mean: 111.32242951263018 usec\nrounds: 6831"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 2376.4631954188862,
            "unit": "iter/sec",
            "range": "stddev: 0.000053344902032870445",
            "extra": "mean: 420.79338822823024 usec\nrounds: 1597"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 479.89686129094935,
            "unit": "iter/sec",
            "range": "stddev: 0.003977415653762158",
            "extra": "mean: 2.083781080188656 msec\nrounds: 424"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 22998.24916419539,
            "unit": "iter/sec",
            "range": "stddev: 0.00002805491425342627",
            "extra": "mean: 43.481570830045655 usec\nrounds: 13603"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 8741.298732650981,
            "unit": "iter/sec",
            "range": "stddev: 0.000045737876885383505",
            "extra": "mean: 114.39947662064732 usec\nrounds: 6865"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1954.158107796659,
            "unit": "iter/sec",
            "range": "stddev: 0.0028894628902739745",
            "extra": "mean: 511.72932016617335 usec\nrounds: 962"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 475.14891161857,
            "unit": "iter/sec",
            "range": "stddev: 0.0041091709583461825",
            "extra": "mean: 2.1046033686440575 msec\nrounds: 472"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 6221.080605031625,
            "unit": "iter/sec",
            "range": "stddev: 0.000011018023568024728",
            "extra": "mean: 160.74377804897713 usec\nrounds: 1230"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 4757.815926596373,
            "unit": "iter/sec",
            "range": "stddev: 0.00002511844682804822",
            "extra": "mean: 210.18047260087587 usec\nrounds: 3741"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 3350.2195640577265,
            "unit": "iter/sec",
            "range": "stddev: 0.000013658319426757292",
            "extra": "mean: 298.48789933899667 usec\nrounds: 2722"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 1724.194845781906,
            "unit": "iter/sec",
            "range": "stddev: 0.000022808807078518406",
            "extra": "mean: 579.9808545109701 usec\nrounds: 1574"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 6272.054517098282,
            "unit": "iter/sec",
            "range": "stddev: 0.000009256276783264638",
            "extra": "mean: 159.4373896581885 usec\nrounds: 4622"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 4796.224720524665,
            "unit": "iter/sec",
            "range": "stddev: 0.000012294447396354682",
            "extra": "mean: 208.4973199276219 usec\nrounds: 3879"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3275.9096087497423,
            "unit": "iter/sec",
            "range": "stddev: 0.000023154010497079123",
            "extra": "mean: 305.25872793591884 usec\nrounds: 2742"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1655.6797543595726,
            "unit": "iter/sec",
            "range": "stddev: 0.000017884496310482834",
            "extra": "mean: 603.9815352980544 usec\nrounds: 1459"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 6416.235693616408,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954104564065471",
            "extra": "mean: 155.85462376248307 usec\nrounds: 4444"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 4992.723679430697,
            "unit": "iter/sec",
            "range": "stddev: 0.000011118517993057757",
            "extra": "mean: 200.29147699878845 usec\nrounds: 4065"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 6359.2512074095175,
            "unit": "iter/sec",
            "range": "stddev: 0.00000933664348592901",
            "extra": "mean: 157.25121832501983 usec\nrounds: 5075"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 4872.297776041873,
            "unit": "iter/sec",
            "range": "stddev: 0.000011655410766291659",
            "extra": "mean: 205.2419712352585 usec\nrounds: 3546"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 6257.014989758243,
            "unit": "iter/sec",
            "range": "stddev: 0.000009858159520688072",
            "extra": "mean: 159.8206176007 usec\nrounds: 4409"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 4753.354537236337,
            "unit": "iter/sec",
            "range": "stddev: 0.000011979431759590223",
            "extra": "mean: 210.37774316354975 usec\nrounds: 3730"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 6207.270913744266,
            "unit": "iter/sec",
            "range": "stddev: 0.000010615232590375607",
            "extra": "mean: 161.10139446077335 usec\nrounds: 4477"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 4753.003323055958,
            "unit": "iter/sec",
            "range": "stddev: 0.000011821732492204894",
            "extra": "mean: 210.3932886285143 usec\nrounds: 3922"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 6090.727868526393,
            "unit": "iter/sec",
            "range": "stddev: 0.000009838546143698257",
            "extra": "mean: 164.1839894321108 usec\nrounds: 4826"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 4503.046713686087,
            "unit": "iter/sec",
            "range": "stddev: 0.000010755002814078961",
            "extra": "mean: 222.07186902163485 usec\nrounds: 3680"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 6040.739391198815,
            "unit": "iter/sec",
            "range": "stddev: 0.000012605071774027516",
            "extra": "mean: 165.54264887787934 usec\nrounds: 4722"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 4464.60321621716,
            "unit": "iter/sec",
            "range": "stddev: 0.000012090691138592093",
            "extra": "mean: 223.98407015602518 usec\nrounds: 3649"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 5862.480532776222,
            "unit": "iter/sec",
            "range": "stddev: 0.00001119715035081457",
            "extra": "mean: 170.57625938528147 usec\nrounds: 4129"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 4014.5397043901175,
            "unit": "iter/sec",
            "range": "stddev: 0.000015329050922252504",
            "extra": "mean: 249.09455968425115 usec\nrounds: 3041"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 5860.367743623925,
            "unit": "iter/sec",
            "range": "stddev: 0.000010156632423973373",
            "extra": "mean: 170.63775581114325 usec\nrounds: 4517"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 3935.542307277805,
            "unit": "iter/sec",
            "range": "stddev: 0.000013519045787327484",
            "extra": "mean: 254.09458771431554 usec\nrounds: 3272"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 5443.874382539199,
            "unit": "iter/sec",
            "range": "stddev: 0.000010908182880223658",
            "extra": "mean: 183.6927029777582 usec\nrounds: 4131"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 3286.797579405201,
            "unit": "iter/sec",
            "range": "stddev: 0.000014441358072952206",
            "extra": "mean: 304.2475162650467 usec\nrounds: 2613"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 5452.497645361552,
            "unit": "iter/sec",
            "range": "stddev: 0.000011289329558437634",
            "extra": "mean: 183.40218832569354 usec\nrounds: 4163"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3196.7294593511524,
            "unit": "iter/sec",
            "range": "stddev: 0.000023998606870551814",
            "extra": "mean: 312.8197154985309 usec\nrounds: 2710"
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
          "id": "1a053c5e36fe9c845fc55379b7bfbef10baa4677",
          "message": "Apply suggestion from @Copilot\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-08-11T11:19:54-04:00",
          "tree_id": "19b526421a53d36089133fd3ae47565d9c4dcebc",
          "url": "https://github.com/Zafirmk/merlin/commit/1a053c5e36fe9c845fc55379b7bfbef10baa4677"
        },
        "date": 1754925824250,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 22774.640210881516,
            "unit": "iter/sec",
            "range": "stddev: 0.00002775328867537491",
            "extra": "mean: 43.90848727973358 usec\nrounds: 3066"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 9006.919955713318,
            "unit": "iter/sec",
            "range": "stddev: 0.000041266123506253524",
            "extra": "mean: 111.02574519557872 usec\nrounds: 6036"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 2383.0636739126658,
            "unit": "iter/sec",
            "range": "stddev: 0.00005277207415782764",
            "extra": "mean: 419.6278978807714 usec\nrounds: 1557"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 386.7683842931985,
            "unit": "iter/sec",
            "range": "stddev: 0.007294356507404884",
            "extra": "mean: 2.5855267405774494 msec\nrounds: 451"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 22520.951129014302,
            "unit": "iter/sec",
            "range": "stddev: 0.000028378267826222166",
            "extra": "mean: 44.40309799845332 usec\nrounds: 13939"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 9029.540624235722,
            "unit": "iter/sec",
            "range": "stddev: 0.00004186328563436936",
            "extra": "mean: 110.74760517893365 usec\nrounds: 3128"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 2381.6108056461117,
            "unit": "iter/sec",
            "range": "stddev: 0.00005303117343977231",
            "extra": "mean: 419.88388599400406 usec\nrounds: 1228"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 480.82573763732626,
            "unit": "iter/sec",
            "range": "stddev: 0.0038181884073577783",
            "extra": "mean: 2.0797555574162563 msec\nrounds: 418"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 6024.3642460429,
            "unit": "iter/sec",
            "range": "stddev: 0.000010873042635682219",
            "extra": "mean: 165.99261916422955 usec\nrounds: 1221"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 4595.20823979202,
            "unit": "iter/sec",
            "range": "stddev: 0.000014753247951473763",
            "extra": "mean: 217.61799418371086 usec\nrounds: 2407"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 3194.675815506668,
            "unit": "iter/sec",
            "range": "stddev: 0.000014413359036618496",
            "extra": "mean: 313.0208064136243 usec\nrounds: 2557"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 1623.30137358133,
            "unit": "iter/sec",
            "range": "stddev: 0.00006365756723691467",
            "extra": "mean: 616.028555309972 usec\nrounds: 1356"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 5984.719920600288,
            "unit": "iter/sec",
            "range": "stddev: 0.00001012227681651976",
            "extra": "mean: 167.09219700622123 usec\nrounds: 4543"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 4496.841779970633,
            "unit": "iter/sec",
            "range": "stddev: 0.00003208770658536947",
            "extra": "mean: 222.3782932399571 usec\nrounds: 3284"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3124.299286654434,
            "unit": "iter/sec",
            "range": "stddev: 0.000014408542720951311",
            "extra": "mean: 320.07176913925593 usec\nrounds: 2508"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1598.2701621960052,
            "unit": "iter/sec",
            "range": "stddev: 0.000024296717528912374",
            "extra": "mean: 625.6764492343467 usec\nrounds: 1044"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 6149.8921329944,
            "unit": "iter/sec",
            "range": "stddev: 0.000011007229073893665",
            "extra": "mean: 162.60447799319323 usec\nrounds: 4385"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 4707.923284796471,
            "unit": "iter/sec",
            "range": "stddev: 0.000017155491656292065",
            "extra": "mean: 212.407879123551 usec\nrounds: 4062"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 6140.435533698244,
            "unit": "iter/sec",
            "range": "stddev: 0.000011820903568716524",
            "extra": "mean: 162.85489759025657 usec\nrounds: 4980"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 4713.336738645094,
            "unit": "iter/sec",
            "range": "stddev: 0.000012205469611811387",
            "extra": "mean: 212.1639202650015 usec\nrounds: 4076"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 5974.839801164877,
            "unit": "iter/sec",
            "range": "stddev: 0.000013388517759291915",
            "extra": "mean: 167.3685041404853 usec\nrounds: 4106"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 4524.093971777376,
            "unit": "iter/sec",
            "range": "stddev: 0.000011474882177056178",
            "extra": "mean: 221.03873311171097 usec\nrounds: 3908"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 5967.3641839728425,
            "unit": "iter/sec",
            "range": "stddev: 0.000010120307608148051",
            "extra": "mean: 167.57817508202396 usec\nrounds: 4872"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 4506.453729240069,
            "unit": "iter/sec",
            "range": "stddev: 0.000013192926218384569",
            "extra": "mean: 221.9039759604126 usec\nrounds: 3827"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 5818.999963585412,
            "unit": "iter/sec",
            "range": "stddev: 0.00001070121290072461",
            "extra": "mean: 171.8508345519638 usec\nrounds: 4787"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 4211.153591397146,
            "unit": "iter/sec",
            "range": "stddev: 0.00001297326539946067",
            "extra": "mean: 237.4646230056471 usec\nrounds: 3573"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 5850.775668303448,
            "unit": "iter/sec",
            "range": "stddev: 0.000013553258101488938",
            "extra": "mean: 170.9175084967786 usec\nrounds: 4649"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 4165.983909845133,
            "unit": "iter/sec",
            "range": "stddev: 0.000013379733032022948",
            "extra": "mean: 240.03933323812913 usec\nrounds: 3508"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 5569.032146038754,
            "unit": "iter/sec",
            "range": "stddev: 0.000010255899401625697",
            "extra": "mean: 179.56441510421138 usec\nrounds: 3787"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 3696.8378516960656,
            "unit": "iter/sec",
            "range": "stddev: 0.000016404758936443873",
            "extra": "mean: 270.5014501897106 usec\nrounds: 2901"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 5533.216888306411,
            "unit": "iter/sec",
            "range": "stddev: 0.000022055492633130877",
            "extra": "mean: 180.72669482979128 usec\nrounds: 3172"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 3681.046923917571,
            "unit": "iter/sec",
            "range": "stddev: 0.000013757407590559218",
            "extra": "mean: 271.6618453034403 usec\nrounds: 3077"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 5152.354497791696,
            "unit": "iter/sec",
            "range": "stddev: 0.000011077757584752868",
            "extra": "mean: 194.08602424941859 usec\nrounds: 4165"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 3049.0579594776705,
            "unit": "iter/sec",
            "range": "stddev: 0.000017296284544853606",
            "extra": "mean: 327.97015120411436 usec\nrounds: 2533"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 5198.777332082828,
            "unit": "iter/sec",
            "range": "stddev: 0.000012038590529125815",
            "extra": "mean: 192.35291995076886 usec\nrounds: 4110"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3063.866638489932,
            "unit": "iter/sec",
            "range": "stddev: 0.000016234576865368324",
            "extra": "mean: 326.3849631826219 usec\nrounds: 2526"
          }
        ]
      }
    ]
  }
}