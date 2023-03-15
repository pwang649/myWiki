---
id: Code - Parallel_Computation - Proposal
title: Project Proposal
sidebar_position: 1
---

## Accelerating AlphaZero Using Parallel Monte Carlo Tree Search

<center>Peter Wang, Tianxin Zu</center>

### Introduction

AlphaZero (Silver et al., 2017) is a deep reinforcement learning algorithm that has demonstrated its remarkable performance in various games, including chess, shogi, and Go. The key strength of AlphaZero lies in its ability to learn from self-play and use a Monte Carlo Tree Search (MCTS) algorithm to guide its decision-making process. However, the downside of the MCTS algorithm is that it can be time-consuming, limiting its use in real-time decision-making applications.

In this research proposal, we aim to investigate the effectiveness of parallelizing the MCTS algorithm (Liu et al., 2018) to accelerate AlphaZero's decision-making process. The parallelization of the MCTS algorithm will allow the algorithm to search more extensively within a given amount of time and potentially improve its performance.

### Research Questions

1. Can parallelizing the MCTS algorithm improve AlphaZero's performance?
2. What is the optimal number of parallel workers to use for the MCTS algorithm in AlphaZero?
3. How does the parallelized AlphaZero algorithm compare to the original AlphaZero algorithm in terms of performance and computation time?

### Methodology

We will conduct a series of experiments to evaluate the effectiveness of parallelizing the MCTS algorithm in AlphaZero. First, we will implement a parallelized version of AlphaZero by distributing the MCTS algorithm across multiple workers (Liu et al., 2018). We will then compare the performance of the parallelized AlphaZero to the original AlphaZero algorithm using a simple benchmark game: Gomuku [3].

We will vary the number of parallel workers to find the optimal number for the MCTS algorithm in AlphaZero. The performance of the parallelized AlphaZero will be evaluated in terms of win rate, playing strength, and computation time. We will also investigate the impact of the number of parallel workers on the algorithm's performance.

### Expected outcomes

We expect that parallelizing the MCTS algorithm in AlphaZero will improve the algorithm's performance and reduce total execution time. We hypothesize that the optimal number of parallel workers for the MCTS algorithm in AlphaZero will depend on the game being played and the hardware used. We also expect that the parallelized AlphaZero algorithm will outperform the original AlphaZero algorithm in terms of playing strength and win rate.

### Conclusion

This research proposal aims to investigate the effectiveness of parallelizing the MCTS algorithm in AlphaZero. The proposed research will contribute to the development of more efficient deep reinforcement learning algorithms that can be used in real-time decision-making applications. The outcomes of this research could have significant implications for the development of AI systems that require fast decision-making.

### Reference

[1] Silver, D., Hubert, T., Schrittwieser, J., Antonoglou, I., Lai, M., Guez, A., Lanctot, M., Sifre, L., Kumaran, D., Graepel, T., Lillicrap, T., Simonyan, K., & Hassabis, D. (2017). Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm. ArXiv. https://doi.org/10.48550/arXiv.1712.01815

[2] Liu, A., Chen, J., Yu, M., Zhai, Y., Zhou, X., & Liu, J. (2018). Watch the Unobserved: A Simple Approach to Parallelizing Monte Carlo Tree Search. ArXiv. https://doi.org/10.48550/arXiv.1810.11755

[3] https://github.com/junxiaosong/AlphaZero_Gomoku