---
id: Machine Learning Algorithms - Boosting
title: Boosting
sidebar_position: 3
---

- The boosting paradigm allows the learner to have smooth control over this tradeoff. The learning starts with a basic class (that might have a large approximation error), and as it progresses the class that the predictor may belong to grows richer.
- A boosting algorithm amplifies the accuracy of *weak learners*. When a weak learner can be implemented efficiently, boosting provides a tool for aggregating such weak hypotheses to approximate gradually good predictors for larger, and harder to learn, classes.

We will derive Adaboost as a so-called "steepest descent" method (closely related to the gradient descent). Last time, we showed that
$$
\bar{g}=\underset{g: \mathbb{S} \rightarrow\{\pm 1\}}{\operatorname{argmin}} \mathbb{E}[\exp (-Y g(X))]
$$
satisfies $\bar{g}(x)=\frac{1}{2} \log \left(\frac{1+\eta(x)}{1-\eta(x)}\right)$ and that $\operatorname{sign} \bar{g}=g_*(x)$ is the Bayes classifier.
Next, we will consider the empirical (based on the training data) analogue of this minimization problem: given a class $G$ of functions (not necessarily binary classifiers), find the one that minimizes
$$
g \mapsto \frac{1}{n} \sum_{j=1}^n \exp \left(-Y_j g\left(X_j\right)\right)
$$
We will call the minimizer $\hat{g}_n$. The specific class of function we will be looking at is constructed as follows: let $\mathcal{F}$ be the simple "base class" consisting of binary classifiers (e.g. the threshold classifiers or linear separators), and set
$$
\mathbb{G}=\left\{\sum_{j=1}^k \alpha_j f_j: k \geq 1, \alpha_0, \ldots, \alpha_k \in \mathbb{R}, f_0, \ldots, f_k \in \mathcal{F}\right\}
$$
This is known as the "convex hull" of $\mathcal{F}$ which consists of all convex combinations of the elements of $\mathcal{F}$. Another way to think about $g=\sum_{j=1}^k \alpha_j f_j$ is that the sign of $g$ is the "majority vote" among $f_1, \ldots, f_k$ where the "vote" of $f_j$ carries weight $\alpha_j$.

It turns out that this problem admits an efficient solution under a rather weak assumption on the class $\mathcal{F}$, called the "weak learnability" condition.

#### Definition (Weak Learnability)

We will say that a class $\mathcal{F}$ of binary classifiers satisfies the weak learnability condition if for any collection of points $\left(x_j, y_j\right)_{j=1}^n \in S \times\{\pm 1\}, n \geq 1$ and any nonnegative weights $w_1, \ldots, w_n, \sum_{j=1}^n w_j=1$, there exists $f \in \mathcal{F}$ such that $\sum_{j=1}^n w_j \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right) \leq 1 / 2$ (in simple terms, $f$ "does better than a random guess").

Note that weak learnability is implied by symmetry, meaning that $f \in \mathcal{F} \Longleftrightarrow-f \in \mathcal{F}$; indeed, if $\sum_{j=1}^n w_j \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right)>\frac{1}{2}$ then $\sum_{j=1}^n w_j \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right)<\frac{1}{2}$.

### Adaboost

Let's examine one step of the (version of) the so-called "steepest descent" algorithm for minimizing $\frac{1}{n} \sum_{j=1}^n \exp \left(-Y_j g\left(X_j\right)\right)$. The steepest descent is essentially a version of gradient descent method where we use an "approximate" gradient at each step, instead of the true gradient.

