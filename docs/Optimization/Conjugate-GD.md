---
id: Optimization - Conjugate-GD
title: Conjugate Direction Methods
sidebar_position: 4
---

### Code

Please visit [this page](/Code/Optimization/Code%20-%20GD#conjugate-gradiant-descent) for a code implementation of the conjugate gradiant method.

### Conjugate Direction Methods

The class of conjugate direction methods can be viewed as being intermediate between the method of steepest descent and Newton's method. The conjugate direction methods have the following properties:
1. Solve quadratics of $n$ variables in $n$ steps.
2. The usual implementation, the conjugate gradient algorithm, requires no Hessian matrix evaluations.
3. No matrix inversion and no storage of an $n \times n$ matrix are required.
The conjugate direction methods typically perform better than the method of steepest descent, but not as well as Newton's method. As we saw from the method of steepest descent and Newton's method, the crucial factor in the efficiency of an iterative search method is the direction of search at each iteration. For a quadratic function of $n$ variables $f(\boldsymbol{x})=\frac{1}{2} \boldsymbol{x}^{\top} \boldsymbol{Q} \boldsymbol{x}-\boldsymbol{x}^{\top} \boldsymbol{b}$, $\boldsymbol{x} \in \mathbb{R}^n, \boldsymbol{Q}=\boldsymbol{Q}^{\top}>0$, the best direction of search, as we shall see, is in the $\boldsymbol{Q}$-conjugate direction. Basically, two directions $\boldsymbol{d}^{(1)}$ and $\boldsymbol{d}^{(2)}$ in $\mathbb{R}^n$ are said to be $\boldsymbol{Q}$-conjugate if $\boldsymbol{d}^{(1) \top} \boldsymbol{Q} \boldsymbol{d}^{(2)}=0$. In general, we have the following definition.

#### Definition

Let $Q$ be a real symmetric $n \times n$ matrix. The directions $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \boldsymbol{d}^{(2)}, \ldots, \boldsymbol{d}^{(m)}$ are $\boldsymbol{Q}$-conjugate if for all $i \neq j$, we have $\boldsymbol{d}^{(i) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=$ 0.

#### Lemma 1

Let $Q$ be a symmetric positive definite $n \times n$ matrix. If the directions $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(k)} \in \mathbb{R}^n, k \leq n-1$, are nonzero and $\boldsymbol{Q}$-conjugate, then they are linearly independent.

#### Proof

Let $\alpha_0, \ldots, \alpha_k$ be scalars such that
$$
\alpha_0 \boldsymbol{d}^{(0)}+\alpha_1 \boldsymbol{d}^{(1)}+\cdots+\alpha_k \boldsymbol{d}^{(k)}=\mathbf{0} .
$$
Premultiplying this equality by $\boldsymbol{d}^{(j) \top} \boldsymbol{Q}, 0 \leq j \leq k$, yields
$$
\alpha_j \boldsymbol{d}^{(j) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=0,
$$
because all other terms $\boldsymbol{d}^{(j) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)}=0, i \neq j$, by $\boldsymbol{Q}$-conjugacy. But $\boldsymbol{Q}=\boldsymbol{Q}^{\top}>0$ and $\boldsymbol{d}^{(j)} \neq \mathbf{0}$; hence $\alpha_j=0, j=0,1, \ldots, k$. Therefore, $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(k)}, k \leq n-1$, are linearly independent.

### The Conjugate Direction Algorithm

We now present the conjugate direction algorithm for minimizing the quadratic function of $n$ variables
$$
f(\boldsymbol{x})=\frac{1}{2} \boldsymbol{x}^{\top} \boldsymbol{Q} \boldsymbol{x}-\boldsymbol{x}^{\top} \boldsymbol{b},
$$
where $\boldsymbol{Q}=\boldsymbol{Q}^{\top}>0, \boldsymbol{x} \in \mathbb{R}^n$. Note that because $\boldsymbol{Q}>0$, the function $f$ has a global minimizer that can be found by solving $\boldsymbol{Q} \boldsymbol{x}=\boldsymbol{b}$.

