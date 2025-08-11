window.BENCHMARK_DATA = {
  "lastUpdate": 1754919962107,
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
      }
    ]
  }
}