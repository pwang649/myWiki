---
id: Combinatorics - Coloring
title: Coloring and Matching
sidebar_position: 10
---
---

## Bipartite Graphs

:::note Definition

The **chromatic number** of a graph $H$, denoted by $\chi (H)$, is the smallest integer $k$ for which the vertices of $H$ can be colored by $k$ colors so that adjacent vertices are colored by different colors.

:::

:::note Definition

A 2-colorable graph is called **bipartite**. Equivalently, $G$ is bipartite if the vertex set of $G$ can be split into the disjoint sets $A$ and $B$ (the color classes) so that each edge of $G$ is adjacent to one vertex of $A$ and one vertex of $B$.

:::

### Theorem 1

*A graph $G$ is bipartite if and only if it does not contain a cycle of an odd length.*

#### Proof

Let us assume that $G$ contains the odd cycle $A_1A_2\cdots A_{2m+1}$. Let us assume without loss of generality that $A_1$ is red. Then $A_2$ must be blue, therefore $A_3$ must be red, and so on, and at the end, $A_{2m+1}$ must be red, too.

This is not allowed, however, as $A_1 A_{2 m+1}$ is an edge.
To prove the "if" part, let $G$ be a graph with no odd cycles. Let $V$ be a vertex of $G$, and color $V$ red. Define the color of any other vertex $W$ as follows. If the shortest path from $V$ to $W$ has even length, then let $W$ be red, and if the shortest path from $V$ to $W$ has odd length, then let $W$ be blue. We show that this is a good coloring, that is, there are no two adjacent vertices that are the same color.

Let us assume the contrary, by first assuming that $P$ and $Q$ are two red vertices that are joined by an edge. Let the shortest path from $V$ to $P$ be $p$, and let the shortest path from $V$ to $Q$ be $q$. Then $p$ and $q$ both have an even number of edges, so walking from $V$ through $p$ to $P$, then through $P Q$, then back from $Q$ through $q$ to $V$, we get a closed walk $C$ with an odd number of edges. Taking away edges that were used both by $p$ and $q$, this walk $C$ splits into the union of edge-disjoint cycles. As the total number of edges in these cycles is still odd, there has to be at least one cycle with an odd number of edges, which is a contradiction.

If we assumed instead that both $P$ and $Q$ were blue, the same proof would work as the sum of two odd numbers is still even, so $C$ would still have an odd number of edges.

### Theorem 2

*Let $G$ be a simple bipartite graph on $n$ vertices. Then $G$ has at most $n^2 / 4$ edges if $n$ is even, and at most $\left(n^2-1\right) / 4$ edges, if $n$ is odd*

#### Proof

Choose $G$ so that no other simple bipartite graph on $n$ vertices has more edges than $G$. Denote by $a$ and $b$ the sizes of the two color classes of $G$. It is clear that each vertex of one color class is connected to each vertex of the other color class in $G$. Indeed, if there was a missing edge between the two color classes, we could add it to $G$, contradicting to our assumption. So $G$ has $a b=a(n-a)$ edges, and the proof follows from elementary calculus. (One simply has to find the integer $a \in[1, n]$ for which the number $f(a)=a(n-a)$ is maximal.)

### Lemma

*Let $H$ be a simple graph on $2 m$ vertices $(m \geq 2)$ and at least $m^2+1$ edges. Then $H$ contains a triangle.*

#### Proof

We prove our statement by induction on $m$. If $m=2$, then $H$ is a subgraph of $K_4$ with at least five edges. Theorem 11.6 shows that $H$ is not bipartite, so it must have an odd cycle. This odd cycle must be a triangle as $H$ has only four vertices.

Now assume we know that the statement is true for all integers that are smaller than $m$, and are at least 2. Let $H$ be as in the statement of the Theorem, and let $F$ and $G$ be two adjacent vertices in $H$. If the sum of the degrees of $F$ and $G$ is more than $2 m$, then they have a common neighbor $T$, and so $F G T$ is a triangle. If, on the other hand, the sum of the degrees of $F$ and $G$ is at most $2 m$, then deleting $F, G$, and all the edges adjacent to them from $H$ will decrease the number of edges in our graph by at most $2 m-1$. (Note that the edge $F G$ is contained twice in the sum of the two degrees.) Therefore, after the deletion of these vertices and edges, we are left with a graph of $2 m-2$ vertices, and at least $m^2+1-(2 m-1)=$ $m^2-2 m+2=(m-1)^2+1$ edges. Such a graph contains a triangle by the induction hypothesis, so our claim is proved.

