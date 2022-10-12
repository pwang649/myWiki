---
id: Reinforement Learning - MDP
title: Markov Decision Process
sidebar_position: 3
---

### Markov Property 

The future is independent of the past given the present

- State Transition Matrix
    - For a markov state _s_ and successor state $s^{'}$, the state transition probability is defined by
    $$
    \begin{gather*}
    P_{ss^{'}} = \mathrm{P}[S_{t+1} = s^{'}|S_t = s]
    \end{gather*}
    $$
    - The complete state transition matrix $P$ defined transition probabilities from all states _s_ to all successor states $s^{'}$

### Markov Process

A markov process is a memoryless random process, i.e. a sequence of random states $S_1, S_2, ...$ with markov property

- Definition
    - A markov process or markov chain is a tuple $(S,P)$
        - S is a (finite) set of states an agent can be in
        - $P$ is a state transition probability matrix
        - $P_{ss^{'}} = \mathrm{P}[S_{t+1} = s^{'}|S_t = s]$
        - The dynamics of an environment can be explained by markov process

- A sample is a sequence of states of a markov chain

### Markov Reward Process

It is a markov chain with values i.e. value judgements

- Definition
    - A markog reward process is a tuple $<S,P,R,\gamma>$
        - S is a (finite) set of states an agent can be in
        - $P$ is a state transition probability matrix
        - $P_{ss^{'}} = \mathrm{P}[S_{t+1} = s^{'}|S_t = s]$
        - $R$ is a reward function, $R_s = E[R_{t+1} | S_t = s]$ i.e. what reward you get next from the current state
        - $\gamma$ is a discount factor, $\gamma \in [0,1]$

#### Return (Goal)

- Definition
    - The return $G_t$ is the total discounted reward from time-step $t$
    - $G_t = R_{t+1} + \gamma R_{t+2} = \sum_{k=0}^{\inf} \gamma^{k} R_{t+k+1}$
    - There is no expectation here because we are talking about a random sample i.e. $G_t$ is just one sample from our markov reward process
    - The discount factor $\gamma \in [0,1]$ is the present value of the future rewards
    - $\gamma = 0$ is short sighted and $\gamma = 1$ is far sighted
    - The value of receiving reward $R$ after $k+1$ time-steps is $\gamma^{k} R$

##### Why discount factor ?

- Mathematically convenient to discount rewards
- Avoids infinite returns in cyclic markov processes
- Uncertainty about the future may not be fully represented
- If the reward is financial, immediate rewards may earn more interest than delayed rewards
- Animal/human behaviour shows preference for immediate reward
- It is sometimes possible to use undiscounted markov reward processes i.e. $\gamma = 1$, e.g. if all sequences terminate. Therefore by definition all returns are finite

#### Value Function

The value function $v(s)$ gives the long-term value of state $s$

- Definition
    - The state value function $v(s)$ of a markov reward process is the expected return starting from state $s$
    - $v(s) = E[G_t | S_t = s]$

#### Bellman Equation for MRPs

This is the most fundamental relation in RL. The main idea is that the value function can be decomposed into two parts, which can be used recursive:
- immediate reward $R_{t+1}$
- dicount value of successor state $\gamma v(S_{t+1})$

- math breakdown
    $$
    \begin{align*}
    V(s) & = E[G_t | S_t =s] \\
    & = E[R_{t+1} + \gamma R_{t+2} + \gamma^{2} R_{t+3}| S_t =s] \\
    & = E[R_{t+1} + \gamma (R_{t+2} + \gamma R_{t+3})| S_t =s] \\
    & = E[R_{t+1} + \gamma G_{t+1}| S_t =s] \\
    & = E[R_{t+1} + \gamma v(S_{t+1})| S_t =s]
    \end{align*}
    $$
    - The bellman equation is $v(s)= E[R_{t+1} + \gamma v(S_{t+1})| S_t =s]$ 
    - So by definition if we got a value function correct it must obey bellman equation 

##### Bellman Equation - Matrix Form

- Concise matrix notation is $v = R + \gamma P v$
    - where $v$ is a column vector with one entry per state

#### Solving the Bellman Equation

- The bellman equation is a linear equation
- It can be solved directly:
    - $v = R + \gamma Pv \rightarrow v = (I - \gamma P)^{-1} R$ 
- It is a process of evaluating the rewards
- Computational complexity is $O(n^3)$ for $n$ states
- Direct solution only possible for small MRPs
- There are many iterative methods for large MRPs, e.g.
    - Dynamic Programming
    - Monte-Carlo evaluation
    - Temporal-Difference learning

### Markov Decision Process

A markov decision process (MDP) is a markov reward process with decision (actions). It is an environment in which all states are Markov

- Definition
    - Markov decision process is a tuple $<S,A,P,R,\gamma>$
        - $S$ is a (finite) set of states an agent can be in
        - $A$ is a finite set of actions
        - $P$ is a state transition probability matrix
        - $P^{a}_{ss^{'}} = \mathrm{P}[S_{t+1} = s^{'}|S_t = s, A_t = a]$
        - $R$ is a reward function, $R^{a}_s = E[R_{t+1} | S_t = s, A_t = a]$ i.e. what reward you get next from the current state
        - $\gamma$ is a discount factor, $\gamma \in [0,1]$

#### Policy

A policy $\pi$ is a distribution over actions given states,

$$
\begin{gather*}
\pi(a|s) = \mathrm{P}[A_t = a | S_t = s]
\end{gather*}
$$

- A policy fully defines the behaviour of an agent
- MDP policies depend on the current state (not the history)
- i.e. Policies are stationary (time-independent), $\pi(.|S_t), \forall t > 0$
- Given a MDP, $M = <S,A,P,R,\gamma>$ and a policy $\pi$, we can always recover MRP or markov process
- The sample of states i.e. sequence $S_1, S_2,...$ is a markov process (chain) $<S,P^{\pi}>$. No matter what policy we choose, that policy defines some markov chain the defined the dynamics of the system
- If we fix the polciy and look at the states  and reward sequences $S_1,R_1,S_2,R_2...$ is a markov reward process $<S,P^{\pi},R^{\pi},\gamma>$ 
- where,
    - Average transition dynamics over a policy, $P^{\pi}_{ss^{'}} = \sum_{a \in A} \pi(a|s) P^{a}_{ss^{'}}$
    - Average reward function over a policy, $R^{\pi}_s = \sum_{a \in A} \pi(a|s) R^{a}_s$
- So, we can always flatten out MDP given a policy back into a markov chain

#### Value Function

- Definition
    - The state-value function $v_{\pi}(s)$ of MDP is the expected return starting from state $s$, and then following policy $\pi$
    $$
    \begin{gather*}
    v_{\pi}(s) = \mathrm{E}_{\pi}[G_t | S_t = s]
    \end{gather*}
    $$

- Definition
    - The action-value function $q_{\pi}(s,a)$ is the expected return starting from state $s$, taking action $a$, and then following policy $\pi$
    $$
    \begin{gather*}
    q_{\pi}(s,a) = \mathrm{E}_{\pi}[G_t | S_t = s, A_t = a]
    \end{gather*}
    $$

#### Bellman Expectation Equation

The state-value function can again be decomposed into immediate reward plus discounted value of successor state,

$$
\begin{gather*}   
v_{\pi}(s) = \mathrm{E}_{\pi}[R_{t+1}+\gamma v_{\pi}(S_{t+1})|S_t = s]
\end{gather*}
$$

The action-value function can similarly be decomposed as,

$$
\begin{gather*}
q_{\pi}(s,a) = \mathrm{E}_{\pi}[R_{t+1} + \gamma q_{\pi}(S_{t+1},A_{t+1})|S_t = s, A_t = a]
\end{gather*}
$$

##### Matrix Form Solution

$$
\begin{gather*}
v_{\pi} = R^{\pi} + \gamma P^{\pi} v_{\pi} \rightarrow v_{\pi} = (I-\gamma P^{\pi})^{-1}R^{\pi}
\end{gather*}
$$

#### Optimal Value Function

The main objective of an RL algorithm is the best behaviour an agent can take to maximize the goal

- Definition
    - The optimal state-value function $v_{*}(s)$ is the maximum value function over all policies
    $$
    \begin{gather*}
    v_{*}(s) = max_{\pi} \ v_{\pi}(s)
    \end{gather*}
    $$
    - The optimal action-value function $q_{*}(s,a)$ is the maximum action-value function over all policies
    $$
    \begin{gather*}
    q_{*}(s,a) = max_{\pi} \ q_{\pi}(s,a)
    \end{gather*}
    $$

- The optimal value function specified the best possible performance in the MDP
- An MDP is solved when we know the optimal value function

#### Optimal Policy

Best possible way to behave in a MDP. To understand what it means by optimal we need to define the notion of optimality. So for this we need to know what it means by one policy being better than the other. For this we define a partial ordering over policies space based on the value function over all states

$$
\begin{gather*}
\pi \ge \pi^{'} \: if \: v_{\pi}(s) \ge v_{\pi^{'}}(s), \forall s
\end{gather*}
$$

- Theorem, for any markov decision process
    - There exists an optmal policy $\pi_{*}$, that is better than or equal to all other policies, $\pi_{*} \ge \pi, \forall \pi$
    - All optimal policies achieve the optimal state-value function, $v_{\pi_{*}}(s) = v_{*}(s)$
    - All optimal policies achieve the optimal action-value function, $q_{\pi_{*}}(s,a) = q_{*}(s,a)$

##### Finding an Optimal Policy

An optimal policy can be found by maximising over $q_{*}(s,a)$, you solve for $q_{*}$ and then pick the action that gives you $q_{*}$

$$
\begin{gather*}
\pi_{*}(a|s) = 1 \rightarrow if \ a = argmax_{a \forall A} \ q_{*}(s,a); 0 \rightarrow otherwise
\end{gather*}
$$

- There is always a deterministic optimal policy for any MDP
- If we know $q_{*}(s,a)$, we immediately have the optimal policy

###### Bellman Optimality Equation for $v_{*}$

The optimal value functions are recursively related by the Bellman optimality equations

$$
\begin{gather*}
v_{*}(s) = max_a \ q_{*}(s,a)
\end{gather*}
$$

###### Bellman Optimality Equation for $Q^*$

$$
\begin{gather*} 
q_{*}(s,a) = R^a_s + \gamma \sum_{s^{'}\in S} P^{a}_{ss^{'}} v_{*}(s^{'})
\end{gather*}
$$

###### Bellman Optimality Equation for $V^*$

$$
\begin{gather*}
v_{*}(s) = max_a \ R_s^a + \gamma \sum_{s^{'}\in S} P^{a}_{ss^{'}} v_{*}(s^{'})
\end{gather*}
$$

###### Solving Bellman Optimality Equation

- Bellman optimality equation is non-linear
- No closed form solution
- Many iterative solution methods
    - Value iteration
    - Policy iteration
    - Q-learning
    - Sarsa

#### What is the intuition behind the Bellman Optimality Equation

The $q_{*}$ or $v_{*}$ is telling you what is the maximum score you can get in a given state (say a moment of the atari game). The intution is that, all you need to do to get that maximum score is the **principle of optimality**, which tell you that the way to get optimal score is to behave optimally for one step and to behave optimally for the reminder of your trajectory. If you behave optimally for the reminder of your trajectory that is the value function from the state you end up in. Now, all you need to do is to figure out how to behave optimally for one step, and the way to do this is to maximize over those optimal value functions of the places you might end up in.

Basically, breaking down your trajectory into two parts
- Optimal decision at one step
- Optimal decision from there onwards

### Extensions of MDPs

- Infinite and Continuous MDPs
- Partially observable MDPs
- Undiscounted, average reward MDPs