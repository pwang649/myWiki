---
id: Combinatorics - Partitions
title: Partitions
sidebar_position: 5
---

## Compositions

:::note Definition

A sequence $\left(a_1, a_2, \cdots, a_k\right)$ of integers fulfilling $a_i \geq 0$ for all $i$, and $\left(a_1+a_2+\cdots+a_k\right)=n$ is called a weak composition of $n$. If, in addition, the $a_i$ are positive for all $i \in[k]$, then the sequence $\left(a_1, a_2, \cdots, a_k\right)$ is called a composition of $n$.

:::

### Theorem

*For all positive integers $n$ and $k$, the number of weak compositions of $n$ into $k$ parts is*
$$
\left(\begin{array}{c}
n+k-1 \\
k-1
\end{array}\right)=\left(\begin{array}{c}
n+k-1 \\
n
\end{array}\right) .
$$

#### Proof

The problem is certainly equivalent to counting the number of ways of putting $n$ identical balls into $k$ different boxes. Place the $k$ boxes in a line, then place the balls in them in some way and align them in the middle of the boxes. This creates a long line consisting of $n$ balls and $k-1$ walls separating the $k$ boxes from each other. Note that simply knowing in which order the $n$ identical balls and $k-1$ separating walls follow each other is the same as knowing the number of balls in each box. So our task is reduced to finding the number of ways to permute the multiset consisting of $n$ balls and $k-1$ walls. This number is
$$
\frac{(n+k-1) !}{n ! \cdot(k-1) !}
$$

### Corollary 1

*For all positive integers $n$ and $k$, the number of compositions of $n$ into $k$ parts is $\left(\begin{array}{c}n-1 \\ k-1\end{array}\right)$.*

#### Proof

What if a grandparent insists on giving at least one ball to each child? The problem is not any harder. First we can give one ball to each child, then give away the remaining 16 balls to the four children in any of $\left(\begin{array}{c}16+4-1 \\ 4-1\end{array}\right)=$ $\left(\begin{array}{c}19 \\ 3\end{array}\right)$ ways. The generalization of this argument to $n$ balls and $k$ children is the following statement.

### Corollary 2

*For all positive integers n, the number of all compositions of $n$ is $2^{n-1}$.*

#### Proof 1

A composition of $n$ will have at least one and at most $n$ parts. So the total number of compositions of $n$ is
$$
\sum_{k=1}^n\left(\begin{array}{l}
n-1 \\
k-1
\end{array}\right)=2^{n-1}
$$
Indeed, the left-hand side is the number of all subsets of $[n-1]$, first enumerated by their size $k$, and then summed over $k \in[n]$.

#### Proof 2

We prove the statement by induction on $n$. For $n=1$, the statement is true as the integer 1 has one composition. Now assume that the statement is true for $n$, and take all $2^{n-1}$ compositions of $n$. For each such composition $C$, we will define two different compositions of $n+1$. First, add one to the first element of $C$. This way we get a composition of $n+1$ with the first element at least 2. Second, take $C$, and write an additional 1 to its front. This way we get a composition of $n+1$ with first element 1 . It is clear that different compositions of $n$ lead to different compositions of $n+1$ this way. Each decomposition of $n+1$ can be obtained in exactly one of these two ways. Therefore, it follows that $n+1$ has twice as many compositions as $n$, which was to be proved.

## Set Partitions

:::note Definition

A partition of the set $[n]$ is a collection of non-empty blocks so that each element of $[n]$ belongs to exactly one of these blocks.

:::

The number of partitions of $[n]$ into $k$ nonempty blocks is denoted by $S(n, k)$. The numbers $S(n, k)$ are called the Stirling numbers of the second kind.

### Theorem

*For all positive integers $k \leq n$,*
$$
S(n, k)=S(n-1, k-1)+k \cdot S(n-1, k) .
$$

#### Proof

As before, we can obtain a combinatorial proof by taking a close look at one particular element, say the maximum element $n$. If this element forms a singleton block, then the remaining $n-1$ elements have exactly $S(n-1, k-1)$ ways to complete the partition. These partitions are enumerated by the first member of the right-hand side. If, on the other hand, the element $n$ does not form a block by itself, then the remaining $n-1$ elements must form a partition with $k$ blocks in one of $S(n-1, k)$ ways. Then we can add $n$ into any of the $k$ blocks formed by this partition, multiplying the number of all our possibilities by $k$. These partitions are enumerated by the second member of the right-hand side. As the left-hand side enumerates all partitions of $[n]$ into $k$ blocks, the claim is proved.

### Corollary 1

*The number of all surjective functions $f:[n] \rightarrow[k]$ is $k ! \cdot S(n, k)$.*

#### Proof

Such a function defines a partition of $[n]$. The blocks are the subsets of elements that are mapped into the same element $i \in[k]$. Therefore, the blocks are labeled, and there are exactly $k$ of them, so the proof follows from the previous paragraph.

An interesting consequence of this is the following unexpected corollary. It is surprising as it shows that $x^n$, this very compact expression, is in fact a sum of $n+1$ terms involving Stirling numbers.

