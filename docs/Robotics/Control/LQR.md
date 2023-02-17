---
id: Robotics - Control - LQR
title: Linear Quadratic Regulator
sidebar_position: 5
---

<!-- Typically, it is challenging to compute value function analytically from the Bellman equation. In fact, we will discuss a variety of methods to approximately obtain the value function later. However, for a certain restricted class of problems, the value function can be obtained in closed form. One such problem is that of the **Linear Quadratic Regulator (LQR)**.

LQR is an optimal control problem that deals with a linear dynamical system and a quadratic cost. Specifically, consider a discrete-time linear dynamical system (for simplicity, we assume a 1-dimensional state and input):
$$
\begin{aligned}
x_{t+1} & =a x_t+b u_t, t \in\{0,1, \ldots, N\} \tag{1} \\
x_0 & =x^{\text {init }}
\end{aligned}
$$
Our goal is to minimize a quadratic cost function:
$$
J\left(x_0, u_{0: N-1}\right)=\sum_{\tau=0}^{N-1}\left(q x_\tau^2+r u_\tau^2\right)+q_f x_N^2, \tag{2}
$$
where $q, r, q_f>0$ are cost penalties. In equation (2):
- $N$ is called the time horizon;
- $q x_\tau^2$ measures state deviation cost at $\tau=t$
- $r u_\tau^2$ measures input authority cost at $\tau=t$
- $q_f x_N^2$ measures the terminal cost.

Thus, we would like to solve the following optimization problem:
$$
\min _{u_0: N-1}\left\{J\left(x_0, u_{0: N-1}\right) \text { subject to (1) }\right\} \tag{3}
$$
Since the cost is quadratic and dynamics are linear, the above optimal control problem is a convex optimization problem. This convexity allows us to use a variety of optimization tools to solve this problem exactly. In addition, this is one of the optimal control problems, where the optimal control can be obtained in closed form using dynamic programming. These are some of the key reasons for the popularity of LQR in control and robotics literature. -->

### Problem 1

### Problem 2

#### Code Implementation

```python
import matplotlib.pyplot as plt

if __name__ == '__main__':
    a = 1
    b = 1
    q = 1
    qf = q
    r = 1
    N = 20
    x0 = 1
    p_list = [0] * (N + 1)
    k_list = [0] * (N + 1)
    state_list = [0] * (N + 2)
    state_list[0] = x0
    cost_list = [0] * (N + 1)

    # Backward computation for p and k
    def LQR(n):
        if n == N:
            p_list[n] = qf
            return
        else:
            LQR(n + 1)
            k_list[n] = p_list[n + 1] * a * b / (r + p_list[n + 1] * b ** 2)
            p_list[n] = q + r * k_list[n] ** 2 + p_list[n + 1] * a ** 2 - 2 * \
                p_list[n + 1] * a * b * k_list[n] + \
                p_list[n + 1] * b ** 2 * k_list[n] ** 2
        return
    LQR(0)

    # Forward computation for the value function
    for t in range(N + 1):
        cost_list[t] = p_list[t] * state_list[t] ** 2
        u_star = - k_list[t] * state_list[t]
        state_list[t + 1] = a * state_list[t] + b * u_star

    # Compute control
    u_list = []
    for t in range(N + 1):
        u_list.append(-k_list[t] * state_list[t])

    # Plot them
    plt.title("q = " + str(q) + ", r = " + str(r))
    plt.plot(range(N + 1), cost_list, label="cost-to-go")
    plt.plot(range(N + 2), state_list, label="state")
    plt.plot(range(N + 1), u_list, label="control")
    plt.legend()
    plt.show()
```

#### Plot

![](/img/Robotics/LQR_1.png)

### Problem 3

![](/img/Robotics/LQR_2.png)

![](/img/Robotics/LQR_3.png)

![](/img/Robotics/LQR_4.png)

![](/img/Robotics/LQR_5.png)

![](/img/Robotics/LQR_6.png)

![](/img/Robotics/LQR_7.png)


<!-- ### Pros and Cons

In LQR, the control law is

- Globally optimal (no approximations involved)
- State feedback (w/o re-optimizing anything)
- Really easy to implement with limited computing (the main reason for its popularity in robotics)

But,

- Limited in its scope
    - No constraints
    - Linear dynamics
    - Quadratic cost function -->