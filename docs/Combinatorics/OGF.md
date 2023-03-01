---
id: Combinatorics - OGF
title: Generating Functions
sidebar_position: 7
---
---

## Ordinary Generating Functions

### Recurrence Relations and Generating Functions

:::note Definition

Let $\left\{f_n\right\}_{n \geq 0}$ be a sequence of real numbers. Then the formal power series $F(x)=\sum_{n \geq 0} f_n x^n$ is called the ordinary generating function of the sequence $\left\{f_n\right\}_{n \geq 0}$.

:::

### Example

Let $a_{n+2}=3 a_{n+1}-2 a_n$ if $n \geq 0$, and let $a_0=0$, and let $a_1=1$. Find an explicit formula for $a_n$.

#### Solution

Let $G(x)=\sum_{n \geq 0} a_n x^n$. Multiply both sides of the recurrence relation by $x^{n+2}$, and sum over all natural numbers $n$, to get
$$
\sum_{n \geq 0} a_{n+2} x^{n+2}=3 \sum_{n \geq 0} a_{n+1} x^{n+2}-2 \sum_{n \geq 0} a_n x^{n+2},
$$
which is equivalent to
$$
G(x)-x=3 x G(x)-2 x^2 G(x) .
$$
Expressing $G(x)$, we get
$$
G(x)=\frac{x}{1-3 x+2 x^2} .
$$
The denominator of the right-hand side is again a quadratic polynomial. Note that $1-3 x+2 x^2=(x-1)(2 x-1)$. Therefore, we are going to find real numbers $A$ and $B$ so that
$$
G(x)=\frac{x}{1-3 x+2 x^2}=\frac{A}{x-1}+\frac{B}{2 x-1} .
$$
After rearranging, we get
$$
x=(2 A+B) x-(A+B) .
$$
Two polynomials are the same if and only if their corresponding coefficients are the same. Therefore, it follows that $2 A+B=1$, and $A+B=0$. So $A=1$, and $B=-1$. Consequently,
$$
G(x)=\frac{x}{1-3 x+2 x^2}=\frac{-1}{1-x}+\frac{1}{1-2 x} .
$$
Both terms on the right-hand side are very easy to expand now. So
$$
G(x)=-\sum_{n \geq 0} x^n+\sum_{n \geq 0} 2^n x^n=\sum_{n \geq 0}\left(2^n-1\right) x^n
$$
and therefore, $a_n=2^n-1$.

### Products of Generating Functions

:::note Lemma

Let $\left\{a_n\right\}_{n \geq 0}$ and $\left\{b_n\right\}_{n \geq 0}$ be two sequences, and let $A(x)=$ $\sum_{n \geq 0} a_n x^n$, and $B(x)=\sum_{n \geq 0} b_n x^n$ be their respective generating functions. Define $c_n=\sum_{i=0}^n a_i b_{n-i}$, and let $C(x)=\sum_{n \geq 0} c_n x^n$. Then
$$
A(x) B(x)=C(x)
$$
In other words, the coefficient of $x^n$ in $A(x) B(x)$ is $c_n=\sum_{i=0}^n a_i b_{n-i}$.

:::

#### Proof

When we multiply the infinite sum $A(x)=a_0+a_1 x+a_2 x^2+\cdots$ and the sum $B(x)=b_0+b_1 x+b_2 x^2+\cdots$, we multiply each term of the first sum by each term of the second sum, then add all these products. So a typical product is of the form $a_i x^i \cdot b_j x^j$. The exponent of $x$ in this product will be $n$ if and only if $j=n-i$, and the claim follows.

:::info Theorem (The Product Formula)

Let $a_n$ be the number of ways to build a certain structure on an $n$-element set, and let $b_n$ be the number of way to build another structure on an $n$-element set. Let $c_n$ be the number of ways to separate the set $[n]$ into the intervals $S=\{1,2, \cdots, i\}$ and $T=\{i+1, i+2, \cdots, n\}$, (the intervals $S$ and $T$ are allowed to be empty), and then to build a structure of the first kind on $S$, and a structure of the second kind on $T$. Let $A(x), B(x)$, and $C(x)$ be the respective generating functions of the sequences $\left\{a_n\right\},\left\{b_n\right\}$, and $\left\{c_n\right\}$. Then
$$
A(x) B(x)=C(x) \text {. }
$$

:::

#### Proof

There are $a_i$ ways to build a structure of the first kind on $S$, and $b_{n-i}$ ways to build a structure of the second kind on $T$. This is true for all $i$, as long as $0 \leq i \leq n$. Therefore, $c_n=\sum_{i=0}^n a_i b_{n-i}$, and our claim follows from the Lemma.

### Example I

