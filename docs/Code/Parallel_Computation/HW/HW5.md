---
id: Code - Parallel_Computation - HW - HW 5
title: HW 5
sidebar_position: 5
---

### Question 1

Explain the following terms:

1. **Hypercube network**: A type of computer network topology in which each node is connected to exactly n other nodes, where n is a power of 2. Each node is assigned a unique binary address, which is used to determine its position in the hypercube. The distance between any two nodes in the hypercube is defined as the number of bits that differ in their binary addresses.
2. **Store and forward routing**: Each intermediate node stores the message or packet before forwarding it to the next node in the network.
3. **Cut through routing**: S technique used in computer networking to forward network packets without first receiving the entire packet. Instead, the network device (such as a switch or router) reads only the header of the packet, determines the destination of the packet, and forwards it immediately to the next hop in the network.
4. **Minimal routing**: The goal of minimal routing is to minimize the number of hops or intermediate nodes between the source and destination nodes to reduce latency and improve the overall performance of the network.
5. **Flow control digits (FLITS)**: A unit of data used in high-speed computer networks to control the flow of data between nodes. A flit is a small packet of data that contains information about the source, destination, and priority of the data being transmitted.
6. **LogP model**: The model takes into account several parameters, including communication time, computation time, and the amount of data that needs to be transmitted between nodes.
7. **Dilation in a graph embedding**: Maximum number of edges in the embedding graph that any edge in the original network mapped onto.
8. **Congestion in a graph embedding**: Maximum number of edges in the original graph mapped to an edge in the embedding graph.
9. **Expansion in a graph embedding**: the number of nodes in the embedding graph over the number of nodes in the original graph.
10. **Network model of parallel computers**: each processor computes using data in the processor and communicates 1 unit of the message along an incident edge. Repeat the compute-communicate process.

### Question 2

#### Part 1

It takes $t_w \times \frac{m}{k}$ to send a fraction of the message in one hop. As soon as the first segment of the message is sent, we send the second. Therefore it takes $t_w \times \frac{m}{k} \times (k - 1)$ until sending the last segment. The last segment will then take $t_w \times d \times \frac{m}{k}$ to be sent to $P_{\text{destination}}$.

In total, it takes $t_s + t_w \times \frac{m}{k} \times (k - 1) + t_w \times d \times \frac{m}{k} = t_s + t_w \times \frac{m}{k} \times (k - 1 + d)$ 

#### Part 2

$t_s + t_w \times d \times \frac{m}{k} \times k = t_s + t_w \times d \times m$

### Question 3

1. The overall latency for sending one message is $8 + 2 + 2 = 12$.

2. The overall latency for sending $n$ messages is $8 + 2 + 2n = 10 + 2n$.

3. Broadcast procedure:
    - At time $0$, $P_0$ transmits to $P_1$.
    - At time $2$, the message sent by $P_0$ to $P_1$ enters the network; $P_0$ transmits to $P_2$.
    - At time $4$, the message sent by $P_0$ to $P_2$ enters the network; $P_0$ transmits to $P_3$.
    - At time $6$, the message sent by $P_0$ to $P_3$ enters the network.
    - At time $10$, the message arrives at $P_1$.
    - At time $12$, the message is processed at $P_1$; the message arrives at $P_2$.
    - At time $14$, the message is processed at $P_2$; the message arrives at $P_3$.
    - At time $16$, the message is processed at $P_3$.

    The overall latency is $16$.

### Question 4

1. Each processor communicates $\sqrt{p} \times (\frac{n}{\sqrt{p}})^2$ for a total of $p \times \sqrt{p} \times (\frac{n}{\sqrt{p}})^2 = O(n^2 \sqrt{p})$

2. Total (parallel) time is $\sqrt{p} \times 2(\frac{n}{\sqrt{p}})^2 = 2(\frac{n^2}{\sqrt{p}})$ because $p$ threads are in parallel. We time 2 because we are communicating matrices A and B.

3. Total computation time is $\sqrt{p} \cdot 2(\frac{n}{\sqrt{p}})^3 = 2(\frac{n^3}{p})$. Total execution time is $2(\frac{n^2}{\sqrt{p}}) + 2(\frac{n^3}{p})$

### Question 5

$f : (i, j) \rightarrow i, 0 \leq i < p, 0 \leq j < p-i$

$g: ((i, p - 1 - i), (i + 1, p - 2 - i)) \rightarrow (i, i + 1), 0 \leq i < p - 1$

- Congestion: $p$
- Dilation: $p-1$
- Expansion: $\frac{p}{(1+p)p\over 2} = \frac{2}{1+p}$

### Question 6

#### Part 1

- Dilation: 1 (Same path for traversing across a row since there's no wrap-around)
- Congestion: $n$ ($n$ nodes in a column mapped into one)

#### Part 2

It's the same thing as before

- Dilation: 1 (Same path for traversing across a column since there's no wrap-around)
- Congestion: $n$ ($n$ nodes in a row mapped into one)
