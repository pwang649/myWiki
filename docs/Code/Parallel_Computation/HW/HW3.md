---
id: Code - Parallel_Computation - HW - HW 3
title: HW 3
sidebar_position: 3
---

### Question 1

Explain the following terms:
1. **PRAM**: Parallel Random Access Machine. It allows concurrent access to various memory locations, depending on how simultaneous memory accesses are handled.
2. **Diameter of a network**: It is the maximum distance between any two nodes in a network, as measured by the number of edges in the shortest path between them.
3. **Bisection width of a network**: It refers to the minimum number of edges that need to be cut in order to divide the network into two separate, non-connected components.
4. **Multistage network**: It is a type of network in which a node is connected to more than one other node. This results in a series of interconnected stages or levels, hence the name multistage network.
5. **Rearrangeable network**: It is a type of network that can change its structure and connectivity in response to changing conditions or requirements. This is achieved by reconfiguring the network elements such as switches, routers, and links to form new connections and topologies.
6. **Non blocking network**: Any connection request from input to output can be routed at any time without rearranging the existing set of connections at that time.
7. **Congestion in a network**: It refers to a situation where the available resources, such as bandwidth, processing power, and memory, are unable to accommodate the amount of data being transmitted through the network. This results in a slowdown in the flow of data and an increase in response times.
8. **3 stage CLOS network**: In a 3-stage CLOS network, each stage is comprised of a set of nodes, and each node in a stage is connected to all the nodes in the next stage. This creates a linear progression of connections from one stage to the next, with the nodes in each stage serving as the inputs for the nodes in the next stage.
9. **Butterfly network**: It uses a two-level tree structure. It consists of a root node, also known as the switch, which is connected to multiple leaf nodes, also known as end-nodes. Each leaf node is then connected to two other nodes, creating a second level of the tree structure.
10. **Shuffle-exchange network**: Each node is connected to exactly two other nodes, allowing data to be passed along a series of connections in a highly efficient manner. The network is arranged in a multi-stage structure, with each stage consisting of a set of nodes that are connected to each other in a specific way.
11. **Fat tree**: This network has multiple levels of switches that branch out like the branches of a tree, creating a dense and highly redundant network architecture.

### Question 2

We have $n^2$ processors, so we don't need to divide the matrix into blocks, rather each element takes its own processor $(i, j)$. 

Using the shared output variable method, the first $n$ processors will together compute the first row of the output matrix, the next $n$ processors will compute the second row, etc. 

Each row is independent, so we can just take the first row to discuss WLOG. $C[0, k] \text{ += } A[0, 0] \times B[0, k], k \in [0, n)$. Race condition exists here since all the $n$ processors are updating $C[0,0]$ when $k=0$ at the first iteration, and every iteration after. Therefore, we can shift the order to the right by manipulating $k$. For example, the first thread will iterate $k$ from $0$ to $n-1$, the second thread will iterate $k$ in the following sequence $\{1, 2, \cdots, n-1, 0\}$, all the rest of the threads follow this shift pattern. 

This algorithm avoids race condition and takes a total of **$\boldsymbol{n}$ cycles** to complete because each thread iterates $k$ for $n$ times, and all $n^2$ threads run in parallel.

### Question 3

The output will most likely be different because the it uses **dynamic** scheduling which will cause the inner for loop not follow the original order. And the operation depends on the prior computation. Therefore, the order does matter in this matter, and a different order will make the result different.

### Question 4

0 $\rightarrow$ 3

1 $\rightarrow$ 2

2 $\rightarrow$ 1

3 $\rightarrow$ 0

### Question 5

The diamter of a network is the maximum edges between two nodes. In mesh tree case, the maximum occurs between two diagnal corners, which means we have to traverse through the entire binary tree twice (row and column). It takes $\sqrt{p}$ steps to traverse from the two farthest nodes in one binary tree, thus making the overall steps $\boldsymbol{2 \cdot \sqrt{p}}$, which is diameter of the $\sqrt{p} \times \sqrt{p}$ mesh tree.

### Question 6

#### Part 1

![](/img/code_img/Parallel/hw3_6_1.jpeg)

#### Part 2

![](/img/code_img/Parallel/hw3_6_2.jpeg)

Total permutations for this crossbar is $4! = 24$, but this design can represent at most $2^4 = 16$ arragements. Therefore, it's not a fully connected network.

#### Part 3

**Total number of switches:**

In a $\sqrt{n} \times \sqrt{n}$ crossbar network,

When $\sqrt{n} = 4$, we have $2$ stages.

When $\sqrt{n} = 8$, we have $4$ stages.

When $\sqrt{n} = 16$, we have $6$ stages.

We see # of stages is $2 \times (\log_2{\sqrt{n}} - 1)$.

In each stage, we have $\sqrt{n} \over 2$ switches.

In total, we have $2 \times (\log_2{\sqrt{n}} - 1) \times {\sqrt{n} \over 2} = \sqrt{n} \times (\log_2{\sqrt{n}} - 1)$ switches in a $\sqrt{n} \times \sqrt{n}$ crossbar network.

Overall, we have $3 \times \sqrt{n}$ of such crossbar switches, making $3\times \sqrt{n}\times \sqrt{n} \times (\log_2{\sqrt{n}} - 1) = 3n \times (\log_2{\sqrt{n}} - 1)$

**Total delay:**

Total delay is equivalent to the total number of stages in the network. Therefore, it has $3 \times 2 \times (\log_2{\sqrt{n}} - 1) = 6 \times (\log_2{\sqrt{n}} - 1)$ units of delay. (Times 3 due to there're 3 stages in the CLOS network)