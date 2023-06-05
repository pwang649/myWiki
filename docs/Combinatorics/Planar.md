---
id: Combinatorics - Planar
title: Planar Graphs
sidebar_position: 11
---
---

## Euler's Theorem

:::note Definition

Let $G$ be a graph that can be drawn on a plane surface so that no two of its edges intersect. Then $G$ is called a **planar** graph.

:::

### Euler's Theorem on Planar Graphs

*Let $G$ be a connected planar graph with $V$ vertices, $E$ edges, and $F$ faces. Then $V+F=E+2$.*

#### Proof

We prove the statement by induction on $E$, the number of edges of $G$. If $E=1$, then $G$ is either the tree of one edge, and then $V=2, F=1$, and the statement is true, or $G$ is the one-vertex graph with a loop, and then $V=1, F=2$, and the statement is true again.

Now let us assume that we know the statement for all graphs with $E-1$ edges, and let $G$ have $E$ edges. We distinguish two cases.

If we can remove an edge $e$ from $G$ so that the new graph $G^{\prime}$ is still connected, then $e$ is in a cycle in $G$, and therefore there are two different faces on the two sides of $e$ in $G$. Then $G^{\prime}$ has $E-1$ edges, $V$ vertices, and $F-1$ faces as the removal of $e$ turned the two faces on the two sides of $e$ into one. Therefore, $V+F-1=E-1+2$, so $V+F=E+2$.

If there is no $e$ with the mentioned property, then $G$ is a cycle-free connected graph, that is, a tree. Then we know that $V=E+1$. On the other hand, $F=1$, so the claim is again true.

### Lemma 1

*The graph $K_{3, 3}$ is not planar.*

Let us suppose that $K_{3, 3}$ is planar. As it has nine edges and six vertices, and it must have five faces. However, $K_{3, 3}$ is a complete bipartite graph, so all its faces must be quadrilaterals. Five quadrilaterals have a total of twenty edges, but in a planar graph, each edge is contained in two faces. Therefore, our graph would need ten distinct edges, but it has only nine.

### Lemma 2

*The graph $K_5$ is not planar.*

Again, let us suppose that $K_5$ is planar. As it has five vertices and ten edges, it follows from Euler's Theorem that it must have seven faces. As $K_5$ is a complete graph, all its faces must be triangles. Seven triangles, however, would need 21 edges, which is impossible as each of the ten edges of $K_5$ is used in exactly two faces.

### Kuratowski's Theorem

*A graph is not planar if and only if it contains a subgraph that is edge-equivalent to $K_5$ or $K_{3, 3}$.*

## Polyhedra

### Theorem

*Let $P$ be a convex polyhedron with $V$ vertices, $F$ faces, and $E$ edges. Then $V + F = E + 2$.*

#### Corollary

*In any convex polyhedron with $F$ faces and $E$ edges, $3F \leq 2E$.*

### Proposition

*In any convex polyhedron with $V$ vertices and $E$ edges, $3V \leq 2E$.*

#### Proof

Let $c_1, c_2, \cdots, c_V$ denote the number of edges adjacent to each vertex. As each edge is adjacent to exactly two vertices,
$$
\sum_{i=1}^V c_i=2 E .
$$
As each vertex is contained in at least three faces, $c_i \geq 3$ for all $i$, so the left-hand side is at least as large as $3 \mathrm{~V}$, which was to be proved.

### Lemma 1

*In any convex polyhedron, $E \leq 3 V-6$, and also, $E \leq 3 F-6$.*

#### Proof

We know from the above corollary that $F \leq \frac{2 E}{3}$. Comparing this to Euler's theorem, we get
$$
\begin{gathered}
E+2=F+V \leq \frac{2 E}{3}+V, \\
\frac{E}{3} \leq V-2,
\end{gathered}
$$
and the claim $E \leq 3 V-6$ follows by rearranging. Similarly, the proposition above implies $V \leq \frac{2 E}{3}$, and comparing this to Euler's theorem,
$$
\begin{gathered}
E+2=F+V \leq F+\frac{2 E}{3}, \\
\frac{E}{3} \leq F-2,
\end{gathered}
$$
and again, the claim $E \leq 3 F-6$ follows by rearranging.

### Lemma 2

*All convex polyhedra have at least one face that has at most five edges.*

#### Proof

We know from Lemma 1 that $E \leq 3 F-6$. Comparing this to Euler's Theorem we obtain
$$
\sum_{i=1}^F f_i=2 E \leq 6 F-12 .
$$
Therefore, it cannot be that $f_i \geq 6$ for all $i$ as that would imply the inequality $\sum_{i=1}^F f_i \geq 6 F$.

### Lemma 3

*All convex polyhedra have at least one vertex that is contained in at most five edges.*

#### Proof

We know from Lemma 1 that $E \leq 3 V-6$. We obtain
$$
\sum_{i=1}^V c_i=2 E \leq 6 V-12
$$

Therefore, it cannot be that $c_i \geq 6$ for all $i$ as that would imply the inequality $\sum_{i=1}^V c_i\geq 6V$.

## Coloring Maps

### Proposition

*The vertices of any planar graph can be properly colored with six colors.*

#### Proof

Induction on $V$, the number of vertices of the planar graph $G$. If $V=1$, then the statement is obviously true. Let us assume that we know that the statement is true for graphs with $V-1$ vertices. Let $G$ have $V$ vertices. Then we know that $G$ has a vertex $A$ of degree at most five. Remove $A$ from $G$ to get the graph $G^{\prime}$. By our induction hypothesis, $G^{\prime}$ has a proper coloring with six colors. Take such a coloring of $G^{\prime}$, then color $A$ with a color that is not the color of any of its (at most five) neighbors.

This means, by duality, that all maps can be properly colored using six colors. The situation is significantly harder if we only want to use five colors. The result, however, is the same.

### Theorem

*The vertices of any planar graph can be properly colored with five colors.*

#### Proof

Just as in proving the previous proposition, we use induction. The only case in which the previous proof does not work is when $A$ has five neighbors, and they are all of different colors. In this case, denote by $1,2,3,4$ and 5 the colors of the five neighbors $y_1, y_2, y_3, y_4, y_5$ of $A$ as they follow clockwise. Let $G^{\prime}$ be the graph obtained from $G$ by removing $A$ and all the edges adjacent to $A$. If $G^{\prime}$ has a proper 5-coloring in which $y_1$ and $y_3$ are the same color, then we are done. If not, then any proper 5-coloring of $G^{\prime}$ must contain a path from $y_1$ to $y_3$ along which the vertices are alternatingly colored 1 and 3 . By a similar argument, if $y_2$ and $y_4$ cannot be the same color, then any proper 5 -coloring of $G^{\prime}$ must contain a path from $y_2$ to $y_4$ along which the vertices are alternatingly colored 2 and 4. This, however, is a contradiction, as a path from $y_1$ to $y_3$ and a path from $y_2$ to $y_4$ must always intersect.
