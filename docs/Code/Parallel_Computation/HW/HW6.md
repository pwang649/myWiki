---
id: Code - Parallel_Computation - HW - HW 6
title: HW 6
sidebar_position: 6
---

### Question 1

1. **Congestion**: Maximum number of edges in the original graph mapped to an edge in the embedding graph.
2. **Dilation**: Maximum number of edges in the embedding graph that any edge in the original network mapped onto.
3. **Gustafson’s Law**: Gustafson's Law suggests that the speedup can be linearly proportional to the number of processors used, provided that the size of the problem being solved is increased in proportion to the number of processors.
4. **Superlinear speedup**: a scenario where the speedup achieved by a parallel algorithm exceeds the theoretical maximum speedup predicted by Amdahl's Law.
5. **Work optimal**: Total work done by the parallel algorithm is the same as the serial complexity of the problem.

### Question 2

#### Part 1

Amdahl's Law: $4/5 = \frac{S+P/5}{S+P}$, and $S+P=1.$

Solving the system of equation, we get $S = 3/4, P = 1/4$, Accelerator is active for $1/4/5 = 5$% of the time in the machine with an accelerator.

#### Part 2

Speed up: $\frac{S + P}{S + P/16}$

We use Amdahl's Law because the problems are the same.

### Question 3

1. $f_4(n)$
2. $f_2(n)$
3. $f_5(n)$
4. $f_1(n)$
5. $f_3(n)$

### Question 4

1. False, a lower bound on $g$ is not sufficient.
2. False, that's typically not true for all $n$, especially when $n$ is small.
3. True.

### Question 5

#### Part 1

- $(0000)_2 \rightarrow PE(0, 0)$
- $(0001)_2 \rightarrow PE(0, 1)$
- $(0010)_2 \rightarrow PE(0, 2)$
- $(0011)_2 \rightarrow PE(0, 3)$
- $(0100)_2 \rightarrow PE(1, 0)$
- $(0101)_2 \rightarrow PE(1, 1)$
- $(0110)_2 \rightarrow PE(1, 2)$
- $(0111)_2 \rightarrow PE(1, 3)$
- $(1000)_2 \rightarrow PE(2, 0)$
- $(1001)_2 \rightarrow PE(2, 1)$
- $(1010)_2 \rightarrow PE(2, 2)$
- $(1011)_2 \rightarrow PE(2, 3)$
- $(1100)_2 \rightarrow PE(3, 0)$
- $(1101)_2 \rightarrow PE(3, 1)$
- $(1110)_2 \rightarrow PE(3, 2)$
- $(1111)_2 \rightarrow PE(3, 3)$

#### Part 2

- $(0, 1) \rightarrow (PE(0, 0), PE(0, 1))$
- $(0, 2) \rightarrow (PE(0, 0), PE(0, 1), PE(0, 2))$
- $(0, 4) \rightarrow (PE(0, 0), PE(1, 0))$
- $(0, 8) \rightarrow (PE(0, 0), PE(1, 0), PE(2, 0))$

#### Part 3

- Expansion: $1$ (number of nodes doesn't change)
- Dilation: $\lceil \frac{k}{2} \rceil$ (we either traverse the first half of the bits down the rows or traverse the last half of the bits across columns, so we only care about half of k to traverse)
- Congestion: $\lceil \frac{k}{2} \rceil$ (same as dilation when we have one edge being traversed for at most half of $k$ times)