Assume that $g \in \mathbb{G}$ our current guess. We will look for $\alpha \in \mathbb{R}$ and $f \in \mathcal{F}$ that minimize (approximately)
$$
\frac{1}{n} \sum_{j=1}^n e^{-Y_j\left[g\left(X_j\right)+\alpha f\left(X_j\right)\right]}=\sum_{j=1}^n \frac{1}{n} e^{-Y_j g\left(X_j\right)} e^{-\alpha f\left(X_j\right) Y_j} .
$$
Intuitively, such an $f$ - the direction of "steepest descent" - can be seen as an approximate gradient. Define $w_j=\frac{1}{n} e^{-Y_j f\left(X_j\right)}, j=1, \ldots, n$, to be the weights. Note that $w_j \geq 0$. Let $\tilde{w}_j=\frac{w_j}{\sum_{j=1}^n w_j}$, so that $\sum_{j=1}^n \tilde{w}_j=1$. Our problem is then to minimize $\sum_{j=1}^n \tilde{w}_j e^{-\alpha f\left(\overline{X_j}\right) Y_j}$ over $f \in \mathcal{F}, \alpha \in \mathbb{R}$. Since $f$ takes only two values $\pm 1$, we have that
$$
\begin{aligned}
\sum_{j=1}^n \tilde{w}_j e^{-\alpha f\left(X_j\right) Y_j} &=\sum_{j=1}^n \tilde{w}_j e^{-\alpha} \mathbb{I}\left(Y_j=f\left(X_j\right)\right)+\sum_{j=1}^n \tilde{w}_j e^\alpha \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right) \pm \sum_{j=1}^n \tilde{w}_j e^{-\alpha} \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right) \\
&=e^{-\alpha}+\left(e^\alpha-e^{-\alpha}\right) \sum_{j=1}^n \tilde{w}_j \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right)
\end{aligned}
$$
where $e_{n, \tilde{w}}(f)=\sum_{j=1}^n \tilde{w}_j \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right)$ is the "weighted" training error. To minimize the resulting expression, we proceed in two steps:
1. Minimize $\sum_{j=1}^n \tilde{w}_j \mathbb{I}\left(Y_j \neq f\left(X_j\right)\right)$ with respect to $f$
2. Minimize $e^{-\alpha}+\left(e^\alpha-e^{-\alpha}\right) e_{n, \tilde{w}}(f)$ with respect to $\alpha$.
The "weak learnability" assumption is needed to complete step 1: recall that for any nonnegative weights $\tilde{w}_1, \ldots, \tilde{w}_n$ with $\sum_{j=1}^n \tilde{w}_j=1, \exists f \in \mathcal{F}$ such that $e_{n, \tilde{w}}(f) \leq \frac{1}{2}$. We will assume access to a "black box" weak learning algorithm that takes $\tilde{w}_1, \ldots, \tilde{w}_n$ and $\left(X_1, Y_1\right), \ldots,\left(X_n, Y_n\right)$ as inputs and outputs some $f \in \mathcal{F}$ such that $e_{n, \tilde{w}}(f) \leq \frac{1}{2}$.
Exercise. Describe such a "weak learning" algorithm for the class consisting of
1. threshold classifiers $g_t^{+}$and $g_t^{-}$
2. linear separators (e.g., you could rely on Logistic regression).
Assuming that $e_{n, \tilde{w}}(f) \leq \frac{1}{2}$, the minimum of $e^{-\alpha}+\left(e^\alpha-e^{-\alpha}\right) e_{n, \tilde{w}}(f)$ occurs for
$$
\hat{\alpha}=\frac{1}{2} \log \frac{1-e_{n, \tilde{w}}(f)}{e_{n, \tilde{w}}(f)} \geq 0 .
$$
Adaboost is an algorithm that repeats the steps outlined above. We present it now.

### Adaboost algorithm: 

