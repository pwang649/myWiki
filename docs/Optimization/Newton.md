---
id: Optimization - Newton
title: Newton's Method
sidebar_position: 4
---

### Multi-Dimensional Newton's Method

Recall the one-dimensional Newton's Method presented in [One-Dimensional Search Methods](Optimization%20-%201D-Search#newtons-method). Similarly, in a multi-dimensional setting, we minimize the approximate (quadratic) function that approaches to the value of the minimizer of the original function, illustrated in Figure 9.1.

![](/img/Optimization/multi_newton.png)

We can obtain a quadratic approximation to the twice continuously differentiable objection function $f:\mathbb{R}^n\to\mathbb{R}$ using the Taylor series expansion of $f$ about the current point $x^{(k)}$, neglecting terms of order three and higher. We obtain
$$
\begin{gather*}
f(x) \approx f(x^{(k)})+(x-x^{(k)})^Tg^{(k)}+{1\over2}(x-x^{(k)})^TF(x^{(k)})(x-x^{(k)}) \triangleq q(x),
\end{gather*}
$$
where, for simplicity, we use the notation $g^{(k)}=\nabla f(x^{(k)})$. Applying the FONC to $q$ yields
$$
\begin{gather*}
0=\nabla q(x)=g^{(k)}+F(x^{(k)})(x-x^{(k)}).
\end{gather*}
$$
if $F(x^{(k)})>0$, then $q$ achieves a minimum at
$$
\begin{gather*}
x^{(k+1)}=x^{(k)}-F(x^{(k)})^{-1}g^{(k)}.
\end{gather*}
$$
This recursive formula represents Newton's method.

### Quasi-Newton Methods

A computational drawback of Newton's method is the need to evaluate $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)$ and solve the equation $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right) \boldsymbol{d}^{(k)}=-\boldsymbol{g}^{(k)}$ [i.e., compute $\boldsymbol{d}^{(k)}= -\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)^{-1} \boldsymbol{g}^{(k)}$]. To avoid the computation of $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)^{-1}$, the quasi-Newton methods use an approximation to $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)^{-1}$ in place of the true inverse. This approximation is updated at every stage so that it exhibits at least some properties of $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)^{-1}$. To get some idea about the properties that an approximation to $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)^{-1}$ should satisfy, consider the formula
$$
\boldsymbol{x}^{(k+1)}=\boldsymbol{x}^{(k)}-\alpha \boldsymbol{H}_k \boldsymbol{g}^{(k)},
$$
where $\boldsymbol{H}_k$ is an $n \times n$ real matrix and $\alpha$ is a positive search parameter. Expanding $f$ about $\boldsymbol{x}^{(k)}$ yields
$$
\begin{aligned}
f\left(\boldsymbol{x}^{(k+1)}\right) &=f\left(\boldsymbol{x}^{(k)}\right)+\boldsymbol{g}^{(k) \top}\left(\boldsymbol{x}^{(k+1)}-\boldsymbol{x}^{(k)}\right)+o\left(\left\|\boldsymbol{x}^{(k+1)}-\boldsymbol{x}^{(k)}\right\|\right) \\
&=f\left(\boldsymbol{x}^{(k)}\right)-\alpha \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \boldsymbol{g}^{(k)}+o\left(\left\|\boldsymbol{H}_k \boldsymbol{g}^{(k)}\right\| \alpha\right) .
\end{aligned}
$$
As $\alpha$ tends to zero, the second term on the right-hand side of this equation dominates the third. Thus, to guarantee a decrease in $f$ for small $\alpha$, we have to have
$$
\boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \boldsymbol{g}^{(k)}>0 .
$$
A simple way to ensure this is to require that $\boldsymbol{H}_k$ be positive definite. We have proved the following result.

#### Proposition

Let $f \in \mathcal{C}^1, \boldsymbol{x}^{(k)} \in \mathbb{R}^n, g^{(k)}=\nabla f\left(\boldsymbol{x}^{(k)}\right) \neq 0$, and $\boldsymbol{H}_k$ an $n \times n$ real symmetric positive definite matrix. If we set $\boldsymbol{x}^{(k+1)}=$ $\boldsymbol{x}^{(k)}-\alpha_k \boldsymbol{H}_k \boldsymbol{g}^{(k)}$, where $\alpha_k=\arg \min _{\alpha \geq 0} f\left(\boldsymbol{x}^{(k)}-\alpha \boldsymbol{H}_k \boldsymbol{g}^{(k)}\right)$, then $\alpha_k>0$ and $f\left(\boldsymbol{x}^{(k+1)}\right)<f\left(\boldsymbol{x}^{(k)}\right)$

