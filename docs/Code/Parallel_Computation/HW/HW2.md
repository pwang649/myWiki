---
id: Code - Parallel_Computation - HW - HW 2
title: HW 2
sidebar_position: 2
---

### Question 1

Explain the following terms:
1. **Race condition**: it occurs when two or more threads can access shared data and they try to change it at the same time.
2. **Shared memory programming model**: in this model, tasks share a common address space, which they read and write in an asynchronous manner.
3. **Asynchronous execution**: Order of execution of instructions depends on input data, OS scheduling algorithm, speed of the processors, and speed of communication network.
4. **Atomic Instruction**: For example, when accessing or mutating a property is atomic, it means that only one read or write operation can be performed at a time.
5. **Correct parallel program**: For all data inputs, for all execution sequences, correct output is produced


### Question 2

#### 2.1

First of all, the execution time without parallelization is $2^{k+1}$.

We have $2^k$ multiplications in total, and it's fair to divide them evenly among $w$ threads. Each thread is in charge of multiplying every element assigned and if more than one element is assigned, the thread also needs to sum up the results from multiplications. After all, each thread produces a value that is to be summed up to get the final result.

In each thread, there will be $2^k \over w$ elements assigned meaning there will be $2^k \over w$ multiplications and $\frac{2^k}{w} - 1$ additions (Simplified to $2^k \over w$). Overall, it does $2^{k+1} \over w$ computations.

This is a scalable result because $\text{Parallel Time} \propto \frac{\text{Serial Time}}{\text{Number of Threads}}$

#### 2.2

![](/img/code_img/Parallel/hw2_2.png)

### Question 3

#### 3.1

![](/img/code_img/Parallel/hw2_3_1.png)

#### 3.2

![](/img/code_img/Parallel/hw2_3_2.png)

### Question 4

#### 4.1

s(i) and At_least_one_vertex_has_update are shared.

#### 4.2

![](/img/code_img/Parallel/hw2_4.png)