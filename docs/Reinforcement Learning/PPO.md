---
id: Reinforement Learning - PPO
title: Proximal Policy Optimization Algorithms
sidebar_position: 10
---

### Intro

- It is a policy gradient optimization algorithm, that is, in each step there is an update to an existing policy to seek improvement on certain parameters
- It ensures that the update is not too large, that is the old policy is not too different from the new policy (it does so by essentially “clipping” the update region to a very narrow range)
- Advantage function is the difference between the future discounted sum of rewards on a certain state and action, and the value function of that policy.
- Importance Sampling ratio, or the ratio of the probability under the new and old policies respectively, is used for update
- $\varepsilon$ is a hyperparameter denotes the limit of the range within which the update is allowed

### Algorithm

$$
\begin{gather*}
L^{CLIP}(\theta) = \hat{E_t}[min(r_t(\theta) \hat{A_t}, clip(r_t(\theta), 1-\varepsilon, 1+\varepsilon) \hat{A_t})]
\end{gather*}
$$

- $\theta$ is the policy parameter
- $\hat{E_t}$ denotes the empirical expectation over timesteps
- $r_t$ is the ratio of the probability under the new and old policies, respectively
- $\hat{A_t}$ is the estimated advantage at time t
- $\varepsilon$ is a hyperparameter, usually 0.1 or 0.2

### Pseudocode

![](https://spinningup.openai.com/en/latest/_images/math/e62a8971472597f4b014c2da064f636ffe365ba3.svg)

What we can observe, is that small batches of observation are used for updation, and then thrown away in order to incorporate new a new batch of observations,aka “minibatch”. The updated policy will be $\varepsilon$-clipped to a small region so as to not allow huge updates which might potentially be irrecoverably harmful. In short, PPO behaves exactly like other policy gradient methods in the sense that it also involves the calculation of output probabilities in the forward pass based on various parameters and calculating the gradients to improve those decisions or probabilities in the backward pass. It involves the usage of importance sampling ration like it’s predecessor, TRPO. However, it also ensures that the old policy and new policy are at least at a certain proximity (denoted by $\varepsilon$), and very large updates are not allowed. It has become one of the most widely used policy optimization algorithms in the field of reinforcement learning.