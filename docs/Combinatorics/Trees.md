---
id: Combinatorics - Trees
title: Trees
sidebar_position: 9
---
---

## Minimally Connected Graphs

### Theorem 1

*Let $G$ be a connected simple graph on $n$ vertices. Then the following are equivalent.*

*(1) $G$ is minimally connected, that is, if we remove any edge of $G$, then the obtained graph $G^{\prime}$ will not be connected.*

*(2) $G$ does not contain a cycle.*

:::note Definition

A connected simple graph $G$ satisfying either, and therefore, both, criteria of Theorem 1 is called a tree.

:::

#### Proof

(1) $\Rightarrow$ (2) Let us assume that $G$ is minimally connected, but it contains a cycle $C$. Remove the edge $a b$ of $C$. We claim that $G$ is still connected. Indeed, let $x$ and $y$ be two vertices in $G$. As $G$ is connected, $G$ contains a path $p$ from $x$ to $y$. If $p$ does not contain the edge $a b$, then it still connects $x$ and $y$. If $p$ contains $a b$, then let us replace $a b$ by the other (longer) arc $a b$, to get a new walk from $x$ to $y$. As there is a walk from $x$ to $y$ in $G^{\prime}$, there must also be a path. Therefore, $G^{\prime}$ is connected, which is a contradiction.

(2) $\Rightarrow$ (1) We prove that the opposite of (1) implies the opposite of (2). That will suffice, because it will imply that if (2) holds, the opposite of (1) cannot hold as that would imply the opposite of (2), therefore (1) has to hold. So "(2) implies (1)" will follow.
Let us assume that $G$ is not minimally connected. That means that there is an edge in $G$, say $A B$, so that $G^{\prime}=G-\{A B\}$ is still connected. Then there is a path $P$ from $B$ to $A$ in $G^{\prime}$. However, $A B \cup P$ must then be a cycle in $G$ as it defines a path that starts in $A$ and ends in A. So $G$ contains a cycle.

#### Corollary

A connected graph $H$ is a tree if and only if for each pair of vertices $(x, y)$, there is exactly one path joining $x$ and $y$.

### Theorem 2

*All trees on $n$ vertices have $n-1$ edges. Conversely, all connected graphs on $n$ vertices with exactly $n-1$ edges are trees.*

#### Proof

We use induction on $n$. If $n=1$, the statement is trivially true as a 1-vertex cycle-free graph has no edges. Let us assume that the statement is true for trees on $n$ vertices. Let $T$ be a tree on $n+1$ vertices. Find a leaf $l$ in $T$ (the previous lemma ensures the existence of two leaves), then delete $l$ and the only edge $e$ adjacent to it from $T$, to get a new tree $T^{\prime}$. (Note that $T^{\prime}$ is always a tree as it is connected and cycle-free.) This new tree $T^{\prime}$ has $n$ vertices, so by the induction hypothesis, it has $n-1$ edges. But then $T=T^{\prime} \cup e$ has $n$ edges, and the Theorem is proved.

### Proposition

*Let $F$ be a forest on $n$ vertices with $k$ connected components. Then $F$ has $n-k$ edges.*

#### Proof

By Theorem 2, the number of vertices exceeds that of edges by one in each connected component, and the proof follows.

### Cayley's Formula

*For any positive integer $n$, the number of all trees with vertex set $[n]$ is $A_n = n^{n-2}*.

#### Proof

Take all $A_n$ trees on $[n]$, and in each of them, choose two vertices, which do not have to be different, and call one of them Start, and the other one End. Do this in all possible $n^2$ ways for each tree. Call the $n^2 A_n$ objects obtained this way doubly rooted trees.

We are going to show that the number of doubly rooted trees on $[n]$ is $n^n$ by constructing a bijection from the set of all functions from $[n]$ to $[n]$ to that of doubly rooted trees on $[n]$. This will prove our Theorem.

Let $f$ be a function from $[n]$ to $[n]$. Let $C \subseteq[n]$ be the subset of elements $x \in[n]$ which are part of a cycle under the action of $f$, that is, for which there is a positive integer $i$ so that $f^i(x)=x$. Let $C=\left\{c_1<c_2<\cdots<c_k\right\}$. Now let $d_i=f\left(c_i\right)$, and write the integers $d_1, d_2, \cdots, d_k$ in this order to the nodes of a tree consisting of one line of $k$ vertices. In other words, we write down the elements of $C$ in the order given by the permutation that is the product of the cycles on $C$. Also, we mark $d_1$ by Start and $d_k$ by End.

