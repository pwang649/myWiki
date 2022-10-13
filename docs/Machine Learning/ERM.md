---
id: Machine Learning - ERM
title: Empirical Risk Minimization
sidebar_position: 2
---

### Principle

- Pick any $\hat{g_n}$ that agrees with the training data $(\hat{g_n}(X_i) = Y_i, i = 1,\cdots,n)$  
- Question: what's $L(\hat{g_n})$? What's $P(Y > \epsilon) \leq$ ?, given $\epsilon$ > 0  
    - Here, $L(g) = P(Y\neq g(x))$  
    - Let $G_B$ = "bad" classification rules $=\{g \in G: L(g) > \epsilon\}$  
        $$
        \begin{gather*}
        P(L(\hat{g_n} > \epsilon)) = P(\hat{g_n} \in G_B)
        \end{gather*}
        $$
        takes $g \in G_B$, if $\hat{g_n} = g, g(X_i) = Y_i, i = 1,2,\cdots,n$  
        $$
        \begin{align*}
        P(g(X_1) \neq Y_1) & > \epsilon \\
        P(g(X_1) = Y_1) & \leq 1 - \epsilon \\
        P(g(X_i) = Y_i) & = P(g(X_1) = Y_1) \times P(g(X_2) = Y_2) \times \cdots \times P(g(X_n) = Y_n) \\
        & = \prod_{i = 1}^{n} P(g(X_i) = Y_i) \\
        & \leq (1 - \epsilon)^n \leq e^{- \epsilon n}
        \end{align*}  
        $$
        Reminder of Union Bound: $P(A \cup B) \leq P(A) + P(B)$  
        $\therefore$ if $G_B = \{g_1, \cdots, g_k\}$, then  
        $$
        \begin{align*}
        P(\hat{g_n} \in G_B) & = P(\hat{g_n} = g_1, or\: \hat{g_n} = g_2, or\: \cdots, or\: \hat{g_n} = g_k) \\
        & \leq P(\hat{g_n} = g_1) + P(\hat{g_n} = g_2) + \cdots + P(\hat{g_n} = g_k) \\
        & \leq ke^{-\epsilon n} \\
        & \leq |G|e^{-\epsilon n}
        \end{align*}  
        $$

    - If one requires that 
        $$
        \begin{align*}
        P(L(\hat{g_n}) \leq \epsilon) & \geq 1 - \delta \\
        |G|e^{-\epsilon n} & \leq \delta \\
        n & \geq \biggl \lceil {log({|G| \over \delta}) \over \epsilon} \biggl \rceil
        \end{align*}  
        $$

### Summary

- ERM picks a classifier that makes the smallest number of mistakes on observed data.  
- Define: $L_n(g) = {\#\{1 \leq j \leq n\: : \:g(X_j) \neq Y_j\} \over n}$  
- Remark: By Law of Large Number, $L_n(g) \rightarrow L(g)$ since $\mathbb{E}L_n(g) = L(g)$  
- The ERM states that one pick $\hat{g_n}$ that minimizes $L_n(g)$ over $g \in G$