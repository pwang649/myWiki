---
id: Optimization - LP
title: Linear Programming
sidebar_position: 6
---

### Code

Please visit [this page](/docs/Code/Optimization/Code%20-%20LP) for the code implementation of the LP method.

Formally, a linear program is an optimization problem of the form
$$
\begin{aligned}
\operatorname{minimize} \; & \boldsymbol{c}^{\top} \boldsymbol{x} \\
\text { subject to } & \boldsymbol{A} \boldsymbol{x}=\boldsymbol{b} \\
& \boldsymbol{x} \geq \mathbf{0},
\end{aligned}
$$
where $\boldsymbol{c} \in \mathbb{R}^n, \boldsymbol{b} \in \mathbb{R}^m$, and $\boldsymbol{A} \in \mathbb{R}^{m \times n}$. The vector inequality $\boldsymbol{x} \geq \mathbf{0}$ means that each component of $\boldsymbol{x}$ is nonnegative. Several variations of this problem are possible; for example, instead of minimizing, we can maximize, or the constraints may be in the form of inequalities, such as $\boldsymbol{A} \boldsymbol{x} \geq \boldsymbol{b}$ or $\boldsymbol{A} \boldsymbol{x} \leq \boldsymbol{b}$. Here $\boldsymbol{A}$ is an $m \times n$ matrix composed of real entries, $m<n, \operatorname{rank} \boldsymbol{A}=m$.

![](/img/Optimization/LP.png)

### Standard Form Linear Programs

If a linear program is in the form
$$
\begin{aligned}
\operatorname{minimize} \; & \boldsymbol{c}^{\top} \boldsymbol{x} \\
\text { subject to } & \boldsymbol{A} \boldsymbol{x} \geq \boldsymbol{b} \\
& \boldsymbol{x} \geq \mathbf{0}
\end{aligned}
$$
then by introducing surplus variables $y_i$, we can convert the original problem into the standard form
In more compact notation, the formulation above can be represented as $\operatorname{minimize} \boldsymbol{c}^{\top} \boldsymbol{x}$
subject to $\boldsymbol{A} \boldsymbol{x}-\boldsymbol{I}_m \boldsymbol{y}=\left[\boldsymbol{A},-\boldsymbol{I}_m\right]\left[\begin{array}{l}\boldsymbol{x} \\ \boldsymbol{y}\end{array}\right]=\boldsymbol{b}$
$$
\boldsymbol{x} \geq \mathbf{0}, \boldsymbol{y} \geq \mathbf{0},
$$
where $\boldsymbol{I}_m$ is the $m \times m$ identity matrix.
If, on the other hand, the constraints have the form
$$
\begin{aligned}
\boldsymbol{A} \boldsymbol{x} & \leq \boldsymbol{b} \\
\boldsymbol{x} & \geq \mathbf{0},
\end{aligned}
$$
then we introduce slack variables $y_i$ to convert the constraints into the form
$$
\begin{aligned}
&\boldsymbol{A} \boldsymbol{x}+\boldsymbol{I}_m \boldsymbol{y}=\left[\boldsymbol{A}, \boldsymbol{I}_m\right]\left[\begin{array}{c}
\boldsymbol{x} \\
\boldsymbol{y}
\end{array}\right]=\boldsymbol{b} \\
&\boldsymbol{x} \geq \mathbf{0}, \boldsymbol{y} \geq \mathbf{0}
\end{aligned}
$$
where $\boldsymbol{y}$ is the vector of slack variables. Note that neither surplus nor slack variables contribute to the objective function $\boldsymbol{c}^{\top} \boldsymbol{x}$.

In summary, to convert the problem into a standard form linear programming problem, we perform the following steps:
1. Change the objective function to: minimize $x_1-x_2$.
2. Substitute $x_1=-x_1^{\prime}$.
3. Write $\left|x_2\right| \leq 2$ as $x_2 \leq 2$ and $-x_2 \leq 2$.
4. Introduce slack variables $x_3$ and $x_4$, and convert the inequalities above to $x_2+x_3=2$ and $-x_2+x_4=2$.
5. Write $x_2=u-v, u, v \geq 0$.

### Basic Solutions

#### Definition

We call $\left[\boldsymbol{x}_B^{\top}, \boldsymbol{0}^{\top}\right]^{\top}$ a basic solution to $\boldsymbol{A x}=\boldsymbol{b}$ with respect to the basis $\boldsymbol{B}$. We refer to the components of the vector $\boldsymbol{x}_B$ as basic variables and the columns of $\boldsymbol{B}$ as basic columns.

If some of the basic variables of a basic solution are zero, then the basic solution is said to be a degenerate basic solution.
A vector $\boldsymbol{x}$ satisfying $\boldsymbol{A} \boldsymbol{x}=\boldsymbol{b}, \boldsymbol{x} \geq \mathbf{0}$, is said to be a feasible solution. A feasible solution that is also basic is called a basic feasible solution. If the basic feasible solution is a degenerate basic solution, then it is called a degenerate basic feasible solution.

### Properties of Basic Solutions

#### Definition

