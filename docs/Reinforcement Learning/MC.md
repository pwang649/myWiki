---
id: Reinforcement Learning - MC
title: Monte Carlo Methods
sidebar_position: 5
---

### What's Monte Carlo?

The term **Monte Carlo** is often used more broadly for any **estimation method** that relies on repeated **random sampling**. In RL Monte Carlo methods allow us to **estimate values** directly from experience, from sequences of states, actions and rewards. Learning from experience is striking because the agent can accurately **estimate a value function without prior knowledge of the environment dynamics**.  
To use a pure Dynamic Programming approach, the agent needs to know the environments **transition probabilities**.
- In some problems we do not know the environment transition probabilities
- The computation can be error-prone and tedious
For example, imagine rolling a dice. With the help of Monte Carlo Methods, we can estimate values by
averaging over a large number of random samples.