In constructing an approximation to the inverse of the Hessian matrix, we should use only the objective function and gradient values. Thus, if we can find a suitable method of choosing $\boldsymbol{H}_k$, the iteration may be carried out without any evaluation of the Hessian and without the solution of any set of linear equations.

### Approximating the Inverse Hessian

Let $\boldsymbol{H}_0, \boldsymbol{H}_1, \boldsymbol{H}_2, \ldots$ be successive approximations of the inverse $\boldsymbol{F}\left(\boldsymbol{x}^{(k)}\right)^{-1}$ of the Hessian. We now derive a condition that the approximations should satisfy, which forms the starting point for our subsequent discussion of quasiNewton algorithms. To begin, suppose first that the Hessian matrix $\boldsymbol{F}(\boldsymbol{x})$ of the objective function $f$ is constant and independent of $\boldsymbol{x}$. In other words, the objective function is quadratic, with Hessian $\boldsymbol{F}(\boldsymbol{x})=\boldsymbol{Q}$ for all $\boldsymbol{x}$, where $\boldsymbol{Q}=\boldsymbol{Q}^{\top}$. Then,
$$
\boldsymbol{g}^{(k+1)}-\boldsymbol{g}^{(k)}=\boldsymbol{Q}\left(\boldsymbol{x}^{(k+1)}-\boldsymbol{x}^{(k)}\right)
$$
Let
$$
\Delta \boldsymbol{g}^{(k)} \triangleq \boldsymbol{g}^{(k+1)}-\boldsymbol{g}^{(k)}
$$
and then, we may write
$$
\Delta \boldsymbol{x}^{(k)} \triangleq \boldsymbol{x}^{(k+1)}-\boldsymbol{x}^{(k)} .
$$
We start with a real symmetric positive definite matrix $\boldsymbol{H}_0$. Note that given $k$, the matrix $\boldsymbol{Q}^{-1}$ satisfies
$$
\boldsymbol{Q}^{-1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, \quad 0 \leq i \leq k .
$$
Therefore, we also impose the requirement that the approximation $\boldsymbol{H}_{k+1}$ of the Hessian satisfy
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, \quad 0 \leq i \leq k .
$$
If $n$ steps are involved, then moving in $n$ directions $\Delta \boldsymbol{x}^{(0)}, \Delta \boldsymbol{x}^{(1)}, \ldots, \Delta \boldsymbol{x}^{(n-1)}$ yields
$$
\begin{aligned}
\boldsymbol{H}_n \Delta \boldsymbol{g}^{(0)} &=\Delta \boldsymbol{x}^{(0)}, \\
\boldsymbol{H}_n \Delta \boldsymbol{g}^{(1)} &=\Delta \boldsymbol{x}^{(1)}, \\
& \vdots \\
\boldsymbol{H}_n \Delta \boldsymbol{g}^{(n-1)} &=\Delta \boldsymbol{x}^{(n-1)} .
\end{aligned}
$$
This set of equations can be represented as
$$
\boldsymbol{H}_n\left[\Delta \boldsymbol{g}^{(0)}, \Delta \boldsymbol{g}^{(1)}, \ldots, \Delta \boldsymbol{g}^{(n-1)}\right]=\left[\Delta \boldsymbol{x}^{(0)}, \Delta \boldsymbol{x}^{(1)}, \ldots, \Delta \boldsymbol{x}^{(n-1)}\right]
$$
Note that $Q$ satisfies
$$
\boldsymbol{Q}\left[\Delta \boldsymbol{x}^{(0)}, \Delta \boldsymbol{x}^{(1)}, \ldots, \Delta \boldsymbol{x}^{(n-1)}\right]=\left[\Delta \boldsymbol{g}^{(0)}, \Delta \boldsymbol{g}^{(1)}, \ldots, \Delta \boldsymbol{g}^{(n-1)}\right]
$$
and
$$
\boldsymbol{Q}^{-1}\left[\Delta \boldsymbol{g}^{(0)}, \Delta \boldsymbol{g}^{(1)}, \ldots, \Delta \boldsymbol{g}^{(n-1)}\right]=\left[\Delta \boldsymbol{x}^{(0)}, \Delta \boldsymbol{x}^{(1)}, \ldots, \Delta \boldsymbol{x}^{(n-1)}\right]
$$
Therefore, if $\left[\Delta g^{(0)}, \Delta g^{(1)}, \ldots, \Delta g^{(n-1)}\right]$ is nonsingular, then $Q^{-1}$ is determined uniquely after $n$ steps, via
$$
\boldsymbol{Q}^{-1}=\boldsymbol{H}_n=\left[\Delta \boldsymbol{x}^{(0)}, \Delta \boldsymbol{x}^{(1)}, \ldots, \Delta \boldsymbol{x}^{(n-1)}\right]\left[\Delta \boldsymbol{g}^{(0)}, \Delta \boldsymbol{g}^{(1)}, \ldots, \Delta \boldsymbol{g}^{(n-1)}\right]^{-1}
$$
As a consequence, we conclude that if $\boldsymbol{H}_n$ satisfies the equations $\boldsymbol{H}_n \Delta \boldsymbol{g}^{(i)}=$ $\Delta \boldsymbol{x}^{(i)}, 0 \leq i \leq n-1$, then the algorithm $\boldsymbol{x}^{(k+1)}=\boldsymbol{x}^{(k)}-\alpha_k \boldsymbol{H}_k \boldsymbol{g}^{(k)}$, $\alpha_k=\arg \min _{\alpha \geq 0} f\left(\boldsymbol{x}^{(k)}-\alpha \boldsymbol{H}_k \boldsymbol{g}^{(k)}\right)$, is guaranteed to solve problems with quadratic objective functions in $n+1$ steps, because the update $\boldsymbol{x}^{(n+1)}=$ $\boldsymbol{x}^{(n)}-\alpha_n \boldsymbol{H}_n \boldsymbol{g}^{(n)}$ is equivalent to Newton's algorithm. In fact, as we shall see below, such algorithms solve quadratic problems of $n$ variables in at most $n$ steps.

The considerations above illustrate the basic idea behind the quasi-Newton methods. Specifically, quasi-Newton algorithms have the form
$$
\begin{aligned}
\boldsymbol{d}^{(k)} &=-\boldsymbol{H}_k \boldsymbol{g}^{(k)} \\
\alpha_k &=\underset{\alpha \geq 0}{\arg \min } f\left(\boldsymbol{x}^{(k)}+\alpha \boldsymbol{d}^{(k)}\right) \\
\boldsymbol{x}^{(k+1)} &=\boldsymbol{x}^{(k)}+\alpha_k \boldsymbol{d}^{(k)}
\end{aligned}
$$
where the matrices $\boldsymbol{H}_0, \boldsymbol{H}_1, \ldots$ are symmetric. In the quadratic case these matrices are required to satisfy
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, \quad 0 \leq i \leq k,
$$
where $\Delta \boldsymbol{x}^{(i)}=\boldsymbol{x}^{(i+1)}-\boldsymbol{x}^{(i)}=\alpha_i \boldsymbol{d}^{(i)}$ and $\Delta \boldsymbol{g}^{(i)}=\boldsymbol{g}^{(i+1)}-\boldsymbol{g}^{(i)}=\boldsymbol{Q} \Delta \boldsymbol{x}^{(i)}$. It turns out that quasi-Newton methods are also conjugate direction methods, as stated in the following.

#### Theorem 

Consider a quasi-Newton algorithm applied to a quadratic function with Hessian $\boldsymbol{Q}=\boldsymbol{Q}^{\top}$ such that for $0 \leq k<n-1$,
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, \quad 0 \leq i \leq k,
$$
where $\boldsymbol{H}_{k+1}=\boldsymbol{H}_{k+1}^{\top}$. If $\alpha_i \neq 0,0 \leq i \leq k$, then $\boldsymbol{d}^{(0)}, \ldots, \boldsymbol{d}^{(k+1)}$ are $\boldsymbol{Q}$ conjugate.

#### Proof

We proceed by induction. We begin with the $k=0$ case: that $\boldsymbol{d}^{(0)}$ and $\boldsymbol{d}^{(1)}$ are $\boldsymbol{Q}$-conjugate. Because $\alpha_0 \neq 0$, we can write $\boldsymbol{d}^{(0)}=\Delta \boldsymbol{x}^{(0)} / \alpha_0$.
Hence,
$$
\begin{aligned}
\boldsymbol{d}^{(1) \top} \boldsymbol{Q} \boldsymbol{d}^{(0)} &=-\boldsymbol{g}^{(1) \top} \boldsymbol{H}_1 \boldsymbol{Q} \boldsymbol{d}^{(0)} \\
&=-\boldsymbol{g}^{(1) \top} \boldsymbol{H}_1 \frac{\boldsymbol{Q} \Delta \boldsymbol{x}^{(0)}}{\alpha_0} \\
&=-\boldsymbol{g}^{(1) \top} \frac{\boldsymbol{H}_1 \Delta \boldsymbol{g}^{(0)}}{\alpha_0} \\
&=-\boldsymbol{g}^{(1) \top} \frac{\Delta \boldsymbol{x}^{(0)}}{\alpha_0} \\
&=-\boldsymbol{g}^{(1) \top} \boldsymbol{d}^{(0)}
\end{aligned}
$$
But $\boldsymbol{g}^{(1) \top} \boldsymbol{d}^{(0)}=0$ as a consequence of $\alpha_0>0$ being the minimizer of $\phi(\alpha)=$ $f\left(\boldsymbol{x}^{(0)}+\alpha \boldsymbol{d}^{(0)}\right)$ (see Exercise 11.1). Hence, $\boldsymbol{d}^{(1) \top} \boldsymbol{Q} \boldsymbol{d}^{(0)}=0$.

Assume that the result is true for $k-1$ (where $k<n-1$ ). We now prove the result for $k$, that is, that $\boldsymbol{d}^{(0)}, \ldots, \boldsymbol{d}^{(k+1)}$ are $\boldsymbol{Q}$-conjugate. It suffices to show that $\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)}=0,0 \leq i \leq k$. Given $i, 0 \leq i \leq k$, using the same algebraic steps as in the $k=0$ case, and using the assumption that $\alpha_i \neq 0$, we obtain
$$
\begin{aligned}
\boldsymbol{d}^{(k+1) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)} &=-\boldsymbol{g}^{(k+1) \top} \boldsymbol{H}_{k+1} \boldsymbol{Q} \boldsymbol{d}^{(i)} \\
& \vdots \\
&=-\boldsymbol{g}^{(k+1) \top} \boldsymbol{d}^{(i)}
\end{aligned}
$$
Because $\boldsymbol{d}^{(0)}, \ldots, \boldsymbol{d}^{(k)}$ are $\boldsymbol{Q}$-conjugate by assumption, we conclude from Lemma $10.2$ that $\boldsymbol{g}^{(k+1)^{\top}} \boldsymbol{d}^{(i)}=0$. Hence, $\boldsymbol{d}^{(k+1)^{\top}} \boldsymbol{Q} \boldsymbol{d}^{(i)}=0$, which completes the proof.

