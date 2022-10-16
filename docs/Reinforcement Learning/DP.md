---
id: Reinforcement Learning - DP
title: Dyanamic Programming
sidebar_position: 4
---
### Planning by Dynamic Programming

- **Dynamic:** Problems that have sequantial or temporal component, step-by-step changes 
- **Programming:** Optimizing a "program", i.e. a policy for the best behaviour of the agent
- Dynamic programming lets us solve complex problems by
    - breaking the problem into subproblems 
    - then combining solutions to subproblems
- Dynamic programming is a **tool** by which we can solve MDPs and find the optimal policies
- Dynamics programming is a very general solution methods for problems which have two main properties
    - Optimal substructure
        - Principle of optimality applies
        - Which allows breaking of the whole problem into pieces, solving each of them and the optimal solution of each pieces tells how the optimal solution of the whole problem is
        - Example is the shortest path, can be broken down to shortest path to the mid point and then the shortest path from mid point to the end
        - Optimal solution can be decomposed into subproblems
    - Overlapping subproblems
        - Subproblems recur many times
        - Solutions can be cached and resued which
    - MDPs satisfy both the properties
        - Bellman equation gives recursive decomposition i.e. optimal behaviour for one step followed by optimal behaviour from one step
        - Value function is kinda cache which stores and resuses solutions of all the information related to the MDP

- Dynamic programming assumes full knowledge of the MDPs. Planning is not exactly a full RL problem but a different one which uses the full knowledge of MDPs
- It is used for planning in an MDP
- For prediction:
    - Given an MDP $<S,A,P,R,\gamma>$ as input and given a policy $\pi$ what is the reward one can get in such an environment
    - Also, given MRP $<S,A,P^{\pi},R^{\pi},\gamma>$
    - The output is the value function $v_{\pi}$ which tells you how much reward you get from any state of the MDP given the policy $\pi$
- For control:
    - This is the case of planning which is the full optimization where we are trying to figure out the best things to do in an MDP
    - Given an MDP $<S,A,P,R,\gamma>$ as input 
    - Output is to know the optimal policy $\pi_{*}$ that gives the optimal value function $v_{*}$
- This is how we proceed with the planning, start with the prediction problem assuming a policy $\pi$ and figure out what is the reward we can get. This will be used as an inner loop to do control
- Dynamic programming is not limited to the planning problem in MDPs but is also used to solve many other problems, e.g.
    - Scheduling algorithms
    - String algorithms e.g. sequence alignment
    - Graph algorithms e.g. shortest path algorithms
    - Graphical models e.g. Vitebri algorithm
    - Bioinformations e.g. lattice models

### Policy Evaluation

