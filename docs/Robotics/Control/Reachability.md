---
id: Robotics - Control - Reachability
title: Reachability and Safety
sidebar_position: 7
---
---

## The Reachability Problem and Connections with Safety

We are now ready to look into the key part, i.e. how can we compute unsafe sets for an autonomous system and how can we design a safety-preserving controller?

There are many ways to compute these unsafe sets but we will primarily look into the Hamilton-Jacobi Reachability method to compute unsafe sets and safety-preserving controllers. The reason to study HJ reachability is its ability to seamlessly consider control bounds, uncertainty, or even state constraints while computing unsafe sets. Moreover, the reachability method is applicable to general nonlinear systems.

Let's start by looking into what the reachability problem is and then we will see how it is connected with the safety analysis of autonomous systems.

### Reachability Problem

In reachability, we are interested in computing the Backward Reachable Tube (BRT) of a dynamic system. BRT is the set of all starting states of the system that will eventually reach some target set despite the best control effort.

If the target set represents the failure set of a system then BRT represents the potential unsafe set of states for the system and thus should be avoided. Pictorially:

![](/img/Robotics/Reachability_1.png)

Conversely, the complement of BRT represents the set of safe states for the system.

Mathematically, let

$\mathcal{L} \subseteq \mathbb{R}^{n}$ be the target set (typically failure set)

$B R T(t) \subseteq \mathbb{R}^{n}$ be the BRT at time $t$ (typically unsafe set)

$B R T(t)=\left\{x: \forall u(\cdot) \in \mathbb{U}_{t}^{T}, \exists d(\cdot) \in \mathbb{D}_{t}^{T}, \xi_{x, t}^{u, d}(s) \in \mathcal{L} \text{ for some } s \in[t, T]\right\}$

Intuitively, $B R T(t)$ computes the set of all starting states from which no matter what control does, there exists a disturbance, that will drive the system inside the target set (or the failure set).

In other words, to compute the unsafe set we need to compute the BRT of the failure set.

#### Examples of the Failure Sets

- A high turbulence region for an aircraft.

- Ceiling, floor for an indoor autonomous drone.

- A no-go zone for a warehouse robot.

- An unmapped area for an autonomous car.

### Example

Let's go back to our 2D drone example where the drone is moving up and down inside a room.

Here, the failure set is given by the ceiling and the floor. As we will see later, the $B R T$ is given as follows:

![](/img/Robotics/Reachability_2.png)

---

## Hamilton-Jacobi Reachability

Now that we have established a connection between the BRT and the unsafe set of a system, let's talk about how we can compute the BRT. Once again, there are many methods proposed to compute the BRT; we will particularly look into HJ reachability that formulates the BRT computation as an optimal control problem. This allows us to use all the optimal control tools that we have learned so far to compute the BRT.

Specifically, HJ reachability leverages level set methods to convert the BRT computation into an optimal control problem. First, we define a target function $l(x)$ to implicitly represent the target set $\mathcal{L}$, i.e., $\mathcal{L}=\{x: l(x) \leq 0\}$. In other words,

$$
l(x) \leq 0 \Leftrightarrow x \in \mathcal{L}
$$

Thus, the target set is given by the subzero level of the target function $l(x)$.

- One such function is signed distance to $\mathcal{L}$.
  - Signed-distance $> 0$ when $x$ is outside $\mathcal{L}$
  - Signed-distance $< 0$ when $x$ is inside $\mathcal{L}$
  - Signed-distance $= 0$ when $x$ is at the boundary of $\mathcal{L}$
- As an example, imagine the target set is a circle of radius $R$ centered at the origin.

![](/img/Robotics/Reachability_3.png)

### Converting to an OC Problem

Recall that we are formulating BRT computation as an optimal control problem. For an optimal control problem, we need a cost function. To do so, we define the following cost function:

$$
J(x, u(\cdot), d(\cdot), t)=\min _{s \in\left[t_{s} T\right]} l(x(s))
$$

$J$ represents the minimum signed distance achieved by the trajectory starting at $x$ during the time horizon $[t, T]$ under the control $u(\cdot)$ and disturbance $d(\cdot)$. Let's understand this cost function a bit better.

- Case 1:

    ![](/img/Robotics/Reachability_4.png)

    $$
    J\left(x_{0}, u_1(\cdot), d_1(\cdot), t\right)>0
    $$

- Case 2:

    ![](/img/Robotics/Reachability_5.png)

    $$
    J\left(x_{0}, u_{2}(\cdot), d_{2}(\cdot), t\right)<0
    $$

- Case 3:

    ![](/img/Robotics/Reachability_6.png)

    $$
    J\left(x_{0}, u_{3}(\cdot), d_{3}(\cdot), t\right)<0
    $$

