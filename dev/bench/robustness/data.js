window.BENCHMARK_DATA = {
  "lastUpdate": 1754426886115,
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
        "date": 1754426885714,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 47.39873822590267,
            "unit": "iter/sec",
            "range": "stddev: 0.0005328640342113255",
            "extra": "mean: 21.097608025639712 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 18.24916591864909,
            "unit": "iter/sec",
            "range": "stddev: 0.0010396830449060047",
            "extra": "mean: 54.79702494118295 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 7.86774657113792,
            "unit": "iter/sec",
            "range": "stddev: 0.040109361002307435",
            "extra": "mean: 127.10119612500037 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 41.571299889197476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005141106734836257",
            "extra": "mean: 24.055057279068993 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 15.906293919149704,
            "unit": "iter/sec",
            "range": "stddev: 0.0009461419324142161",
            "extra": "mean: 62.86819576470247 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 7.387308231214571,
            "unit": "iter/sec",
            "range": "stddev: 0.004481452386391607",
            "extra": "mean: 135.3673041250083 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 36.101898547300756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005157626164616557",
            "extra": "mean: 27.699374277776517 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 11.601988615985917,
            "unit": "iter/sec",
            "range": "stddev: 0.04103387030897601",
            "extra": "mean: 86.19212042857376 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 6.17325918980961,
            "unit": "iter/sec",
            "range": "stddev: 0.003973433612319212",
            "extra": "mean: 161.98898657142584 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 29.356428931015568,
            "unit": "iter/sec",
            "range": "stddev: 0.0002575722463502172",
            "extra": "mean: 34.06408873333646 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 10.139329074290197,
            "unit": "iter/sec",
            "range": "stddev: 0.001216082161258828",
            "extra": "mean: 98.62585509091043 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 4.562115802957381,
            "unit": "iter/sec",
            "range": "stddev: 0.0027250710691674707",
            "extra": "mean: 219.1965401999994 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 20.132735142932354,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642873797628916",
            "extra": "mean: 49.670349949994375 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 11.310300126419932,
            "unit": "iter/sec",
            "range": "stddev: 0.0013011131205596215",
            "extra": "mean: 88.4149835833341 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 7.333470885413327,
            "unit": "iter/sec",
            "range": "stddev: 0.0017343172189137278",
            "extra": "mean: 136.3610786250007 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 4.193180450661765,
            "unit": "iter/sec",
            "range": "stddev: 0.00329959028297872",
            "extra": "mean: 238.4824626000011 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 1.6775280569251774,
            "unit": "iter/sec",
            "range": "stddev: 0.001953350463315809",
            "extra": "mean: 596.1152159999926 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 0.7822782511016751,
            "unit": "iter/sec",
            "range": "stddev: 0.0064178686768455746",
            "extra": "mean: 1.2783175277999987 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.3208360656048176,
            "unit": "iter/sec",
            "range": "stddev: 0.013044284937966498",
            "extra": "mean: 3.1168565731999935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 7.573723005522551,
            "unit": "iter/sec",
            "range": "stddev: 0.0017003365721312037",
            "extra": "mean: 132.0354598749951 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 3.2176305064691455,
            "unit": "iter/sec",
            "range": "stddev: 0.0024561367270861615",
            "extra": "mean: 310.78770479999775 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}