Any vector $\boldsymbol{x}$ that yields the minimum value of the objective function $\boldsymbol{c}^{\top} \boldsymbol{x}$ over the set of vectors satisfying the constraints $\boldsymbol{A} \boldsymbol{x}=\boldsymbol{b}, \boldsymbol{x} \geq \mathbf{0}$, is said to be an optimal feasible solution.

An optimal feasible solution that is basic is said to be an optimal basic feasible solution.

#### Fundamental Theorem of LP

Consider a linear program in standard form.
1. If there exists a feasible solution, then there exists a basic feasible solution.
2. If there exists an optimal feasible solution, then there exists an optimal basic feasible solution.

#### Proof

We first prove part 1. Suppose that $\boldsymbol{x}=\left[x_1, \ldots, x_n\right]^{\top}$ is a feasible solution and it has $p$ positive components. Without loss of generality, we can assume that the first $p$ components are positive, whereas the remaining components are zero. Then, in terms of the columns of $\boldsymbol{A}=\left[\boldsymbol{a}_1, \ldots, \boldsymbol{a}_p, \ldots, \boldsymbol{a}_n\right]$, this solution satisfies
$$
x_1 \boldsymbol{a}_1+x_2 \boldsymbol{a}_2+\cdots+x_p \boldsymbol{a}_p=\boldsymbol{b} .
$$
There are now two cases to consider.

Case 1: If $\boldsymbol{a}_1, \boldsymbol{a}_2, \ldots, \boldsymbol{a}_p$ are linearly independent, then $p \leq m$. If $p=m$, then the solution $\boldsymbol{x}$ is basic and the proof is done. If, on the other hand, $p<m$, then, since $\operatorname{rank} \boldsymbol{A}=m$, we can find $m-p$ columns of $\boldsymbol{A}$ from the remaining $n-p$ columns so that the resulting set of $m$ columns forms a basis. Hence, the solution $\boldsymbol{x}$ is a (degenerate) basic feasible solution corresponding to the basis above.

Case 2: Assume that $\boldsymbol{a}_1, \boldsymbol{a}_2, \ldots, \boldsymbol{a}_p$ are linearly dependent. Then, there exist numbers $y_i, i=1, \ldots, p$, not all zero, such that
$$
y_1 \boldsymbol{a}_1+y_2 \boldsymbol{a}_2+\cdots+y_p \boldsymbol{a}_p=\mathbf{0} .
$$
We can assume that there exists at least one $y_i$ that is positive, for if all the $y_i$ are nonpositive, we can multiply the equation above by $-1$. Multiply the equation by a scalar $\varepsilon$ and subtract the resulting equation from $x_1 a_1+x_2 \boldsymbol{a}_2+$ $\cdots+x_p \boldsymbol{a}_p=\boldsymbol{b}$ to obtain
$$
\left(x_1-\varepsilon y_1\right) \boldsymbol{a}_1+\left(x_2-\varepsilon y_2\right) \boldsymbol{a}_2+\cdots+\left(x_p-\varepsilon y_p\right) \boldsymbol{a}_p=\boldsymbol{b} .
$$
Let
$$
\boldsymbol{y}=\left[y_1, \ldots, y_p, 0, \ldots, 0\right]^{\top}
$$
Then, for any $\varepsilon$ we can write
$$
\boldsymbol{A}[\boldsymbol{x}-\varepsilon \boldsymbol{y}]=\boldsymbol{b} .
$$
Let $\varepsilon=\min \left\{x_i / y_i: i=1, \ldots, p, y_i>0\right\}$. Then, the first $p$ components of $\boldsymbol{x}-\varepsilon \boldsymbol{y}$ are nonnegative, and at least one of these components is zero. We then have a feasible solution with at most $p-1$ positive components. We can repeat this process until we get linearly independent columns of $\boldsymbol{A}$, after which we are back to case 1 . Therefore, part 1 is proved.

We now prove part 2. Suppose that $\boldsymbol{x}=\left[x_1, \ldots, x_n\right]^{\top}$ is an optimal feasible solution and only the first $p$ variables are nonzero. Then, we have two cases to consider. The first case is exactly the same as in part 1 . The second case follows the same arguments as in part 1 , but in addition we must show that $\boldsymbol{x}-\varepsilon \boldsymbol{y}$ is optimal for any $\varepsilon$. We do this by showing that $\boldsymbol{c}^{\top} \boldsymbol{y}=0$. To this end, assume that $\boldsymbol{c}^{\top} \boldsymbol{y} \neq 0$. Note that for $\varepsilon$ of sufficiently small magnitude $\left(|\varepsilon| \leq \min \left\{\left|x_i / y_i\right|: i=1, \ldots, p, y_i \neq 0\right\}\right)$, the vector $\boldsymbol{x}-\varepsilon \boldsymbol{y}$ is feasible. We can choose $\varepsilon$ such that $\boldsymbol{c}^{\top} \boldsymbol{x}>\boldsymbol{c}^{\top} \boldsymbol{x}-\varepsilon \boldsymbol{c}^{\top} \boldsymbol{y}=\boldsymbol{c}^{\top}(\boldsymbol{x}-\varepsilon \boldsymbol{y})$. This contradicts the optimality of $\boldsymbol{x}$. We can now use the procedure from part 1 to obtain an optimal basic feasible solution from a given optimal feasible solution.