---
id: Machine Learning Theory - Bias-Complexity
title: Bias-Complexity Trade-off
sidebar_position: 4
---

### Error Decomposition

To put it in the simplest fashion:
$$
\begin{gather*}
L_D(h_S) = \epsilon_{app} + \epsilon_{est} \; where:\epsilon_{app}=\min_{h\in H}L_D(h).
\end{gather*}
$$
Enlarging the hypothesis class will decrease the approximation error, but might increase estimation error, as a rich $H$ might lead to **overfitting**. On the other hand, chooseing $H$ to be a very small set reduces the estimation error but might increase the approximation error or, in other words, might lead to **underfitting**.

### The No-Free-Lunch Theorem

Let $A$ be any learning algorithm for binary classification over $X$ and let $m \le |X|/2$. Then there exists a distribution D over $X \times \{0, 1\}$ such that:
1. There exists a function $f:X \to \{0, 1\} \: with \: L_D(f) = 0$
2. With probability of at least $1/7$ over the choice of $S \sim D^m$ we have that $L_D(A(S)) \ge 1/8$.

#### Proof
Let the set $C$ of size $2m$ be given, where $C$ is a subset of the domain: $C \in X^{2m}$.  
Next, consider all possible $T = 2^{2m}$ labelling functions which map from $C \to \{0, 1\}$, where $|C| = 2m$.  
For each $f_i$, define a distribution $D_i$ such that $D_i$
is uniform over $C$, with labels given by $f_i$. Denote $D_i^m$ to be the distribution of $m$ i.i.d. samples from $D_i$.  
Clearly, $L_{D_i}(f_i)=0$.  
Next, we want to show:
$$
\begin{gather*}
\max_{i \in [T]} \mathbb{E}_{S \sim D_i^m}[L_{D_i}(A(S))] \ge 1/4.
\end{gather*}
$$

#### Side track

Show that this inequality implies $\exists i \in [T]$ such that with probability at least 1/7 over training set $S \sim D_i^m$, we have $L_{D_i}(A(S)) \ge 1/8$.

#### Proof (using Markov's inequality)

$$
\begin{gather*}
P(X \ge a) \ge {\mathbb{E}[X]-a \over 1-a}
\end{gather*}
$$

with $X=L_{D_i}(A(S))$, and $a=1/8$.

**Back on track.** There are $k=(2m)^m$ possible sequences of $m$ examples from $C$. Denote these sequences by $S_1,\cdots,S_k$. Also, if by the function $f_i$. Therefore, 
$$
\begin{gather*}
\mathbb{E}_{S\sim D_i^m}[L_{D_i}(A(S))]={1 \over k} \sum_{j=1}^k L_{D_i}(A(S_j^i)).
\end{gather*}
$$
Using the facts that max is greater than average is greater than min, we have
$$
\begin{align*}
{1 \over k} \sum_{j=1}^k L_{D_i}(A(S_j^i)) & \ge {1\over T}\sum_{i=1}^T {1 \over k} \sum_{j=1}^k L_{D_i}(A(S_j^i)) \\
& = {1 \over k} \sum_{j=1}^k {1\over T}\sum_{i=1}^T L_{D_i}(A(S_j^i)) \\
& \ge \min_{j\in [k]} {1\over T}\sum_{i=1}^T L_{D_i}(A(S_j^i)).
\end{align*}
$$
Next, fix any $S_j$ of size $m$. Then there are $p \ge m$ samples $v_1, \cdots, v_p \in C$ that do not appear in $S$. Clearly, $p\ge m$. Therefore, we have
$$
\begin{align*}
L_{D_i}(h) & = {1\over 2m}\sum_{x\in C} \mathbb{1} [h(x) \ne f_i(x)] \\
& \ge {1\over 2m}\sum_{r=1}^p \mathbb{1} [h(v_r) \ne f_i(v_r)] \\
& \ge {1\over 2p}\sum_{r=1}^p \mathbb{1} [h(v_r) \ne f_i(v_r)].
\end{align*}
$$
Hence,
$$
\begin{align*}
{1\over T}\sum_{i=1}^T  L_{D_i}(A(S_j^i)) & \ge {1\over T}\sum_{i=1}^T {1\over 2p}\sum_{r=1}^p \mathbb{1} [A(S_j^i)(v_r) \ne f_i(v_r)] \\
& = {1\over 2p}\sum_{r=1}^p {1\over T}\sum_{i=1}^T \mathbb{1} [A(S_j^i)(v_r) \ne f_i(v_r)] \\
& \ge {1\over 2} \min_{r\in [p]} {1\over T}\sum_{i=1}^T \mathbb{1} [A(S_j^i)(v_r) \ne f_i(v_r)].
\end{align*}
$$

Partition $f_i$ into $T/2$ pairs, where each pair $(f_i, f_{i'})$ agrees on everything except $v_l$. Every pair $(f_i, f_{i'})$ produces same labelled datasets $S_j^i, S_j^{i'}$.
$$
\begin{gather*}
\mathbb{1} [A(S_j^i)(v_r) \ne f_i(v_r)] + \mathbb{1} [A(S_j^i)(v_r) \ne f_{i'}(v_r)] \\
{1\over T}\sum_{i=1}^T \mathbb{1} [A(S_j^i)(v_r) \ne f_i(v_r)] = {1\over 2}.
\end{gather*}
$$

We can complete the proof with the following
$$
\begin{gather*}
{1\over T}\sum_{i=1}^T L_{D_i}(A(S_j^i)) \ge {1\over 2}{1\over T}{T\over 2} = {1\over 4}.
\end{gather*}
$$

#### Corollary

Let $X$ be an infinite domain set $(\mathbb{R}^d)$ and let $H$ be all possible functions from $X \to \{0, 1\}$. Then, $H$ is not PAC-learnable.

#### Proof

Assume, by way of contradiction, that the class is learnable. Choose some $\epsilon < 1/8$ and $\delta < 1/7$. By the definition of PAC learnability, there must be some learning algorithm $A$ and an integer $m=m(\epsilon, \delta)$, such that for any data-generating distribution over $X \times \{0,1\}$, if for some function $f:X\to \{0,1\}, L_D{f} = 0$, then with probability greater than $1-\delta$ when $A$ is applied to samples $S$ of size $m$, generated i.i.d. by $D, L_D(A(S)) \le \epsilon$. However, applying the No-Free-Lunch theorem, since $|X|>2m$, for every learning algorithm, there exists a distribution $D$ such that with probability greater than $1/7 > \delta, L_D(A(S)) > 1/8 > \epsilon$, which leads to the desired contradiction.