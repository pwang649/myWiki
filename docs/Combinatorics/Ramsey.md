---
id: Combinatorics - Ramsey
title: Ramsey Theory
sidebar_position: 12
---
---

## Ramsey Theory for Finite Graphs

Six people are waiting in the lobby of a hotel. Prove that there are either three of them who know each other, or three of them who do not know each other.

### Ramsey theorem for graphs

*Let $k$ and $\ell$ be two positive integers, both of which are at least two. Then there exists a (minimal) positive integer $R(k, \ell)$ so that if we color the edges of a complete graph with $R(k, \ell)$ vertices red and blue, then this graph will either have a $K_k$ subgraph with only red edges, or a $K_{\ell}$ subgraph with only blue edges.*

#### Proof

We prove the statement by a new version of mathematical induction on $k$ and $\ell$. This induction will run as follows. First we prove the initial conditions that $R(k, 2)$ and $R(2, \ell)$ exist for all $k$, and all $\ell$. Then we take the induction step, proving that if $R(k, \ell-1)$ exists, and also $R(k-1, \ell)$ exists, then $R(k, \ell)$ also exists.

To see that the initial conditions hold, note that $R(k, 2)=k$, and similarly, $R(2, \ell)=\ell$. Indeed, either all edges of a $K_k$ are red, and then it has a $K_k$ subgraph with all edges red, or at least one of its edges is blue, in which case it has a $K_2$ subgraph with all edges blue. Analogous argument works for $R(2, \ell)$
We prove the induction step by showing that
$$
R(k, \ell) \leq R(k, \ell-1)+R(k-1, \ell)
$$
Indeed, take a complete graph with $R(k, \ell-1)+R(k-1, \ell)$ vertices. Take one of its vertices, and call it $V$. As $V$ has degree $R(k, \ell-1)+R(k-1, \ell)-1$, it has either at least $R(k, \ell-1)$ blue edges adjacent to it, or it has at least $R(k-1, \ell)$ red edges adjacent to it.

In the first case, let $b$ denote the $R(k, \ell-1)$-element set of the other endpoints of these blue edges. Then, by the definition of $R(k, \ell-1)$, the set $b$ either contains a monochromatic red $K_k$ and we are done, or a monochromatic blue $K_{\ell-1}$, which can be completed to a monochromatic blue $K_{\ell}$ by adding the vertex $V$, and we are done.

In the second case, let $r$ denote the $R(k-1, \ell)$-element set of the other endpoints of these red edges. Then again, $r$ either contains a monochromatic blue $K_{\ell}$ and we are done, or a monochromatic red $K_{k-1}$, which can be completed to a monochromatic red $K_k$ by adding the vertex $V$, and we are done again.

So the inequality is proved, therefore the induction step is proved, and therefore the theorem is proved.

### Corollary

*For all positive integers $k \geq 2$ and $\ell \geq 2$, the inequality*
$$
R(k, \ell) \leq R(k, \ell-1)+R(k-1, \ell)
$$
*holds.*

## Generalizations of the Ramsey Theorem

A circle of 17 friends has the property that no matter how we choose two from these 17 friends, those two people correspond with each other on one of three given subjects. Prove that there are three friends among the circle of these 17 friends such that any two of the three of them correspond with each other on the same subject.

### Theorem

*Let $n_1, n_2, \cdots, n_k$ be positive integers, with $k$ fixed. Then there exists a minimal positive integer $N=R\left(n_1, n_2, \cdots, n_k\right)$ so that if $n>N$, and we color all edges of $G=K_n$ with colors $1,2, \cdots, k$, then there will always be at least one index $i \in[k]$ so that $G$ has a $K_{n_i}$ subgraph whose edges are all of color $i$.*

#### Proof

We prove the statement by induction on $n_1+$ $n_2+\cdots+n_k$. The initial case of $n_1=n_2=\cdots=n_k=1$ is trivial. Now let us assume that we know the statement for all positive integers $n_1, n_2, \cdots, n_k$ whose sum is less than $m$, and prove it for the case when their sum is $m$.

Note that by our induction hypothesis, we know that the positive integer $R\left(n_1-1, n_2, \cdots, n_k\right)$ exists. Set $N=k\left(R\left(n_1-1, n_2, \cdots, n_k\right)-1\right)+2$. Let us assume that $G$ has a vertex $V$ so that the color that occurs most frequently among the edges adjacent to $V$ is color 1 . That means that at least $R\left(n_1-1, n_2, \cdots, n_k\right)$ edges adjacent to that vertex are of color 1 . Let $S$ be the set of the endpoints of these edges (other than $V$ ), and let $K_S$ the complete graph with vertex set $S$.

By the definition of $R\left(n_1-1, n_2, \cdots, n_k\right)$ either there exists a vertex $i \in\{2,3, \cdots, k\}$ so that $K_S$ has a $K_{n_i}$ subgraph with all edges colored $i$ and we are done, or $K_S$ has a $K_{n_1-1}$ subgraph with all edges colored 1, and then we are done again, adding $V$ to this subgraph.

### The Erdős-Szekeres theorem

*Let $n$ be a positive integer. Then there exists a (minimal) positive integer $E S(n)$ so that if there are $N \geq E S(n)$ points given in the plane, no three of which are collinear, then we can choose $n$ points from them that form a convex $n$-gon.*

#### Proof

We claim that $R_3(n, n)$ will always be such a positive integer (not necessarily the minimal one). Take the complete graph whose vertices are our $R_3(n, n)$ points in the plane. Color its triangles red or blue according to the following rule. Number the points from 1 to $R_3(n, n)$, and color a triangle red if the path from the smallest number via the middle one to the largest one is clockwise. Color a triangle blue if that path is counterclockwise.

As our graph has $R_3(n, n)$ vertices, there will be a $K_n$ subgraph with monochromatic triangles. We claim that the vertices of this $K_n$ subgraph form a convex $n$-gon. To see this, it suffices to show that there are no four vertices in this subgraph so that one is within the triangle spanned by the other three.

Let us assume without loss of generality that $A<B<C$, and that all triangles of our $K_4$ at hand are red. Then the fact that triangle $A D B$ is red forces $D<A<B$. (Indeed, $A<D<B$ would mean that the triangle $A D B$ is blue, and $A<B<D$ would mean that either the triangle $B C D$ is blue, or $D>C$, in which case triangle $A C D$ is blue.) Then, however, $D<A<C$, and triangle $D A C$ is blue, which is a contradiction. This completes the proof.
