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

The Perceptron Learning Algorithm makes at most $\frac{R^2}{\gamma^2}$ updates (after which it returns a separating hyperplane), where $R$ is the largest norm of $X_j^{\prime}$ 's and $\gamma=\min Y_j\left\langle w^*, X_j\right\rangle$ where $\left\|w^*\right\|_2=1$.

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

### Linear Regression

The hypothesis class of linear regression predictors is simply the set of linear functions,
$$
\mathcal{H}_{r e g}=L_d=\left\{\mathbf{x} \mapsto\langle\mathbf{w}, \mathbf{x}\rangle+b: \mathbf{w} \in \mathbb{R}^d, b \in \mathbb{R}\right\}
$$
Next we need to define a loss function for regression. While in classification the definition of the loss is straightforward, as $\ell(h,(\mathbf{x}, y))$ simply indicates whether $h(\mathbf{x})$ correctly predicts $y$ or not, in regression, if the baby's weight is $3 \mathrm{~kg}$, both the predictions $3.00001 \mathrm{~kg}$ and $4 \mathrm{~kg}$ are "wrong," but we would clearly prefer the former over the latter. We therefore need to define how much we shall be "penalized" for the discrepancy between $h(\mathbf{x})$ and $y$. One common way is to use the squared-loss function, namely,
$$
\ell(h,(\mathbf{x}, y))=(h(\mathbf{x})-y)^2 .
$$
For this loss function, the empirical risk function is called the Mean Squared Error, namely,
$$
L_S(h)=\frac{1}{m} \sum_{i=1}^m\left(h\left(\mathbf{x}_i\right)-y_i\right)^2 .
$$

#### Least Squares

Least squares is the algorithm that solves the ERM problem for the hypothesis class of linear regression predictors with respect to the squared loss. The ERM problem with respect to this class, given a training set $S$, and using the homogenous version of $L_d$, is to find
$$
\underset{\mathbf{w}}{\operatorname{argmin}} L_S\left(h_{\mathbf{w}}\right)=\underset{\mathbf{w}}{\operatorname{argmin}} \frac{1}{m} \sum_{i=1}^m\left(\left\langle\mathbf{w}, \mathbf{x}_i\right\rangle-y_i\right)^2 .
$$
To solve the problem we calculate the gradient of the objective function and compare it to zero. That is, we need to solve
$$
\frac{2}{m} \sum_{i=1}^m\left(\left\langle\mathbf{w}, \mathbf{x}_i\right\rangle-y_i\right) \mathbf{x}_i=0 .
$$
We can rewrite the problem as the problem $A \mathbf{w}=\mathbf{b}$ where
$$
A=\left(\sum_{i=1}^m \mathbf{x}_i \mathbf{x}_i^{\top}\right) \quad \text { and } \quad \mathbf{b}=\sum_{i=1}^m y_i \mathbf{x}_i .
$$
Or, in matrix form:
$$
\begin{aligned}
&A=\left(\begin{array}{ccc}
\vdots & & \vdots \\
\mathbf{x}_1 & \ldots & \mathbf{x}_m \\
\vdots & & \vdots
\end{array}\right)\left(\begin{array}{ccc}
\vdots & & \vdots \\
\mathbf{x}_1 & \ldots & \mathbf{x}_m \\
\vdots & & \vdots
\end{array}\right)^{\top}, \\
&\mathbf{b}=\left(\begin{array}{ccc}
\vdots & & \vdots \\
\mathbf{x}_1 & \ldots & \mathbf{x}_m \\
\vdots & & \vdots
\end{array}\right)\left(\begin{array}{c}
y_1 \\
\vdots \\
y_m
\end{array}\right)
\end{aligned}
$$
If $A$ is invertible then the solution to the ERM problem is
$$
\mathbf{w}=A^{-1} \mathbf{b} .
$$
The case in which $A$ is not invertible requires a few standard tools from linear algebra. It can be easily shown that if the training instances do not span the entire space of $\mathbb{R}^d$ then $A$ is not invertible. Nevertheless, we can always find a solution to the system $A \mathbf{w}=\mathbf{b}$ because $\mathbf{b}$ is in the range of $A$. Indeed, since $A$ is symmetric we can write it using its eigenvalue decomposition as $A=V D V^{\top}$, where $D$ is a diagonal matrix and $V$ is an orthonormal matrix (that is, $V^{\top} V$ is the identity $d \times d$ matrix). Define $D^{+}$to be the diagonal matrix such that $D_{i, i}^{+}=0$ if $D_{i, i}=0$ and otherwise $D_{i, i}^{+}=1 / D_{i, i}$. Now, define
$$
A^{+}=V D^{+} V^{\top} \quad \text { and } \quad \hat{\mathbf{w}}=A^{+} \mathbf{b} .
$$
Let $\mathbf{v}_i$ denote the $i$ 'th column of $V$. Then, we have
$$
A \hat{\mathbf{w}}=A A^{+} \mathbf{b}=V D V^{\top} V D^{+} V^{\top} \mathbf{b}=V D D^{+} V^{\top} \mathbf{b}=\sum_{i: D_{i, i} \neq 0} \mathbf{v}_i \mathbf{v}_i^{\top} \mathbf{b} .
$$
That is, $A \hat{\mathbf{w}}$ is the projection of $\mathbf{b}$ onto the span of those vectors $\mathbf{v}_i$ for which $D_{i, i} \neq 0$. Since the linear span of $\mathbf{x}_1, \ldots, \mathbf{x}_m$ is the same as the linear span of those $\mathbf{v}_i$, and $\mathbf{b}$ is in the linear span of the $\mathbf{x}_i$, we obtain that $A \hat{\mathbf{w}}=\mathbf{b}$, which concludes our argument.

