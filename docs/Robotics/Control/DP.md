---
id: Robotics - Control - Dynamic Programming
title: Dynamic Programming
sidebar_position: 4
---

## Discrete-time Optimal Control Problems

We will next study the method of dynamic programming to solve optimal control problems. Dynamic programming relies on the principle of optimality that was developed by Richard Bellman around 1958 when he was working in RAND cooperation. Since then dynamic programming has been heavily used in computer science, operations research, control, and robotics among other domains.

To understand what dynamic programming is, we will consider the following simple example where we are interested in taking a path from $A$ to $B$ with minimum cost.

![](/img/Robotics/DP_1.png)

There are 3 optimal paths from node 1 to node 10, all with equal costs.

![](/img/Robotics/DP_2.png)

There are a few important things to note here about dynamic programming:

- DP gives you the optimal path from all nodes to node 10. So we get the optional solution for the intermediate nodes for free.

- Because it explores all intermediate nodes, it provides us with a globally optimal solution to our problem.

- DP gives us significant computational savings over forward computation/shooting methods.

### Principle of Optimality

Now, let's try to understand the underlying mathematical principle based on the above example. DP relies on the principle of optimality: To understand the principle of optimality:

> In an optimal sequence of decisions or choices, each subsequence must also be optimal. Thus, if we take any state along the optimal state trajectory, then the remaining sub-trajectory is also optimal."

In the above example, if I take any intermediate node along the optimal route, I take the most optimal route from that intermediate node to the destination node. This can also be seen pictorially as:

![](/img/Robotics/DP_3.png)

We can also write down the principle of optimality in a mathematical way. Our goal in the above route planning problem is to minimize the cost to the goal node starting from node 1. Let $J\left(k, p_{1}, p_{2},\cdots p_{m}\right)$ denotes the cost of the route starting from node $k$ and taking the path connections $p_{1}, p_{2},\cdots p_{m}$ afterwards.

$$
J\left(k, p_{1},\cdots p_{m}\right)=\mathcal{L}\left(k, p_{1}\right)+J\left(k^{+}, p_{2},\cdots p_{m}\right)
$$

$\mathcal{L}(\cdot)$ is the immediate cost of the connection, and $J(\cdot)$ is the node you arrived at by taking $p_{1}$ at node $k$.

### Bellman Equation

Let $V(k)=\min_{p_1\cdots p_m} J\left(k, p_{1},\cdots p_{m}\right)$ be the optimal cost of the path from $k$ to the goal node.

$$
\begin{aligned}
& V(k)=\min_{p_1\cdots p_m} \left\{\mathcal{L}\left(k, p_{1}\right)+J\left(k^{+}, p_{2},\cdots p_{m}\right)\right\} \\
& V(k)=\min_{p_1\cdots p_m}\{\mathcal{L}\left(k, p_{1}\right)+V\left(k^{+}\right)\}
\end{aligned}
$$
We can restrict ourselves to the optimal path from $k^+$ onwards. No need to look for any alternative routes from $k^+$ onwards.

$V(k)=\min_{p_1}\left\{\mathcal{L}\left(k, p_{1}\right)+V\left(k^{+}\right)\right\} \leftarrow$ No longer need to optimize over $p_{2}\cdots p_{m}$ anymore.

This is precisely what we did to find the optimal route from node 1 to node 10. The above equation is called the **Bellman equation**. The beauty of the Bellman equation is that it allows us to decompose the decision-making problem into smaller sub-problems and solve it recursively.

We can also apply the same concept to our optimal control problem where these nodes become our states and connections become our control input. Recall our discrete-time optimal control problem:

$$
\begin{aligned}
\min _{u_{t: T}} \quad & J\left(x_{t}, u_{t: T}, t\right)=\sum_{s=t}^{T} \mathcal{L}\left(x_{s}, u_{s}\right)+l(x(T+1)) \\
\text { subject to } \quad & x_{s+1}=f_{D}\left(x_{s}, u_{s}\right) \quad \forall s \in\{t, \cdots, T\}
\end{aligned}
$$

Applying the principle of optimality we have that along the optimal state trajectory, we must have:

![](/img/Robotics/DP_trajectory.png)

Thus, if we define:

$$
V\left(x_{t}, t\right)=\min _{u_{t: T}} J\left(x_{t}, u_{t: T}, t\right)
$$

then, 
$$
\begin{aligned}
V\left(x_{t}, t\right) & =\min _{u_{t: T}}\left\{\mathcal{L}\left(x_{t,} u_{t}\right)+J\left(x_{t+1}, u_{t+1: T}, t+1\right)\right\} \\

& =\min _{u_{t: T}}\{\mathcal{L}\left(x_{t}, u_{t}\right)+V\left(x_{t+1}, t+1\right)\} \\

& \text { with } V(x, T+1)=l(x)

\end{aligned}
$$

- This is called the Bellman equation.

- $V$ here is called the value function or the optimal cost-to-go.

- What is beautiful about the above equation is that it has reduced the optimal control problem over a horizon into recursive, pointwise optimization over control.

- The value function is typically hard to solve in closed form for most dynamical systems but for some problems, we can write down the value function in a closed form (LQR). 

### Deriving Optimal Control from the Value Function

Recall that our end objective was to obtain control by solving the discrete-time OC problem so that we can apply it to the system. Let's discuss how we can obtain OC from the value function. By definition of the value function, the optimal control is given by the value function minimizer, i.e.,

$$
u_t^*(x_t) = \argmin _{u_{t}}\{\mathcal{L}\left(x_{t}, u_{t}\right)+V\left(x_{t+1}, t+1\right)\}
$$

It is also common to define state-action value:

$$
Q(x_t, u_t) = \mathcal{L}\left(x_{t}, u_{t}\right)+V\left(x_{t+1}, t+1\right)
$$

$Q(\cdot)$ is the cost incurred when you take "action" $u_t$ at state $x_t$ but take optimal path from $x_{t+1}$ onwards.

![](/img/Robotics/DP_4.png)

Thus, the optimal control can also be written as:

$$
u_t^*(x_t) = \argmin_{u_t}Q(x_t, u_t)
$$

Note that the optimal control is state-dependent, i.e., it is a feedback control.

### Example: Discrete-time LQR

Please visit this page for more detailed information.

