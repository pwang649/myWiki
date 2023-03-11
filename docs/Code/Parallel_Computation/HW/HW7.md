---
id: Code - Parallel_Computation - HW - HW 7
title: HW 7
sidebar_position: 7
---
---

### Question 1

- **All-to-all broadcast primitive**: a communication operation all processes are broadcasted to all the other processes in the system. 
- **Prefix sum primitive**: The goal is to compute the prefix sum of a given sequence of numbers, where the prefix sum of an element is the sum of all the elements up to and including that element.
- **Gather primitive**: The goal is to collect data from multiple processes or nodes and store it in a single process or node.
- **Permutation communication primitive**: The goal is to shuffle or re-order data among different processes or nodes in a specific way.
- **All-to-all personalized communication primitive**: similar to all-to-all broadcast primitive, the difference here is that the messages from each process are unique.

### Question 2

#### Part 1

```
Do i = 0 to logp - 1
    In parallel do:
    If idx < 2^i:
        P(idx) send data to P(idx+2^i)
    End parallel
    Barrier
End
```

#### Part 2

Total runtime = $(\log p)(t_s + k t_w)$

### Question 3

A little twist of the recursive doubling technique

```
Do i = 0 to logp - 1
    In parallel do:
        for j in (0, p / 2^(i+1)) 
            If idx = k 2^(logp - i) for some k in N (natural number)
                P(idx + j) exchange data with P(idx+2^(logp-1-i) + j)
        End for
    End parallel
    Barrier
End
```

In the first iteration, all the nodes of the left side of the root node exchange with the right half. Since it's bidirectional, it takes p/2 messages in each direction.

In the second iteration, two groups of size p/4 messages are exchanged (one happening on the left and one happening on the right without collision). The message each node transfers becomes 2, so in total p/4*2 = p/2 messages.

Similarly, p/2 messages str being transferred in the subsequent iterations. In total, it takes $(t_s + t_w mp/2) \log p$ time to broadcast all messages.

### Question 4

1. $(p-1)(t_s+t_w m)$ (using parallel technique)
2. $(p-1)(t_s+t_w m) + (p-1)(t_s+t_w)$

### Question 5

#### Part 1

$P_0 = P_1 = P_2 = (11, 12, 21)^T$

#### Part 2

All-to-one: $m\cdot (p-1)$

One-to-all: $m \cdot (p-1)$

Total: $2m \cdot (p-1)$