Thus, by looking at the sign of $J$, we can tell whether the trajectory ever entered the target set or not under a given control and disturbance function. If we want to keep the system safe, the control should try to keep the system outside the target set as much as it can, i.e., it should try to maximize $J$ and the disturbance should try to minimize $J$. Thus, our optimal control problem reads:

$$
\begin{aligned}
V(x, t) & =\max _{u(\cdot)\in \Gamma_u} \min_{d(\cdot) \in \Gamma_d} J(x, u(\cdot), d(\cdot), t) \\
& =\max _{u(\cdot) \in \Gamma_{u}} \min _{d(\cdot) \in \Gamma_{d}}\left(\min _{s \in\left[t, T\right]} l(x(s))\right)
\end{aligned}
$$

Now suppose that $V\left(x_{0}, t\right)<0$ for some state $x_{0}$. This means that the control tried but couldn't do anything to avoid getting the system into the target set. In other words, $x_{0} \in B R T(t)$.

Similarly, if $V\left(x_{0}, t\right)>0$. This means that the control was successful in keeping the system trajectory outside the target set despite the worst-case uncertainty. In other words, $x_{0} \notin B R T(t)$.

Thus, once we have the value function, we can compute the BRT as:

$$
B R T(t)=\{x: V(x, t) \leq 0\}
$$

### Solving the OC Problem

Great! We now have an optimal control problem whose solution can give us the BRT. So all that remains is to solve the optimal control problem. The issue is that the cost function of this OC problem is different -- it is no longer a running cost as we had earlier, rather it is a minimum operation over time. The good news is that we can still use the principle of optimality and dynamic programming to compute the value function.

Recall that,

$$
\begin{aligned}
V(x, t)& =\max _{u(\cdot)} \min _{d(\cdot)} \min _{s \in\left[t, T\right]} l(x(s)) \\
& =\max _{u(\cdot)} \min _{d(\cdot)} \min \left\{\min _{s \in[t, t+\delta]} l(x(s)), \min _{z \in[t+\delta, T]} l(x(z))\right\} \\
& =\max _{u(\cdot)} \min _{d(\cdot)} \min \left\{\min _{s \in[t, t+\delta]} l(x(s)), J(x(t+\delta), u(\cdot), d(\cdot), t+\delta)\right\} \\
& =\max _{u(\cdot)} \min _{d(\cdot)} \min \left\{\min _{s \in[t, t+\delta]} l(x(s)), V(x(t+\delta), t+\delta)\right\} \\
& =\max _{u(\cdot)} \min _{d(\cdot)} \min \{l(x), V(x(t+\delta), t+\delta)\}
\end{aligned}
$$

As before, we will do the Taylor expansion of $V(x(t+\delta), t+\delta)$

$$
\begin{aligned}
V(x(t+\delta), t+\delta) & \approx V(x, t)+\frac{\partial V}{\partial x} \cdot d x+\frac{\partial V}{\partial t} \cdot \delta+\text { h.o.t. } \\
& \approx V(x, t)+\frac{\partial V}{\partial x} \cdot f\left(x, u, d\right) \delta + \frac{\partial V}{\partial t} \cdot \delta
\end{aligned}
$$

Thus, we have:

$$
\begin{aligned}
V\left(x, t\right)& =\min _{u(\cdot)} \max _{d(\cdot)} \min \left\{l(x), V(x, t)+\frac{\partial V}{\partial x} \cdot f(x, u, d) \delta+\frac{\partial V}{\partial t} \delta\right\} \\
& =\min _{u(t)} \max _{d(t)} \min \left\{l(x), V(x, t)+\frac{\partial V}{\partial x} \cdot f(x, u, d) \delta+\frac{\partial V}{\partial t} \delta\right\} \\
& =\min \left\{l(x), V(x, t)+\frac{\partial V}{\partial t} \delta+\min_{u} \max_d \frac{\partial V}{\partial x} \cdot f\left(x, u, d\right) \delta \right\} \\
& \Rightarrow \min \left\{l(x)-V(x, t), \delta\left(\frac{\partial V}{\partial t}+\min _{u} \max _{d} \frac{\partial V}{\partial x} \cdot f(x, u, d)\right)\right\}=0
\end{aligned}
$$

Since this statement is true for all $\delta>0$, we have:

$$
\begin{aligned}
& \min \left\{l(x)-V(x, t), \frac{\partial V}{\partial t}+\min _{u} \max _{d} \frac{\partial V}{\partial x}\cdot f(x, u, d)\right\}=0 \\
\equiv & \min \left\{\frac{\partial V}{\partial t}+\min _{u} \max _{d} \frac{\partial V}{\partial x}\cdot f\left(x, u, d\right), l(x)-V(x, t)\right\}=0
\end{aligned}
$$

This is called HJI Variational Inequality (HJI-VI). HJI-VI is very similar to HJI PDE with an additional term of $l(x)-V(x, t)$. But as we will see next, the set of tools for solving HJI PDE can also be used to solve HJI-VI.
