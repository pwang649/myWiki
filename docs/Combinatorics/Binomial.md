---
id: Combinatorics - Binomial
title: Binomial Identities
sidebar_position: 4
---

## The Binomial Theorem

### Theorem I

*For all nonnegative integers $n$,*
$$
(x+y)^n=\sum_{k=0}^n\left(\begin{array}{l}
n \\
k
\end{array}\right) x^k y^{n-k} .
$$

#### Proof

Consider the product of $n$ sums, $(x+y)(x+y) \cdots(x+y)$. When computing this product, we take one summand from each parentheses, multiply them together, then repeat this in all of $2^n$ possible ways and add the results. We get a product equal to $x^k y^{n-k}$ each time we take $k$ summands equal to $x$. There are $\left(\begin{array}{l}n \\ k\end{array}\right) k$-element subsets of the set of all $n$ parentheses, so we will get such a term $\left(\begin{array}{l}n \\ k\end{array}\right)$ times, and the proof is complete.

### Theorem II

*For all positive integers $n$, the alternating sum of binomial coefficients $\left(\begin{array}{l}n \\ k\end{array}\right)$ is zero. In other words,*
$$
\sum_{k=0}^n(-1)^k \cdot\left(\begin{array}{l}
n \\
k
\end{array}\right)=0
$$

#### Proof

Applying the binomial theorem with $x=-1$ and $y=1$ we immediately get our claim.

### Theorem III

*For all nonnegative integers $n$ and $k$, the identity*
$$
\left(\begin{array}{l}
n \\
k
\end{array}\right)+\left(\begin{array}{c}
n \\
k+1
\end{array}\right)=\left(\begin{array}{l}
n+1 \\
k+1
\end{array}\right)
$$
*holds.*

#### Proof

The right-hand side is, by definition, the number of $k+1$-element subsets of $[n+1]$. Such a subset $S$ either contains the element $n+1$, or it does not. If it does, then the rest of $S$ is a $k$-element subset of $[n]$, and these are enumerated by the first member of the left-hand side. If it does not, then $S$ is a $k+1$-element subset of $[n]$, and these are enumerated by the second member of the left-hand side.

### Theorem IV

*For all nonnegative integers n,*
$$
2^n=\sum_{k=0}^n\left(\begin{array}{l}
n \\
k
\end{array}\right)
$$

#### Proof I

Both sides count the number of all subsets of an $n$-element set. The left-hand side counts directly, while the right-hand side counts the number of $k$-element subsets, then sums over $k$.

#### Proof II
Apply the binomial theorem with $x=y=1$.

### Theorem V

*For all nonnegative integers $k$ and $n$,*
$$
\left(\begin{array}{l}
k \\
k
\end{array}\right)+\left(\begin{array}{c}
k+1 \\
k
\end{array}\right)+\left(\begin{array}{c}
k+2 \\
k
\end{array}\right)+\cdots+\left(\begin{array}{l}
n \\
k
\end{array}\right)=\left(\begin{array}{l}
n+1 \\
k+1
\end{array}\right) .
$$

#### Proof

The right-hand side clearly counts all $k+1$-element subsets of $[n+1]$. The left-hand side counts the same, separated into cases according to the largest element. That is, there are $\left(\begin{array}{l}k \\ k\end{array}\right)$ subsets of $[n+1]$ that have $k+1$ elements whose largest element is $k+1$; there are $\left(\begin{array}{c}k+1 \\ k\end{array}\right)$ subsets of $[n+1]$ that have $k+1$ elements whose largest element is $k+2$, and so on. In general, there are $\left(\begin{array}{c}k+i \\ k\end{array}\right)$ subsets of $[n+1]$ that have $k+1$ elements whose largest element is $k+i+1$, for all $i \leq n-k$. Indeed, if the largest element of such a subset is $k+i+1$, then its remaining $k$ elements must form a subset of $[k+i]$.

### Theorem VI

*For all nonnegative integers $n$, the identity*
$$
\sum_{k=1}^n k\left(\begin{array}{l}
n \\
k
\end{array}\right)=n 2^{n-1}
$$
holds.
Before proving the theorem, note that it is not even obvious why
$$
\frac{\sum_{k=1}^n k\left(\begin{array}{l}
n \\
k
\end{array}\right)}{2^{n-1}}
$$
*should be an integer. Our proof will show that it is not only an integer, it is equal to $n$. This hopefully convinces the reader that binomial coefficient identities are beautiful.*

#### Proof I

Both sides count the number of ways to choose a committee among $n$ people, then to choose a president from the committee. On the left-hand side, we first choose a $k$-member committee in $\left(\begin{array}{l}n \\ k\end{array}\right)$ ways, then we choose its president in $k$ ways. On the right-hand side, we first choose the president in $n$ ways, then we choose a subset of the remaining $(n-1)$-member set of people for the role of non-president committee members in $2^{n-1}$ ways.