Finally, if $j \in[n]$, but $j \notin C$, then join the vertex $j$ to the vertex $f(j)$ by an edge. This way we always get a tree. Indeed, we get a connected graph as the Start-End line is connected to all vertices, and we get a cycle-free graph as the only cycles created by $f$ involved vertices from $C$, and $C$ corresponds to a single line. The tree is doubly rooted, as the vertices Start and End are marked.

To see that this is a bijection, take a doubly rooted tree on $[n]$. For vertices $j$ not on the Start-End line, define $f(j)$ to be the first neighbor of $j$ on the unique path from $j$ to the Start-End line. For the vertices on the Start-End line, define $f$ so that the image of the $i$ th smallest of them is the one that is in the $i$ th position from Start.

This shows that there is exactly one function $f : [n] \rightarrow [n]$ corresponding to each doubly rooted tree, and our theorem is proved.

---

## Minimum-weight Spanning Trees

:::info Kruskal's Greedy Algorithm

1. Create a forest $F$ (a set of trees), where each vertex in the graph is a separate tree
2. Create a sorted set $S$ containing all the edges in the graph
3. While $S$ is nonempty and $F$ is not yet spanning
    - Remove an edge with minimum weight from $S$
    - If the removed edge connects two different trees then add it to the forest $F$, combining two trees into a single tree

:::

### Lemma

*Let $F$ and $F^{\prime}$ be two forests on the same vertex set $V$, and let $F$ have less edges than $F^{\prime}$. Then $F^{\prime}$ has an edge e that can be added to $F$ so that the obtained graph $F \cup e$ is still a forest.*

#### Proof

Let us assume that there is no such edge $e \in F^{\prime}$. Then adding any edge of $F^{\prime}$ to $F$ would create a cycle in $F$. So all edges of $F^{\prime}$ are between two vertices of the same component of $F$. Therefore, $F^{\prime}$ has at least as many components as $F$. This is a contradiction, however, as we know that a forest on $n$ vertices and with $k$ components has $n-k$ edges, so if $F^{\prime}$ has more edges than $F$, it must have less components.
Now we are in a position to prove the main result of this section.

### Theorem

*The greedy algorithm always finds the minimum-weight spanning tree.*

#### Proof

Again, we use an indirect argument. Assume the greedy algorithm gives us the spanning tree $T$, whereas our graph $G$ has a spanning tree $H$ whose total weight is less than that of $T$. Let $h_1, h_2, \cdots, h_{n-1}$ be the edges of $H$ so that $w\left(h_1\right) \leq w\left(h_2\right) \leq \cdots \leq w\left(h_{n-1}\right)$ holds. Similarly, let $t_1, t_2, \cdots, t_{n-1}$ be the edges of $T$ so that $w\left(t_1\right) \leq w\left(t_2\right) \leq \cdots \leq w\left(t_{n-1}\right)$ holds.

Let $i$ be the step at which $H$ first "beats" $T$. That is, let $i$ be the smallest integer so that $\sum_{j=1}^i w\left(h_j\right)<\sum_{j=1}^i w\left(t_j\right)$. Such an index $i$ exists as at the end of the entire selection procedure $H$ beats $T$, so there has to be a time $H$ takes the lead. It is also clear that $i>1$ as $w\left(t_1\right)$ is minimal among all the edge-weights of $G$.

As $i$ is the first index at which $H$ took the lead, the inequality $w\left(h_i\right)<$ $w\left(t_i\right)$ must hold. Indeed, this is the only way
$$
\sum_{j=1}^i w\left(h_j\right)<\sum_{j=1}^i w\left(t_j\right)
$$
and
$$
\sum_{j=1}^{i-1} w\left(h_j\right) \geq \sum_{j=1}^{i-1} w\left(t_j\right)
$$
can both hold.
We will deduce a contradiction from this, that is, we will prove that with $w\left(h_i\right)<w\left(t_i\right)$ holding, the greedy algorithm could not possibly choose $t_i$ at step $i$. Let $T_{i-1}$ be the forest the greedy algorithm produced in $i-1$ steps, that is, the union of the edges $t_1, t_2, \cdots, t_{i-1}$, and let $H_i$ be the forest formed by the edges $h_1, h_2, \cdots, h_i$. Applying Lemma 10.11 to $T_{i-1}$ and $H_i$, we see that there is an edge $h_j$ (for some $j \leq i$ ) that can be added to $T_{i-1}$ without forming a cycle. However, our definitions show that $w\left(h_j\right) \leq w\left(h_i\right)<w\left(t_i\right)$, so at step $i$, the greedy algorithm could not add $t_i$ to $T_{i-1}$ as $t_i$ did not have minimum weight among the edges that could be added to $T_{i-1}$ without forming a cycle.

