window.BENCHMARK_DATA = {
  "lastUpdate": 1754925937103,
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
        "date": 1754921556116,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 49.8745530926775,
            "unit": "iter/sec",
            "range": "stddev: 0.00035060791317360104",
            "extra": "mean: 20.050304974999733 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 18.712608795327036,
            "unit": "iter/sec",
            "range": "stddev: 0.0011112430899804183",
            "extra": "mean: 53.43990305882538 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 8.086010462030895,
            "unit": "iter/sec",
            "range": "stddev: 0.03151763559372022",
            "extra": "mean: 123.67038166666413 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 42.82137393587341,
            "unit": "iter/sec",
            "range": "stddev: 0.0004430672390097822",
            "extra": "mean: 23.352823790697073 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 15.936983756272802,
            "unit": "iter/sec",
            "range": "stddev: 0.001081388349633868",
            "extra": "mean: 62.74713052941398 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 7.365904959324732,
            "unit": "iter/sec",
            "range": "stddev: 0.004950005785780884",
            "extra": "mean: 135.76064387500253 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 36.76713505598541,
            "unit": "iter/sec",
            "range": "stddev: 0.00043564322018577943",
            "extra": "mean: 27.19820291891923 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 11.681939459086765,
            "unit": "iter/sec",
            "range": "stddev: 0.03730990713602163",
            "extra": "mean: 85.60222414285435 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 6.162952548786418,
            "unit": "iter/sec",
            "range": "stddev: 0.005645932955702406",
            "extra": "mean: 162.25988957142232 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 29.787140054622153,
            "unit": "iter/sec",
            "range": "stddev: 0.0004726967743283409",
            "extra": "mean: 33.57153449999733 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 10.161893748347605,
            "unit": "iter/sec",
            "range": "stddev: 0.0013068316259460977",
            "extra": "mean: 98.4068545454539 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 4.579046132324734,
            "unit": "iter/sec",
            "range": "stddev: 0.0022625122651755694",
            "extra": "mean: 218.3860941999967 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 20.579293510385522,
            "unit": "iter/sec",
            "range": "stddev: 0.0016832263224482206",
            "extra": "mean: 48.5925330476161 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 11.63356979720833,
            "unit": "iter/sec",
            "range": "stddev: 0.0012531909114541382",
            "extra": "mean: 85.9581381666672 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 7.41135994742879,
            "unit": "iter/sec",
            "range": "stddev: 0.0011485798382932064",
            "extra": "mean: 134.92800337499844 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 4.06512150666469,
            "unit": "iter/sec",
            "range": "stddev: 0.011707599185908588",
            "extra": "mean: 245.9951070000045 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 1.6580158523432833,
            "unit": "iter/sec",
            "range": "stddev: 0.0023175355034162287",
            "extra": "mean: 603.1305422000003 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 0.7837608217565848,
            "unit": "iter/sec",
            "range": "stddev: 0.01946495975556224",
            "extra": "mean: 1.2758994481999935 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.31754284876204847,
            "unit": "iter/sec",
            "range": "stddev: 0.0038784302289325916",
            "extra": "mean: 3.1491812960000005 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 7.9140452067910925,
            "unit": "iter/sec",
            "range": "stddev: 0.0007643883430366844",
            "extra": "mean: 126.35763049999937 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 3.2021853516310634,
            "unit": "iter/sec",
            "range": "stddev: 0.003217920442926114",
            "extra": "mean: 312.28673239999694 msec\nrounds: 5"
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
        "date": 1754925860889,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 48.65726448454778,
            "unit": "iter/sec",
            "range": "stddev: 0.00033745975098508545",
            "extra": "mean: 20.551915743589998 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 18.069874632059815,
            "unit": "iter/sec",
            "range": "stddev: 0.0010537585588628775",
            "extra": "mean: 55.340727058824555 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 7.757156039958537,
            "unit": "iter/sec",
            "range": "stddev: 0.03439555308308042",
            "extra": "mean: 128.91322475000067 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 41.924269466983965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016408466334851917",
            "extra": "mean: 23.852532500000173 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 15.542139142210484,
            "unit": "iter/sec",
            "range": "stddev: 0.0034110006629598476",
            "extra": "mean: 64.34120752941443 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 7.184953593507447,
            "unit": "iter/sec",
            "range": "stddev: 0.004817713503654733",
            "extra": "mean: 139.17974374999886 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 36.7702546159135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003083966618220912",
            "extra": "mean: 27.195895444444872 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 11.563077516615975,
            "unit": "iter/sec",
            "range": "stddev: 0.037247403803410316",
            "extra": "mean: 86.48216692857196 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 6.115020531093886,
            "unit": "iter/sec",
            "range": "stddev: 0.0034516659362700064",
            "extra": "mean: 163.53174857143367 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 29.5794434368582,
            "unit": "iter/sec",
            "range": "stddev: 0.0004852558860005433",
            "extra": "mean: 33.80726220000222 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 10.009202907016595,
            "unit": "iter/sec",
            "range": "stddev: 0.0008679914554229638",
            "extra": "mean: 99.90805554546061 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 4.504115421971943,
            "unit": "iter/sec",
            "range": "stddev: 0.002346638362537403",
            "extra": "mean: 222.01917719999074 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 20.520465975416514,
            "unit": "iter/sec",
            "range": "stddev: 0.0009395586634785976",
            "extra": "mean: 48.73183685000129 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 11.40810039640834,
            "unit": "iter/sec",
            "range": "stddev: 0.0018561354428621086",
            "extra": "mean: 87.65701258334246 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 7.133706177437737,
            "unit": "iter/sec",
            "range": "stddev: 0.0017317492388280904",
            "extra": "mean: 140.17958900000238 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 4.199289857756185,
            "unit": "iter/sec",
            "range": "stddev: 0.00019730793240154402",
            "extra": "mean: 238.13550240000154 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 1.6563451463659584,
            "unit": "iter/sec",
            "range": "stddev: 0.00218605062807167",
            "extra": "mean: 603.7389019999921 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 0.7816129111793015,
            "unit": "iter/sec",
            "range": "stddev: 0.007580014468472827",
            "extra": "mean: 1.2794056823999937 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.31685119242781623,
            "unit": "iter/sec",
            "range": "stddev: 0.0017780973526158824",
            "extra": "mean: 3.1560556623999956 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 7.631849363122154,
            "unit": "iter/sec",
            "range": "stddev: 0.0011333462945826058",
            "extra": "mean: 131.02983987499783 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 3.1325751187535107,
            "unit": "iter/sec",
            "range": "stddev: 0.0032802175517378266",
            "extra": "mean: 319.2261836 msec\nrounds: 5"
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
          "id": "ab3ed5e52fb357db80f23441ef8613af9e76e183",
          "message": "Update docker-compose.benchmark.yml\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>",
          "timestamp": "2025-08-11T11:20:54-04:00",
          "tree_id": "48d11b9a5569f0ff1a05f16f8d8e8e7e7259ce0d",
          "url": "https://github.com/Zafirmk/merlin/commit/ab3ed5e52fb357db80f23441ef8613af9e76e183"
        },
        "date": 1754925936111,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 45.32234524449867,
            "unit": "iter/sec",
            "range": "stddev: 0.0007026513888271806",
            "extra": "mean: 22.064171538461643 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 17.76396446328185,
            "unit": "iter/sec",
            "range": "stddev: 0.0009162848996870519",
            "extra": "mean: 56.29374017646803 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 7.738710338891624,
            "unit": "iter/sec",
            "range": "stddev: 0.04133549845004388",
            "extra": "mean: 129.22049750000397 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 39.293569210537164,
            "unit": "iter/sec",
            "range": "stddev: 0.0021427086719723537",
            "extra": "mean: 25.44945699999772 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 15.666179624071065,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799535289457105",
            "extra": "mean: 63.83177162500431 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 7.351133513821106,
            "unit": "iter/sec",
            "range": "stddev: 0.0034962066247478597",
            "extra": "mean: 136.0334427500014 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 35.586998364486526,
            "unit": "iter/sec",
            "range": "stddev: 0.0006691745307337981",
            "extra": "mean: 28.100150222220876 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 11.300257265612498,
            "unit": "iter/sec",
            "range": "stddev: 0.03984210253410389",
            "extra": "mean: 88.4935604999961 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 6.080351240557922,
            "unit": "iter/sec",
            "range": "stddev: 0.003106745413156634",
            "extra": "mean: 164.46418314285438 msec\nrounds: 7"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 28.59359598913064,
            "unit": "iter/sec",
            "range": "stddev: 0.00030657438335116174",
            "extra": "mean: 34.97286596551664 msec\nrounds: 29"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 9.790106933715405,
            "unit": "iter/sec",
            "range": "stddev: 0.006544118829280497",
            "extra": "mean: 102.14393027273032 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 4.549383057662981,
            "unit": "iter/sec",
            "range": "stddev: 0.0020325570774609135",
            "extra": "mean: 219.81002420000664 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 19.273856400065544,
            "unit": "iter/sec",
            "range": "stddev: 0.001162602841406733",
            "extra": "mean: 51.8837527499997 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 10.921856356748426,
            "unit": "iter/sec",
            "range": "stddev: 0.0009121250343916759",
            "extra": "mean: 91.55952681817841 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 7.187490677038459,
            "unit": "iter/sec",
            "range": "stddev: 0.0011974838423865325",
            "extra": "mean: 139.13061525000003 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 4.224197044666446,
            "unit": "iter/sec",
            "range": "stddev: 0.0030007752030540157",
            "extra": "mean: 236.73138099999846 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 1.6435185688284277,
            "unit": "iter/sec",
            "range": "stddev: 0.0031190821696770086",
            "extra": "mean: 608.4506856000075 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 0.7803779877122259,
            "unit": "iter/sec",
            "range": "stddev: 0.014387766467525105",
            "extra": "mean: 1.2814303013999961 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.31748132383888134,
            "unit": "iter/sec",
            "range": "stddev: 0.03718907676977535",
            "extra": "mean: 3.149791578000003 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 7.30205787343417,
            "unit": "iter/sec",
            "range": "stddev: 0.0012974339144814718",
            "extra": "mean: 136.9476957500062 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 3.113191413965765,
            "unit": "iter/sec",
            "range": "stddev: 0.0013532366213448949",
            "extra": "mean: 321.21378580000055 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}