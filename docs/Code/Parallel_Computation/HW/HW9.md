---
id: Code - Parallel_Computation - HW - HW 9
title: HW 9
sidebar_position: 9
---
---

### Question 1

- **PageRank**: It is a measure of the importance and relevance of a website based on the number and quality of links pointing to it from other sites.
- **Prediction Kernel in Data Science**: The kernel that predict future observations based on the knowledge gathered from the past observations.
- **Virtualization in Cloud Computing**: In cloud computing, virtualization is used to create virtualized infrastructure, which can be used to host a wide range of services and applications.
- **Master-Worker Approach**: A single master process or thread distributes the work among multiple worker processes or threads, which perform the computation in parallel.
- **Variety in Big Data**: In the context of big data, variety refers to the diverse range of data types, formats, and sources that are being generated and collected.
- **Veracity in Big Data**: Veracity in big data refers to the accuracy, quality, and reliability of the data that is being collected and analyzed.
- **MapReduce model**: MapReduce is a programming model for processing and analyzing large datasets in a distributed computing environment and consists of two main functions: Map and Reduce.
- **Belief Propagation**: A message-passing algorithm used to compute the probabilities of unknown variables in a graphical model
- **Cloud elasticity**: The ability of a cloud computing system to dynamically and automatically allocate or deallocate computing resources (such as processing power, memory, storage, and network bandwidth) based on changing demands.
- **Cloud Service Models**: Cloud computing offers three main service models (IaaS, PaaS, and SaaS), each providing different levels of abstraction and control over the underlying computing infrastructure.

### Question 2

#### Map Function

```
Initialize every vertex to infinity except for the source vertex that should be 0
for each vertex, emit <Key, Value>
Key: the vertex ID
Value: a tuple containing the vertex's distance value and a list of its outgoing edges
```

#### Reduce Function

```
Receives all the values associated with a particular vertex ID 
and selects the one with the smallest distance value (with weight added).
This value represents the shortest path from the source vertex to the current vertex. 
```

#### Part 3

1. Mappers: (s, (0, [a, b])), (a, (inf, [b, c])), (b, (inf, [a, c, d])), (c, (inf, [d])), (d, (inf, [s, c])),
    Reducers: (a, 10), (b, 5), (c, inf), (d, inf)
2. Mappers: (s, (0, [a, b])), (a, (10, [b, c])), (b, (5, [a, c, d])), (c, (inf, [d])), (d, (inf, [s, c])),
    Reducers: (a, 8), (b, 5), (c, 11), (d, 7)
3. Mappers: (s, (0, [a, b])), (a, (8, [b, c])), (b, (5, [a, c, d])), (c, (11, [d])), (d, (7, [s, c])),
    Reducers: (a, 8), (b, 5), (c, 9), (d, 7)

Converges

### Question 3

<key, value> = <class, score>

The mapper function reads each input record, extracts the class and score values, and emits a key-value pair for each class. The key is the class value and the value is a tuple containing the score value.

The reducer receives all the values associated with a particular class value and computes the class average. It then iterates over the values again and emits a key-value pair for each student whose score is less than the class average.

### Question 4

```
VM(i):
    for j from 0 to n-1:
        v(i) += A(i, j) * v(j) / L(j)
```

### Question 5

#### Part 1

||Block distribution|Cyclic distribution|
|:---:|:---:|:---:|
|Process 0|6|24|
|Process 1|22|28|
|Process 2|38|32|
|Process 3|54|36|

#### Part 2

1. $\sum_{i=0}^{j-1}\frac{n\cdot j}{p} + i$

2. $\sum_{i=0}^{\frac{n}{p}-1}j + i\cdot p$