#### Basic Conjugate Direction Algorithm

Given a starting point $\boldsymbol{x}^{(0)}$ and $\boldsymbol{Q}$-conjugate directions $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(n-1)}$; for $k \geq 0$,
$$
\begin{aligned}
\boldsymbol{g}^{(k)} &=\nabla f\left(\boldsymbol{x}^{(k)}\right)=\boldsymbol{Q} \boldsymbol{x}^{(k)}-\boldsymbol{b}, \\
\alpha_k &=-\frac{\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(k)}}{\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}}, \\
\boldsymbol{x}^{(k+1)} &=\boldsymbol{x}^{(k)}+\alpha_k \boldsymbol{d}^{(k)} .
\end{aligned}
$$

#### Theorem 1

For any starting point $\boldsymbol{x}^{(0)}$, the basic conjugate direction algorithm converges to the unique $\boldsymbol{x}^*$ (that solves $\boldsymbol{Q} \boldsymbol{x}=\boldsymbol{b}$ ) in $n$ steps; that is, $\boldsymbol{x}^{(n)}=\boldsymbol{x}^*$.

#### Proof

Consider $\boldsymbol{x}^*-\boldsymbol{x}^{(0)} \in \mathbb{R}^n$. Because the $\boldsymbol{d}^{(i)}$ are linearly independent, there exist constants $\beta_i, i=0, \ldots, n-1$, such that
$$
\boldsymbol{x}^*-\boldsymbol{x}^{(0)}=\beta_0 \boldsymbol{d}^{(0)}+\cdots+\beta_{n-1} \boldsymbol{d}^{(n-1)} .
$$
Now premultiply both sides of this equation by $\boldsymbol{d}^{(k) \top} \boldsymbol{Q}, 0 \leq k<n$, to obtain
$$
\boldsymbol{d}^{(k) \top} \boldsymbol{Q}\left(\boldsymbol{x}^*-\boldsymbol{x}^{(0)}\right)=\beta_k \boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)},
$$
where the terms $\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)}=0, k \neq i$, by the $\boldsymbol{Q}$-conjugate property. Hence,
$$
\beta_k=\frac{\boldsymbol{d}^{(k) \top} \boldsymbol{Q}\left(\boldsymbol{x}^*-\boldsymbol{x}^{(0)}\right)}{\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}} .
$$
Now, we can write
$$
\boldsymbol{x}^{(k)}=\boldsymbol{x}^{(0)}+\alpha_0 \boldsymbol{d}^{(0)}+\cdots+\alpha_{k-1} \boldsymbol{d}^{(k-1)} .
$$
Therefore,
$$
\boldsymbol{x}^{(k)}-\boldsymbol{x}^{(0)}=\alpha_0 \boldsymbol{d}^{(0)}+\cdots+\alpha_{k-1} \boldsymbol{d}^{(k-1)} .
$$
So writing
$$
\boldsymbol{x}^*-\boldsymbol{x}^{(0)}=\left(\boldsymbol{x}^*-\boldsymbol{x}^{(k)}\right)+\left(\boldsymbol{x}^{(k)}-\boldsymbol{x}^{(0)}\right)
$$
and premultiplying the above by $\boldsymbol{d}^{(k) \top} \boldsymbol{Q}$, we obtain
$$
\boldsymbol{d}^{(k) \top} \boldsymbol{Q}\left(\boldsymbol{x}^*-\boldsymbol{x}^{(0)}\right)=\boldsymbol{d}^{(k) \top} \boldsymbol{Q}\left(\boldsymbol{x}^*-\boldsymbol{x}^{(k)}\right)=-\boldsymbol{d}^{(k) \top} \boldsymbol{g}^{(k)},
$$
because $\boldsymbol{g}^{(k)}=\boldsymbol{Q} \boldsymbol{x}^{(k)}-\boldsymbol{b}$ and $\boldsymbol{Q} \boldsymbol{x}^*=\boldsymbol{b}$. Thus,
$$
\beta_k=-\frac{\boldsymbol{d}^{(k) \top} \boldsymbol{g}^{(k)}}{\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}}=\alpha_k
$$
and $\boldsymbol{x}^*=\boldsymbol{x}^{(n)}$, which completes the proof.

