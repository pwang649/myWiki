---
id: Optimization - KKT
title: KKT
sidebar_position: 10
---

### Karush-Kuhn-Tucker Condition

We consider the following problem:
$$
\begin{aligned}
\text { minimize } & f(\boldsymbol{x}) \\
\text { subject to } & \boldsymbol{h}(\boldsymbol{x})=\mathbf{0}, \\
& \boldsymbol{g}(\boldsymbol{x}) \leq \mathbf{0},
\end{aligned}
$$
where $f: \mathbb{R}^n \rightarrow \mathbb{R}, \boldsymbol{h}: \mathbb{R}^n \rightarrow \mathbb{R}^m, m \leq n$, and $\boldsymbol{g}: \mathbb{R}^n \rightarrow \mathbb{R}^p$. For the general problem above, we adopt the following definitions.

#### Definition

An inequality constraint $g_j(\boldsymbol{x}) \leq 0$ is said to be active at $\boldsymbol{x}^*$ if $g_j\left(\boldsymbol{x}^*\right)=0$. It is inactive at $\boldsymbol{x}^*$ if $g_j\left(\boldsymbol{x}^*\right)<0$.

By convention, we consider an equality constraint $h_i(\boldsymbol{x})=0$ to be always active.

#### Definition

Let $\boldsymbol{x}^*$ satisfy $\boldsymbol{h}\left(\boldsymbol{x}^*\right)=\mathbf{0}, \boldsymbol{g}\left(\boldsymbol{x}^*\right) \leq \mathbf{0}$, and let $J\left(\boldsymbol{x}^*\right)$ be the index set of active inequality constraints:
$$
J\left(\boldsymbol{x}^*\right) \triangleq\left\{j: g_j\left(\boldsymbol{x}^*\right)=0\right\}
$$
Then, we say that $\boldsymbol{x}^*$ is a regular point if the vectors
$$
\nabla h_i\left(\boldsymbol{x}^*\right), \quad \nabla g_j\left(\boldsymbol{x}^*\right), \quad 1 \leq i \leq m, \quad j \in J\left(\boldsymbol{x}^*\right)
$$
are linearly independent.
We now prove a first-order necessary condition for a point to be a local minimizer. We call this condition the Karush-Kuhn-Tucker $(K K T)$ condition. In the literature, this condition is sometimes also called the Kuhn-Tucker condition.

### Karush-Kuhn-Tucker (KKT) Theorem

Let f, $\boldsymbol{h}, g \in$ $\mathcal{C}^1$. Let $\boldsymbol{x}^*$ be a regular point and a local minimizer for the problem of minimizing $f$ subject to $\boldsymbol{h}(\boldsymbol{x})=\mathbf{0}, \boldsymbol{g}(\boldsymbol{x}) \leq \mathbf{0}$. Then, there exist $\boldsymbol{\lambda}^* \in \mathbb{R}^m$ and $\boldsymbol{\mu}^* \in \mathbb{R}^p$ such that:
1. $\boldsymbol{\mu}^* \geq \mathbf{0}$
2. $D f\left(\boldsymbol{x}^*\right)+\boldsymbol{\lambda}^{* \top} D \boldsymbol{h}\left(\boldsymbol{x}^*\right)+\boldsymbol{\mu}^{* \top} D \boldsymbol{g}\left(\boldsymbol{x}^*\right)=\mathbf{0}^{\top}$.
3. $\boldsymbol{\mu}^{* \top} \boldsymbol{g}\left(\boldsymbol{x}^*\right)=0$.
In this theorem, we refer to $\boldsymbol{\lambda}^*$ as the Lagrange multiplier vector and $\boldsymbol{\mu}^*$ as the Karush-Kuhn-Tucker (KKT) multiplier vector. We refer to their components as Lagrange multipliers and Karush-Kuhn-Tucker (KKT) multipliers, respectively.