### Corollary 2

*For all real numbers $x$, and all non-negative integers $n$,*
$$
x^n=\sum_{k=0}^n S(n, k)(x)_k .
$$

#### Proof

Both sides are polynomials of $x$ of degree $n$. So if we can show that they agree for more than $n$ values of $x$, we will be done. We will prove an even stronger statement, namely that the two sides agree for all positive integers $x$.

So let $x$ be a positive integer. Then the left-hand side is the number of all functions from $[n]$ to $[x]$. We claim that the right-hand side is the same, enumerated according to the size of the image. Indeed, if the image of such a function is of size $k$, then there are $\left(\begin{array}{l}x \\ k\end{array}\right)$ choices for the image $I$, then, by Corollary 1, there are $k ! \cdot S(n, k)$ choices for the function itself. As $(x)_k=k ! \cdot\left(\begin{array}{l}x \\ k\end{array}\right)$, the claim is proved.

Another way of extending our enumeration of partitions is by enumerating all partitions, without restricting the number of parts.

:::note Definition

The number of all set partitions of $[n]$ into nonempty parts is denoted by $B(n)$, and is called the $n$th Bell number. We also set $B(0)=1$

:::

So $B(n)=\sum_{i=0}^n S(n, i)$. The Bell numbers also satisfy a nice recurrence relation.

### Theorem

*For all non-negative integers n,*
$$
B(n+1)=\sum_{i=0}^n\left(\begin{array}{l}
n \\
i
\end{array}\right) B(i) .
$$

#### Proof

We must prove that the right-hand side enumerates all partitions of $[n+1]$. Let us assume the element $n+1$ is in a block of size $n-i+1$. Then there are $i$ elements that are not in the same block as $n+1$. Therefore, there are $\left(\begin{array}{l}n \\ i\end{array}\right)$ ways to choose these elements, and then there are $B(i)$ ways to partition them. Summing over all possible values of $i$, we get the statement of the theorem.

## Integer Partitions

:::note Definition

Let $a_1 \geq a_2 \geq \cdots \geq a_k \geq 1$ be integers so that $a_1+$ $a_2+\cdots+a_k=n$. Then the sequence $\left(a_1, a_2, \cdots, a_k\right)$ is called a partition of the integer $n$. The number of all partitions of $n$ is denoted by $p(n)$. The number of partitions of $n$ into exactly $k$ parts is denoted by $p_k(n)$.

:::

:::note Definition

A partition of n is called *self-conjugate* if it is equal to its conjugate.

:::

### Theorem

*The number of partitions of $n$ into at most $k$ parts is equal to that of partitions of $n$ into parts not larger than $k$.*

#### Proof

The first number is equal to that of Ferrers shapes of size $n$ with at most $k$ rows. The second number is equal to that of Ferrers shapes with at most $k$ columns. Finally, these two sets of Ferrers shapes are equinumerous as one can see by taking conjugates.

### Theorem

*The number of partitions of $n$ into distinct odd parts is equal to that of all self-conjugate partitions of $n$.*

#### Proof

We define a bijection $f$ from the set of self-conjugate partitions of $n$ onto that of partitions of $n$ into distinct odd parts as follows. Take any self-conjugate partition $\pi=\left(\pi_1, \pi_2, \cdots, \pi_t\right)$ of $n$. Take its Ferrers shape, and remove all the boxes from its first row and first column. As $\pi$ is selfconjugate, this means removing $2 \pi_1-1$ boxes. Set $f(\pi)_1=2 \pi_1-1$, that is, make the first part of the image of $\pi$ of size $2 \pi_1-1$. Then continue this way. That is, remove the first row and column of the remaining Ferrers shape. This means removing $2 \pi_2-3$ boxes. So set $f(\pi)_2=2 \pi_2-3$. Continue this way until the entire Ferrers shape is removed. The resulting partition will be of the form $f(\pi)=\left(2 \pi_1-1,2 \pi_2-3, \cdots, 2 \pi_i-(2 i-1), \cdots\right)$. So it will indeed be a partition of $n$ into odd parts, and the parts will all be distinct, as we had $\pi_1 \geq \pi_2 \geq \cdots \geq \pi_t$. We note that the set of all boxes consisting of one fixed box $b$, all boxes below $b$, and all boxes on the right of $b$, is often called a hook. Using this terminology, we can say that in each step of our algorithm, we remove the hook of the box that is currently in the top left corner of our Ferrers shape.

To see that $f$ is a bijection, it suffices to prove that for any partition $\alpha$ of $n$ into distinct odd parts, there exists exactly one self-conjugate partition $\pi$ of $n$ so that $f(\pi)=\alpha$. Indeed, let $\alpha=\left(2 a_1-1,2 a_2-3, \cdots, 2 a_u-(2 u-1)\right)$. Then it follows from the definition of $f$ that if $f(\pi)=\alpha$, then the first row and column of $\pi$ must each contain $a_1$ boxes, the second row and second column of $\pi$ must each contain $a_2$ additional boxes, and so on. So we can build up the unique Ferrers shape whose partition has image $\alpha$, proving our claim.