#### Lemma 2

In the conjugate direction algorithm,
$$
\boldsymbol{g}^{(k+1)^{\top}} \boldsymbol{d}^{(i)}=0
$$
for all $k, 0 \leq k \leq n-1$, and $0 \leq i \leq k$.

#### Proof

Note that
$$
\boldsymbol{Q}\left(\boldsymbol{x}^{(k+1)}-\boldsymbol{x}^{(k)}\right)=\boldsymbol{Q} \boldsymbol{x}^{(k+1)}-\boldsymbol{b}-\left(\boldsymbol{Q} \boldsymbol{x}^{(k)}-\boldsymbol{b}\right)=\boldsymbol{g}^{(k+1)}-\boldsymbol{g}^{(k)},
$$
because $\boldsymbol{g}^{(k)}=\boldsymbol{Q} \boldsymbol{x}^{(k)}-\boldsymbol{b}$. Thus,
$$
\boldsymbol{g}^{(k+1)}=\boldsymbol{g}^{(k)}+\alpha_k \boldsymbol{Q} \boldsymbol{d}^{(k)} .
$$
We prove the lemma by induction. The result is true for $k=0$ because $\boldsymbol{g}^{(1) \top} \boldsymbol{d}^{(0)}=0$, as shown before. We now show that if the result is true for $k-1$ (i.e., $\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(i)}=0, i \leq k-1$ ), then it is true for $k$ (i.e., $\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(i)}=0$, $i \leq k$ ). Fix $k>0$ and $0 \leq i<k$. By the induction hypothesis, $\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(i)}=0$. Because
$$
\boldsymbol{g}^{(k+1)}=\boldsymbol{g}^{(k)}+\alpha_k \boldsymbol{Q} \boldsymbol{d}^{(k)},
$$
and $\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)}=0$ by $\boldsymbol{Q}$-conjugacy, we have
$$
\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(i)}=\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(i)}+\alpha_k \boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)}=0 .
$$
It remains to be shown that
$$
\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(k)}=0 .
$$
Indeed,
$$
\begin{aligned}
\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(k)} &=\left(\boldsymbol{Q} \boldsymbol{x}^{(k+1)}-\boldsymbol{b}\right)^{\top} \boldsymbol{d}^{(k)} \\
&=\left(\boldsymbol{x}^{(k)}-\frac{\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(k)}}{\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}} \boldsymbol{d}^{(k)}\right)^{\top} \boldsymbol{Q} \boldsymbol{d}^{(k)}-\boldsymbol{b}^{\top} \boldsymbol{d}^{(k)} \\
&=\left(\boldsymbol{Q} \boldsymbol{x}^{(k)}-\boldsymbol{b}\right)^{\top} \boldsymbol{d}^{(k)}-\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(k)} \\
&=0,
\end{aligned}
$$

![](/img/Optimization/conjugate_gradient.png)

because $\boldsymbol{Q} \boldsymbol{x}^{(k)}-\boldsymbol{b}=\boldsymbol{g}^{(k)}$.
Therefore, by induction, for all $0 \leq k \leq n-1$ and $0 \leq i \leq k$,
$$
\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(i)}=0 .
$$

### The Conjugate Gradient Algorithm