Before proving this theorem, let us first discuss its meaning. Observe that $\mu_j^* \geq 0$ (by condition 1 ) and $g_j\left(\boldsymbol{x}^*\right) \leq 0$. Therefore, the condition
$$
\boldsymbol{\mu}^{* \top} \boldsymbol{g}\left(\boldsymbol{x}^*\right)=\mu_1^* g_1\left(\boldsymbol{x}^*\right)+\cdots+\mu_p^* g_p\left(\boldsymbol{x}^*\right)=0
$$
implies that if $g_j\left(\boldsymbol{x}^*\right)<0$, then $\mu_j^*=0$; that is, for all $j \notin J\left(\boldsymbol{x}^*\right)$, we have $\mu_j^*=0$. In other words, the KKT multipliers $\mu_j^*$ corresponding to inactive constraints are zero. The other KKT multipliers, $\mu_i^*, i \in J\left(\boldsymbol{x}^*\right)$, are nonnegative; they may or may not be equal to zero.

#### Proof

Let $\boldsymbol{x}^*$ be a regular local minimizer of $f$ on the set $\{\boldsymbol{x}: \boldsymbol{h}(\boldsymbol{x})=\mathbf{0}, \boldsymbol{g}(\boldsymbol{x}) \leq \mathbf{0}\}$. Then, $\boldsymbol{x}^*$ is also a regular local minimizer of $f$ on the set $\left\{\boldsymbol{x}: \boldsymbol{h}(\boldsymbol{x})=\mathbf{0}, g_j(\boldsymbol{x})=0, j \in J\left(\boldsymbol{x}^*\right)\right\}$ (see Exercise 21.16). Note that the latter constraint set involves only equality constraints. Therefore, from Lagrange's theorem, it follows that there exist vectors $\boldsymbol{\lambda}^* \in \mathbb{R}^m$ and $\boldsymbol{\mu}^* \in \mathbb{R}^p$ such that
$$
D f\left(\boldsymbol{x}^*\right)+\boldsymbol{\lambda}^{* \top} D \boldsymbol{h}\left(\boldsymbol{x}^*\right)+\boldsymbol{\mu}^{* \top} D \boldsymbol{g}\left(\boldsymbol{x}^*\right)=\mathbf{0}^{\top},
$$
where for all $j \notin J\left(\boldsymbol{x}^*\right)$, we have $\mu_j^*=0$. To complete the proof it remains to show that for all $j \in J\left(x^*\right)$, we have $\mu_j^* \geq 0$ (and hence for all $j=1, \ldots, p$, we have $\mu_j^* \geq 0$, i.e., $\mu^* \geq \mathbf{0}$ ). We use a proof by contradiction. So suppose that there exists $j \in J\left(\boldsymbol{x}^*\right)$ such that $\mu_j^*<0$. Let $\hat{S}$ and $\hat{T}\left(\boldsymbol{x}^*\right)$ be the surface and tangent space defined by all other active constraints at $x^*$. Specifically,
$$
\hat{S}=\left\{\boldsymbol{x}: \boldsymbol{h}(\boldsymbol{x})=\mathbf{0}, g_i(\boldsymbol{x})=0, i \in J\left(\boldsymbol{x}^*\right), i \neq j\right\}
$$
and
$$
\hat{T}\left(\boldsymbol{x}^*\right)=\left\{\boldsymbol{y}: D \boldsymbol{h}\left(\boldsymbol{x}^*\right) \boldsymbol{y}=\mathbf{0}, D g_i\left(\boldsymbol{x}^*\right) \boldsymbol{y}=0, i \in J\left(\boldsymbol{x}^*\right), i \neq j\right\} .
$$
We claim that by the regularity of $\boldsymbol{x}^*$, there exists $\boldsymbol{y} \in \hat{T}\left(\boldsymbol{x}^*\right)$ such that
$$
D g_j\left(\boldsymbol{x}^*\right) \boldsymbol{y} \neq 0 .
$$
To see this, suppose that for all $\boldsymbol{y} \in \hat{T}\left(\boldsymbol{x}^*\right), \nabla g_j\left(\boldsymbol{x}^*\right)^{\top} \boldsymbol{y}=D g_j\left(\boldsymbol{x}^*\right) \boldsymbol{y}=0$ This implies that $\nabla g_j\left(\boldsymbol{x}^*\right) \in \hat{T}\left(\boldsymbol{x}^*\right)^{\perp}$. By Lemma 20.1, this, in turn, implies that
$$
\nabla g_j\left(\boldsymbol{x}^*\right) \in \operatorname{span}\left[\nabla h_k\left(\boldsymbol{x}^*\right), k=1, \ldots, m, \nabla g_i\left(\boldsymbol{x}^*\right), i \in J\left(\boldsymbol{x}^*\right), i \neq j\right]
$$
But this contradicts the fact that $\boldsymbol{x}^*$ is a regular point, which proves our claim. Without loss of generality, we assume that we have $\boldsymbol{y}$ such that $D g_j\left(\boldsymbol{x}^*\right) \boldsymbol{y}<0$ Consider the Lagrange condition, rewritten as
$$
D f\left(\boldsymbol{x}^*\right)+\boldsymbol{\lambda}^{* \top} D \boldsymbol{h}\left(\boldsymbol{x}^*\right)+\mu_j^* D g_j\left(\boldsymbol{x}^*\right)+\sum_{i \neq j} \mu_i^* D g_i\left(\boldsymbol{x}^*\right)=\mathbf{0}^{\top} .
$$
If we postmultiply the above by $\boldsymbol{y}$ and use the fact that $\boldsymbol{y} \in \hat{T}\left(\boldsymbol{x}^*\right)$, we get
$$
D f\left(\boldsymbol{x}^*\right) \boldsymbol{y}=-\mu_j^* D g_j\left(\boldsymbol{x}^*\right) \boldsymbol{y} .
$$
Because $D g_j\left(\boldsymbol{x}^*\right) \boldsymbol{y}<0$ and we have assumed that $\mu_j^*<0$, we have
$$
D f\left(\boldsymbol{x}^*\right) \boldsymbol{y}<0 .
$$
Because $y \in \hat{T}\left(x^*\right)$, by Theorem $20.1$ we can find a differentiable curve $\{\boldsymbol{x}(t): t \in(a, b)\}$ on $S$ such that there exists $t^* \in(a, b)$ with $\boldsymbol{x}\left(t^*\right)=\boldsymbol{x}^*$ and $\dot{\boldsymbol{x}}\left(t^*\right)=\boldsymbol{y}$. Now,
$$
\frac{d}{d t} f\left(\boldsymbol{x}\left(t^*\right)\right)=D f\left(\boldsymbol{x}^*\right) \boldsymbol{y}<0 .
$$
The above means that there is a $\delta>0$ such that for all $t \in\left(t^*, t^*+\delta\right]$, we have
$$
f(\boldsymbol{x}(t))<f\left(\boldsymbol{x}\left(t^*\right)\right)=f\left(\boldsymbol{x}^*\right) .
$$
On the other hand,
$$
\frac{d}{d t} g_j\left(\boldsymbol{x}\left(t^*\right)\right)=D g_j\left(\boldsymbol{x}^*\right) \boldsymbol{y}<0,
$$
and for some $\varepsilon>0$ and all $t \in\left[t^*, t^*+\varepsilon\right]$, we have that $g_j(\boldsymbol{x}(t)) \leq 0$. Therefore, for all $t \in\left(t^*, t^*+\min \{\delta, \varepsilon\}\right]$, we have that $g_j(\boldsymbol{x}(t)) \leq 0$ and $f(\boldsymbol{x}(t))<f\left(\boldsymbol{x}^*\right)$. Because the points $\boldsymbol{x}(t), t \in\left(t^*, t^*+\min \{\delta, \varepsilon\}\right]$, are in $\hat{S}$, they are feasible points with lower objective function values than $x^*$. This contradicts the assumption that $\boldsymbol{x}^*$ is a local minimizer, which completes the proof.