window.BENCHMARK_DATA = {
  "lastUpdate": 1754920495966,
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
        "date": 1754919992066,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 49.40255716360533,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234822523082528",
            "extra": "mean: 20.241867170728078 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 18.35074250535976,
            "unit": "iter/sec",
            "range": "stddev: 0.0013352925961153071",
            "extra": "mean: 54.49370779999375 msec\nrounds: 15"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 8.076818745135029,
            "unit": "iter/sec",
            "range": "stddev: 0.030431830616917132",
            "extra": "mean: 123.8111231111058 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 43.3164819559344,
            "unit": "iter/sec",
            "range": "stddev: 0.0004403046889449869",
            "extra": "mean: 23.085900674419822 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 15.946822308000279,
            "unit": "iter/sec",
            "range": "stddev: 0.0007294040425551329",
            "extra": "mean: 62.70841805883265 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 7.559628657017102,
            "unit": "iter/sec",
            "range": "stddev: 0.0045453537812055024",
            "extra": "mean: 132.2816298750027 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 37.419482787926704,
            "unit": "iter/sec",
            "range": "stddev: 0.0003334985862111475",
            "extra": "mean: 26.724046552632934 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 11.895149905478899,
            "unit": "iter/sec",
            "range": "stddev: 0.03613784169811922",
            "extra": "mean: 84.06787707142728 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 6.310657390871876,
            "unit": "iter/sec",
            "range": "stddev: 0.0026111647583702156",
            "extra": "mean: 158.46209642856886 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 29.38289097431992,
            "unit": "iter/sec",
            "range": "stddev: 0.0007388694078585039",
            "extra": "mean: 34.03341083333089 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 10.054791254055596,
            "unit": "iter/sec",
            "range": "stddev: 0.000942986681995638",
            "extra": "mean: 99.45507318181771 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 4.581304099658119,
            "unit": "iter/sec",
            "range": "stddev: 0.0034666998578311643",
            "extra": "mean: 218.27845919999618 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 20.388693964722155,
            "unit": "iter/sec",
            "range": "stddev: 0.0015623491535481592",
            "extra": "mean: 49.0467904285711 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 11.457145068263035,
            "unit": "iter/sec",
            "range": "stddev: 0.002416741497886307",
            "extra": "mean: 87.28177866666442 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 7.379531486865417,
            "unit": "iter/sec",
            "range": "stddev: 0.0024514730051455945",
            "extra": "mean: 135.50995775000985 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 4.390219450843948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005939068950375403",
            "extra": "mean: 227.7790464000077 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 1.6954087980832493,
            "unit": "iter/sec",
            "range": "stddev: 0.007310329863363316",
            "extra": "mean: 589.8282474000098 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 0.812671605412325,
            "unit": "iter/sec",
            "range": "stddev: 0.01006428428361651",
            "extra": "mean: 1.230509339000014 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.33115444762936264,
            "unit": "iter/sec",
            "range": "stddev: 0.01702371338058178",
            "extra": "mean: 3.0197389984000096 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 7.870993541303489,
            "unit": "iter/sec",
            "range": "stddev: 0.0008171811579352645",
            "extra": "mean: 127.04876388888428 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 3.231989965710707,
            "unit": "iter/sec",
            "range": "stddev: 0.003365497483053723",
            "extra": "mean: 309.40690119998635 msec\nrounds: 5"
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
        "date": 1754920495576,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 50.5717268163363,
            "unit": "iter/sec",
            "range": "stddev: 0.00043105398036722586",
            "extra": "mean: 19.773894682927214 msec\nrounds: 41"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 18.68150217062323,
            "unit": "iter/sec",
            "range": "stddev: 0.001130083225941498",
            "extra": "mean: 53.52888599999768 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 8.187458320890673,
            "unit": "iter/sec",
            "range": "stddev: 0.03332940010924364",
            "extra": "mean: 122.1380263333316 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 44.270615470336544,
            "unit": "iter/sec",
            "range": "stddev: 0.00041122170334489423",
            "extra": "mean: 22.588346454547224 msec\nrounds: 44"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 16.353333950392482,
            "unit": "iter/sec",
            "range": "stddev: 0.0006536181338888795",
            "extra": "mean: 61.14961041176561 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 7.588154032575861,
            "unit": "iter/sec",
            "range": "stddev: 0.005078953131764777",
            "extra": "mean: 131.78435700000435 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 37.812873459090284,
            "unit": "iter/sec",
            "range": "stddev: 0.0005462201044960944",
            "extra": "mean: 26.446019794869578 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 11.848260763123736,
            "unit": "iter/sec",
            "range": "stddev: 0.03540318184312065",
            "extra": "mean: 84.40057321428795 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 6.117392084687685,
            "unit": "iter/sec",
            "range": "stddev: 0.01051997366089617",
            "extra": "mean: 163.46835157142843 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 29.864603652762995,
            "unit": "iter/sec",
            "range": "stddev: 0.00035500614378589296",
            "extra": "mean: 33.48445576666752 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 10.41942533779447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008999420598351871",
            "extra": "mean: 95.97458281818015 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 4.641032293600213,
            "unit": "iter/sec",
            "range": "stddev: 0.003430997833338272",
            "extra": "mean: 215.4693044000055 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 21.70382245481535,
            "unit": "iter/sec",
            "range": "stddev: 0.0005297945497537915",
            "extra": "mean: 46.07483322727484 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 11.904687380547738,
            "unit": "iter/sec",
            "range": "stddev: 0.0021750694384248077",
            "extra": "mean: 84.00052584614699 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 7.6086856905847275,
            "unit": "iter/sec",
            "range": "stddev: 0.0011404778464074719",
            "extra": "mean: 131.42874350000255 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 4.332975784548619,
            "unit": "iter/sec",
            "range": "stddev: 0.000459614971407497",
            "extra": "mean: 230.78827340000316 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 1.70588809140824,
            "unit": "iter/sec",
            "range": "stddev: 0.004415591846796104",
            "extra": "mean: 586.204924599997 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 0.8072084465953415,
            "unit": "iter/sec",
            "range": "stddev: 0.007799417102860756",
            "extra": "mean: 1.2388373836000084 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.3295082220679478,
            "unit": "iter/sec",
            "range": "stddev: 0.012318708011101104",
            "extra": "mean: 3.0348256372000035 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 8.00741966082272,
            "unit": "iter/sec",
            "range": "stddev: 0.0013292113377277994",
            "extra": "mean: 124.88417522221577 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 3.257974971317583,
            "unit": "iter/sec",
            "range": "stddev: 0.009147771842049356",
            "extra": "mean: 306.9391289999942 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}