---
id: Optimization - Basics
title: Basics
sidebar_position: 1
---

In this section we consider the optimization problem
$$
\begin{gather*}
minimize\; \;f(x) \\
subject\; to \; \; x \in \Omega.
\end{gather*}
$$
The function $f:\mathbb{R}^n \to \mathbb{R}$ that we wish to minimize is a real-valued function called the *objective function* or *cost function*. The vector $x$ is an $n$-vector of independent variables: $x=[x_1,x_2,\cdots,x_n]^T\in\mathbb{R}^n$. Tha variables $x_1,\cdots,x_n$ are often referred to as decision variables. The set $\Omega$ is a subset of $\mathbb{R}^n$ called the *constraint set* or *feasible set*.

### Definition

Suppose that $f:\mathbb{R}^n\to \mathbb{R}$ is a real-valued function defined on some set $\Omega \subset \mathbb{R}^n$. A point $x^* \in \Omega$ is a *local minimizer* of $f$ over $\Omega$ is there exists $\varepsilon > 0$ such that $f(x)\ge f(x^*)$ for all $x \in \Omega$ if $f(x)\ge f(x^*)$ for all $x \in \Omega \backslash \{x^*\}$.

### Conditions for Local Minimizers

#### Definition

A vector $d \in \mathbb{R}^n, d \ne 0$, is a *feasible direction* at $x \in \Omega$ if there exists $\alpha_0>0$ such that $x+\alpha d\in \Omega$ for all $\alpha \in [0,\alpha_0]$.

![](/img/Optimization/feasible_direction.png)

### Theorem of First-Order Necessary Condition (FONC)

*Let $\Omega$ be a subset of $\mathbb{R}^n$ and $f\in C^1$ a real-valued function on $\Omega$. If *$x^*$* is a local minimizer of $f$ over $\Omega$, then for any feaible direction $d$ at *$x^*$*, we have*
$$
\begin{gather*}
d^T\nabla f(x^*)\ge 0.
\end{gather*}
$$

#### Proof

Define
$$
\begin{gather*}
x(\alpha)=x^*+\alpha d\in \Omega.
\end{gather*}
$$
Note that $x(0) = x^*$. Define the composite funcition
$$
\begin{gather*}
\phi(\alpha)=f(x(\alpha)).
\end{gather*}
$$
Then, by Taylor's theorem,
$$
\begin{gather*}
f(x^*+\alpha d)-f(x^*)=\phi(\alpha)-\phi(0)=\phi'(0)\alpha+o(\alpha)=\alpha d^T\nabla f(x(0))+o(\alpha),
\end{gather*}
$$
where $\alpha\ge 0$. Thus, if $\phi(\alpha)\ge \phi(0)$, that is, $f(x^*+\alpha d) \ge f(x^*)$ for sufficiently small values of $\alpha > 0$ ($x^*$ is a local minimizer), then we have to have $d^T\nabla f(x^*)\ge 0$.

#### Corollary (Interior Case)

*Let $\Omega$ be a subset of $\mathbb{R}^n$ and $f\in C^1$ a real-valued function on $\Omega$. If *$x^*$* is a local minimizer of $f$ over $\Omega$ and if *$X^*$* is an interior point of $\Omega$*, then
$$
\begin{gather*}
\nabla f(x^*) = 0.
\end{gather*}
$$

#### Proof

Suppose that $f$ has a local minimizer $x^*$ that is an interior point of $\Omega$. Because $x^*$ is an interior point of $\Omega$, the set of feasible dierctions at $x^*$ is the whole of $\mathbb{R}^n$. This, for any $d\in \mathbb{R}^n$, which implies that $\nabla f(x^*)=0$.

### Theorem of Second-Order Necessary Condition (SONC)

_Let $\Omega \subset \mathbb{R}^n, f \in C^2$ a function on $\Omega, x^*$ a local minimizer of $f$ over $\Omega$, and $d$ a feasible direction at $x^*$. If $d^T\nabla f(x^*)=0$, then_
$$
\begin{gather*}
d^TF(x^*)d \ge 0,
\end{gather*}
$$
_where $F$ is the Hessian of $f$._

#### Proof

We prove the result by contradiction. Suppose that there is a feasible direction $d$ at $x^*$ such that $d^T\nabla f(x^*) = 0$ and $d^TF(x^*)d < 0$. Let $x(\alpha)=x^*+\alpha d$ and define the composite function $\phi(\alpha)=f(x^*+\alpha d)=f(x(\alpha))$. Then, by Taylor's theorem,
$$
\begin{gather*}
\phi(\alpha)=\phi(0)+\phi''(0){\alpha^2\over 2}+o(\alpha^2),
\end{gather*}
$$
where by assumption, $\phi'(0) = d^T\nabla f(x^*)=0$ and $\phi''(0)=d^TF(x^*)d<0$. For sufficiently small $\alpha$,
$$
\begin{gather*}
\phi(\alpha)-\phi(0)=\phi''(0){\alpha^2\over 2}+o(\alpha^2)<0,
\end{gather*}
$$
that is,
$$
\begin{gather*}
f(x^*+\alpha d) < f(x^*),
\end{gather*}
$$
which contradicts the assumption that $x^*$ is a local minimizer. Thus, 
$$
\begin{gather*}
\phi''(0)=d^TF(x^*)d\ge 0.
\end{gather*}
$$

#### Corollary (Interior Case)

_Let $x^*$ be an interior point of $\Omega \subset \mathbb{R}^n$. If $x^*$ is a local minimizer of $f:\Omega\to\mathbb{R},f\in C^2$, then_
$$
\begin{gather*}
\nabla f(x^*)=0,
\end{gather*}
$$
_and $F(x^*)$ is positive semidefinite ($F(x^*)\ge 0$); that is, for all $d\in \mathbb{R}^n$,_
$$
\begin{gather*}
d^TF(x^*)d\ge 0.
\end{gather*}
$$

#### Proof

If $x^*$ is an interior point, then all directions are feasible. The result then follows from the previous corollary and SONC.

### Theorem of Second-Order Sufficient Condition (SOSC), Interior Case

Let $f \in C^2$ be defined on a region in which $x^*$ is an interior point. Suppose that
1. $\nabla f(x^*) = 0$.
2. $F(x^*) > 0$.
Then, $x^*$ is a _strict local minimizer_ of $f$.

#### Proof

Because $f\in C^2$, we have $F(x^*)=F^T(x^*)$. Using assumption 2 and Rayleigh's inequality it follows that if $d\ne 0$, then $0<\lambda_{min}(F(x^*))\|d\|^2\le d^TF(x^*)d$. By Taylor's theorem and assumption 1,
$$
\begin{gather*}
f(x^*+d)-f(x^*)={1\over 2} d^TF(x^*)d + o(\|d\|^2)\ge {\lambda_{min}(F(x^*)) \over 2}\|d\|^2+o(\|d\|^2).
\end{gather*}
$$
Hence, for all $d$ such that $\|d\|$ is sufficiently small,
$$
\begin{gather*}
f(x^*+d)>f(x^*),
\end{gather*}
$$
which completes the proof.