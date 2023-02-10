---
id: Code - Parallel_Computation - HW - HW 1
title: HW 1
sidebar_position: 1
---

### Question 1

Explain the following terms:
1. **Temporal locality**: Repeated reference to a data item in a small time window.
2. **Very Long Instruction Word (VLIW) Processor**: It relies on the compiler to resolve dependencies and resource availability at compile time. Instructions that can be executed concurrently are packed into groups and parceled off to the processor as a single long instruction word (thus the name) to be executed on multiple functional units at the same time.
3. **Single instruction multiple data (SIMD)**: A single control unit dispatches instructions to each processing unit.
4. **Cache hit ratio**: The fraction of data references satisfied by the cache.
5. **Memory bound computation**: Computations that are mainly hindered by the rate at which data can be pumped into the CPU.
6. **Cache line**: A contiguous block of data returned from a single memory request.
7. **Instruction-level parallelism**: the parallel or simultaneous execution of a sequence of instructions in a computer program.
8. **Data dependencies**: The results of an instruction may be required for subsequent instructions.
9. **Superscalar processor**: The ability of a processor to issue multiple instructions in the same cycle.
10. **Column major layout**: Consecutive elements of a column reside next to each other in a memory system.

### Question 2

1. 
    - Fetch 1 word of vector 1 in 1 memory cycle $\rightarrow$ 200 ns
    - Fetch 1 word of vector 2 in 1 memory cycle $\rightarrow$ 200 ns
    - 1 pair of words $\rightarrow$ 1 multiply-adds $\rightarrow$ 2 FLOPs
    - 2 FLOPs in 401ns $\rightarrow \approx$ 5 MFLOPS
    - It's a memory bound process $\rightarrow$ peak performance of the processor: 8 FLOPs > 2 FLOPs (sustained performance)

2. 
    - Fetch 16 words of vector 1 in 1 memory cycle $\rightarrow$ 200 ns
    - Fetch 16 words of vector 2 in 1 memory cycle $\rightarrow$ 200 ns
    - 16 pair of words $\rightarrow$ 16 multiply-adds $\rightarrow$ 32 FLOPs (32 / 8 = 4 comp cycles)
    - 32 FLOPs in 404ns $\rightarrow \approx$ 79.2 MFLOPS
    - It's a compute bound process $\rightarrow$ peak performance of the processor: 8 FLOPs < 32 FLOPs (peak memory performance)

### Question 3

Assume each word fetched from the cache takes 1 memory cycle.

- Fetch 4 words of matrix A in 1 memory cycle $\rightarrow$ 100 ns
- Fetch 4 words of the vector in from cache 1 memory cycle $\rightarrow$ 4 ns
- 4 pair of words $\rightarrow$ 4 multiply-adds $\rightarrow$ 8 FLOPs (8 / 4 = 2 comp cycles)
- 8 FLOPs in 106ns $\rightarrow \approx$ 75 MFLOPS

### Question 4

If can fetch consecutively:
- Fetch 8 words of matrix A in 1 memory cycle $\rightarrow$ 200 ns
- Fetch 8 words of matrix B in 1 memory cycle $\rightarrow$ 1600 ns
- 8 pair of words $\rightarrow$ 8 multiply-adds $\rightarrow$ 16 FLOPs (16 / 8 = 2 comp cycles)
- 16 FLOPs in 1804ns $\rightarrow \approx$ 8.9 MFLOPS

If can fetch any position:
- Fetch 8 words of matrix A in 1 memory cycle $\rightarrow$ 200 ns
- Fetch 8 words of matrix B in 1 memory cycle $\rightarrow$ 200 ns
- 8 pair of words $\rightarrow$ 8 multiply-adds $\rightarrow$ 16 FLOPs (16 / 8 = 2 comp cycles)
- 16 FLOPs in 402ns $\rightarrow \approx$ 40 MFLOPS

### Question 5

Assume the cache reads one word per memory cycle. And each word read from DRAM takes 200ns.

The total execution time will be $n / k * w * 200$ ns $+ w * (n − n/k) * 1$ ns $+ n$ ns, where $n/k$ is the number of $w$ words read from DRAM, $n − n/k$ is the number of $w$ words read from the cache.

### Question 6

1. a[0] miss, load a[0] and a[1], a[1] hit
2. a[1] hit, a[2] miss, load a[2] and a[3]
3. a[2] hit, a[3] hit
4. a[3] hit, a[4] miss, load a[4] and a[5]
5. a[4] hit, a[5] hit
6. a[5] hit, a[6] miss, load a[6] and a[7]
7. a[6] hit, a[7] hit

Besides the first read operation, the two consecutive operations after having 3 hits and 1 miss. We can approximate the hit ratio as 75%.