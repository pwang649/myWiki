---
id: Code - Parallel_Computation - Labs - Lab 5
title: Lab 5
sidebar_position: 5
---
---

### Naive MM on CUDA

#### Kernal Function

```c
__global__ void matrix_multiplication(int *a, int *b, int *c)
{
	int row = blockIdx.x * blockDim.x + threadIdx.x;
	int col = blockIdx.y * blockDim.y + threadIdx.y;

	for (int i = 0; i < size; i++)
		c[row * size + col] += a[row * size + i] * b[i * size + col];
}
```

#### Result

```bash
time is 8847619.000000 ns
c[451][451]=2048
```

### Block MM on CUDA

#### Kernal Function

```c
__global__ void matrix_multiplication(int *a, int *b, int *c)
{
	int row = blockIdx.x * blockDim.x + threadIdx.x;
	int col = blockIdx.y * blockDim.y + threadIdx.y;
	int threadX = threadIdx.x;
	int threadY = threadIdx.y;

	int i, j;
	int result = 0;
	__shared__ int a_s[32][32];
	__shared__ int b_s[32][32];

	for (i = 0; i < 32; i++)
	{
		a_s[threadX][threadY] = a[row * size + (i * 32 + threadY)];
		b_s[threadX][threadY] = b[(i * 32 + threadX) * size + col];
		__syncthreads();
		for (j = 0; j < 32; j++)
		{
			result += a_s[threadX][j] * b_s[j][threadY];
		}
		__syncthreads();
	}
	c[row * size + col] = result;
}
```

#### Result

```bash
time is 7144499.000000 ns
c[451][451]=2048
```

:::info Observation

The second method is faster than the first. The reason is that fetching data from the global memory of the GPU takes more time than the shared memory in the SM. The second method allocates data to the shared memory first, then operate back and forth whereas the first one waste time transferring data via the global memory.

:::