We provide another proof that uses the binomial theorem. It also gives us an early hint that sometimes very finite-looking problems, such as choice problems, can be solved by using methods from infinite calculus, such as functions and their derivatives.

#### Proof II

Apply the binomial theorem with $y=1$ to get the identity
$$
(x+1)^n=\sum_{k=0}^n\left(\begin{array}{l}
n \\
k
\end{array}\right) x^k .
$$
Both sides are differentiable functions of the variable $x$. So we can take their derivatives with respect to $x$, and they must be equal. This yields
$$
n(x+1)^{n-1}=\sum_{k=1}^n k \cdot\left(\begin{array}{l}
n \\
k
\end{array}\right) x^{k-1} .
$$
Now substitute $x=1$.

### Theorem VII (Vandermonde's identity)

*For all positive integers $n$, $m$, and $k$,*
$$
\left(\begin{array}{c}
n+m \\
k
\end{array}\right)=\sum_{i=0}^k\left(\begin{array}{c}
n \\
i
\end{array}\right)\left(\begin{array}{c}
m \\
k-i
\end{array}\right) .
$$

#### Proof

The left-hand side counts all $k$-element subsets of $[n+m]$. The right-hand side counts the same, according to the number of elements chosen from $[n]$. Indeed, we can first choose $i$ elements from $[n]$ in $\left(\begin{array}{l}n \\ i\end{array}\right)$ ways, then choose the remaining $k-i$ elements from the set $\{n+1, n+2, \cdots, n+m\}$ in $\left(\begin{array}{c}m \\ k-i\end{array}\right)$ ways.

## The Multinomial Theorem

### Definition

Let $n=\sum_{i=1}^k a_i$, where $n$ and $a_1, a_2, \cdots, a_k$ are nonnegative integers. We define
$$
\left(\begin{array}{c}
n \\
a_1, a_2, \cdots, a_k
\end{array}\right)=\frac{n !}{a_{1} ! \cdot a_{2} ! \cdots a_{k} !} .
$$
The numbers $\left(\begin{array}{c}n \\ a_1, a_2, \cdots, a_k\end{array}\right)$ are called multinomial coefficients.

### Theorem I (Multinomial theorem)

*For all nonnegative integers $n$ and $k$, the equality*
$$
\left(x_1+x_2+\cdots+x_k\right)^n=\sum_{a_1, a_2, \cdots, a_k}\left(\begin{array}{c}
n \\
a_1, a_2, \cdots, a_k
\end{array}\right) x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}
$$
*holds. Here the sum is taken over all $k$-tuples of nonnegative integers $a_1, a_2, \cdots, a_k$ such that $n=\sum_{i=1}^k a_i$*

#### Proof

We have to show that the term $x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}$ can be obtained in exactly $\left(\begin{array}{c}n \\ a_1, a_2, \cdots, a_k\end{array}\right)$ ways as a product of $k$ variables, one from each parentheses of $\left(x_1+x_2+\cdots+x_k\right) \cdots\left(x_1+x_2+\cdots+x_k\right)$. To obtain such a term, we have to choose $x_i$ from exactly $i$ parentheses, for all $i \in[k]$.

Now let us take $a_i$ copies of $x_i$, for all $i \in[k]$, and order these $n$ letters linearly. Theorem $3.5$ shows that this can be done in exactly $\left(\begin{array}{c}n \\ a_1, a_2, \cdots, a_k\end{array}\right)$ ways. On the other hand, each linear ordering $p$ defines a natural way of choosing variables from the parentheses. Indeed, if the $j$ th letter of $p$ is $x_i$, then from the $j$ th parentheses, we choose $x_i$. This way our $\left(\begin{array}{c}n \\ a_1, a_2, \cdots, a_k\end{array}\right)$ linear orderings will produce exactly $\left(\begin{array}{c}n \\ a_1, a_2, \cdots, a_k\end{array}\right)$ terms that are equal to $x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}$.

It is clear that this procedure establishes a bijection from the set of linear orderings of $n$ letters, $a_i$ of which is equal to $x_i$ for all $i \in[k]$ onto that of terms of $\left(x_1+x_2+\cdots+x_k\right)^n$ that are equal to $x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}$. Therefore, the coefficient of $x_1^{a_1} x_2^{a_2} \cdots x_k^{a_k}$ in $\left(x_1+x_2+\cdots+x_k\right)^n$ is precisely $\left(\begin{array}{c}n \\ a_1, a_2, \cdots, a_k\end{array}\right)$, and the proof follows.