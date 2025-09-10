window.BENCHMARK_DATA = {
  "lastUpdate": 1757527649067,
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
      }
    ]
  }
}