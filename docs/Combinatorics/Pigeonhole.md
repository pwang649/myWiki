---
id: Combinatorics - Pigeonhole
title: The Pigeon-Hole Principle
sidebar_position: 1
---

### Theorem

*Let $n$ and $k$ be positive integers, and let $n>k$. Suppose we have to place $n$ identical balls into $k$ identical boxes. Then there will be at least one box in which we place at least two balls.*

#### Proof by Contradiction

Let us assume there is no box with at least two balls. Then each of the $k$ boxes has either 0 or 1 ball in it. Denote by $m$ the number of boxes that have zero balls in them; then certainly $m \geq 0$. Then, of course, there are $k-m$ boxes that have one. However, that would mean that the total number of balls placed into the $k$ boxes is $k-m$ which is a contradiction because we had to place $n$ balls into the boxes, and $k−m \leq k < n$. Therefore, our assumption that there is no box with at least two balls must have been false.

### Theorem (Generalized Pigeon-hole Principle)

Let $n, m$, and $r$ be positive integers so that $n>r m$, and let us distribute $n$ identical balls into $m$ identical boxes. Then there will be at least one box into which we place at least $r+1$ balls.

#### Proof

Just as before, we assume the contrary statement. Then each of the $m$ boxes can hold at most $r$ balls, so all the boxes can hold at most $r m<n$ balls, which contradicts the requirement that we distribute $n$ balls.