The conjugate gradient algorithm does not use prespecified conjugate directions, but instead computes the directions as the algorithm progresses. At each stage of the algorithm, the direction is calculated as a linear combination of the previous direction and the current gradient, in such a way that all the directions are mutually $Q$-conjugate - hence the name conjugate gradient algorithm. This calculation exploits the fact that for a quadratic function of $n$ variables, we can locate the function minimizer by performing $n$ searches along mutually conjugate directions.  
As before, we consider the quadratic function
$$
f(\boldsymbol{x})=\frac{1}{2} \boldsymbol{x}^{\top} \boldsymbol{Q} \boldsymbol{x}-\boldsymbol{x}^{\top} \boldsymbol{b}, \quad \boldsymbol{x} \in \mathbb{R}^n
$$
where $\boldsymbol{Q}=\boldsymbol{Q}^{\top}>0$. Our first search direction from an initial point $\boldsymbol{x}^{(0)}$ is in the direction of steepest descent; that is,
$$
d^{(0)}=-g^{(0)} .
$$
Thus,
$$
\boldsymbol{x}^{(1)}=\boldsymbol{x}^{(0)}+\alpha_0 \boldsymbol{d}^{(0)},
$$
where
$$
\alpha_0=\underset{\alpha \geq 0}{\arg \min } f\left(\boldsymbol{x}^{(0)}+\alpha \boldsymbol{d}^{(0)}\right)=-\frac{\boldsymbol{g}^{(0) \top} \boldsymbol{d}^{(0)}}{\boldsymbol{d}^{(0) \top} \boldsymbol{Q} \boldsymbol{d}^{(0)}} .
$$
In the next stage, we search in a direction $\boldsymbol{d}^{(1)}$ that is $\boldsymbol{Q}$-conjugate to $\boldsymbol{d}^{(0)}$. We choose $\boldsymbol{d}^{(1)}$ as a linear combination of $\boldsymbol{g}^{(1)}$ and $\boldsymbol{d}^{(0)}$. In general, at the $(k+1)$ th step, we choose $\boldsymbol{d}^{(k+1)}$ to be a linear combination of $\boldsymbol{g}^{(k+1)}$ and $\boldsymbol{d}^{(k)}$. Specifically, we choose
$$
\boldsymbol{d}^{(k+1)}=-\boldsymbol{g}^{(k+1)}+\beta_k \boldsymbol{d}^{(k)}, \quad k=0,1,2, \ldots
$$
The coefficients $\beta_k, k=1,2, \ldots$, are chosen in such a way that $\boldsymbol{d}^{(k+1)}$ is $\boldsymbol{Q}$-conjugate to $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(k)}$. This is accomplished by choosing $\beta_k$ to be
$$
\beta_k=\frac{\boldsymbol{g}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}}{\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}} .
$$
The conjugate gradient algorithm is summarized below.
1. Set $k:=0$; select the initial point $\boldsymbol{x}^{(0)}$.
2. $\boldsymbol{g}^{(0)}=\nabla f\left(\boldsymbol{x}^{(0)}\right)$. If $\boldsymbol{g}^{(0)}=\mathbf{0}$, stop; else, set $\boldsymbol{d}^{(0)}=-\boldsymbol{g}^{(0)}$.
3. $\alpha_k=-\frac{\boldsymbol{g}^{(k) \top} \boldsymbol{d}^{(k)}}{\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}}$.
4. $\boldsymbol{x}^{(k+1)}=\boldsymbol{x}^{(k)}+\alpha_k \boldsymbol{d}^{(k)}$.
5. $\boldsymbol{g}^{(k+1)}=\nabla f\left(\boldsymbol{x}^{(k+1)}\right)$. If $\boldsymbol{g}^{(k+1)}=\mathbf{0}$, stop.
6. $\beta_k=\frac{g^{(k+1) \top} Q d^{(k)}}{d^{(k) \top} Q d^{(k)}}$.
7. $\boldsymbol{d}^{(k+1)}=-\boldsymbol{g}^{(k+1)}+\beta_k \boldsymbol{d}^{(k)}$.
8. Set $k:=k+1$; go to step 3.