By this theorem, we conclude that a quasi-Newton algorithm solves a quadratic of $n$ variables in at most $n$ steps.

Note that the equations that the matrices $\boldsymbol{H}_k$ are required to satisfy do not determine those matrices uniquely. Thus, we have some freedom in the way we compute the $\boldsymbol{H}_k$. In the methods we describe, we compute $\boldsymbol{H}_{k+1}$ by adding a correction to $\boldsymbol{H}_k$. In the following sections we consider three specific updating formulas.

### The Rank One Correction Formula

In the rank one correction formula, the correction term is symmetric and has the form $a_k \boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top}$, where $a_k \in \mathbb{R}$ and $\boldsymbol{z}^{(k)} \in \mathbb{R}^n$. Therefore, the update equation is
$$
\boldsymbol{H}_{k+1}=\boldsymbol{H}_k+a_k \boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top} .
$$
Note that
$$
\operatorname{rank} \boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top}=\operatorname{rank}\left(\left[\begin{array}{c}
z_1^{(k)} \\
\vdots \\
z_n^{(k)}
\end{array}\right]\left[\begin{array}{lll}
z_1^{(k)} & \cdots & z_n^{(k)}
\end{array}\right]\right)=1
$$
and hence the name rank one correction [it is also called the single-rank symmetric (SRS) algorithm]. The product $\boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top}$ is sometimes referred to as the dyadic product or outer product. Observe that if $\boldsymbol{H}_k$ is symmetric, then so is $\boldsymbol{H}_{k+1}$.

