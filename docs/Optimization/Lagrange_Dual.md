---
id: Optimization - Lagrangian Duality
title: Lagrangian Duality
sidebar_position: 11
---

### The Lagrangian

We consider an optimization problem in the standard form:
$$
\begin{array}{ll}
\operatorname{minimize} & f_0(x) \\
\text { subject to } & f_i(x) \leq 0, \quad i=1, \ldots, m \\
& h_i(x)=0, \quad i=1, \ldots, p
\end{array}
$$
with variable $x \in \mathbf{R}^n$. We assume its domain $\mathcal{D}=\bigcap_{i=0}^m \operatorname{dom} f_i \cap \bigcap_{i=1}^p \operatorname{dom} h_i$ is nonempty, and denote the optimal value by $p^{\star}$. We do not assume the problem is convex.

The basic idea in Lagrangian duality is to take the constraints into account by augmenting the objective function with a weighted sum of the constraint functions. We define the Lagrangian $L: \mathbf{R}^n \times \mathbf{R}^m \times \mathbf{R}^p \rightarrow \mathbf{R}$ as
$$
L(x, \lambda, \nu)=f_0(x)+\sum_{i=1}^m \lambda_i f_i(x)+\sum_{i=1}^p \nu_i h_i(x)
$$
with $\operatorname{dom} L=\mathcal{D} \times \mathbf{R}^m \times \mathbf{R}^p$. We refer to $\lambda_i$ as the Lagrange multiplier associated with the $i$ th inequality constraint $f_i(x) \leq 0$; similarly we refer to $\nu_i$ as the Lagrange multiplier associated with the $i$ th equality constraint $h_i(x)=0$. The vectors $\lambda$ and $\nu$ are called the dual variables or Lagrange multiplier vectors.

### The Lagrange dual function

We define the Lagrange dual function (or just dual function) $g: \mathbf{R}^m \times \mathbf{R}^p \rightarrow \mathbf{R}$ as the minimum value of the Lagrangian over $x$ : for $\lambda \in \mathbf{R}^m, \nu \in \mathbf{R}^p$,
$$
g(\lambda, \nu)=\inf _{x \in \mathcal{D}} L(x, \lambda, \nu)=\inf _{x \in \mathcal{D}}\left(f_0(x)+\sum_{i=1}^m \lambda_i f_i(x)+\sum_{i=1}^p \nu_i h_i(x)\right) .
$$
When the Lagrangian is unbounded below in $x$, the dual function takes on the value $-\infty$. Since the dual function is the pointwise infimum of a family of affine functions of $(\lambda, \nu)$, it is concave, even when the problem is not convex.

### Lower bounds on optimal value

The dual function yields lower bounds on the optimal value $p^{\star}$ of the problem: For any $\lambda \succeq 0$ and any $\nu$ we have
$$
g(\lambda, \nu) \leq p^{\star} .
$$
This important property is easily verified. Suppose $\tilde{x}$ is a feasible point, i.e., $f_i(\tilde{x}) \leq 0$ and $h_i(\tilde{x})=0$, and $\lambda \succeq 0$. Then we have
$$
\sum_{i=1}^m \lambda_i f_i(\tilde{x})+\sum_{i=1}^p \nu_i h_i(\tilde{x}) \leq 0,
$$
since each term in the first sum is nonpositive, and each term in the second sum is zero, and therefore
$$
L(\tilde{x}, \lambda, \nu)=f_0(\tilde{x})+\sum_{i=1}^m \lambda_i f_i(\tilde{x})+\sum_{i=1}^p \nu_i h_i(\tilde{x}) \leq f_0(\tilde{x}) .
$$
Hence
$$
g(\lambda, \nu)=\inf _{x \in \mathcal{D}} L(x, \lambda, \nu) \leq L(\tilde{x}, \lambda, \nu) \leq f_0(\tilde{x}) .
$$
Since $g(\lambda, \nu) \leq f_0(\tilde{x})$ holds for every feasible point $\tilde{x}$, the inequality follows.

The inequality holds, but is vacuous, when $g(\lambda, \nu)=-\infty$. The dual function gives a nontrivial lower bound on $p^{\star}$ only when $\lambda \succeq 0$ and $(\lambda, \nu) \in \operatorname{dom} g$, i.e., $g(\lambda, \nu)>-\infty$. We refer to a pair $(\lambda, \nu)$ with $\lambda \succeq 0$ and $(\lambda, \nu) \in \operatorname{dom} g$ as dual feasible, for reasons that will become clear later.

### The Lagrange Dual Problem

For each pair $(\lambda, \nu)$ with $\lambda \succeq 0$, the Lagrange dual function gives us a lower bound on the optimal value $p^{\star}$ of the optimization problem. Thus we have a lower bound that depends on some parameters $\lambda, \nu$. A natural question is: What is the best lower bound that can be obtained from the Lagrange dual function?
This leads to the optimization problem
$$
\begin{array}{ll}
\text { maximize } & g(\lambda, \nu) \\
\text { subject to } & \lambda \succeq 0 .
\end{array}
$$
This problem is called the Lagrange dual problem. In this context the original problem is sometimes called the primal problem. The term dual feasible, to describe a pair $(\lambda, \nu)$ with $\lambda \succeq 0$ and $g(\lambda, \nu)>-\infty$, now makes sense. It means, as the name implies, that $(\lambda, \nu)$ is feasible for the dual problem. We refer to $\left(\lambda^{\star}, \nu^{\star}\right)$ as dual optimal or optimal Lagrange multipliers if they are optimal for the dual problem.

The Lagrange dual problem is a convex optimization problem, since the objective to be maximized is concave and the constraint is convex. This is the case whether or not the primal problem is convex.

#### Example (Lagrange dual of inequality form LP)

In a similar way we can find the Lagrange dual problem of a linear program in inequality form
$$
\begin{array}{ll}
\operatorname{minimize} & c^T x \\
\text { subject to } & A x \preceq b
\end{array}
$$
The Lagrangian is
$$
L(x, \lambda)=c^T x+\lambda^T(A x-b)=-b^T \lambda+\left(A^T \lambda+c\right)^T x
$$
so the dual function is
$$
g(\lambda)=\inf _x L(x, \lambda)=-b^T \lambda+\inf _x\left(A^T \lambda+c\right)^T x .
$$
The infimum of a linear function is $-\infty$, except in the special case when it is identically zero, so the dual function is
$$
g(\lambda)= \begin{cases}-b^T \lambda & A^T \lambda+c=0 \\ -\infty & \text { otherwise }\end{cases}
$$
The dual variable $\lambda$ is dual feasible if $\lambda \succeq 0$ and $A^T \lambda+c=0$.
The Lagrange dual of the LP is to maximize $g$ over all $\lambda \succeq 0$. Again we can reformulate this by explicitly including the dual feasibility conditions as constraints, as in
$$
\begin{array}{ll}
\operatorname{maximize} & -b^T \lambda \\
\text { subject to } & A^T \lambda+c=0 \\
& \lambda \succeq 0
\end{array}
$$
which is an LP in standard form.
Note the interesting symmetry between the standard and inequality form LPs and their duals: The dual of a standard form LP is an LP with only inequality constraints, and vice versa.

### Reference

*Convex Optimization*, Stephen Boyd, Lieven Vandenberghe