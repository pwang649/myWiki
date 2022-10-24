---
id: Machine Learning Algorithms - Linear Predictors
title: Linear Predictors
sidebar_position: 2
---

First, we define the class of affine functions as
$$
L_d=\left\{h_{\mathbf{w}, b}: \mathbf{w} \in \mathbb{R}^d, b \in \mathbb{R}\right\},
$$
where
$$
h_{\mathbf{w}, b}(\mathbf{x})=\langle\mathbf{w}, \mathbf{x}\rangle+b=\left(\sum_{i=1}^d w_i x_i\right)+b .
$$
It will be convenient also to use the notation
$$
L_d=\left\{\mathbf{x} \mapsto\langle\mathbf{w}, \mathbf{x}\rangle+b: \mathbf{w} \in \mathbb{R}^d, b \in \mathbb{R}\right\},
$$
which reads as follows: $L_d$ is a set of functions, where each function is parameterized by $\mathbf{w} \in \mathbb{R}^d$ and $b \in \mathbb{R}$, and each such function takes as input a vector $x$ and returns as output the scalar $\langle\mathbf{w}, \mathbf{x}\rangle+b$.

It may be more convenient to incorporate $b$, called the bias, into $\mathbf{w}$ as an extra coordinate and add an extra coordinate with a value of 1 to all $\mathbf{x} \in \mathcal{X}$; namely, let $\mathbf{w}^{\prime}=\left(b, w_1, w_2, \ldots w_d\right) \in \mathbb{R}^{d+1}$ and let $\mathbf{x}^{\prime}=\left(1, x_1, x_2, \ldots, x_d\right) \in\mathbb{R}^{d+1}$. Therefore
$$
h_{\mathbf{w}, b}(\mathbf{x})=\langle\mathbf{w}, \mathbf{x}\rangle+b=\left\langle\mathbf{w}^{\prime}, \mathbf{x}^{\prime}\right\rangle .
$$

### Halfspaces

The first hypothesis class we consider is the class of halfspaces, designed for binary classification problems, namely, $\mathcal{X}=\mathbb{R}^d$ and $\mathcal{Y}=\{-1,+1\}$. The class of halfspaces is defined as follows:
$$
H S_d=\operatorname{sign} \circ L_d=\left\{\mathbf{x} \mapsto \operatorname{sign}\left(h_{\mathbf{w}, b}(\mathbf{x})\right): h_{\mathbf{w}, b} \in L_d\right\} .
$$
In other words, each halfspace hypothesis in $H S_d$ is parameterized by $\mathbf{w} \in$ $\mathbb{R}^d$ and $b \in \mathbb{R}$ and upon receiving a vector $\mathbf{x}$ the hypothesis returns the label $\operatorname{sign}(\langle\mathbf{w}, \mathbf{x}\rangle+b)$

To illustrate this hypothesis class geometrically, it is instructive to consider the case $d=2$. Each hypothesis forms a hyperplane that is perpendicular to the vector $\mathbf{w}$ and intersects the vertical axis at the point $\left(0,-b / w_2\right)$. The instances that are "above" the hyperplane, that is, share an acute angle with $\mathbf{w}$, are labeled positively. Instances that are "below" the hyperplane, that is, share an obtuse angle with $\mathbf{w}$, are labeled negatively.

![](/img/ML/halfspace.png)

### Linear Programming for the Class of Halfspaces

- ...

### Perceptron for Halfspaces