#### Linear Regression for Polynomial Regression Tasks

Some learning tasks call for nonlinear predictors, such as polynomial predictors. Take, for instance, a one dimensional polynomial function of degree $n$, that is,
$$
p(x)=a_0+a_1 x+a_2 x^2+\cdots+a_n x^n
$$
where $\left(a_0, \ldots, a_n\right)$ is a vector of coefficients of size $n+1$. In the following we depict a training set that is better fitted using a 3rd degree polynomial predictor than using a linear predictor.

![](/img/ML/polynomial.png)

We will focus here on the class of one dimensional, $n$-degree, polynomial regression predictors, namely,
$$
\mathcal{H}_{\text {poly }}^n=\{x \mapsto p(x)\},
$$
where $p$ is a one dimensional polynomial of degree $n$, parameterized by a vector of coefficients $\left(a_0, \ldots, a_n\right)$. Note that $\mathcal{X}=\mathbb{R}$, since this is a one dimensional polynomial, and $\mathcal{Y}=\mathbb{R}$, as this is a regression problem.

One way to learn this class is by reduction to the problem of linear regression, which we have already shown how to solve. To translate a polynomial regression problem to a linear regression problem, we define the mapping $\psi: \mathbb{R} \rightarrow \mathbb{R}^{n+1}$ such that $\psi(x)=\left(1, x, x^2, \ldots, x^n\right)$. Then we have that
$$
p(\psi(x))=a_0+a_1 x+a_2 x^2+\cdots+a_n x^n=\langle\mathbf{a}, \psi(x)\rangle
$$
and we can find the optimal vector of coefficients $\boldsymbol{\mathbf{a}}$ by using the Least Squares algorithm as shown earlier.

### Logistic Regression

In logistic regression we learn a family of functions $h$ from $\mathbb{R}^d$ to the interval $[0,1]$. However, logistic regression is used for classification tasks: We can interpret $h(\mathbf{x})$ as the probability that the label of $\mathbf{x}$ is 1 . The hypothesis class associated with logistic regression is the composition of a sigmoid function $\phi_{\text {sig }}: \mathbb{R} \rightarrow[0,1]$ over the class of linear functions $L_d$. In particular, the sigmoid function used in logistic regression is the logistic function, defined as
$$
\phi_{\text {sig }}(z)=\frac{1}{1+\exp (-z)} .
$$
The name "sigmoid" means "S-shaped," referring to the plot of this function, shown in the figure:

![](/img/ML/logistic.png)

