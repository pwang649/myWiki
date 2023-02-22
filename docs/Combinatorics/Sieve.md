---
id: Combinatorics - Sieve
title: Sieve + Cycles
sidebar_position: 6
---
---

## Inclusion-Exclusion

### Sieve Formula, or Principle of Inclusion-Exclusion

*Let $A_1, A_2, \cdots, A_n$ be finite sets. Then*
$$
\left|A_1 \cup A_2 \cup \cdots \cup A_n\right|=\sum_{j=1}^n(-1)^{j-1} \sum_{i_1, i_2, \cdots, i_j}\left|A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_j}\right|,
$$
*where $\left\{i_1, i_2, \cdots, i_j\right\}$ ranges over all $j$-element subsets of $[n]$.*

#### Proof

Notice that an element not in $A_1 \cup A_2 \cup \cdots \cup A_n$ is not counted in any term on the right-hand side. Thus we only have to show that each element of $A_1 \cup A_2 \cup \cdots \cup A_n$ is counted exactly once on the right-hand side. To do that, pick any element $x \in A_1 \cup A_2 \cup \cdots \cup A_n$. Let $S \subseteq[n]$ be the set of indices so that $x \in A_i$ if and only if $i \in S$, and let $s=|S|$. Note that $s \geq 1$. As $x \in A_i$ only if $i \in S$, a $t$-fold intersection $A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_t}$ cannot contain $x$ unless $\left(i_1, i_2, \cdots, i_t\right) \subseteq S$. So when determining the number of times $x$ is counted by the right-hand side, we only have to consider the intersections involving the $A_i$ which are indexed by $S$. On the other hand, each of these intersections does contain $x$. Therefore, the right-hand side counts $x$ once for each of these subsets, with alternating signs. So altogether, the right-hand side counts the element $x$
$$
s-\left(\begin{array}{l}
s \\
2
\end{array}\right)+\left(\begin{array}{l}
s \\
3
\end{array}\right)-\cdots+(-1)^{s-1}\left(\begin{array}{l}
s \\
s
\end{array}\right)=1
$$
times. To see that the left-hand side of (7.2) is indeed 1 , subtract 1 from both sides, then multiply both sides by $-1$, to get
$$
1-s+\left(\begin{array}{l}
s \\
2
\end{array}\right)-\left(\begin{array}{l}
s \\
3
\end{array}\right)-\cdots+(-1)^s\left(\begin{array}{l}
s \\
s
\end{array}\right)=0=(1-1)^s,
$$
which is true by the Binomial theorem.

### Theorem 2

*For all positive integers $n$ and $k$, the equality*
$$
S(n, k)=\frac{1}{k !} \sum_{i=0}^k(-1)^i\left(\begin{array}{c}
k \\
i
\end{array}\right)(k-i)^n=\sum_{i=0}^k(-1)^i \frac{1}{i !(k-i) !}(k-i)^n
$$
*holds.*

#### Proof

Instead of finding a formula for $S(n, k)$, we will find a formula for $k ! \cdot S(n, k)$. The latter is the number of all surjections from $[n]$ to $[k]$.

It is clear that the number of all functions from $[n]$ to $[k]$ is $k^n$ as any element of the domain can be mapped into one of $k$ elements. However, not all these functions will be surjections; many will miss one, two, or more elements of $[k]$ in their image. We have to enumerate those that do not miss any element of $k$. This sounds a little bit similar to the previous problem (there we were also interested in the number of certain objects no part of which had a certain property). It is therefore hopeful that the same approach will work here.

Let $i \in[k]$ and let $A_i$ denote the set of all functions from $[n]$ to $[k]$ whose image does not contain $i$. It is then clear that $\left|A_i\right|=(k-1)^n$ as such functions can map any element of $[n]$ into any one of $k-1$ elements. Similarly,
$$
\left|A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_j}\right|=(k-j)^n,
$$
for all $j \leq k$. Therefore, the sieve formula yields:
$$
\begin{aligned}
\left|A_1 \cup A_2 \cdots \cup A_n\right| & =\sum_{j=1}^n(-1)^{j-1} \sum_{i_1, i_2, \cdots, i_j}\left|A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_j}\right| \\
& =\sum_{i=1}^k(-1)^{i-1}\left(\begin{array}{c}
k \\
i
\end{array}\right)(k-i)^n .
\end{aligned}
$$
This is the number of functions from $[n]$ to $[k]$ whose range is not the entire set $[k]$. So the number of those with range $[k]$, in other words, the number of surjections, can be obtained by subtracting this number from that of all functions from $[n]$ to $[k]$, and our claim follows.

### Theorem 3

*Let $f$ and $g$ be functions that are defined on the subsets of $[n]$, and whose range is the set of real numbers. Let us assume that $f$ and $g$ are connected by*
$$
g(S)=\sum_{T \subseteq S} f(T) .
$$
Then
$$
f(S)=\sum_{T \subseteq S} g(T)(-1)^{|S-T|} .
$$

#### Proof