A different implementation of the ERM rule is the Perceptron algorithm of Rosenblatt (Rosenblatt 1958). The Perceptron is an iterative algorithm that constructs a sequence of vectors $\mathbf{w}^{(1)}, \mathbf{w}^{(2)}, \ldots$. Initially, $\mathbf{w}^{(1)}$ is set to be the all-zeros vector. At iteration $t$, the Perceptron finds an example $i$ that is mislabeled by $\mathbf{w}^{(t)}$, namely, an example for which $\operatorname{sign}\left(\left\langle\mathbf{w}^{(t)}, \mathbf{x}_i\right\rangle\right) \neq y_i$. Then, the Perceptron updates $\mathbf{w}^{(t)}$ by adding to it the instance $\mathbf{x}_i$ scaled by the label $y_i$. That is, $\mathbf{w}^{(t+1)}=\mathbf{w}^{(t)}+y_i \mathbf{x}_i$. Recall that our goal is to have $y_i\left\langle\mathbf{w}, \mathbf{x}_i\right\rangle>0$ for all $i$ and note that
$$
y_i\left\langle\mathbf{w}^{(t+1)}, \mathbf{x}_i\right\rangle=y_i\left\langle\mathbf{w}^{(t)}+y_i \mathbf{x}_i, \mathbf{x}_i\right\rangle=y_i\left\langle\mathbf{w}^{(t)}, \mathbf{x}_i\right\rangle+\left\|\mathbf{x}_i\right\|^2 .
$$
Hence, the update of the Perceptron guides the solution to be "more correct" on the $i$ 'th example.

![](/img/ML/perceptron.png)

#### Theorem (Perceptron convergence)

The Perceptron Learning Algorithm makes at most $\frac{R^2}{\gamma^2}$ updates (after which it returns a separating hyperplane).

#### Proof

It is immediate from the code that should the algorithm terminate and return a weight vector, then the weight vector must separate the $+$ points from the $-$ points. Thus, it suffices to show that the algorithm terminates after at most $\frac{R^2}{\gamma^2}$ updates. In other words, we need to show that $k$ is upper-bounded by $\frac{R^2}{\gamma^2}$. Our strategy to do so is to derive both lower and upper and bounds on the length of $\mathbf{w}^{k+1}$ in terms of $k$, and to relate them.

Note that $\mathbf{w}^1=\mathbf{0}$, and for $k \geqslant 1$, note that if $\mathbf{x}^j$ is the misclasssified point during iteration $k$, we have
$$
\begin{aligned}
\mathbf{w}^{k+1} \cdot \mathbf{w}^{\star} &=\left(\mathbf{w}^k+y^j \mathbf{x}^j\right) \cdot \mathbf{w}^{\star} \\
&=\mathbf{w}^k \cdot \mathbf{w}^{\star}+y^j\left(\mathbf{x}^j \cdot \mathbf{w}^{\star}\right) \\
&>\mathbf{w}^k \cdot \mathbf{w}^{\star}+\gamma
\end{aligned}
$$
It follows by induction that $\mathbf{w}^{k+1} \cdot \mathbf{w}^{\star}>k \gamma$. Since $\mathbf{w}^{k+1} \cdot \mathbf{w}^{\star} \leqslant\left\|\mathbf{w}^{k+1}\right\|\left\|\mathbf{w}^{\star}\right\|=\left\|\mathbf{w}^{k+1}\right\|$, we get
$$
\left\|\mathbf{w}^{k+1}\right\|>k \gamma . \tag 1
$$
To obtain an upper bound, we argue that
$$
\begin{aligned}
\left\|\mathbf{w}^{k+1}\right\|^2 &=\left\|\mathbf{w}^k+y^j \mathbf{x}^j\right\|^2 \\
&=\left\|\mathbf{w}^k\right\|^2+\left\|y^j \mathbf{x}^j\right\|^2+2\left(\mathbf{w}^k \cdot \mathbf{x}^j\right) y^j \\
&=\left\|\mathbf{w}^k\right\|^2+\left\|\mathbf{x}^j\right\|^2+2\left(\mathbf{w}^k \cdot \mathbf{x}^j\right) y^j \\
& \leqslant\left\|\mathbf{w}^k\right\|^2+\left\|\mathbf{x}^j\right\|^2 \\
& \leqslant\left\|\mathbf{w}^k\right\|^2+R^2
\end{aligned}
$$
from which it follows by induction that
$$
\left\|\mathbf{w}^{k+1}\right\|^2 \leqslant k R^2 . \tag 2
$$
Together, (1) and (2) yield
$$
k^2 \gamma^2<\left\|\mathbf{w}^{k+1}\right\|^2 \leqslant k R^2,
$$
which implies $k<\frac{R^2}{\gamma^2}$. Our proof is done.

#### Perceptron as the Pseudogradient Descent Method

Check out my notes on [Gradient Descent](/docs/Optimization/Optimization%20-%20GD) for some in depth explanation.