#### Proposition

In the conjugate gradient algorithm, the directions $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(n-1)}$ are $\boldsymbol{Q}$-conjugate.

#### Proof

We use induction. We first show that $\boldsymbol{d}^{(0) \top} \boldsymbol{Q} \boldsymbol{d}^{(1)}=0$. To this end we write
$$
\boldsymbol{d}^{(0) \top} \boldsymbol{Q} \boldsymbol{d}^{(1)}=\boldsymbol{d}^{(0) \top} \boldsymbol{Q}\left(-\boldsymbol{g}^{(1)}+\beta_0 \boldsymbol{d}^{(0)}\right)
$$
Substituting for
$$
\beta_0=\frac{\boldsymbol{g}^{(1) \top} \boldsymbol{Q} \boldsymbol{d}^{(0)}}{\boldsymbol{d}^{(0) \top} \boldsymbol{Q} \boldsymbol{d}^{(0)}}
$$
in the equation above, we see that $\boldsymbol{d}^{(0) \top} \boldsymbol{Q} \boldsymbol{d}^{(1)}=0$.
We now assume that $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(k)}, k<n-1$, are $\boldsymbol{Q}$-conjugate directions. From Lemma $10.2$ we have $\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(j)}=0, j=0,1, \ldots, k$. Thus, $\boldsymbol{g}^{(k+1)}$ is orthogonal to each of the directions $\boldsymbol{d}^{(0)}, \boldsymbol{d}^{(1)}, \ldots, \boldsymbol{d}^{(k)}$. We now show that
$$
\boldsymbol{g}^{(k+1) \top} \boldsymbol{g}^{(j)}=0, \quad j=0,1, \ldots, k .
$$
Fix $j \in\{0, \ldots, k\}$. We have
$$
\boldsymbol{d}^{(j)}=-\boldsymbol{g}^{(j)}+\beta_{j-1} \boldsymbol{d}^{(j-1)} .
$$
Substituting this equation into the previous one yields
$$
\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(j)}=0=-\boldsymbol{g}^{(k+1) \top} \boldsymbol{g}^{(j)}+\beta_{j-1} \boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(j-1)}
$$
Because $\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(j-1)}=0$, it follows that $\boldsymbol{g}^{(k+1) \top} \boldsymbol{g}^{(j)}=0$.
We are now ready to show that $\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=0, j=0, \ldots, k$. We have
$$
\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=\left(-\boldsymbol{g}^{(k+1)}+\beta_k \boldsymbol{d}^{(k)}\right)^{\top} \boldsymbol{Q} \boldsymbol{d}^{(j)} .
$$
If $j<k$, then $\boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=0$, by virtue of the induction hypothesis. Hence, we have
$$
\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=-\boldsymbol{g}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)} .
$$
But $\boldsymbol{g}^{(j+1)}=\boldsymbol{g}^{(j)}+\alpha_j \boldsymbol{Q} \boldsymbol{d}^{(j)}$. Because $\boldsymbol{g}^{(k+1) \top} \boldsymbol{g}^{(i)}=0, i=0, \ldots, k$,
$$
\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=-\boldsymbol{g}^{(k+1) \top} \frac{\left(\boldsymbol{g}^{(j+1)}-\boldsymbol{g}^{(j)}\right)}{\alpha_j}=0 .
$$
Thus,
$$
\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(j)}=0, \quad j=0, \ldots, k-1 .
$$
It remains to be shown that $\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}=0$. We have
$$
\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}=\left(-\boldsymbol{g}^{(k+1)}+\beta_k \boldsymbol{d}^{(k)}\right)^{\top} \boldsymbol{Q} \boldsymbol{d}^{(k)} .
$$
Using the expression for $\beta_k$, we get $\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(k)}=0$, which completes the proof.