This proves by contradiction that no spanning tree $H$ can have a smaller total weight than $T$, the tree obtained by the greedy algorithm.

---

## Graphs and Matrices

:::note Definition

Let $G$ be an undirected graph on $n$ labeled vertices, and define an $n \times n$ matrix $A = A_G$ by setting $A_{i,j}$ equal to the number of edges between vertices $i$ and $j$. Then $A$ is called the **adjacency matrix** of $G$.

:::

### Theorem

Let $G$ be a graph on labeled vertices, let $A$ be its adjacency matrix, and let $k$ be a positive integer. Then $A_{i, j}^k$ is equal to the number of walks from $i$ to $j$ that are of length $k$.

#### Proof

By induction on $k$. For $k=1$, the statement is true as a walk of length one is an edge. Now let us assume that the statement is true for $k$, and prove it for $k+1$. Let $z$ be any vertex of $G$. If there are $b_{i, z}$ walks of length $k$ from $i$ to $z$, and there are $a_{z, j}$ walks of length one (in other words, edges) from $z$ to $j$, then there are $b_{i, z} a_{z, j}$ walks of length $k+1$ from $i$ to $j$ whose next-to-last vertex is $z$. Therefore, the number of all walks of length $k+1$ from $i$ to $j$ is
$$
c(i, j)=\sum_{z \in G} b_{i, z} a_{z, j}
$$
It follows from the induction hypothesis that the matrix $B$ defined by $B_{i, j}=$ $b_{i, j}$ fulfills $B=A^k$. It is immediate from the definition of the adjacency matrix $A$ of $G$ that $A_{i, j}=a_{i, j}$.

Therefore, it follows from the definition of matrix multiplication that $c(i, j)=\sum_{z \in G} b_{i, z} a_{z, j}$ is in fact the $(i, j)$-entry of $B A=A^{k+1}$, (indeed, it is the scalar product of the $i$ th row of $B$ and the $j$ th column of $A$ ), and our claim is proved.

---

## The Number of Spanning Trees on a Graph

:::note Definition

Let $G$ be a directed graph without loops. Let $\left\{v_1, v_2, \cdots, v_n\right\}$ denote the vertices of $G$, and let $\left\{e_1, e_2, \cdots, e_m\right\}$ denote the edges of $G$. Then the incidence matrix of $G$ is the $n \times m$ matrix $A$ defined by
- $a_{i, j}=1$ if $v_i$ is the starting vertex of $e_j$,
- $a_{i, j}=-1$ if $v_i$ is the ending vertex of $e_j$, and
- $a_{i, j}=0$ otherwise.

:::

### Matrix-Tree theorem

