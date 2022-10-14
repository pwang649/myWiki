---
id: Machine Learning Theory - Start
title: Gentle Start
sidebar_position: 1
---

### Book

- Understanding Machine Learning from Theory to Algorithm - Shai Shalev-Shwartz and Shai Ben David

### Intro

- **Machine Learning** is the study of algorithms that can learn from data, gradually imporoving their performamce.
- **Mathematical Statistics** is the science of making decision in the face of uncertainty.

### Realizable Case

- **Binary classification**: $(X, Y) = (instance, label)$
- **Example**: $X - image, Y \in \{+1, -1\}$ (eg: "cat", "dog"), $X \in S$ - set of all possible instances

### Statistical Learning

- We will assume that $(X, Y)$ is random, in other words, it has a probability distribution $P$, so we use language of probability theory.

### Supervised Learning

- $(X, Y) \in S \times \{+1, -1\}$
- $P$ is the distribution of $(X,Y)$ i.e. $P(A) = Probability((X, Y) \in A)$
- $\Pi$ is the distribution of $X$
- Imposing the probabilitic model on $(X, Y)$ takes as info realm of Statistical Learning Theory
- Goal: preduct label $Y$ based on the observation $X$
- The prediction rule is a function $g:S\mapsto\{-1, +1\}$
- The quality of a prediction rule g is measured by the classification/generalization error $L(g) = P(Y \neq g(X))$
- The training data is a sequence $(X_1, Y_1), (X_2, Y_2), \cdots, (X_n, Y_n)$ of i.i.d. pairs with distribution $P$
- An algorithm takes training data as input and outputs $\hat{g_n} = \hat{g_n}((X_1, Y_1), \cdots, (X_n, Y_n))$
- In general, we will consider 2 scenarios:
    1. "Realizable" learning: there exists $g \in G\:s.t.\:Y=g^{*}(x)$ with probability 1.
    2. "Agnostic" learning: there is no $g \in G\:s.t.\:Y=g^{*}(x)$ with probability 1.

### Realizable scenario:

- Assume that the set $G$ of all possible classification rules is finite. By assumption, $\exists g^{*}(x)$ with prob 1