The hypothesis class is therefore (where for simplicity we are using homogenous linear functions):
$$
H_{\text {sig }}=\phi_{\text {sig }} \circ L_d=\left\{\mathbf{x} \mapsto \phi_{\text {sig }}(\langle\mathbf{w}, \mathbf{x}\rangle): \mathbf{w} \in \mathbb{R}^d\right\} .
$$
Note that when $\langle\mathbf{w}, \mathbf{x}\rangle$ is very large then $\phi_{\text {sig }}(\langle\mathbf{w}, \mathbf{x}\rangle)$ is close to 1 , whereas if $\langle\mathbf{w}, \mathbf{x}\rangle$ is very small then $\phi_{\text {sig }}(\langle\mathbf{w}, \mathbf{x}\rangle)$ is close to 0 . Recall that the prediction of the halfspace corresponding to a vector $\mathbf{w}$ is $\operatorname{sign}(\langle\mathbf{w}, \mathbf{x}\rangle)$. Therefore, the predictions of the halfspace hypothesis and the logistic hypothesis are very similar whenever $|\langle\mathbf{w}, \mathbf{x}\rangle|$ is large. However, when $|\langle\mathbf{w}, \mathbf{x}\rangle|$ is close to 0 we have that $\phi_{\text {sig }}(\langle\mathbf{w}, \mathbf{x}\rangle) \approx$ $\frac{1}{2}$. Intuitively, the logistic hypothesis is not sure about the value of the label so it guesses that the label is $\operatorname{sign}(\langle\mathbf{w}, \mathbf{x}\rangle)$ with probability slightly larger than $50 \%$. In contrast, the halfspace hypothesis always outputs a deterministic prediction of either 1 or $-1$, even if $|\langle\mathbf{w}, \mathbf{x}\rangle|$ is very close to 0 .

Next, we need to specify a loss function. That is, we should define how bad it is to predict some $h_{\mathbf{w}}(\mathbf{x}) \in[0,1]$ given that the true label is $y \in\{\pm 1\}$. Clearly, we would like that $h_{\mathbf{w}}(\mathbf{x})$ would be large if $y=1$ and that $1-h_{\mathbf{w}}(\mathbf{x})$ (i.e., the probability of predicting $-1$ ) would be large if $y=-1$. Note that
$$
1-h_{\mathbf{w}}(\mathbf{x})=1-\frac{1}{1+\exp (-\langle\mathbf{w}, \mathbf{x}\rangle)}=\frac{\exp (-\langle\mathbf{w}, \mathbf{x}\rangle)}{1+\exp (-\langle\mathbf{w}, \mathbf{x}\rangle)}=\frac{1}{1+\exp (\langle\mathbf{w}, \mathbf{x}\rangle)}
$$
Therefore, any reasonable loss function would increase monotonically with $\frac{1}{1+\exp (y\langle\mathbf{w}, \mathbf{x}\rangle)}$, or equivalently, would increase monotonically with $1+\exp (-y\langle\mathbf{w}, \mathbf{x}\rangle)$. The logistic loss function used in logistic regression penalizes $h_{\mathbf{w}}$ based on the log of $1+\exp (-y\langle\mathbf{w}, \mathbf{x}\rangle)$ (recall that $\log$ is a monotonic function). That is,
$$
\ell\left(h_{\mathbf{w}},(\mathbf{x}, y)\right)=\log (1+\exp (-y\langle\mathbf{w}, \mathbf{x}\rangle)) .
$$
Therefore, given a training set $S=\left(\mathbf{x}_1, y_1\right), \ldots,\left(\mathbf{x}_m, y_m\right)$, the ERM problem associated with logistic regression is
$$
\underset{\mathbf{w} \in \mathbb{R}^d}{\operatorname{argmin}} \frac{1}{m} \sum_{i=1}^m \log \left(1+\exp \left(-y_i\left\langle\mathbf{w}, \mathbf{x}_i\right\rangle\right)\right) .
$$
The advantage of the logistic loss function is that it is a convex function with respect to w; hence the ERM problem can be solved efficiently using standard methods. We will study how to learn with convex functions, and in particular specify a simple algorithm for minimizing convex functions, in later chapters.
The ERM problem associated with logistic regression is identical to the problem of finding a Maximum Likelihood Estimator, a well-known statistical approach for finding the parameters that maximize the joint probability of a given data set assuming a specific parametric probability function. We will study the Maximum Likelihood approach in Chapter 24.