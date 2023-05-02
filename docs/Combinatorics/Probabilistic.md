---
id: Combinatorics - Probabilistic
title: The Probabilistic Method
sidebar_position: 13
---
---

## The Notion of Probability

:::note Definition

Let $\Omega$ be a finite set of outcomes of some sequence of trials, so that all these outcomes are equally likely. Let $A \subseteq \Omega$. Then $\Omega$ is called a sample space, and $A$ is called an event. The ratio
$$
P(A)=\frac{|A|}{|\Omega|}
$$
is called the probability of $A$.

:::

### Proposition

*Let $A_1, A_2, \cdots, A_n$ be events from the same sample space. Then*
$$
P\left(A_1 \cup A_2 \cup \cdots \cup A_n\right) \leq P\left(A_1\right)+P\left(A_2\right)+\cdots+P\left(A_n\right) .
$$

#### Proof

We simply have to show that
$$
\left|A_1 \cup \cdots \cup A_n\right| \leq\left|A_1\right|+\cdots+\left|A_n\right| .
$$
This is true as the left-hand side counts each element of the sample space that is part of at least one of the $A_i$ exactly once, while the right-hand side counts each element of the sample space that is part of at least one of the $A_i$ at least once.

## Non-constructive Proofs

### Theorem

*For all positive integers $k \geq 3$, the inequality $R(k, k)>$ $2^{k / 2}$ holds.*

#### Proof

Let $G=K_n$, and let us color each edge of $G$ red or blue as follows. For each edge, flip a coin. If we get a head, we color that edge red, otherwise we color that edge blue. This way each edge will be red with probability one half, and blue with probability one half. We are going to show that the probability $p$ that we get no monochromatic $K_k$-subgraphs in $G$ this way is more than zero. On the other hand, $p=\frac{|F|}{|\Omega|}$, the number of favorable outcomes divided by the number of all outcomes, where $\Omega$ is the set of all possible 2-colorings of the edges of a complete graph on $n$ vertices. So $p>0$ implies that there is at least one favorable outcome, that is, there is at least one $K_n$ with 2-colored edges that does not contain any monochromatic $K_k$-subgraphs.

Instead of proving that $p>0$, we will prove that $1-p<1$, which is an equivalent statement. Note that $1-p$ is the probability that we get at least one monochromatic subgraph in our randomly colored graph $G=K_n$.
The number of ways to 2-color the edges of a given $K_k$-subgraph of $K_n$ is clearly $2^{\left(\begin{array}{c}k \\ 2\end{array}\right)}$ as there are two choices for the color of each edge. Out of all these colorings, only two will be monochromatic, one with all edges red, and one with all edges blue. Therefore, the probability that a randomly chosen $K_k$-subgraph is monochromatic is
$$
\frac{2}{2^{\left(\begin{array}{c}
k \\
2
\end{array}\right)}}=2^{1-\left(\begin{array}{c}
k \\
2
\end{array}\right)}
$$
The graph $K_n$ has $\left(\begin{array}{l}n \\ k\end{array}\right)$ subgraphs that are isomorphic to $K_k$. Each of them has the same chance to be monochromatic. On the other hand, the probability that at least one of them is monochromatic is at most the sum of these $\left(\begin{array}{l}n \\ k\end{array}\right)$ individual probabilities, by the proposition In other words, if $A_S$ denotes the event that the $K_k$-subgraph $S$ of $G$ has monochromatic edges, then
$$
P\left(\bigcup_S A_S\right) \leq \sum_S P\left(A_S\right)=\left(\begin{array}{l}
n \\
k
\end{array}\right) 2^{1-\left(\begin{array}{l}
k \\
2
\end{array}\right)}
$$
where $S$ ranges through all $K_k$-subgraphs of $G$. Now let us assume, in accordance with our criterion, that $n \leq 2^{k / 2}$. Then the last term can be bounded as follows.
$$
\left(\begin{array}{l}
n \\
k
\end{array}\right) 2^{1-\left(\begin{array}{l}
k \\
2
\end{array}\right)}<\frac{n^k}{k !} \cdot 2^{1-\left(\begin{array}{l}
k \\
2
\end{array}\right)} \leq \frac{2 \cdot 2^{k^2 / 2}}{k ! 2^{\left(\begin{array}{l}
k \\
2
\end{array}\right)}}=2 \cdot \frac{2^{k / 2}}{k !}<1,
$$
for all $k \geq 3$. The last inequality is very easy to prove, for example by induction.

## Conditional Probability

:::note Definition

If $A$ and $B$ are two events from the same sample space $\Omega$, and $P(A \cap B)=P(A) \cdot P(B)$, then $A$ and $B$ are called **independent** events. Otherwise they are called **dependent**.

:::

:::note Definition

Let $A$ and $B$ be events from the same sample space, and assume $P(B)>0$. Let
$$
P(A \mid B)=\frac{P(A \cap B)}{P(B)}
$$
Then $P(A \mid B)$ is called a **conditional probability**, and is read "the probability of $A$ given $B$ ".

:::

That is, $P(A \mid B)$ is the probability of $A$ given that $B$ occurs. The following proposition is now immediate from the definitions.

### Proposition

*The events $A$ and $B$ are independent if and only if $P(A \mid B)=P(A)$ holds*

### Bayes' Theorem

*Let $A$ and $B$ be mutually exclusive events so that $A \cup B = \Omega$. Let $C$ be any event. Then*

$$
P(C) = P(C \mid A) \cdot P(A) + P(C \mid B) \cdot P(B).
$$

#### Proof

As $A$ and $B$ are mutually exclusive, $A \cap C$ and $B \cap C$ are disjoint, and since $A \cup B = \Omega$, their union is exactly $C$. Therefore,

$$
P(C) = P(C \cap A) + P(C \cap B),
$$

and the proof follows as the first (resp. second) member of the right-hand side agrees with the first (resp. second) member of the right-hand side of the Bayes' Theorem.