---
id: Machine Learning Theory - VC
title: VC-Dimension
sidebar_position: 5
---

### Definition (Shattering)

A hypothesis class $H$ shatters a finite set $C \subset X$ if the restriction of $H$ to $C$ is the set of all functions from $C$ to $\{0, 1\}$. That is, $|H_C| = 2^{|C|}$.

### Corollary

*Let $H$ be a hypothesis class of functions $X \to \{0, 1\}$. Let m be a training set size. Assume that there exists a set $C \subset X$ of size $2m$ that is shattered by $H$. Then, for any learning algorithm, $A$, there exist a distribution $D$ over $X \times \{0, 1\}$ and a predictor $h \in H$ such that $L_D(h) = 0$ but with probability of at least $1/7$ over the choice of $S \sim D^m$ we have that $L_D(A(S)) \ge 1/8$*  
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
For simplicity assume that $\sqrt{d\log{(2em/d)}} \ge 4$; hence,
$$
\begin{gather*}
|L_D(h) - L_S(h)| \le {1 \over \delta} \sqrt{{2d\log{(2em/d)} \over m}}
\end{gather*}
$$

### Proof

We will start by showing that
$$
\underset{S \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}}\left|L_{\mathcal{D}}(h)-L_S(h)\right|\right] \leq \frac{4+\sqrt{\log \left(\tau_{\mathcal{H}}(2 m)\right)}}{\sqrt{2 m}} .
$$
Since the random variable $\sup _{h \in \mathcal{H}}\left|L_{\mathcal{D}}(h)-L_S(h)\right|$ is nonnegative, the proof of the theorem follows directly from the preceding using Markov's inequality.

To bound the left-hand side of the previous equation we first note that for every $h \in \mathcal{H}$, we can rewrite $L_{\mathcal{D}}(h)=\mathbb{E}_{S^{\prime} \sim \mathcal{D}^m}\left[L_{S^{\prime}}(h)\right]$, where $S^{\prime}=z_1^{\prime}, \ldots, z_m^{\prime}$ is an additional i.i.d. sample. Therefore,
$$
\underset{S \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}}\left|L_{\mathcal{D}}(h)-L_S(h)\right|\right]=\underset{S \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}}\left|\underset{S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}} L_{S^{\prime}}(h)-L_S(h)\right|\right] .
$$
A generalization of the triangle inequality yields
$$
\left|\underset{S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left[L_{S^{\prime}}(h)-L_S(h)\right]\right| \leq \underset{S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left|L_{S^{\prime}}(h)-L_S(h)\right|,
$$
and the fact that supermum of expectation is smaller than expectation of supremum yields
$$
\sup _{h \in \mathcal{H}} \underset{S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left|L_{S^{\prime}}(h)-L_S(h)\right| \leq \underset{S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}} \sup _{h \in \mathcal{H}}\left|L_{S^{\prime}}(h)-L_S(h)\right| .
$$
Formally, the previous two inequalities follow from Jensen's inequality. Combining all we obtain
$$
\begin{aligned}
\underset{S \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}}\left|L_{\mathcal{D}}(h)-L_S(h)\right|\right] & \leq \underset{S, S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}}\left|L_{S^{\prime}}(h)-L_S(h)\right|\right] \\
&=\underset{S, S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}} \frac{1}{m}\left|\sum_{i=1}^m\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)\right|\right] . \tag{1}
\end{aligned}
$$
The expectation on the right-hand side is over a choice of two i.i.d. samples $S=z_1, \ldots, z_m$ and $S^{\prime}=z_1^{\prime}, \ldots, z_m^{\prime}$. Since all of these $2 m$ vectors are chosen i.i.d., nothing will change if we replace the name of the random vector $z_i$ with the name of the random vector $z_i^{\prime}$. If we do it, instead of the term $\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)$ in Equation (1) we will have the term $-\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)$. It follows that for every $\boldsymbol{\sigma} \in\{\pm 1\}^m$ we have that Equation (1) equals
$$
\underset{S, S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}} \frac{1}{m}\left|\sum_{i=1}^m \sigma_i\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)\right|\right]
$$
Since this holds for every $\boldsymbol{\sigma} \in\{\pm 1\}^m$, it also holds if we sample each component of $\boldsymbol{\sigma}$ uniformly at random from the uniform distribution over $\{\pm 1\}$, denoted $U_{\pm}$. Hence, Equation (1) also equals
$$
\underset{\sigma \sim U_{\pm}^m}{\mathbb{E}} \underset{S, S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}} \frac{1}{m}\left|\sum_{i=1}^m \sigma_i\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)\right|\right],
$$
and by the linearity of expectation it also equals
$$
\underset{S, S^{\prime} \sim \mathcal{D}^m}{\mathbb{E}} \underset{\boldsymbol{\sigma} \sim U_{\pm}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}} \frac{1}{m}\left|\sum_{i=1}^m \sigma_i\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)\right|\right] .
$$
Next, fix $S$ and $S^{\prime}$, and let $C$ be the instances appearing in $S$ and $S^{\prime}$. Then, we can take the supremum only over $h \in \mathcal{H}_C$. Therefore,
$$
\begin{aligned}
&\underset{\boldsymbol{\sigma} \sim U_{\pm}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}} \frac{1}{m}\left|\sum_{i=1}^m \sigma_i\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)\right|\right] \\
&=\underset{\sigma \sim U_{\pm}^m}{\mathbb{E}}\left[\max _{h \in \mathcal{H}_C} \frac{1}{m}\left|\sum_{i=1}^m \sigma_i\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)\right|\right] .
\end{aligned}
$$
Fix some $h \in \mathcal{H}_C$ and denote $\theta_h=\frac{1}{m} \sum_{i=1}^m \sigma_i\left(\ell\left(h, z_i^{\prime}\right)-\ell\left(h, z_i\right)\right)$. Since $\mathbb{E}\left[\theta_h\right]=0$ and $\theta_h$ is an average of independent variables, each of which takes values in $[-1,1]$, we have by Hoeffding's inequality that for every $\rho>0$,
$$
\mathbb{P}\left[\left|\theta_h\right|>\rho\right] \leq 2 \exp \left(-2 m \rho^2\right) .
$$
Applying the union bound over $h \in \mathcal{H}_C$, we obtain that for any $\rho>0$,
$$
\mathbb{P}\left[\max _{h \in \mathcal{H}_C}\left|\theta_h\right|>\rho\right] \leq 2\left|\mathcal{H}_C\right| \exp \left(-2 m \rho^2\right) .
$$
Finally, the Lemma below tells us that the preceding implies
$$
\mathbb{E}\left[\max _{h \in \mathcal{H}_C}\left|\theta_h\right|\right] \leq \frac{4+\sqrt{\log \left(\left|\mathcal{H}_C\right|\right)}}{\sqrt{2 m}} .
$$
Combining all with the definition of $\tau_{\mathcal{H}}$, we have shown that
$$
\underset{S \sim \mathcal{D}^m}{\mathbb{E}}\left[\sup _{h \in \mathcal{H}}\left|L_{\mathcal{D}}(h)-L_S(h)\right|\right] \leq \frac{4+\sqrt{\log \left(\tau_{\mathcal{H}}(2 m)\right)}}{\sqrt{2 m}} .
$$

