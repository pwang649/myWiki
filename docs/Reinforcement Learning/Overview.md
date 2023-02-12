---
id: Reinforcement Learning - Overview
title: Overview
sidebar_position: 1
---

### Book
- _An introduction to Reinforcement Learning_, Sutton and Barto, Second Edition, 400 Pages

### Introduction to Reinforcement Learning

- RL sits at an intersection of several fields. It is the science of decision-making, an optimal way. 
    - Machine Learning - CS
    - Optimal Control - Engineering
    - Reward System - Neuroscience
    - Classical/Operant Conditioning - Psychology
    - Operations Research - Mathematics
    - Bounded Rationality - Economics

- Three branches of Machine Learning
    - Supervised Learning
    - Unsupervised Learning
    - Reinforcement Learning

- Characteristics of RL that differ from supervised and unsupervised
    - A trial and error paradigm without any supervisor, it has only a reward signal
    - Feedback on the decision unfolds over time, so not instantaneous
    - Time really matters because of sequential decision-making processes. The systems are in general dynamic e.g., a robot moving in an environment
    - Agent's actions affect the subsequent data it receives

- Examples of RL
    - Fly stunt maneuvers in a helicopter
    - Defeat the world champion at Backgammon
    - Manage an investment portfolio
    - Control at a power station, sequence of controls to minimize some cost
    - Make a humanoid robot walk, rewards at every step, open stuff
    - Play many different Atari games better than humans

### The Reinforcement Learning Problem

- A reward $R_t$ is a scalar feedback signal
- Indicates how well the agent is doing at time step $t$
- The agent's job is to maximize the cumulative reward
- RL is based on the reward hypothesis

**Reward Hypothesis:** All goals can be described by the maximization of the expected cumulative reward

**Goal:** AS this is a sequential decision-making paradigm the goal is to select actions to maximize total future reward. 

- Actions may have long-term consequences
- Rewards may be delayed
- It may be better to sacrifice immediate rewards to gain long-term rewards. So, one cannot be greedy.

#### Agent and Environment Formalism

- Observation, $O_t$
- Reward, $R_t$
- Action, $A_t$

The goal is to have an RL algorithm for the brain, that sees an observation from the world and gets a reward signal from the world and takes an action. 

- At each step _t_ the agent
    - Executes Action, $A_t$
    - Receives Observation, $O_t$
    - Receives Scalar Reward, $R_t$
- The environment
    - Receives Action, $A_t$
    - Emits Observation, $O_t$
    - Emits Scalar Reward, $R_t$

The experience of the agent is defined by the time series of observations, rewards and actions. This experience is used for building our reinforcement learning algorithm. The experience is called **history**

$$
\begin{gather*}
H_t = A_1,O_1,R_1,.....A_t,O_t,R_t
\end{gather*}
$$

- i.e. all observable variables up to time _t_
- i.e. example sensorimotor steam of a robot or embodied agent
- What happens next depends on the history:
    - The agent selects actions
    - The environment selects observations/rewards
- **State** is the summary of information used to determine what happens next
- Formally, state is a function of the history $S_t = f(H_t)$

- Three different definitions of **state**
    - The environment state, $S_t^e$ is the environment's private representation. This contains the data the environment uses to pick the next observation/reward. This state is not usually visible to the agent, because if it is known the agent can predict future observations/rewards. RL algorithms cannot depend on state. We can use this to build our RL algorithm
    - The agent state, $S_t^a$ is the agent's internal representation. This captures what happens to the agent so far and uses it to pick our next action. This is the information used to build RL algorithms. In can be **any** function of history $S_t^a = f(H_t)$

#### State Formal/Mathematical Definition

An information state a.k.a Markov state contains all useful information from the history

- Markov Property: A state $S_t$ is said **Markov** if and only if

$$
\begin{gather*}
P[S_{t+1}|S_t] = P[S_{t+1}|S_1,S_2....S_t]
\end{gather*}
$$

-  If you have the Markov property, the future is independent of the past given the present

$$
\begin{gather*}
H_{1:t} \rightarrow S_t \rightarrow  H_{t+1:\inf}
\end{gather*}
$$

