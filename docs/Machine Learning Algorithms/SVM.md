---
id: Machine Learning Algorithms - SVM
title: Support Vector Machine
sidebar_position: 5
---
---

## **Introduction**

:::info

**The Support Vector Machine (SVM)** is a linear classifier that can be viewed as an extension of the Perceptron developed by Rosenblatt in 1958. The Perceptron guaranteed that you find a hyperplane if it exists. The SVM finds the maximum geometric margin separating hyperplane.

:::

### **Setting**

We define a linear classifier: $h(x)=\mathrm{sign}(w^Tx+b)$ and we assume a binary classification setting with labels $\left\{+1, -1 \right\}$.

<center><img src="https://i.postimg.cc/Rh9mFKZR/C001-2.png"/></center>

The *left figure* shows two different separating hyperplanes for the same dataset. The *right figure* shows the maximum margin hyperplane. The margin $\gamma$ is the distance from the hyperplane (solid line) to the closest points in either class (which touch the parallel dotted lines).

Therefore, given a linearly dataset ${\left\{x_i,y_i\right\}}^n_{i=2}$, the minimum geometric margin is defines as

$$
\gamma(\mathbf{w}, b) := \min _{\mathbf{x} \in D} \frac{\left|\mathbf{w}^T \mathbf{x_i}+b\right|}{\|\mathbf{w}\|_2}
$$

<center><img src="https://i.postimg.cc/Dwhv0V8h/C001-1.jpg" width="300"/></center>

Our **goal** is to find $(w,b)$, such that it separates the data, and **maximizes $\gamma(w,b)$**.

$$
\max_{w,b}\frac{1}{\|\mathbf{w}\|_2}\min _{x_i} \left|\mathbf{w}^T \mathbf{x_i}+b\right|
$$

such that
$$
y_i(\mathbf{w}^T \mathbf{x_i}+b)\ge 0,  \forall i
$$

---

## **Margin**

We already saw the definition of a margin in a context of the perception.

Now let's take a look at this picture.

<center><img src="https://i.postimg.cc/c4JDyhRc/C001-3.png"/></center>

A hyperplane is defined through $\mathbf{w}, b$ as a set of points such that $\mathcal{H}=\left\{\mathbf{x} \mid \mathbf{w}^T \mathbf{x}+b=0\right\}$. Let the margin $\gamma$ be defined as the distance from the hyperplane to the closest point across both classes.
What is the distance of a point $x$ to the hyperplane $\mathcal{H}$ ?

Consider some point $\mathbf{x}$. Let $\mathbf{d}$ be the vector from $\mathcal{H}$ to $\mathbf{x}$ of minimum length. Let $\mathbf{x}^P$ be the projection of $\mathbf{x}$ onto $\mathcal{H}$. It then follows that:

$$
\quad \mathbf{x}^P=\mathbf{x}-\mathbf{d}
$$

$\mathbf{d}$ is parallel to $\mathbf{w}$, so $\mathbf{d}=\alpha \mathbf{w}$ for some $\alpha \in \mathbb{R}$.  $\mathbf{x}^P \in \mathcal{H}$ which implies $\mathbf{w}^T \mathbf{x}^P+b=0$.  Therefore,

$$
\mathbf{w}^T \mathbf{x}^P+b=\mathbf{w}^T(\mathbf{x}-\mathbf{d})+b=\mathbf{w}^T(\mathbf{x}-\alpha \mathbf{w})+b=0
$$

which implies $\alpha=\frac{\mathbf{w}^T \mathbf{x}+b}{\mathbf{w}^T \mathbf{w}}$.

 The length of $\mathbf{d}$ is calculated by

$$
\|\mathbf{d}\|_2=\sqrt{\mathbf{d}^T \mathbf{d}}=\sqrt{\alpha^2 \mathbf{w}^T \mathbf{w}}=\frac{\left|\mathbf{w}^T \mathbf{x}+b\right|}{\sqrt{\mathbf{w}^T \mathbf{w}}}=\frac{\left|\mathbf{w}^T \mathbf{x}+b\right|}{\|\mathbf{w}\|_2}
$$

---

## **Max Margin Classifier**

Margin of $\mathcal{H}$ with respect to $D: \gamma(\mathbf{w}, b)=\min _{\mathbf{x} \in D} \frac{\left|\mathbf{w}^T \mathbf{x}+b\right|}{\|\mathbf{w}\|_2}$.

By definition, the margin and hyperplane are scale invariant: $\gamma(\beta \mathbf{w}, \beta b)=\gamma(\mathbf{w}, b), \forall \beta \neq 0$.

Note that if the hyperplane is such that $\gamma$ is maximized, it must lie right in the middle of the two classes. In other words, $\gamma$ must be the distance to the closest point within both classes. (If not, you could move the hyperplane towards data points of the class that is further away and increase $\gamma$, which contradicts that $\gamma$ is maximized.)

We can formulate our search for the maximum margin separating hyperplane as a constrained optimization problem. The objective is to maximize the margin under the constraints that all data points must lie on the correct side of the hyperplane:
$$
\underbrace{\max _{\mathbf{w}, b} \gamma(\mathbf{w}, b)}_{\text {maximize margin }} \text { such that } \underbrace{\forall i y_i\left(\mathbf{w}^T x_i+b\right) \geq 0}_{\text {separating hyperplane }}
$$
If we plug in the definition of $\gamma$ we obtain:

$$
\underbrace{\max_{w,b}\frac{1}{\|\mathbf{w}\|_2}\min _{x_i} \left|\mathbf{w}^T \mathbf{x_i}+b\right|}_{\text {maximize margin }} \text { such that } \underbrace{\forall i y_i\left(\mathbf{w}^T x_i+b\right) \geq 0}_{\text {separating hyperplane }}
$$