#### Lemma
*Let $X$ be a random variable and $x^{\prime} \in \mathbb{R}$ be a scalar and assume that there exists $a>0$ and $b \geq e$ such that for all $t \geq 0$ we have $\mathbb{P}\left[\left|X-x^{\prime}\right|>\right.$ $t] \leq 2 b e^{-t^2 / a^2}$. Then, $\mathbb{E}\left[\left|X-x^{\prime}\right|\right] \leq a(2+\sqrt{\log (b)})$*

#### Proof

For all $i=0,1,2, \ldots$ denote $t_i=a(i+\sqrt{\log (b)})$. Since $t_i$ is monotonically increasing we have that
$$
\mathbb{E}\left[\left|X-x^{\prime}\right|\right] \leq a \sqrt{\log (b)}+\sum_{i=1}^{\infty} t_i \mathbb{P}\left[\left|X-x^{\prime}\right|>t_{i-1}\right]
$$
Using the assumption in the lemma we have
$$
\begin{array}{rl}
\sum_{i=1}^{\infty} t_i & \mathbb{P}\left[\left|X-x^{\prime}\right|>t_{i-1}\right] \leq 2 a b \sum_{i=1}^{\infty}(i+\sqrt{\log (b)}) e^{-(i-1+\sqrt{\log (b)})^2} \\
& \leq 2 a b \int_{1+\sqrt{\log (b)}}^{\infty} x e^{-(x-1)^2} d x \\
& =2 a b \int_{\sqrt{\log (b)}}^{\infty}(y+1) e^{-y^2} d y \\
& \leq 4 a b \int_{\sqrt{\log (b)}}^{\infty} y e^{-y^2} d y \\
& =2 a b\left[-e^{-y^2}\right]_{\sqrt{\log (b)}}^{\infty} \\
& =2 a b / b=2 a .
\end{array}
$$
Combining the preceding inequalities we conclude our proof.