- Once the current state is known, the history may be thrown away
- i.e. The current state is a sufficient statistic for the future
- The environment state $S_t^e$ is Markov by definition
- The history $H_t$ is Markov by definition albeit not so useful one

##### Full Observability
- An agent directly observes environment state $O_t = S_t^a = S_t^e$
- Agent state = environment state = information state
- This kinda fully observable state representation is formally known as **Markov Decision Process** (MDP)

##### Partial Observability
- An agent indirectly observes the environment
    - A robot with camera vision isn't told its absolute location
    - A trading agent only observes current prices
    - A poker-playing agent only observes public cards
- Now we have an agent state that is **not equal** to the environment state
- Formally this is a Partially Observable Markov Decision Process (POMDP)
- An agent must construct its own state representation $S_t^a$ 
    - We can remember the complete history: $S_t^a = H_t$
    - A probabilistic/bayesian approach is to build beliefs every step of what you think, So I am gonna keep a probability distribution over where I think I am in the environment. This vector of probabilities contains the state representation of the agent $S_t^a = (P[S_t^e = s^1]....P[S_t^a = s^n])$
    - Without using probabilities, we can use any numbers. This approach follows recurrent neural network $S_t^a = \sigma(S_{t-1}^aW_s + O_tW_o)$. Take your agent state in the previous time step and take a linear combination with the latest observation

### Major Components of an RL Agent

#### Policy
- Agent's behavior function is the way it picks the actions
- It is a map from state to action. We learn it from experience and the best policy maximizes the reward
- Deterministic  Policy: $a = \pi(s)$
- Stochastic Policy: $\pi(a/s) = P[A = a| S = s]$. This helps for random exploratory decisions of the state space, probability of taking some action conditioned on some state

#### Value Function
- How good is each state and/or action? How much reward do we expect to get, estimating how well we do in a particular state
- Prediction of future reward
- Used to evaluate the goodness/badness of the states
- Value function depends on the policy $\pi$ an agent takes
- And therefore to select between actions,  e.g.
- $V_\pi(S) = E_\pi[R_t + \gamma R_{t+1} + \gamma^2 R_{t+2}+...|S_t = s ]$ 
- $\gamma$ is a discounting factor over future rewards. This also takes care of the time horizon of the future rewards

#### Model
- Agent's view/representation of the environment. This is to learn the model of the environment
- The way to learn this is
    - Transition Model: $\mathrm{P}$ predicts the next state i.e. dynamics of the environment
    - Reward Model: $\mathrm{R}$ predicts the next (immediate) reward e.g.
        - $\mathrm{P}_{ss'}^a = P[S' = s' | S = s, A = a]$
        - $\mathrm{R}_s^a = E[R|S = s, A = a]$
- Model of the environment is often optional in solving RL problems

### Categorizing RL Agents

Based on the three components above

#### Value-Based

- The value function is all it needs
- The policy is implicit

#### Policy Based
- The policy is explicitly represented and it will be used to solve a problem without storing the value function explicitly
- Hence no value function

#### Actor-Critic
- This stores both policy and value function

#### Model Free
- We do not explicitly understand the environment
- Use policy and/or value function

#### Model-Based
- We first build the model of the environment
- Use policy and/or value function

### Problems within RL

- Learning and Planning: There are two different problems in sequential decision-making. So, going back to the science of what it means to take the optimal decision, there are two very different problem setups we care about

#### Reinforcement Learning
- The environment is initially unknown
- The agent interacts with the environment and figures out the best way to behave to maximize the goal
- Thus improving its policy

#### Planning
- A model of the environment is fully known
- The agent performs computations with its model (without any external interaction)
- The agent improves its policy
- a.k.a deliberation, reasoning, introspection, pondering, thought, search
- Plan ahead to find an optimal policy based on planning methods like search trees

#### Exploration and Exploitation
- Reinforcement learning is like trial-and-error learning
- The agent should discover a good policy
- From its experience of the environment without losing too much reward along the way
- Exploration finds more information about the environment
- Exploitation exploits known information to maximize reward
- Exploration-Exploitation trade-off is unique to reinforcement learning and it doesn't come elsewhere in machine learning

#### Prediction and Control
- Prediction: Evaluate the future - given a policy
- Control: Optimize the future - find the best policy
- Prediction has to be solved first to solve the control problem
