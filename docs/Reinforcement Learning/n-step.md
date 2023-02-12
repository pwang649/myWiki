---
id: Reinforcement Learning - n-step
title: n-step Bootstrapping
sidebar_position: 7
---

### n-step TD Prediction

![](/img/RL/n-step.png)

Recall that our one-step return used for $\operatorname{TD}(0)$ was:
$$
G_{t: t+1}=R_{t+1}+\gamma V_t\left(S_{t+1}\right)
$$
we can generalize this to the $n$-step case as follows:
$$
G_{t: t+n}=R_{t+1}+\gamma R_{t+2}+\cdots+\gamma^{n-1} R_{t+n}+\gamma^n V_{t+n-1}\left(S_{t+n}\right)
$$
for all $n, t$ such that $n \geq 1$ and $0 \leq t \leq T-n$. All $n$-step returns can be considered approximations to the full return, truncated after $n$ steps and then corrected for the remaining missing terms by $V_{t+n-1}\left(S_{t+n}\right)$. If the n-step return extends to or beyond termination then all the missing terms are taken as zero.

#### Pseudocode

![](/img/RL/n-step_code.png)

The $n$-step return uses the value function $V_{t+n-1}$ to correct for the missing rewards beyond $R_{t+n}$. An important property of $n$-step returns is that their expectation is guaranteed to be a better estimate of $v_\pi$ than $V_{t+n-1}$ is, in a worst-state sense. That is, the worst error of the expected $n$-step return is guaranteed to be less than or equal to $\gamma^n$ times the worst error under $V_{t+n-1}$ :
$$
\max _s\left|\mathbb{E}_\pi\left[G_{t: t+n} \mid S_t=s\right]-v_\pi(s)\right| \leq \gamma^n \max _s\left|V_{t+n-1}(s)-v_\pi(s)\right|
$$
for all $n \geq 1$. This is called the error reduction property of $n$-step returns. Because of the error reduction property, one can show formally that all $n$-step TD methods converge to the correct predictions under appropriate technical conditions. The $n$-step TD methods thus form a family of sound methods, with one-step TD methods and Monte Carlo methods as extreme members.

### n-step Sarsa

The main idea is to simply switch states for actions (state-action pairs) and then use an $\varepsilon$-greedy policy. The backup diagrams for $n$-step Sarsa (shown in Figure 7.3), like those of $n$-step TD (Figure 7.1), are strings of alternating states and actions, except that the Sarsa ones all start and end with an action rather a state. We redefine $n$-step returns (update targets) in terms of estimated action values:
$$
G_{t: t+n} \doteq R_{t+1}+\gamma R_{t+2}+\cdots+\gamma^{n-1} R_{t+n}+\gamma^n Q_{t+n-1}\left(S_{t+n}, A_{t+n}\right), \quad n \geq 1,0 \leq t<T-n
$$
with $G_{t: t+n} \doteq G_t$ if $t+n \geq T$. The natural algorithm is then
$$
Q_{t+n}\left(S_t, A_t\right) \doteq Q_{t+n-1}\left(S_t, A_t\right)+\alpha\left[G_{t: t+n}-Q_{t+n-1}\left(S_t, A_t\right)\right], \quad 0 \leq t<T, \text { (7.5) }
$$
while the values of all other states remain unchanged: $Q_{t+n}(s, a)=Q_{t+n-1}(s, a)$, for all $s, a$ such that $s \neq S_t$ or $a \neq A_t$. This is the algorithm we call $n$-step Sarsa. Pseudocode is shown in the box on the next page, and an example of why it can speed up learning compared to one-step methods is given in Figure 7.4.

![](/img/RL/n-step_Sarsa.png)

![](/img/RL/n-step_Sarsa_performance.png)

#### Pseudocode

![](/img/RL/n-step_Sarsa_code.png)

### n-step Off-policy Learning

In $n$-step methods, returns are constructed over $n$ steps, so we are interested in the relative probability of just those $n$ actions. For example, to make a simple off-policy version of $n$-step TD, the update for time $t$ (actually made at time $t+n$ ) can simply be weighted by $\rho_{t: t+n-1}$:
$$
V_{t+n}\left(S_t\right) \doteq V_{t+n-1}\left(S_t\right)+\alpha \rho_{t: t+n-1}\left[G_{t: t+n}-V_{t+n-1}\left(S_t\right)\right], \quad 0 \leq t<T,
$$
where $\rho_{t: t+n-1}$, called the *importance sampling ratio*, is the relative probability under the two policies of taking the $n$ actions from $A_t$ to $A_{t+n-1}$ (cf. Eq. 5.3):
$$
\rho_{t: h} \doteq \prod_{k=t}^{\min (h, T-1)} \frac{\pi\left(A_k \mid S_k\right)}{b\left(A_k \mid S_k\right)}
$$

#### Pseudocode

![](/img/RL/n-step_off_policy.png)

### Off-policy Learning Without Importance Sampling: The n-step Tree Backup Algorithm

In this tree backup update, the target now includes all rewards plus the estimated values of the dangling action nodes hanging off the sides, at all levels. It is an update from the entire tree of estimated action values. For each node in the tree backup diagram, the estimated values of the non-selected actions are weighted by their probability of being selected under our policy $\pi\left(A_t \mid S_t\right)$. The value of the selected action does not contribute at all at this stage, instead its probability of being selected weights the instantaneous reward of the next state and each of the non-selected actions at the next state, which too are weighted by their probabilities of occurring as described previously. Formally, the one-step return is as follows:
$$
G_{t: t+1} \doteq R_{t+1}+\gamma \sum_a \pi\left(a \mid S_{t+1}\right) Q_t\left(S_{t+1}, a\right)
$$
for $t<T-1$, and the two-step tree-backup return is
$$
\begin{align*}
G_{t: t+2} & \doteq R_{t+1}+\gamma \sum_{a \neq A_{t+1}} \pi\left(a \mid S_{t+1}\right) Q_{t+1}\left(S_{t+1}, a\right) \\
& +\gamma \pi\left(A_{t+1} \mid S_{t+1}\right)\left(R_{t+2}+\gamma \sum_a \pi\left(a \mid S_{t+2}\right) Q_{t+1}\left(S_{t+2}, a\right)\right) \\
& =R_{t+1}+\gamma \sum_{a \neq A_{t+1}} \pi\left(a \mid S_{t+1}\right) Q_{t+1}\left(S_{t+1}, a\right)+\gamma \pi\left(A_{t+1} \mid S_{t+1}\right) G_{t+1: t+2},
\end{align*}
$$
for $t<T-2$.
The latter form suggests the general recursive definition of the tree-backup $n$-step return:
$$
G_{t: t+n} \doteq R_{t+1}+\gamma \sum_{a \neq A_{t+1}} \pi\left(a \mid S_{t+1}\right) Q_{t+n-1}\left(S_{t+1}, a\right)+\gamma \pi\left(A_{t+1} \mid S_{t+1}\right) G_{t+1: t+n},
$$
for $t<T-1, n \geq 2$. This target is then used with the usual action-value update rule from $n$-step Sarsa:
$$
Q_{t+n}\left(S_t, A_t\right) \doteq Q_{t+n-1}\left(S_t, A_t\right)+\alpha\left[G_{t: t+n}-Q_{t+n-1}\left(S_t, A_t\right)\right],
$$
for $0 \leq t<T$, while the values of all other state-action pairs remain unchanged: $Q_{t+n}(s, a)=Q_{t+n-1}(s, a)$, for all $s, a$ such that $s \neq S_t$ or $a \neq A_t$.

#### Pseudocode

![](/img/RL/n-step_tree.png)