Initialize $w_j^{(0)}=\frac{1}{n}, j=1, \ldots, n$. For $t=0, \ldots, T$ do
- Call the weak learner (WL);
- Output $f_t$ such that $e_{n, w^{(0)}}\left(f_t\right) \leq \frac{1}{2}$
- Update the weights $w_j^{(t+1)}=\frac{w_j^{(t)} \exp \left(-Y_j \alpha_t f_t\left(X_j\right)\right)}{Z_t}, j=1 \ldots n$, where $Z_t=\sum_{j=1}^n w_j^{(t)} \exp \left(-Y_j \alpha_t f_t(\cdot)\right)$ is the "normalizing factor."
- Output: $\widehat{g}_T(\cdot)=\operatorname{sign}\left(\sum_{j=1}^T \alpha_t f_t(\cdot)\right)$.
Exercise. If $f_t$ classifies $X_j$ correctly, then $w_j^{(t+1)} \leq w_j^{(t)}$. If $f_t$ classifies $X_j$ incorrectly, then $w_j^{(t+1)} \geq w_j^{(t)}$.
Theorem 1. Assume that at each step, WL outputs $f_t$ such that
$$
e_{n, w^{(t)}}\left(f_t\right)=\sum_{j=1}^n w_j^{(t)} I\left\{Y_j \neq f_t\left(X_j\right)\right\} \leq \frac{1}{2}-\gamma
$$
for some $\gamma>0$. Then the training error corresponding to the classifier $\hat{g}_T$ satisfies
$$
\frac{1}{n} \sum_{j=1}^n I\left\{Y_j \neq \widehat{g}_T\left(X_j\right)\right\} \leq \exp \left(-2 T \gamma^2\right) .
$$
Proof (optional).
a) Note that $w_j^{(T+1)}=\frac{1}{n} \frac{e^{-Y_j \sum_{t=1}^T \alpha_t f_t\left(X_j\right)}}{\prod_{t=1}^T Z_t}$; this is easy to show by induction and the details will be filled in during the lecture.
b) We have that
$$
\begin{aligned}
\frac{1}{n} \sum_{j=1}^n I\left\{Y_j \neq \widehat{g}_T\left(X_j\right)\right\} &=\frac{1}{n} \sum_{j=1}^n I\left\{Y_j \sum_{t=1}^T \alpha_t f_t\left(X_j\right) \leq 0\right\} \\
& \leq \frac{1}{n} \sum_{j=1}^n e^{-Y_j \sum_{t=1} \alpha_t f_t\left(X_j\right)} \\
&=\frac{1}{n} \sum_{j=1}^n w_j^{(T+1)} n \prod_{t=1}^T Z_t \\
&=\prod_{t=1}^T Z_t
\end{aligned}
$$

c) For $Z_t$ at each step
$$
\begin{aligned}
Z_t &=\sum_{j=1}^n w_j(t) \exp \left(-Y_j \alpha_t f_t\left(X_j\right)\right) \\
&=\sum_{j=1}^n w_j^{(t)} I\left\{Y_j=f_t\left(X_j\right)\right\} e^{-\alpha_t}+\sum_{j=1}^n w_j^{(t)} I\left\{Y_j \neq f_t\left(X_j\right)\right\} e^{\alpha_t} \pm \sum_{j=1}^n w_j I\left\{Y_j \neq f_t\left(X_j\right)\right\} e^{-\alpha_t} \\
&=e^{-\alpha_t}+\left(e^{\alpha_t}-e^{-\alpha_t}\right) \sum_{j=1}^n w_j^{(t)} I\left\{Y_j \neq f_t\left(X_j\right)\right\},
\end{aligned}
$$
where the last multiplicand is $e_{n, w^{(t)}}\left(f_t\right)$. Recall that $\alpha_t=\frac{1}{2} \log \left(\frac{1-e_{n, w^{(t)}}\left(f_t\right)}{e_{n, w^{(t)}\left(f_t\right)}}\right)$, we thus have that
$$
Z_t=2 \sqrt{e_{n, w^{(t)}}\left(f_t\right)\left(1-e_{n, w^{(t)}}\left(f_t\right)\right)} .
$$
d) The function $f(x)=x(1-x) ; x \in\left[0, \frac{1}{2}-\gamma\right]$ is maximized for $x=\frac{1}{2}-\gamma$, thus
$$
\mathbb{Z}_t \leq 2 \sqrt{(1 / 2-\gamma)(1 / 2+\gamma)} \leq \sqrt{1-4 \gamma^2} \leq \sqrt{e^{-4 \gamma^2}}=e^{-2 \gamma^2},
$$
since $1-x \leq e^{-x}$ for $x \in[0,1]$. Therefore
$$
\frac{1}{n} \sum_{j=1}^n I\left\{Y_j \neq \widehat{g}_T\left(X_j\right)\right\}=\prod_{t=1}^T Z_t \leq \exp \left(-2 T \gamma^2\right) .
$$
In conclusion, the training error goes to 0 exponentially fast. However, the main object of interest is the "generalization error"
$$
P\left(Y \widehat{g}_T(X)\right) \leq 0 .
$$
Fortunately, in this case the generalization error is also going to be small: if the VC dimension of the base class $\mathcal{F}$ is $\mathrm{V}$, then the generalization error is at most $K \sqrt{\frac{V}{n}}$ larger than the training error with high probability, where $K$ is some fixed number. The proof of this fact is rather difficult however and won't be covered in this course.