Our goal now is to determine $a_k$ and $\boldsymbol{z}^{(k)}$, given $\boldsymbol{H}_k, \Delta \boldsymbol{g}^{(k)}, \Delta \boldsymbol{x}^{(k)}$, so that the required relationship discussed before is satisfied; namely,

$\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, i=1, \ldots, k$. To begin, let us first consider the condition $\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(k)}=\Delta \boldsymbol{x}^{(k)}$. In other words, given $\boldsymbol{H}_k, \Delta \boldsymbol{g}^{(k)}$, and $\Delta \boldsymbol{x}^{(k)}$, we wish to find $a_k$ and $\boldsymbol{z}^{(k)}$ to ensure that
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(k)}=\left(\boldsymbol{H}_k+a_k \boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top}\right) \Delta \boldsymbol{g}^{(k)}=\Delta \boldsymbol{x}^{(k)} .
$$
First note that $\boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}$ is a scalar. Thus,
$$
\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}=\left(a_k \boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}\right) \boldsymbol{z}^{(k)},
$$
and hence
$$
\boldsymbol{z}^{(k)}=\frac{\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}}{a_k\left(\boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}\right)} .
$$
We can now determine
$$
a_k \boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top}=\frac{\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top}}{a_k\left(\boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}\right)^2} .
$$
Hence,
$$
\boldsymbol{H}_{k+1}=\boldsymbol{H}_k+\frac{\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top}}{a_k\left(\boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}\right)^2} .
$$
The next step is to express the denominator of the second term on the righthand side of the equation above as a function of the given quantities $\boldsymbol{H}_k$, $\Delta \boldsymbol{g}^{(k)}$, and $\Delta \boldsymbol{x}^{(k)}$. To accomplish this, premultiply $\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}=$ $\left(a_k \boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}\right) \boldsymbol{z}^{(k)}$ by $\Delta \boldsymbol{g}^{(k) \top}$ to obtain
$$
\Delta \boldsymbol{g}^{(k) \top} \Delta \boldsymbol{x}^{(k)}-\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}=\Delta \boldsymbol{g}^{(k) \top} a_k \boldsymbol{z}^{(k)} \boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}
$$
Observe that $a_k$ is a scalar and so is $\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{z}^{(k)}=\boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}$. Thus,
$$
\Delta \boldsymbol{g}^{(k) \top} \Delta \boldsymbol{x}^{(k)}-\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}=a_k\left(\boldsymbol{z}^{(k) \top} \Delta \boldsymbol{g}^{(k)}\right)^2
$$
Taking this relation into account yields
$$
\boldsymbol{H}_{k+1}=\boldsymbol{H}_k+\frac{\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top}}{\Delta \boldsymbol{g}^{(k) \top}\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)} .
$$
We summarize the above development in the following algorithm.