- Problem: Evaluate a given policy $\pi$
- Solution: Iterative application of Bellman expectation backup
- We used the bellman expectation equation for policy evaluation and we use bellman optimality equation to do control later
- $v_1 \rightarrow v_2 \rightarrow ... \rightarrow v_{\pi}$
- Iteratively we end up with the actual true value function $v_{\pi}$
- Using synchronous backups, consider 
    - At each iteration $k+1$ consider all states of MDPs
    - For all states $s \in S$
    - Update $v_{k+1}(s)$ from $v_k(s^{'})$
    - Where $s^{'}$ is a successor state of $s$
- Value function helps us figure out better policies

### Policy Iteration

- Given a policy $\pi$ how can we get a better policy
    - Evalutate the policy $\pi$
        $$
        \begin{gather*}
        v_{\pi}(s) = \mathrm{E}[R_{t+1} + \gamma R_{t+1} + \gamma R_{t+2} | S_t = s]
        \end{gather*}
        $$
    - Improve the policy by acting greedily with respect to $v_{\pi}$
        - $\pi^{'} = greedy(v_{\pi})$
- In the case of small grid world improved policy was optimal $\pi^{'} = \pi^{*}$
- In general, we need more iterations of improvement/evaluation
- But this process of policy iteration always converges to optimal policy $\pi^{*}$
- The process can be summerised as
    - We start with some random value function $v$ and policy $\pi$
    - Policy evaluation estimate $v_{\pi}$ - iterative policy evaluation
    - Policy improvement generate $\pi^{'} \ge \pi$ - greedy policy improvement
    - We converge to optimal policy $\pi^{*}$ and optimal value function $v^{*}$

- Toy example
    - States: two locations, maximum of 20 cars at each
    - Actions: move up to 5 cars between locations overnight
    - Reward: $10 for each car rented, must be available
    - Transitions: cars returned and requested randomly
        - Poisson distribution, $n$ returns/requests with probability $\frac{\lambda^n}{n!}e^{-\lambda}$
        - 1st location: average requests =3, average returns = 3
        - 2nd location: average requests = 4, average returns = 2
    - Problem: What is the optimal policy of shifting cars around to maximize your profit?

#### Formal proof of policy improvement

- Consider a deterministic policy, $a = \pi(s)$ with which we started and on which we proceed to be greedy
- Now, we define acting greedily as
    $$
    \begin{gather*}
    \pi^{'} = argmax_{a \in A} q_{\pi}(s,a)
    \end{gather*}
    $$
- We look at the value of being in a state and taking an action and following the policy after that i.e., the action-value. So, we pick the action value that gives the maximum action value. thats why argmax. $q_{\pi}$ is the immediate reward plus state value function of where you end up
- Now, we see that the greedy policy atleast improves the value from any state $s$ over one step
    $$
    \begin{gather*}
    q_{\pi}(s,\pi^{'}(s)) = max_{a \in A} q_{\pi}(s,a) \ge q_{\pi}(s,\pi(s)) = v_{\pi}(s)
    \end{gather*}
    $$
    - If we were to take our new greedy policy $\pi^{'}(s)$ for one step and follow $\pi$ afterwards we get more or equal value than following the original policy $\pi$
- It therefore improves the value function, $v_{\pi^{'}}(s) \ge v_{\pi}(s)$
    $$
    \begin{align*}
    v_{\pi}(s) & \le q_{\pi}(s,\pi^{'}(s)) = \mathrm{E}_{\pi^{'}}[R_{t+1}+\gamma v_{\pi}(S_{t+1})|S_t =s] \\
    & \le \mathrm{E}_{\pi^{'}}[R_{t+1}+\gamma q_{\pi}(S_{t+1},\pi^{'}(S_{t+1}))|S_t =s] \\
    & \le \mathrm{E}_{\pi^{'}}[R_{t+1}+\gamma R_{t+2}+\gamma^2 q_{\pi}(S_{t+2},\pi^{'}(S_{t+2}))|S_t =s] \\
    & \le \mathrm{E}_{\pi^{'}}[R_{t+1}+\gamma R_{t+2}+....|S_t =s] = v_{\pi^{'}}(s)
    \end{align*}
    $$
- We have shown so far, if we pick the greedy policy the total amount of reward is atleast as much as before we _greedified_ the policy. So we make things better, but we haven't shown if this will go to optimal policy yet
- We have two cases, either it keeps getting better or it sops at certain point
    - if the improvement stops,
        $$
        \begin{gather*}
        q_{\pi}(s,\pi^{'}(s)) = max_{a \in A} q_{\pi}(s,a) = q_{\pi}(s,\pi(s)) = v_{\pi}(s)
        \end{gather*}
        $$
    - Then the bellman optimality equation has been satisfied
        $$
        \begin{gather*}
        v_{\pi}(s) = max_{a \in A} \ q_{\pi}(s,a)
        \end{gather*}
        $$
    - Therefore we reached optimal value function, $v_{\pi}(s) = v_{*}(s) \ \forall s \in S$
- By the greedy definition of the policy we defined the _partial ordering_ of the policies by comparing the value functions

#### Modified Policy Iteration

- Does the policy evaluation need to converge to the corresponding value function $v_{\pi}$ ? or this inner loop can be ignored to certain level after a number of iterations
    - This can be achieved by introducing a stopping condition for the value function
        - e.g. a threshold of $\epsilon$ over the convergence of value function 
    - Or simply stop after $k$ iterations of iterative policy evalution can also be used
        - e.g. in the small grid world $k = 3$ is sufficient to achieve optimal policy
    - An extreme case of this is if we stop after $k = 1$ i.e. we look at the bellman equation once, update the value function and act greedy with respect to that value function
        - This extreme case is actually equivalent to value iteration, which is a most popular method of dynamic programming

### Principle of Optimality

- It is the basic principle of dynamic programming
- An optiman policy can be subdivided into two components
    - An optimal first action $A_{*}$
    - Followed by an optimal policy from the successor state $S^{'}$
    - This is the principle of optimality applied to policies
- Theorem
    - A policy $\pi(a|s)$ achieves the optimal value from state $s$, $v_{\pi}(s) = v_{*}(s)$, if and only if
        - For any state $s^{'}$ reachable from $s$
        - $\pi$ achieves the optimal value from state $s^{'}$, $v_{\pi}(s^{'}) = v_{*}(s^{'})$

### Value Iteration

- If we know the solution to the subproblems $v_{*}(s^{'})$
- The solution $v_{*}(s)$ can be found by one-step lookahead using bellman optimality equation
    $$
    \begin{gather*}
    v_{*}(s) \leftarrow max_{a \in A} \ R_s^a \gamma \sum_{s^{'} \in S} P^a_{ss^{'}} v_{*}(s^{'})
    \end{gather*}
    $$
    - We start with the inductive premise that we know the optimal soltion of the leaves $v_{*}(s^{'})$
- The idea of value iteration is to apply these updates iterative to the value function, starting with some random values which we assume are optimal
- Intuition: Start with final rewards and work backwards. We do not do this by finding the goal and  working backwards but looping over entire state space
- Still works with loopy, stochastic MDPs

#### Summary
- Problem: find the optimal policy $\pi_{*}$ of a given MDP
- Solution: iterative application of bellman optimality backup equation
- $v_1 \rightarrow v_2 \rightarrow ... \rightarrow v_{*}$
- Using synchronous backups
    - At each iteration $k+1$
    - For all states $s \in S$
    - Update $v_{k+1}(s)$ from $v_{k}(s^{'})$
- Unline policy iteration, we are not bulding an explicit policy but building new value functions
- Intermediate value functions may not correspond to any policy
- This is exactly equal to the modified policy iteration with $k = 1$

### Synchronous Dynamic Programming Algorithms Summary

| Problem | Bellman Equation | Algorithm |
| :--------: | :--------: |:--------: |
| Prediction     | Expectation Equation     | Iterative Policy Evaluation     |
| Control     | Expectation Equation + Greedy Policy Improvement     |  Policy Iteration |
| Control     | Optimality Equation | Value Iteration |

- These algorithms are based on state-value functions $v_{\pi}(s)$ or $v_{*}(s)$
- Complexity $O(mn^2)$ per iteration, for m actions and n states
- The algorithms can also be applied to action-value functions $q_{\pi}(s,a)$ or $q_{*}(s,a)$
- Complexity $O(m^2 n^2)$ per iteration

### Extensions to Dynamic Programming

#### Asynchronous Dynamic Programming

- Instead of backing up all states in parallel, we can pick any state to be the root of the backup and plugin the new value functions for the next iterations
- Reduced computation and guanranteed convergence if all the states are selected at least sometimes
- Three simple ideas
    - In-place dynamic programming
    - Prioritised sweeping
    - Real-time dynamic programming

##### In-place dynamic programming

- Synchronous value iteration stores two copies of value function,old of the leaves and the new of the root state, for all $s \in S$
    $$
    \begin{gather*}
    v_{new}(s) \leftarrow max_{a \in A} (R_s^a + \gamma \sum_{s^{'} \in S} P^a_{ss^{'}} v_{old}(s^{'})) \\
    v_{old} \leftarrow v_{new}
    \end{gather*}
    $$

- In-place value iteration only stores one copy of the value function, for all $s \in S$
    $$
    \begin{gather*}
    v(s) \leftarrow max_{a \in A} (R_s^a + \gamma \sum_{s^{'} \in S} P^a_{ss^{'}} v(s^{'}))
    \end{gather*}
    $$
    - We are going to plugin the latest value 
    - The most important thing is how to order the states so as to compute things in the most efficient way
    - The ordering of the states really matters

##### Prioritized Sweeping
- A measure to how important it is to update any state in the MDPs
- Keep a priority queue to look at which state it is better to be updated
- Use magnitude of Bellman error to guide state selection
- Backup the state with the largest remaining bellman error
- Update the bellman error of the affected states after each backup
- This requires knowledge of the reverse dynamics of the MDP i.e. predecessor states

##### Real-time Dynamic Programming
- Idea: Select the states that the agent is actually visiting
- Collect real samples from agent's experience to guide the selection of states and update around those samples
- After each time-step $S_t, A_t, R_{t+1}$
- Backup the state $S_t$  
    $$
    \begin{gather*}
    v(S_t) \leftarrow max_{a \in A} (R_{S_t}^a + \gamma \sum_{s^{'} \in S} P^a_{S_ts^{'}}v(s^{'}))
    \end{gather*}
    $$
    ms in the field of reinforcement learning.