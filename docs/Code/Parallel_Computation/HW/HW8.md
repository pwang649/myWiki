---
id: Code - Parallel_Computation - HW - HW 8
title: HW 8
sidebar_position: 8
---
---

### Question 1

- **Streaming Multi-Processor in a GPU**: An SM typically consists of several processing units called CUDA cores, which can simultaneously execute multiple threads in a SIMD (single instruction, multiple data) fashion. Each SM also has its own register file, shared memory, and cache, allowing it to efficiently manage the memory accesses of its threads.
- **SIMT**: In a SIMT architecture, each thread is capable of executing its own independent program. However, these threads are grouped together into a "warp" and executed together on the same processing core.
- **Warp**: A unit of execution that contains a fixed number of threads, typically 32. All threads within a warp execute the same instruction at the same time, allowing for efficient parallel execution of multiple threads.
- **CUDA Core**: Each CUDA core can execute a single instruction on a single piece of data at a time, but it can operate in parallel with other cores within the GPU.
- **Kernel**: A program that is designed to be executed in parallel on the GPU.

### Question 2

It's not correct. The `__syncthreads()` instruction is a synchronization barrier that ensures that all threads within a thread block have finished executing the previous set of instructions before any thread proceeds to execute the next set of instructions. This is necessary because the threads in a thread block can execute instructions out of order or in parallel, depending on the available hardware resources.

Even if the kernel is launched with only one warp in each thread block, there is still a possibility that the threads within the warp will execute instructions out of order or in parallel. This can lead to race conditions, in which one thread is accessing a shared resource (such as shared memory) while another thread is modifying it, resulting in undefined behavior.

Therefore, it is important to include the __syncthreads() instruction in the kernel code to ensure that all threads within the thread block have finished executing the previous instructions before any thread proceeds to execute the next set of instructions. This will prevent race conditions and ensure correct results.

### Question 3

Assume all 1K parallel threads finish together.

Total communication time $= (3GB + 1GB) / 16GB/s = 0.25s$

Total computation time $= (2K/1K) \cdot (100cycles \cdot 10 + 1cycle \cdot 100) / 1GHz = 2.2\mu s$

In total: $0.25s + 2.2\mu s = 0.2522s$

### Question 4

#### Part 1

Host function:

```ruby
cudaMalloc(A, 1Kx1K)
cudaMalloc(b, 1K)
cudaMalloc(c, 1K)
cudaMemcpy(A, 1Kx1K, toGPU)
cudaMemcpy(b, 1K, toGPU)
dim3 dimGrid(1)
dim3 dimBlock(1K)
vector_multiply<<<dimGrid, dimBlock>>>(A, b, c)
cudaMemcpy(c, 1K, toCPU)
cudaDree(A)
cudaDree(b)
cudaDree(c)
```

Kernel function:

```ruby
__global__ void vector_multiply(a, b, c):
    thread_id = blockIdx.x * blockDim.x + threadIdx.x
    for i from 0 to 1K
        c[thread_id] += A[thread_id][i] * b[i]
```

#### Part 2

Comm time: $\frac{(1 K \cdot 1 K+2 K) \cdot 4 b y t e s}{16 G B / s}=250.25 \mu \mathrm{s}$

Comp time: $\frac{100 *1 K+10* 1 k}{1 GHz}=110 \mu s$

In total: $250.25 \mu s+110 \mu s=360.25 \mu s$

### Question 5

#### Part 1

```c
#define SIZE 1000
#define DIM_GRID 1
#define DIM_BLOCK 1000
//kernel function
__global__ void mat_mul(int *a, in*b, int *c) {
    int row = blockIdx.y * blockDim.y + threadIdx.y;
    int col = blockIdx.x * blockDim.x + threadIdx.x;
    for (int i = 0; i < DIM_GRID; i++) {
        __shared__ tile_b[SIZE/DIM_GRID];
        tile_b = b[(i * threadIdx.x) * SIZE + col];
        __syncthreads();
        for (int j=0; j < SIZE; j++)
            c[row * SIZE + col] += a[threadIdx.y][j] * tile_b[j][threadIdx.x];
        __syncthreads();
    }
}


// host function
int main() {
    int *a = (int*)malloc(sizeof(int)*SIZE*SIZE);
    int *b = (int*)malloc(sizeof(int)*SIZE);
    int *c = (int*)malloc(sizeof(int)*SIZE);

    int *gpu_a, *gpu_b, *gpu_c;
    cudamalloc((void**)&gpu_a, sizeof(int)*SIZE*SIZE);
    cudamalloc((void**)&gpu_b, sizeof(int)*SIZE);
    cudamalloc((void**)&gpu_c, sizeof(int)*SIZE);

    cudaMemcpy(gpu_a, a, sizeof(int)*SIZE*SIZE, cudaMemcpyHostToDevice);
    cudaMemcpy(gpu_b, b, sizeof(int)*SIZE, cudaMemcpyHostToDevice);
    cudaMemcpy(gpu_c, c, sizeof(int)*SIZE, cudaMemcpyHostToDevice);

    dim3 dimGrid(DIM_GRID);
    dim3 dimBlock(DIM_BLOCK);
    mat_mul<<<dimGrid, dimBlock>>>(gpu_a, gpu_b, gpu_c);
    cudaMemcpy(c, gpu_c, sizeof(int)*SIZE, cudaMemcpyDeviceToHost); 
}
```

Lower bound: $\frac{1K * 1K}{1GHz} = 1ms$

#### Part 2

```c
#define SIZE 1000
#define DIM_GRID 1
#define DIM_BLOCK 32
//kernel function
__global__ void mat_mul(int *a, in*b, int *c) {
    for (int i = 0; i < DIM_BLOCK; i++)
        c[blockId.x][blockId.y] += a[blockId.x][i] * b[i][blockId.y]
}


// host function
int main() {
    int *a = (int*)malloc(sizeof(int)*SIZE*SIZE);
    int *b = (int*)malloc(sizeof(int)*SIZE);
    int *c = (int*)malloc(sizeof(int)*SIZE);

    int *gpu_a, *gpu_b, *gpu_c;
    cudamalloc((void**)&gpu_a, sizeof(int)*SIZE*SIZE);
    cudamalloc((void**)&gpu_b, sizeof(int)*SIZE);
    cudamalloc((void**)&gpu_c, sizeof(int)*SIZE);

    cudaMemcpy(gpu_a, a, sizeof(int)*SIZE*SIZE, cudaMemcpyHostToDevice);
    cudaMemcpy(gpu_b, b, sizeof(int)*SIZE, cudaMemcpyHostToDevice);
    cudaMemcpy(gpu_c, c, sizeof(int)*SIZE, cudaMemcpyHostToDevice);

    dim3 dimGrid(DIM_GRID);
    dim3 dimBlock(DIM_BLOCK, DIM_BLOCK);
    mat_mul<<<dimGrid, dimBlock>>>(gpu_a, gpu_b, gpu_c);
    cudaMemcpy(c, gpu_c, sizeof(int)*SIZE, cudaMemcpyDeviceToHost); 
}
```

Lower bound comp time: $32^4/1GHz = 1ms$

local data access time: 1ns

Global data access time: 64ns