If we express $g(T)$ by values of $f$ on the right-hand side, we see that for all $U \subseteq S$, the value $f(U)$ will appear once for each set $T$ satisfying $U \subseteq T \subseteq S$. Each such appearance of $f(U)$ will be counted with a sign given by $(-1)^{|S-T|}$. The number of such subsets $T$ for which $|S-T|=i$ is equal to $\left(\begin{array}{c}|S-U| \\ i\end{array}\right)$, since $T$ is determined by the elements of $S$ that are not in $T$, and $T$ contains $U$.

Therefore, $f(U)$ will appear on the right-hand side exactly $\sum_{i=0}^{|S-U|}(-1)^i\left(\begin{array}{c}|S-U| \\ i\end{array}\right)=(1-1)^{|S-U|}$ times. This number is always zero, except when $|S-U|=0$, that is, when $S=U$. So the only term on the right-hand side that does not cancel out will be $f(S)$, and the claim is proved.

---

## Cycles in Permutations

### Lemma 1

*Let $p:[n] \rightarrow[n]$ be a permutation, and let $x \in[n]$. Then there exists a positive integer $1 \leq i \leq n$ so that $p^i(x)=x$.*

#### Proof

Consider the entries $p(x), p^2(x), \cdots, p^n(x)$. If none of them is equal to $x$, then the Pigeon-hole Principle implies that there are two of them that are equal, say $p^j(x)=p^k(x)$, with $j<k$. Then, applying $p^{-1}$ to both sides of this equation, we get $p^{j-1}(x)=p^{k-1}(x)$. Repeating this step, we get $p^{j-2}(x)=p^{k-2}(x)$, and repeating this step $j-3$ more times, we get $p(x)=p^{k-j+1}(x)$.

:::note Definition

Let $p:[n] \rightarrow[n]$ be a permutation. Let $x \in[n]$, and let $i$ be the smallest positive integer so that $p^i(x)=x$. Then we say that the entries $x, p(x), p^2(x), \cdots, p^{i-1}(x)$ form an $i$-cycle in $p$.

:::

### Corollary

*All permutations can be decomposed into the disjoint unions of their cycles.*

#### Proof

Lemma above shows that each entry is a member of a cycle. By the definition of cycles, distinct cycles are disjoint.

:::note Definition

*The number of $n$-permutations with $k$ cycles is called a signless Stirling number of the first kind, and is denoted by $c(n, k)$. The number $s(n, k)=(-1)^{n-k} c(n, k)$ is called a Stirling number of the first kind.*

:::

### Theorem 1

*Let $n$ and $k$ be positive integers satisfying $n \geq k$. Then*
$$
c(n, k)=c(n-1, k-1)+(n-1) c(n-1, k) .
$$

#### Proof

We show that the right-hand side counts all $n$-permutations with $k$ cycles, just as the left-hand side. In such a permutation, there are two possibilities for the position of the entry $n$.

1. The entry $n$ can form a cycle by itself, and then the remaining $n-1$ entries have to form $k-1$ cycles. This can happen in $c(n-1, k-1)$ ways, so the first member of the right-hand side enumerates these permutations.
2. If the entry $n$ does not form a cycle by itself, then the remaining $n-1$ entries must form $k$ cycles, and then the entry $n$ has to be inserted somehow into one of these cycles. The $k$ cycles can be formed in $c(n-1, k)$ ways, then the entry $n$ can be inserted in any of these cycles, after each element. This multiplies the number of possibilities by $n-1$, and explains the second term of the right-hand side.

### Lemma 2

*Let $n$ be a fixed positive integer. Then*
$$
\sum_{k=0}^n c(n, k) x^k=x(x+1) \cdots(x+n-1)
$$

#### Proof

We prove that the coefficients of $x^k$ on the right-hand side also satisfy the recurrence relation (Theorem 1) that is satisfied by the signless Stirling numbers of the first kind.
Let $G_n(x)=x(x+1) \cdots(x+n-1)=\sum_{k=0}^n a_{n, k} x^k$. Then
$$
\begin{aligned}
G_n(x) & =(x+n-1) G_{n-1}(x)=(x+n-1) \sum_{k=0}^{n-1} a_{n-1, k} x^k \\
& =\sum_{k=1}^n a_{n-1, k-1} x^k+(n-1) \sum_{k=0}^{n-1} a_{n-1, k} x^k .
\end{aligned}
$$
We have just proved that
$$
\sum_{k=0}^n a_{n, k} x^k=\sum_{k=1}^n a_{n-1, k-1} x^k+(n-1) \sum_{k=0}^{n-1} a_{n-1, k} x^k .
$$
In other words, we proved that two polynomials were identical. The only way that can happen is when the coefficients of the corresponding terms agree in the two polynomials. That is, the equality
$$
a_{n, k}=a_{n-1, k-1}+(n-1) a_{n-1, k}
$$
must hold for all positive integers $n$ and $k$ such that $n \geq k$. Therefore, the numbers $a_{n, k}$ and $c(n, k)$ do satisfy the same recurrence relation. As their initial terms trivially agree, that is, $c(0,0)=a_{0,0}=1, c(n, 0)=a_{n, 0}=0$ if $n>0$, this implies that $c(n, k)=a_{n, k}$.