Because the hyperplane is scale invariant, we can fix the scale of $\mathbf{w}, b$ anyway we want. Let's be clever about it, and choose it such that
$$
\min _{\mathbf{x} \in D}\left|\mathbf{w}^T \mathbf{x}+b\right|=1
$$
We can add this re-scaling as an equality constraint. Then our objective becomes:
$$
\max_{\mathbf{w}, b} \frac{1}{\|\mathbf{w}\|_2} \cdot 1=\min_{\mathbf{w}, b}\|\mathbf{w}\|_2=\min_{\mathbf{w}, b} \mathbf{w}^{\top} \mathbf{w}
$$
Where we made use of the fact $f(z)=z^2$ is a monotonically increasing function for $z\ge 0$ and $||\mathbf{w}||\ge 0$; i.e. the $\mathbf{w}$ that maximizes $||\mathbf{w}||_2$ also maximizes $\mathbf{w}^T\mathbf{w}$.

Therefore, the new optimization becomes:

$$
\min_{\mathbf{w},b}\mathbf{w}^T\mathbf{w}
$$

such that

$$
y_i(\mathbf{w}^T \mathbf{x_i}+b)\ge 0,  \forall i
$$

$$
\min _{\mathbf{x} \in D}\left|\mathbf{w}^T \mathbf{x_i}+b\right|=1
$$

In order to make the constaints easier to solve, we make make the above optimization into:

$$
\min_{\mathbf{w},b}\mathbf{w}^T\mathbf{w}
$$

such that

$$
y_i(\mathbf{w}^T \mathbf{x_i}+b)\ge 1, \forall i
$$

, which is equivalent to the above optimization.

---

## **Support Vectors**

For the optimal pair, some training points will have tight constraints, i.e.

$$
y_i(\mathbf{w}^T \mathbf{x_i}+b)= 1
$$

We refer to these training points as **support vectors**. Support vectors are special because they are the training points that define the maximum margin of the hyperplane to the data set and they therefore determine the shape of the hyperplane. If you were to move one of them and retrain the SVM, the resulting hyperplane would change. The opposite is the case for non-support vectors (provided you don't move them too much, or they would turn into support vectors themselves). This will become particularly important in the dual formulation for Kernel-SVMs.

---

## **SVM with Soft Constraints**

:::tip Note

If the data is low dimensional it is often the case that there is no separating hyperplane between the two classes. In this case, there is no solution to the optimization problems stated above. We can fix this by allowing the constraints to be violated ever so slight with the introduction of slack variables:

$$
\begin{gathered}
\min _{\mathbf{w}, b} \mathbf{w}^T \mathbf{w}+C \sum_{i=1}^n \xi_i \\
\text { s.t. } \forall i y_i\left(\mathbf{w}^T \mathbf{x}_i+b\right) \geq 1-\xi_i \\
\forall i \xi_i \geq 0
\end{gathered}
$$

:::

The **slack variable** $\xi_i$ allows the input $\mathbf{x_i}$ to be closer to the hyperplane (or even be on the wrong side), but there is a penalty in the objective function for such "slack". If $C$ is very large, the SVM becomes very **strict** and tries to get all points to be on the right side of the hyperplane. If $C$ is very small, the SVM becomes very loose and may "sacrifice" some points to obtain a simpler solution.

---

## **Unconstrained Formulation**

Let us consider the value of $\xi_i$ for the case of $C \neq 0$. Because the objective will always try to minimize $\xi_i$ as much as possible, the equation must hold as an equality and we have:

$$
\xi_i=\left\{\begin{array}{cc}
1-y_i\left(\mathbf{w}^T \mathbf{x}_i+b\right) & \text { if } y_i\left(\mathbf{w}^T \mathbf{x}_i+b\right)<1 \\
0 & \text { if } y_i\left(\mathbf{w}^T \mathbf{x}_i+b\right) \geq 1
\end{array}\right.
$$

This is equivalent to the following closed form:

$$
\xi_i=\max \left(1-y_i\left(\mathbf{w}^T \mathbf{x}_i+b\right), 0\right) .
$$

If we plug this closed form into the objective of our SVM optimization problem, we obtain the following **unconstrained version** as **loss function** and **regularizer**:

$$
\min _{\mathbf{w}, b} \underbrace{\mathbf{w}^T \mathbf{w}}_{l_2-\text { regularizer }}+C \sum_{i=1}^n \underbrace{\max \left[1-y_i\left(\mathbf{w}^T \mathbf{x}+b\right), 0\right]}_{\text {hinge-loss }}
$$

This formulation allows us to optimize the SVM paramters $(\mathbf{w}, b)$ just like logistic regression (e.g. through gradient descent). The only difference is that we have the **hinge-loss** instead of the **logistic loss**.

<center><img src="https://i.postimg.cc/P55gt7c3/Snipaste-2023-03-11-22-12-05.png"/></center>

The five plots above show different boundary of hyperplane and the optimal hyperplane separating example data, when $C=0.01, 0.1, 1, 10, 100$.

---

### ***Reference***

Weinberger, K. (n.d.). Support Vector Machine. CS4780 Lecture Note 09. <https://www.cs.cornell.edu/courses/cs4780/2022fa/lectures/lecturenote09.html>

### ***Acknowledgement***

Parts of the content on this website have been sourced from the following website:

<https://www.cs.cornell.edu/courses/cs4780/2022fa/lectures/lecturenote09.html>

written by Professor Kilian Weinberger from Cornell University. We would like to express our gratitude to the original authors while respecting their copyright and intellectual property rights. All credits go to Professor Kilian Weinberger.
