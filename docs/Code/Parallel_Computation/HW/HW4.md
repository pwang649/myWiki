---
id: Code - Parallel_Computation - HW - HW 4
title: HW 4
sidebar_position: 4
---

### Question 1

Explain the following terms:

1. **Cannon’s algorithm**: Cannon's Algorithm is a well-known parallel matrix multiplication algorithm for distributing the computations of matrix multiplication over multiple processors in a multi-processor system. The algorithm uses a 2-dimensional block-partitioning approach to divide the large matrices into smaller sub-matrices, which are then distributed across the processors for multiplication and accumulation. The results from all processors are then combined to obtain the final product matrix.
2. **Blocking and non-blocking send/receive**: In a blocking send/receive, the sender process will wait until the receiver process has received the message before continuing to execute. In a non-blocking send/receive, the sender process does not wait for the receiver process to receive the message.
3. **Single Program Multiple Data**: A parallel computing approach where a single program is executed on multiple processors or cores simultaneously, each processing its own set of data.
4. **Loosely synchronous**: A type of communication or coordination that is not tightly timed or controlled, but rather is based on approximate or flexible timing.

### Question 2

#### Part 1

Deadlock is possible because both programs try to send a message to each other on line 3. With the blocking send/receive, they both will stop at line 3 waiting for the other thread to receive the message, but apparently, no one has yet to execute the receive command. I will reverse the send-and-receive order in program A to avoid the deadlock.

#### Part 2

No, it's not safe because program A may not receive the correct data from B when B is yet to send data to A or is in the process of copying to buffer a.

### Question 3

#### Part 1

1. Initialize matrices $a$ and $b$ and MPI size and rank.

2. Initially, each $p_{i,j}$ has $a_{i,j}$ and $b_{i,j}$. Align elements $a_{i,j}$ and $b_{i,j}$ by reordering them so that $a_{i,j+i}$ and $b_{i+j,j}$ are on $p_{i,j}$

3. Each $p_{i,j}$ computes for the first round

    $c_{i,j} = a_{i,j}+i * b_{i+j,j}$ ($a_{i,j+i}$ and $b_{i+j,j}$ are local on $p_{i,j}$)

4. For $k = 1$ to $n-1$:
    
    // Shift matrix a left by one

    MPI\_send($a$, $p_{i,j-1}$)

    MPI\_recv($a$, $pi,j+1$)

    // Shift matrix b up by one

    MPI\_send($b$, $p_{i-1,j}$)

    MPI\_recv($b$, $p_{i+1,j}$)

    $c = c + a*b$

#### Part 2

1. Initialize matrices $a$ and $b$ and MPI size and rank.

2. Initially, each $p_{i,j}$ has $a_{i,j}$ and $b_{i,j}$. Align elements $a_{i,j}$ and $b_{i,j}$ by reordering them so that $a_{i,j+i}$ and $b_{i+j,j}$ are on $p_{i,j}$

3. Each $p_{i,j}$ computes for the first round

    $c_{i,j} = a_{i,j}+i * b_{i+j,j}$ ($a_{i,j+i}$ and $b_{i+j,j}$ are local on $p_{i,j}$)
    
4. For $k = 1$ to $n-1$:
    
    // Send shifted a and b consecutively

    MPI\_Isend($a$, $p_{i,j-1}$)

    MPI\_Isend($b$, $p_{i-1,j}$)

    Barrier(all sent)

    // Receive shifted a and b consecutively

    MPI\_Irecv($a$, $pi,j+1$)

    MPI\_Irecv($b$, $p_{i+1,j}$)

    Barrier(All received)

    $c = c + a*b$

#### Part 3

Data communicated in each iteration is $2(\frac{n}{p})^2 \cdot p^2 = 2n^2$

We have $p-1$ iterations, so in total we have $2(p-1)n^2$