If $p(n)$ denotes the number of partitions of the integer $n$, then
$$
\begin{gathered}
\sum_{n \geq 0}^{\infty} p(n) x^n=\prod_{k=1}^{\infty} \frac{1}{1-x^k} \\
=\left(1+x+x^2+x^3+\cdots\right)\left(1+x^2+x^4+x^6+\cdots\right)\left(1+x^3+x^6+x^9+\cdots\right) \cdots .
\end{gathered}
$$

#### Solution

Same as the proof of the previous example, just here there is no limit on the size of the parts, and therefore, there are infinitely many parentheses on the right-hand side.

### Example II

The number $p_{\text {odd }}(n)$ of partitions of $n$ into odd parts is equal to the number $p_d(n)$ of partitions of $n$ into all distinct parts.

#### Solution

The crucial idea is this. It suffices to show that the generating functions of the two sequences are equal. It is clear that
$$
F(x)=\sum_{n \geq 0} p_{\text {odd }}(n) x^n=\prod_{\substack{i \geq 1 \\ i \text { idd }}} \frac{1}{1-x^i}
$$
and
$$
G(x)=\sum_{n \geq 0} p_d(n) x^n=\prod_{i \geq 1}\left(1+x^i\right)=\prod_{i \geq 1} \frac{1-x^{2 i}}{1-x^i} .
$$
Note that after cancellations, the denominator of $G(x)$ will contain $\left(1-x^i\right)$ if and only if $i$ is odd, and will therefore be the same as the denominator of $F(x)$. As both numerators are equal to $1$, the proof follows.

---

## Exponential Generating Functions

:::note Definition

Let $\left\{f_n\right\}_{n \geq 0}$ be a sequence of real numbers. Then the formal power series $F(x)=\sum_{n \geq 0} f_n \frac{x^n}{n !}$ is called the exponential generating function of the sequence $\left\{f_n\right\}_{n \geq 0}$.

:::

### Example I

Let $k$ be a fixed positive integer. Find the exponential generating function $S_k(x)=\sum_{n \geq k} S(n, k) x^n / n$ ! of the Stirling numbers $S(n, k)$ of the second kind.

#### Solution

To obtain a partition of $[n]$ into $k$ blocks, we need to partition $[n]$ into $k$ nonempty blocks, and then "do nothing" on each of those blocks. There is one way to do nothing on any nonempty block, therefore, each task has generating function
$$
A(x)=\sum_{k \geq 1} \frac{x^k}{k !}=e^x-1 .
$$
If the order of the blocks in a partition mattered, we could simply say that the generating function of the combined task is $A^k(x)$ by the Product formula. However, the order of the blocks does not matter, therefore
$$
S_k(x)=\frac{1}{k !}\left(e^x-1\right)^k
$$
We can now get an explicit formula for $S(n, k)$ by computing the coefficient of $x^n / n$ ! in $S_k(x)$.
A particularly useful property of exponential generating functions is that their derivatives are very easy to describe. Indeed, $\left(\frac{x^{n+1}}{(n+1) !}\right)^{\prime}=\frac{x^n}{n !}$, and therefore
$$
\left(\sum_{n \geq 0} a_n \frac{x^n}{n !}\right)^{\prime}=\sum_{n \geq 0} a_{n+1} \frac{x^n}{n !} .
$$
The following example makes good use of this observation.

### Example II

Let $B(x)$ be the exponential generating function of the Bell numbers $B(n)$. Prove that $B(x)=e^{e^x-1}$.

#### Solution

We know that $B(n+1)=\sum_{i=0}^n B(i)\left(\begin{array}{l}n \\ i\end{array}\right)$ if $n \geq 0$, and $B(0)=1$. Multiply both sides by $x^n / n$ ! and sum over all $n \geq 0$ to get
$$
\sum_{n \geq 0} B(n+1) \frac{x^n}{n !}=\sum_{n \geq 0} \sum_{i=0}^n B(i)\left(\begin{array}{c}
n \\
i
\end{array}\right) \frac{x^n}{n !} .
$$
Now note that the left-hand side is $B^{\prime}(x)$, while the right-hand side is $B(x) e^x$ (proof is skipped). Therefore, we get
$$
\begin{gathered}
B^{\prime}(x)=B(x) e^x, \\
\frac{B^{\prime}(x)}{B(x)}=e^x,
\end{gathered}
$$
and, taking integrals,
$$
\ln B(x)=e^x+C .
$$
Setting $x=0$, the left-hand side is $\ln 1=0$, therefore we must choose $C=$ $-1$ on the right-hand side. Therefore, $\ln B(x)=e^x-1$, and $B(x)=e^{e^x-1}$ as claimed.