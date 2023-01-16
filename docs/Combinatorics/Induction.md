---
id: Combinatorics - Induction
title: Induction
sidebar_position: 2
---

### Components of Inductive Proof

Inductive proof is composed of 3 major parts : Base Case, Induction Hypothesis, Inductive Step.
1. **Base Case:** One or more particular cases that represent the most basic case. (e.g. $n=1$ to prove a statement in the range of positive integer)
2. **Induction Hypothesis:** Assumption that we would like to be based on. (e.g. Let's assume that $\mathrm{P}(\mathrm{k})$ holds)
3. **Inductive Step:** Prove the next step based on the induction hypothesis. (i.e. Show that Induction hypothesis $\mathrm{P}(\mathrm{k})$ implies $\mathrm{P}(\mathrm{k}+1)$)

### Weak Induction, Strong Induction

The difference between weak induction and strong indcution only appears in induction hypothesis. In weak induction, we only assume that particular statement holds at $k$-th step, while in strong induction, we assume that the particular statment holds at all the steps from the base case to $k$-th step.