### Theorem 3

*Let $H$ be a simple graph on $2m$ vertices $(m \geq 2)$ and at least $m^2+1$ edges. Then $H$ contains at least $m$ triangles.*

#### Proof

1. If $x \geq m-1$, then we are done as we found our missing $m-1$ triangles.

2. If $1 \leq x<m-1$, then the total number of edges between $A B C$ and the outside vertices is at most $(2 m-3)+(m-2)=3 m-5$. As $A B C$ itself contains three edges, it follows that there are at least $m^2+1-(3 m-5)-3=m^2-3 m+3=(m-1)(m-2)+1$ edges within the subgraph $R$ spanned by all $2 m-3$ outside vertices. If we omit the vertex of $R$ which has the smallest degree in $R$, it follows by the Pigeon-hole Principle that we get a graph $R^{\prime}$ on $2 m-4$ vertices that still has more than
$$
(m-1)(m-2) \cdot \frac{2 m-4}{2 m-3}=(m-2)^2 \cdot \frac{2 m-2}{2 m-3}>(m-2)^2
$$
edges. So $R^{\prime}$ has strictly more than $(m-2)^2$ edges, that is, it has at least $(m-2)^2+1$ of them. Therefore, by the induction hypothesis, there are at least $m-2$ triangles within $R^{\prime}$. As we said in the previous paragraph, there are $x$ triangles spanned by two vertices of $A B C$ and an outside vertex. In our case, $x \geq 1$, so we have again found the $m-1$ needed triangles.

3. Finally, consider the case when the number of edges connecting outside vertices to $A B C$ is not more than $2 m-3$. Note that we can assume that there is at least one such edge, otherwise $R$ has $m^2-2$ edges, so adding any vertex of $A B C$ to $R$ creates a graph on $2 m-2$ vertices and $m^2-2 \geq(m-1)^2+1$ vertices, and the proof follows by the induction hypothesis. That said, the number of edges within $R$ is at least $m^2+1-(2 m-3)-3=(m-1)^2$. Adding a vertex of $A B C$ that is adjacent to at least one outside vertex to $R$ creates a graph with $2 m-2$ vertices and at least $(m-1)^2+1$ edges, and again, the induction hypothesis shows that such a graph must contain at least $m-1$ triangles.

## Matchings

:::note Definition

Let $G$ be any graph, and let $S$ be a set of edges in $G$ so that no two edges in $G$ have a vertex in common. Then we say that $S$ is a **matching** in $G$. If each vertex in $G$ is covered by an edge in $S$, then we call $S$ a **perfect matching**.

:::

### Philip Hall's Theorem

*Let $G=(X,Y)$ be a bipartite graph. Then $X$ has a perfect matching into $Y$ if and only if for all $T \subseteq X$, the inequality $|T| \leq |N(T)|$ holds.*

#### Proof

We prove the statement by induction on $|X|$, the initial case being trivial. Now assume we know the statement for all nonnegative integers less than $|X|$, and prove it for $|X|$. Let us assume that for all $T \subseteq X$, the inequality $|T| \leq\left|N_G(T)\right|$ holds. We distinguish two cases.

1. First let us assume that for each proper subset $T \subset X$, even the strict inequality $|T|<\left|N_G(T)\right|$ holds. Let $x$ and $y$ be adjacent vertices, with $x \in X$. Let $G^{\prime}=G-x-y$, and let $A$ be any nonempty subset of $X-x$. Our assumption then shows that $|A|<\left|N_G(A)\right|$, therefore $\left|N_{G^{\prime}}(A)\right| \geq\left|N_G(A)\right|-1 \geq|A|$. Consequently, the induction hypothesis implies that $X-x$ can be matched into $Y-y$ in $G^{\prime}$. Adding the edge $x y$ to this matching, we get a perfect matching of $X$ into $Y$.

2. Now assume there is a subset $B \subset X$ so that $|B|=\left|N_G(B)\right|$ holds. We split $G$ into two smaller subgraphs $G_1$ and $G_2$, and then show that each of these subgraphs satisfies the induction hypothesis separately. Let $G_1$ be the subgraph induced by $B \cup N(B)$, and let $G_2$ be the graph obtained from $G$ by deleting all vertices that belong to $B \cup N(B)$.

To see that $G_1$ satisfies the induction hypothesis, choose any subset $T \subseteq B$. Then $N_G(T) \subseteq N_G(B)$, and therefore, $N_{G_1}(T)=N_G(T)$, (all neighbors of $T$ are within $\left.G_1\right)$, and therefore, $\left|N_{G_1}(T)\right|=\left|N_G(T)\right| \geq$ $|T|$.

