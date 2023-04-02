---
id: Code - Parallel_Computation - Labs - Lab 6
title: Lab 6
sidebar_position: 6
---
---

### Approach I

#### Code

```c
cudaMemcpy(gpu_b, b, sizeof(int) * size * size, cudaMemcpyHostToDevice);
for (i = 0; i < nStreams; ++i) {
 int offset = i * streamSize;
 cudaMemcpyAsync(&gpu_a[offset], &a[offset], streamBytes, cudaMemcpyHostToDevice, stream[i]);
 matrix_multiplication<<<dimGrid, dimBlock, 0, stream[i]>>>(gpu_a, gpu_b, gpu_c, i);
 cudaMemcpyAsync(&gpu_c[offset], &c[offset], streamBytes, cudaMemcpyDeviceToHost, stream[i]);
}
```

#### Result

- `nStreams = 1`:
 ```bash
 time is 92.022301 ms
 c[451][451]=208282624
 ```
- `nStreams = 4`:
 ```bash
 time is 91.575935 ms
 c[451][451]=208282624
 ```
- `nStreams = 16`:
 ```bash
 time is 91.250397 ms
 c[451][451]=208282624
 ```

### Approach II

#### Code

```c
cudaMemcpy(gpu_b, b, sizeof(int) * size * size, cudaMemcpyHostToDevice);
for (i = 0; i < nStreams; ++i)
{
 int offset = i * streamSize;
 cudaMemcpyAsync(&gpu_a[offset], &a[offset], streamBytes, cudaMemcpyHostToDevice, stream[i]);
}
for (i = 0; i < nStreams; ++i)
{
 matrix_multiplication<<<dimGrid, dimBlock, 0, stream[i]>>>(gpu_a, gpu_b, gpu_c, i);
}
for (i = 0; i < nStreams; ++i)
{
 int offset = i * streamSize;
 cudaMemcpyAsync(&c[offset], &gpu_c[offset], streamBytes, cudaMemcpyDeviceToHost, stream[i]);
}
```

#### Result

- `nStreams = 1`:
 ```bash
 time is 92.028160 ms
 c[451][451]=208282624
 ```

- `nStreams = 4`:
 ```bash
 time is 91.512543 ms
 c[451][451]=208282624
 ```

- `nStreams = 16`:
 ```bash
 time is 90.706047 ms
 c[451][451]=208282624
 ```

:::info Observation

1. More streams make the execution time faster. This is because more actions (memcopy and kernel) can be overlapped when we have more streams, saving some time on the overall execution.
2. Approach 2 is faster than approach 1 for `nStreams = 4` and `nStreams = 16` because we don't have the wait for the block kernel function call each iteration. We can just dispatch all the memcopy calls all at once.

:::