#### Rank One Algorithm

1. Set $k:=0$; select $\boldsymbol{x}^{(0)}$ and a real symmetric positive definite $\boldsymbol{H}_0$.
2. If $\boldsymbol{g}^{(k)}=\mathbf{0}$, stop; else, $\boldsymbol{d}^{(k)}=-\boldsymbol{H}_k \boldsymbol{g}^{(k)}$.
3. Compute
$$
\begin{aligned}
\alpha_k &=\underset{\alpha \geq 0}{\arg \min } f\left(\boldsymbol{x}^{(k)}+\alpha \boldsymbol{d}^{(k)}\right) \\
&=-{\boldsymbol{g}^{(k)T}\boldsymbol{d}^{(k)}\over \boldsymbol{d}^{(k)T}\boldsymbol{Q}\boldsymbol{d}^{(k)}}\text{  when $f$ is quadratic, } \\
\boldsymbol{x}^{(k+1)} &=\boldsymbol{x}^{(k)}+\alpha_k \boldsymbol{d}^{(k)}
\end{aligned}
$$
4. Compute
$$
\begin{aligned}
&\Delta \boldsymbol{x}^{(k)}=\alpha_k \boldsymbol{d}^{(k)} \\
&\Delta \boldsymbol{g}^{(k)}=\boldsymbol{g}^{(k+1)}-\boldsymbol{g}^{(k)}, \\
&\boldsymbol{H}_{k+1}=\boldsymbol{H}_k+\frac{\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top}}{\Delta \boldsymbol{g}^{(k) \top}\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)}
\end{aligned}
$$
5. Set $k:=k+1$; go to step 2 .
The rank one algorithm is based on satisfying the equation
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(k)}=\Delta \boldsymbol{x}^{(k)} .
$$
However, what we want is
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, \quad i=0,1, \ldots, k .
$$
It turns out that the above is, in fact, true automatically, as stated in the following theorem.

