window.BENCHMARK_DATA = {
  "lastUpdate": 1754426849990,
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
      }
    ]
  }
}