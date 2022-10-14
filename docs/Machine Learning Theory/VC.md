---
id: Machine Learning Theory - VC
title: VC-Dimension
sidebar_position: 5
---

### Definition (Shattering)

A hypothesis class $H$ shatters a finite set $C \subset X$ if the restriction of $H$ to $C$ is the set of all functions from $C$ to $\{0, 1\}$. That is, $|H_C| = 2^{|C|}$.

### Corollary

*Let $H$ be a hypothesis class of functions $X to \{0, 1\}$. Let m be a training set size. Assume that there exists a set $C \subset X$ of size 2m that is shattered by $H$. Then, for any learning algorithm, A, there exist a distribution $D$ over$X \times \{0, 1\}$ and a predictor $h \in H$ such that $L_D(h) = 0$ but with probability of at least $1/7$ over the choice of $S \sim D^m$ we have that $L_D(A(S)) \ge 1/8$*  
*Philosophically, if someone can explain every phenomoenon, his explanations are worthless*

### Definition (VC Dimension)

The VC-dimension of a hypothesis class $H$, denoted $VCdim(H)$, is the maximal size of a set $C \subset X$ that can be shattered by $H$. If $H$ can shatter sets of arbitrarily large size we say that $H$ has infinite VC-dimension.

### Theorem

*Let $H$ be a class of infinite VC-dimension. Then, H is not PAC learnable.*

#### Proof

Since $H$ has in infinite VC-dimension, for any training set size m, there exists a shattered set of size 2m, and the claim follows by the previous corollary.

### How to show $VCdim(H) = d$?

1. There exists a set $C$ of size $d$ that is shattered by $H$.
2. Every set $C$ of size $d+1$ is not shattered by $H$.

### Example for finite classes

For any finite hypothesis class $H$, we have $VCdim(H) \le \log{|H|}$. This is because for any set $C, |H_C| \le |H|$. Therefore, if $2|C| > |H|$, then we cannot shatter $C$.  

Will consider adding some more examples.

### Definition (Growth Function)

Let $H$ be a hypothesis class. Then the growth function of $H$, denoted $\tau_H : \mathbb{N} \to \mathbb{N}$, is defined as
$$
\begin{gather*}
\tau_H(m)=\max_{C \subset X:|C|=m} |H_C|.
\end{gather*}
$$

### Sauer's Lemma

*Let $H$ be a hypothesis class with $VCdim(H) \le d < \infty$. Then, for all $m, \tau_H(m) \le \sum_{i=0}^d {m \choose i}$. In particular, if $m > d + 1$ then $\tau_H(m) \le (em/d)^d$*

#### Proof

$$
\begin{align*}
{k \choose j} & = {k! \over j!(k-1)!} \\
& = {k(k-1)\cdots (k-j+1) \over j!} \\
& = {k \over d}{k-1 \over d} \cdots {k-j+1 \over d}{d^j \over j!} \\
& < ({k \over d})^j {d^j \over j!} \\
& \le ({k \over d})^d {d^j \over j!}
\end{align*}
$$
Hence,
$$
\begin{align*}
\sum_{j=0}^d {k \choose j} & \le \sum_{j=0}^d ({k \over d})^d {d^j \over j!} \\
& \le ({k \over d})^d \sum_{j=0}^\infty {d^j \over j!} \\
& = ({ek \over d})^d
\end{align*}
$$

### Theorem

*Let $H$ be a class and let $\tau_H$ be its growth function. Then, for every $D$ and every $\delta \in (0, 1)$, with probability of at least $1-\delta$ over the choice of $S \sim D^m$ we have*
$$
\begin{gather*}
|L_D(h) - L_S(h)| \le {4+\sqrt{\log{(\tau_H(2m))}} \over \delta\sqrt{2m}}
\end{gather*}
$$
For simplicity assume that $sqrt{d\log{(2em/d)}} \ge 4$; hence,
$$
\begin{gather*}
|L_D(h) - L_S(h)| \le {1 \over \delta} \sqrt{{2d\log{(2em/d)} \over m}}
\end{gather*}
$$

### Proof

Long, but wait for it