#### Theorem

For the rank one algorithm applied to the quadratic with Hes$\operatorname{sian} \boldsymbol{Q}=\boldsymbol{Q}^{\top}$, we have $\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, 0 \leq i \leq k$.

#### Proof

We prove the result by induction. From the discussion before the theorem, it is clear that the claim is true for $k=0$. Suppose now that the theorem is true for $k-1 \geq 0$; that is, $\boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, i<k$. We now show that the theorem is true for $k$. Our construction of the correction term ensures that
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(k)}=\Delta \boldsymbol{x}^{(k)} .
$$
So we only have to show that
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, \quad i<k .
$$
To this end, fix $i<k$. We have
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}+\frac{\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top}}{\Delta \boldsymbol{g}^{(k) \top}\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)} \Delta \boldsymbol{g}^{(i)}
$$
By the induction hypothesis, $\boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}$. To complete the proof, it is enough to show that the second term on the right-hand side of the equation above is equal to zero. For this to be true it is enough that
$$
\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(i)}-\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}=0
$$
Indeed, since
$$
\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{g}^{(k) \top}\left(\boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}\right)=\Delta \boldsymbol{g}^{(k) \top} \Delta \boldsymbol{x}^{(i)}
$$
by the induction hypothesis, and because $\Delta g^{(k)}=Q \Delta x^{(k)}$, we have
$$
\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{g}^{(k) \top} \Delta \boldsymbol{x}^{(i)}=\Delta \boldsymbol{x}^{(k) \top} \boldsymbol{Q} \Delta \boldsymbol{x}^{(i)}=\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(i)} .
$$
Hence,
$$
\left(\Delta \boldsymbol{x}^{(k)}-\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right)^{\top} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(i)}-\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(i)}=0
$$
which completes the proof.

### The DFP Algorithm (Rank Two Update)

1. Set $k:=0$; select $\boldsymbol{x}^{(0)}$ and a real symmetric positive definite $\boldsymbol{H}_0$.
2. If $\boldsymbol{g}^{(k)}=\mathbf{0}$, stop; else, $\boldsymbol{d}^{(k)}=-\boldsymbol{H}_k \boldsymbol{g}^{(k)}$.
3. Compute
$$
\begin{aligned}
\alpha_k &=\underset{\alpha \geq 0}{\arg \min } f\left(\boldsymbol{x}^{(k)}+\alpha \boldsymbol{d}^{(k)}\right), \\
\boldsymbol{x}^{(k+1)} &=\boldsymbol{x}^{(k)}+\alpha_k \boldsymbol{d}^{(k)} .
\end{aligned}
$$
4. Compute
$$
\begin{aligned}
\Delta \boldsymbol{x}^{(k)} &=\alpha_k \boldsymbol{d}^{(k)}, \\
\Delta \boldsymbol{g}^{(k)} &=\boldsymbol{g}^{(k+1)}-\boldsymbol{g}^{(k)}, \\
\boldsymbol{H}_{k+1} &=\boldsymbol{H}_k+\frac{\Delta \boldsymbol{x}^{(k)} \Delta \boldsymbol{x}^{(k) \top}}{\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(k)}}-\frac{\left[\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right]\left[\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}\right]^{\top}}{\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}} .
\end{aligned}
$$
5. Set $k:=k+1$; go to step 2 .
We now show that the DFP algorithm is a quasi-Newton method, in the sense that when applied to quadratic problems, we have $\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)} \doteq \Delta \boldsymbol{x}^{(i)}$, $0 \leq i \leq k$

