window.BENCHMARK_DATA = {
  "lastUpdate": 1758207631870,
  "repoUrl": "https://github.com/Zafirmk/merlin",
  "entries": {
    "Benchmark": [
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
          "id": "85d325db6e2c3524dbaa7b5bf6b288819fd448a9",
          "message": "Merge branch 'main' into main",
          "timestamp": "2025-09-10T14:05:49-04:00",
          "tree_id": "e76be84294a7869edab3aec388b003030949220a",
          "url": "https://github.com/Zafirmk/merlin/commit/85d325db6e2c3524dbaa7b5bf6b288819fd448a9"
        },
        "date": 1757527648435,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 149.59861310225023,
            "unit": "iter/sec",
            "range": "stddev: 0.0004642028891521863",
            "extra": "mean: 6.684553949149936 msec\nrounds: 118"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 45.54161672634699,
            "unit": "iter/sec",
            "range": "stddev: 0.0001661459824630273",
            "extra": "mean: 21.95793807692107 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 18.178250576200064,
            "unit": "iter/sec",
            "range": "stddev: 0.0010760619430666073",
            "extra": "mean: 55.01079412499976 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 8.692320898617968,
            "unit": "iter/sec",
            "range": "stddev: 0.0007291356464024342",
            "extra": "mean: 115.04407299999642 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 237.6249407186327,
            "unit": "iter/sec",
            "range": "stddev: 0.00007055854020903413",
            "extra": "mean: 4.208312464911171 msec\nrounds: 228"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 116.86261520035293,
            "unit": "iter/sec",
            "range": "stddev: 0.00008271962217154243",
            "extra": "mean: 8.557056491381514 msec\nrounds: 116"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 66.88284726901396,
            "unit": "iter/sec",
            "range": "stddev: 0.00021684697290322457",
            "extra": "mean: 14.951516582089173 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 42.708319220343526,
            "unit": "iter/sec",
            "range": "stddev: 0.0005101024061647632",
            "extra": "mean: 23.41464188372142 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 226.34786260894884,
            "unit": "iter/sec",
            "range": "stddev: 0.00006243480206734568",
            "extra": "mean: 4.41797854185023 msec\nrounds: 227"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 114.62857551392902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000804951112591775",
            "extra": "mean: 8.72382820353975 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 65.75033448054988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005307358018287645",
            "extra": "mean: 15.209048104474931 msec\nrounds: 67"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 42.14726883726306,
            "unit": "iter/sec",
            "range": "stddev: 0.00018020928099474697",
            "extra": "mean: 23.72632978571281 msec\nrounds: 42"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 223.74250055324347,
            "unit": "iter/sec",
            "range": "stddev: 0.000042262965942422155",
            "extra": "mean: 4.469423545045401 msec\nrounds: 222"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 110.46400407952547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001819298788017617",
            "extra": "mean: 9.052722724771755 msec\nrounds: 109"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 62.30129913458007,
            "unit": "iter/sec",
            "range": "stddev: 0.0008608763098040779",
            "extra": "mean: 16.051029655735608 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 39.05923813403322,
            "unit": "iter/sec",
            "range": "stddev: 0.0004143120522258929",
            "extra": "mean: 25.602137875000608 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 219.20842949130173,
            "unit": "iter/sec",
            "range": "stddev: 0.000045088426185538506",
            "extra": "mean: 4.56186836574038 msec\nrounds: 216"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 106.81752504383209,
            "unit": "iter/sec",
            "range": "stddev: 0.000052723374215677966",
            "extra": "mean: 9.361759688680808 msec\nrounds: 106"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 60.04876403389897,
            "unit": "iter/sec",
            "range": "stddev: 0.00012658981529229627",
            "extra": "mean: 16.653132101694485 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 35.714323255693806,
            "unit": "iter/sec",
            "range": "stddev: 0.0006826157780209724",
            "extra": "mean: 27.999970567566994 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 65.76834167697395,
            "unit": "iter/sec",
            "range": "stddev: 0.000102185026294656",
            "extra": "mean: 15.204883907694885 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 19.602859802015825,
            "unit": "iter/sec",
            "range": "stddev: 0.000971889748180845",
            "extra": "mean: 51.01296495000014 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 12.23460906014407,
            "unit": "iter/sec",
            "range": "stddev: 0.0023474987336808643",
            "extra": "mean: 81.73534561538531 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 3.3208183908792033,
            "unit": "iter/sec",
            "range": "stddev: 0.06134013302529299",
            "extra": "mean: 301.1305896000067 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 10.770238006407972,
            "unit": "iter/sec",
            "range": "stddev: 0.0022100788816890684",
            "extra": "mean: 92.848458818183 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 2.6907427135006188,
            "unit": "iter/sec",
            "range": "stddev: 0.055569370098869184",
            "extra": "mean: 371.6446001999998 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jean.senellart@quandela.com",
            "name": "Jean Senellart",
            "username": "jsenellart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "009b62f5caaf9543a09e92917739ba610984af62",
          "message": "Merge branch 'main' into main",
          "timestamp": "2025-09-18T16:58:49+02:00",
          "tree_id": "f97c42f7e4a8a681307ce731f219fb574ec7f6d2",
          "url": "https://github.com/Zafirmk/merlin/commit/009b62f5caaf9543a09e92917739ba610984af62"
        },
        "date": 1758207631222,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 145.3698998014446,
            "unit": "iter/sec",
            "range": "stddev: 0.0001068560104326429",
            "extra": "mean: 6.879003159291319 msec\nrounds: 113"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 41.513242744070546,
            "unit": "iter/sec",
            "range": "stddev: 0.00017256801391253248",
            "extra": "mean: 24.088698783783467 msec\nrounds: 37"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 17.151772756849457,
            "unit": "iter/sec",
            "range": "stddev: 0.00029124360789972476",
            "extra": "mean: 58.303011249997816 msec\nrounds: 16"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 8.332014878770524,
            "unit": "iter/sec",
            "range": "stddev: 0.0015716756507694754",
            "extra": "mean: 120.01898875000094 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 219.6337718803012,
            "unit": "iter/sec",
            "range": "stddev: 0.00043166077626766565",
            "extra": "mean: 4.553033859223584 msec\nrounds: 206"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 107.2921336109688,
            "unit": "iter/sec",
            "range": "stddev: 0.00021304305535661906",
            "extra": "mean: 9.320347786408146 msec\nrounds: 103"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 58.45710690566795,
            "unit": "iter/sec",
            "range": "stddev: 0.0021066921604580547",
            "extra": "mean: 17.106559885245378 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 39.02453249918384,
            "unit": "iter/sec",
            "range": "stddev: 0.00025802978470448813",
            "extra": "mean: 25.624906589743617 msec\nrounds: 39"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 213.57510835865938,
            "unit": "iter/sec",
            "range": "stddev: 0.00012493215086979072",
            "extra": "mean: 4.682193574359271 msec\nrounds: 195"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 103.66565298725473,
            "unit": "iter/sec",
            "range": "stddev: 0.000184704986609601",
            "extra": "mean: 9.646396575758278 msec\nrounds: 99"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 58.7590769372448,
            "unit": "iter/sec",
            "range": "stddev: 0.00023897334510813658",
            "extra": "mean: 17.01864719672177 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 37.19052763681383,
            "unit": "iter/sec",
            "range": "stddev: 0.0005715001499624184",
            "extra": "mean: 26.888567157894496 msec\nrounds: 38"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 205.5202028365783,
            "unit": "iter/sec",
            "range": "stddev: 0.00014364254525288964",
            "extra": "mean: 4.8657016984124 msec\nrounds: 189"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 98.99411104036942,
            "unit": "iter/sec",
            "range": "stddev: 0.00021847093395129481",
            "extra": "mean: 10.101610989690123 msec\nrounds: 97"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 56.001994944329965,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519919259837787",
            "extra": "mean: 17.856506736841652 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 35.711371994293295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003416305595727917",
            "extra": "mean: 28.002284542856565 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 197.10877174243274,
            "unit": "iter/sec",
            "range": "stddev: 0.0004820991310330004",
            "extra": "mean: 5.073340933333634 msec\nrounds: 195"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 95.37652500204659,
            "unit": "iter/sec",
            "range": "stddev: 0.0004004936530085078",
            "extra": "mean: 10.484760269663232 msec\nrounds: 89"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 52.69072509731719,
            "unit": "iter/sec",
            "range": "stddev: 0.0006385161864706691",
            "extra": "mean: 18.97867220754789 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 31.939697595423794,
            "unit": "iter/sec",
            "range": "stddev: 0.00037888451271292286",
            "extra": "mean: 31.309000249998498 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 59.56769570573034,
            "unit": "iter/sec",
            "range": "stddev: 0.00023795811157056122",
            "extra": "mean: 16.78762268965528 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 16.879674261372084,
            "unit": "iter/sec",
            "range": "stddev: 0.0019924760383747196",
            "extra": "mean: 59.24284938889062 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 11.111058004368846,
            "unit": "iter/sec",
            "range": "stddev: 0.0036613030611440177",
            "extra": "mean: 90.00043016666837 msec\nrounds: 12"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 3.0765280355772875,
            "unit": "iter/sec",
            "range": "stddev: 0.08003091604253904",
            "extra": "mean: 325.0417316000039 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 9.984777498691901,
            "unit": "iter/sec",
            "range": "stddev: 0.003104554032160282",
            "extra": "mean: 100.15245709090757 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 2.5628033594821273,
            "unit": "iter/sec",
            "range": "stddev: 0.07398078370683732",
            "extra": "mean: 390.1977092000038 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}