To see that $G_2$ satisfies the induction hypothesis, choose any subset $U \subseteq X-B$. Then $N_G(U \cup B)=N_{G_2}(U) \cup N_G(B)$, and because this is a union of disjoint sets, $\left|N_{G_2}(U)\right|=\left|N_G(U \cup B)\right|-\left|N_G(B)\right| \geq$ $|U \cup B|-|B|=|U|$.

If we apply the induction hypothesis to both $G_1$ and $G_2$, we see that $B$ can be matched into (and therefore, onto), $N_G(B)$, and $X-B$ can be matched into $Y-N_G(B)$. Therefore, $X$ can be matched into $Y$ as claimed.

:::note Definition

In a graph $G$, a matching $M$ is called **maximal** if we cannot extend $M$ by adding a new edge to it. A matching $N$ is called **maximum** if no matchings of $G$ contain more edges than $N$.

:::

:::note Definition

Let $G$ be a graph, and let $M$ be a matching in $G$. A path $P=v_1 v_2 \cdots v_r$ is called an $M$-alternating path if $v_i v_{i+1}$ is in $M$ if and only if $v_{i+1} v_{i+2}$ is not in $M$.

:::

### Theorem 2

*Let $G$ be any simple graph, and let $M$ be a matching in $G$. Then $M$ is maximum if and only if $G$ has no $M$-augmenting paths.*

#### Proof

To prove the "if" part, assume there is no $M$-augmenting path in $G$, and let $M^{\prime} \neq M$ be any maximum matching in $G$. Consider $M \oplus M^{\prime}$, the set of edges that are part of exactly one of $M$ and $M^{\prime}$. As $M$ and $M^{\prime}$ are both matchings, the connected components of $M \oplus M^{\prime}$ can only be even cycles or alternating paths. However, $M^{\prime}$ is maximum, and there is no $M$ augmenting path, therefore all these alternating paths are of even length. This implies $|M|=\left|M^{\prime}\right|$, and our claim is proved.

## Stable Matchings

:::note Definition

Let $G(X, Y)$ be a bipartite graph with a perfect matching $M$, with each vertex of $X$ given an ordered list of preferences for the vertices of $Y$, and each vertex of $Y$ given an ordered list of preferences for the vertices of $X$. We say that $M$ is stable if the following two conditions do not both hold.
1. There is a vertex $x \in X$ so that $x y \in M$, but $x$ prefers $y^{\prime} \in Y$ to $y$, and
2. if $y^{\prime}$ and $x$ are the vertices defined in part (a), and $y^{\prime} x^{\prime} \in M$, then $y^{\prime}$ prefers $x$ over $x^{\prime}$

:::

### Gale-Shapley Algorithm

The algorithm starts by having each element in one set (traditionally the men) propose to their most preferred element in the other set (traditionally the women). Then, each element in the other set (traditionally the women) reviews their proposals and tentatively accepts the proposal from their most preferred proposer.

If a woman receives a proposal from a man who is not her most preferred, she will reject the proposal and continue to consider other proposals. If a man's proposal is rejected, he will move on to his next most preferred choice and propose again. This process continues until all stable matches have been made.

A matching is considered stable if there are no two pairs where one person in each pair prefers the other person to their current partner. The Gale-Shapley algorithm guarantees that a stable matching will always be found, regardless of the preferences of the individuals involved.

#### Code Implementation

```python
def gale_shapley(men, women):
    # Initialize all men and women to be free
    free_men = men.keys()
    free_women = set(women.keys())
    
    # Initialize an empty dictionary to store the matches
    matches = {}
    
    # While there are free men, continue proposing
    while free_men:
        # Choose a free man
        man = free_men.pop()
        
        # Get the man's preference list
        pref_list = men[man]
        
        # Propose to each woman on the list
        for woman in pref_list:
            if woman in free_women:
                # The woman is free, so they become a match
                matches[man] = woman
                free_women.remove(woman)
                break
            else:
                # The woman is already matched, so check if she prefers this man over her current partner
                current_man = matches[woman]
                woman_pref_list = women[woman]
                if woman_pref_list.index(man) < woman_pref_list.index(current_man):
                    # The woman prefers this man, so they become a match and the previous match is freed
                    matches[man] = woman
                    free_men.add(current_man)
                    matches[current_man] = None
                    break
    
    return matches

```