#### Theorem

In the DFP algorithm applied to the quadratic with Hessian $\boldsymbol{Q}=\boldsymbol{Q}^{\top}$, we have $\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, 0 \leq i \leq k$
Proof. We use induction. For $k=0$, we have
$$
\begin{aligned}
\boldsymbol{H}_1 \Delta \boldsymbol{g}^{(0)} &=\boldsymbol{H}_0 \Delta \boldsymbol{g}^{(0)}+\frac{\Delta \boldsymbol{x}^{(0)} \Delta \boldsymbol{x}^{(0) \top}}{\Delta \boldsymbol{x}^{(0) \top} \Delta \boldsymbol{g}^{(0)}} \Delta \boldsymbol{g}^{(0)}-\frac{\boldsymbol{H}_0 \Delta \boldsymbol{g}^{(0)} \Delta \boldsymbol{g}^{(0) \top} \boldsymbol{H}_0}{\Delta \boldsymbol{g}^{(0) \top} \boldsymbol{H}_0 \Delta \boldsymbol{g}^{(0)}} \Delta \boldsymbol{g}^{(0)} \\
&=\Delta \boldsymbol{x}^{(0)}
\end{aligned}
$$
Assume that the result is true for $k-1$; that is, $\boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, 0 \leq$ $i \leq k-1$. We now show that $\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}, 0 \leq i \leq k$. First, consider $i=k$. We have
$$
\begin{aligned}
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(k)} &=\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}+\frac{\Delta \boldsymbol{x}^{(k)} \Delta \boldsymbol{x}^{(k) \top}}{\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(k)}} \Delta \boldsymbol{g}^{(k)}-\frac{\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)} \Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k}{\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}} \Delta \boldsymbol{g}^{(k)} \\
&=\Delta \boldsymbol{x}^{(k)}
\end{aligned}
$$
It remains to consider the case $i<k$. To this end,
$$
\begin{aligned}
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=& \boldsymbol{H}_k \Delta \boldsymbol{g}^{(i)}+\frac{\Delta \boldsymbol{x}^{(k)} \Delta \boldsymbol{x}^{(k) \top}}{\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(k)}} \Delta \boldsymbol{g}^{(i)}-\frac{\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)} \Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k}{\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}} \Delta \boldsymbol{g}^{(i)} \\
=& \Delta \boldsymbol{x}^{(i)}+\frac{\Delta \boldsymbol{x}^{(k)}}{\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(k)}}\left(\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(i)}\right) \\
&-\frac{\boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}}{\Delta \boldsymbol{g}^{(k) \top} \boldsymbol{H}_k \Delta \boldsymbol{g}^{(k)}}\left(\Delta \boldsymbol{g}^{(k) \top} \Delta \boldsymbol{x}^{(i)}\right)
\end{aligned}
$$
Now,
$$
\begin{aligned}
\Delta \boldsymbol{x}^{(k) \top} \Delta \boldsymbol{g}^{(i)} &=\Delta \boldsymbol{x}^{(k) \top} \boldsymbol{Q} \Delta \boldsymbol{x}^{(i)} \\
&=\alpha_k \alpha_i \boldsymbol{d}^{(k) \top} \boldsymbol{Q} \boldsymbol{d}^{(i)} \\
&=0,
\end{aligned}
$$
by the induction hypothesis and Theorem 11.1. The same arguments yield $\Delta \boldsymbol{g}^{(k) \top} \Delta \boldsymbol{x}^{(i)}=0$. Hence,
$$
\boldsymbol{H}_{k+1} \Delta \boldsymbol{g}^{(i)}=\Delta \boldsymbol{x}^{(i)}
$$
which completes the proof.
We conclude that the DFP algorithm is a conjugate direction algorithm.