*Let #U# be a simple undirected graph. Let $\{ v_1,v_2,\cdots ,v_n \}$ be the vertices of $U$. Define the $(n-1)\times (n-1)$ matrix $L_0$ by*
$$
l_{i, j}=\left\{\begin{array}{l}
\text { the degree of } v_i \text { if } i=j, \\
-1 \text { if } i \neq j, \text { and } v_i \text { and } v_j \text { are connected, and } \\
0 \text { otherwise, }
\end{array}\right.
$$
*where $1 \leq i, j \leq n-1$. Then $U$ has exactly $\operatorname{det} L_0$ spanning trees.*

#### Proof

First, we turn $U$ into a directed graph $G$ by replacing each edge of $U$ by a pair of directed edges, one edge going in each direction.

Let $A_0$ be the incidence matrix of $G$ with the last row removed. We claim that $A_0 A_0^T=2 L_0$. The entry of $A_0 A_0^T$ in position $(i, j)$ is the scalar product of the $i$ th and $j$ th row of $A_0$. If $i=j$, then every edge that starts or ends at $v_i$ contributes 1 to this inner product. Therefore, the entry of $A_0 A_0^T$ in position $(i, i)$ is the degree of $v_i$ in $G$, or, in other words, twice the degree of $v_i$ in $U$.

If $i \neq j$, then every edge that starts at $v_i$ and ends at $v_j$, and every edge that starts at $v_j$ and ends at $v_i$ contributes -1 to this inner product. Recall that $U$ is simple, so there is either no edge or one edge from $v_i$ to $v_j$ in $G$. So the entry of $A_0 A_0^T$ in position $(i, j)$ is -2 if $v_i v_j$ is an edge of $U$, and 0 otherwise. This proves that indeed, $A_0 A_0^T=2 L_0$.

This implies that $2^{n-1} \operatorname{det} L_0=\operatorname{det}\left(A_0 A_0^T\right)$. Note that each spanning tree of $U$ can be turned into $2^{n-1}$ different spanning trees of $G$ by orienting its $n-1$ edges.

### Theorem

*Let $G$ be a directed graph without loops, and let $A$ be the incidence matrix of $G$. Remove any row from $A$, and let $A_0$ be the remaining matrix. Then the number of spanning trees of $G$ is $\operatorname{det} A_0 A_0^T$.*

#### Proof

Let us assume, without loss of generality, that it was the last row of $A$ that we removed. Let $B$ be an $(n-1) \times(n-1)$ submatrix of $A_0$. (If $m<n-1$, then $G$ cannot be connected, and it has no spanning trees.) We claim that $|\operatorname{det} B|=1$ if and only if the subgraph $G^{\prime}$ corresponding to the columns of $B$ is a spanning tree, and $\operatorname{det} B=0$ otherwise.
We prove this claim by induction on $n$.
(a) Let us first assume that there is a vertex $v_i(i \neq n)$ of degree one in $G^{\prime}$. (The degree of a vertex in an undirected graph is the number of all edges adjacent to that vertex.) Then the $i$ th row of $B$ contains exactly one nonzero element, and that element is $1$ or $-1$. Expanding $\operatorname{det} B$ by this row, and using the induction hypothesis, the claim follows. Indeed, $G^{\prime}$ is a spanning tree of $G$ if and only if $G^{\prime}-v_i$ is a spanning tree of $G-v_i$
(b) Now let us assume that $G^{\prime}$ has no vertices of degree one (except possibly $v_n$, the vertex associated to the deleted last row). Then $G^{\prime}$ is not a spanning tree. Moreover, as $G^{\prime}$ has $n-1$ edges, and is not a spanning tree, there must be a vertex in $G^{\prime}$ that has degree zero. If this vertex is not $v_n$, then $B$ has a zero row and $\operatorname{det} B=0$. If this vertex is $v_n$, then each column of $B$ contains one $1$, and one $-1$ as each edge has a head and a tail. Therefore, the sum of all rows of $B$ is $0$, so the rows of $B$ are linearly dependent, and $\operatorname{det} B=0$.

So we have proved that indeed, $|\operatorname{det} B|=1$ exactly if the subgraph $G^{\prime}$ corresponding to the columns of $B$ is a spanning tree, and $\operatorname{det} B=0$ otherwise.
The Binet-Cauchy formula, which can be found in most Linear Algebra textbooks, says that
$$
\operatorname{det} A_0 A_0^T=\sum(\operatorname{det} B)^2
$$
where the sum ranges over all $(n-1) \times(n-1)$ submatrices $B$ of $A_0$. However, we have just seen that $(\operatorname{det} B)^2=1$ if and only if $B$ corresponds to a spanning tree of $A$, and $(\operatorname{det} B)^2=0$ otherwise.

### Corollary

*The number of spanning trees of $K_n$ is $n^{n-2}$.*

#### Proof

The matrix $L_0$ associated to $K_n$ will have the following simple structure
$$
\left(\begin{array}{cccc}
n-1 & -1 & \cdots & -1 \\
-1 & n-1 & \cdots & -1 \\
\cdots & & & \\
-1 & -1 & \cdots & n-1
\end{array}\right)
$$
To compute the determinant of this matrix, add all rows to the first, to get
$$
\left(\begin{array}{cccc}
1 & 1 & \cdots & 1 \\
-1 & n-1 & \cdots & -1 \\
\cdots & & & \\
-1 & -1 & \cdots & n-1
\end{array}\right)
$$
Now add the first row to all other rows to get the upper triangular matrix
$$
\left(\begin{array}{llll}
1 & 1 & \cdots & 1 \\
0 & n & \cdots & 0 \\
\cdots & & \\
0 & 0 & \cdots & n
\end{array}\right)
$$
This shows that det $L_0=n^{n-2}$ as claimed.