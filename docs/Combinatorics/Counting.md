---
id: Combinatorics - Counting
title: Elementry Counting Problems
sidebar_position: 3
---

### Permutations (Definition)

The arrangement of different objects into a linear order using each object exactly once is called a permutation of these objects. The number $n \dot (n-1) \dot (n-2) \cdots 2 \dot 1$ of all permutations of $n$ objects is called $n$ *factorial*, and is denotes by $n!$.

#### Theorem 1

*The number of all permutations of an n-element set is $n!$.*

#### Theorem 2

*Let $n, k, a_1, a_2, \cdots, a_k$ be nonnegative integers satisfying $a_1+a_2+\cdots+a_k=n$. Consider a multiset of $n$ objects, in which $a_i$ objects are of type $i$, for all $i \in[k]$. Then the number of ways to linearly order these objects is*
$$
\frac{n !}{a_{1} ! \cdot a_{2} ! \cdots \cdots a_{k} !}
$$

### Strings over a Finite Alphabet

#### Theorem

*The number of $k$-digit strings over an $n$-element alphabet is $n^k$.*

#### Proof

We can choose the first digit in $n$ different ways. Then, we can choose the second digit in n different ways as well since we are allowed to use the same digit again (unlike in case of permutations). Similarly, we can choose the third, fourth, etc., kth element in n different ways. We can make all these choices independently from each other, so the total number of choices is $n^k$.

#### Defintion (Bijection)

Let $X$ and $Y$ be two finite sets, and let $f: X \rightarrow Y$ be a function so that
(1) if $f(a)=f(b)$, then $a=b$, and
(2) for all $y \in Y$ there is an $x \in X$ so that $f(x)=y$,
then we say that $f$ is a bijection from $X$ onto $Y$. Equivalently, $f$ is a bijection if for all $y \in Y$, there exists a unique $x \in X$ so that $f(x)=y$.
In other words, a bijection matches the elements of $X$ with the elements of $Y$, so that each element will have exactly one match.

The functions that have only one of the two defining properties of bijections also have their own names.

#### Definition (Injection and Surjection)

Let $f: X \rightarrow Y$ be a function. If $f$ satisfies criterion (1) of the bijection definition, then we say that $f$ is one-to-one or injective, or is an injection. If $f$ satisfies criterion (2), then we say that $f$ is onto or surjective, or is a surjection.

#### Proposition

*Let $X$ and $Y$ be two finite sets. If there exists a bijection $f$ from $X$ onto $Y$, then $X$ and $Y$ have the same number of elements.*

#### Proof

The bijection $f$ matches elements of $X$ to elements of $Y$, in other words it creates pairs with one element from $X$ and one from $Y$ in each pair. If $f$ created $m$ pairs, then both $X$ and $Y$ have $m$ elements.

#### Theorem

*Let $n$ and $k$ be positive integers satisfying $n \geq k$. Then the number of $k$-digit strings over an n-element alphabet in which no letter is used more than once is*
$$
n(n-1) \cdots(n-k+1)=\frac{n !}{(n-k) !} .
$$

#### Proof

Indeed, we have $n$ choices for the first digit, $n-1$ choices for the second digit, and so on, just as we did in the case of factorials. The only difference is that here we do not necessarily use all our $n$ objects, we stop after choosing $k$ of them.

### Choice Problems (Definition)

The number of $k$-element subsets of $[n]$ is denoted $\left(\begin{array}{l}n \\ k\end{array}\right)$ and is read " $n$ choose $k$ ".

The numbers $\left(\begin{array}{l}n \\ k\end{array}\right)$ are often called binomial coefficients.

#### Theorem

*For all nonnegative integers $k \leq n$, the equality*
$$
\left(\begin{array}{l}
n \\
k
\end{array}\right)=\frac{n !}{k !(n-k) !}=\frac{(n)_k}{k !}
$$
*holds.*

#### Proof

To select a $k$-element subset of [n], we first select a $k$-element string in which the digits are elements of $[n]$. By Theorem 3.6, we can do that in $n ! /(n-k) !$ different ways. However, in these strings the order of the elements does matter. In fact, each $k$-element subset occurs $k$ ! times among these strings as its elements can be permuted in $k$ ! different ways. Therefore, the number of $k$-element subsets is $1 / k$ ! times the number of $k$-element strings, and the proof follows.

#### Definition

Let $S \subseteq[n]$. Then the complement of $S$, denoted $S^c$ is the subset of $[n]$ that consists precisely of the elements that are not in $S$. In other words, $S^c$ is the unique subset of $[n]$ that for all $i \in[n]$ satisfies the following statement: $i \in S^c$ if and only if $i \notin S$.

The following proposition summarizes some straightforward properties of the numbers $\left(\begin{array}{l}n \\ k\end{array}\right)$. We choose to announce these easy statements as a proposition since they will be used incessantly in the coming sections.

#### Proposition

For all nonnegative integers $k \leq n$, the following hold.
1.
$$
\left(\begin{array}{l}
n \\
k
\end{array}\right)=\left(\begin{array}{c}
n \\
n-k
\end{array}\right) .
$$
2.
$$
\left(\begin{array}{l}
n \\
0
\end{array}\right)=\left(\begin{array}{l}
n \\
n
\end{array}\right)=1 .
$$

#### Proof

1. We set up a bijection $f$ from the set of all $k$-element subsets of $[n]$ onto that of all $n-k$-element subsets of $n$. This $f$ will be simplicity itself: it will map any given $k$-element subset $S \subseteq[n]$ into its complement $S^c$. Then for any $n-k$-element subset $T \subseteq[n]$, there is exactly one $S$ so that $f(S)=T$, namely $S=T^c$. So $f$ is indeed a bijection, proving that the number of $k$-element subsets of $[n]$ is the same as that of $n-k$-element subsets of $[n]$, which, by definition, means that $\left(\begin{array}{l}n \\ k\end{array}\right)=\left(\begin{array}{c}n \\ n-k\end{array}\right)$.
2. The first equality is a special case of the claim of part 1 , with $k=0$. To see that $\left(\begin{array}{l}n \\ 0\end{array}\right)=1$, note that the only 0 -element subset of $[n]$ is the empty set.

### Summary

![](/img/Combinatorics/counting.png)