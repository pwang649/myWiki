---
id: Survival Analysis - Four Models
title: Four Models
sidebar_position: 2
---
---

## Possible meanings of X - random variable

- Time to event
- Survival time after cancer diagnosis
- Time in remission
- Recovery time after surgery
- Dollar amount of an auto insurance claim
- Dollar payment on a medical malpractice policy in one year
- Number of claims submitted in six months

## Cumulative Distribution Function (CDF)

> $F(x) = \mathrm{Pr}(X<=x) = F_X(x)$

1. $0<=F(x)<=1$

2. non-decreasing

3. right-continuous $\displaystyle \lim_{x \to x_0^+}F(x)=F(x_0)$

4. $\displaystyle \lim_{x \to- \infty} F(x)=0$, $\displaystyle \lim_{x \to \infty} F(x)=1$

## Survival Function

> $S(x)=1-F(x) = \mathrm{Pr}(X>x)$

1. $0<=S(x)<=1$

2. non-increasing

3. right-continuous $\displaystyle \lim_{x \to x_0^+}F(x)=F(x_0)$

4. $\displaystyle \lim_{x \to- \infty} S(x)=1$, $\displaystyle \lim_{x \to \infty} S(x)=0$

- **Exponential Survival Function**

    $$
    \begin{equation}S(x) = \left\{ \begin{array}{lr} 1, & x < 0 \\ e^{-x/\theta}, & x\ge0 \end{array} \right. \end{equation}
    $$

![](https://i.postimg.cc/k5KgbyZn/2023218211452800.png)

## Probability Density Function

$f(x) = F'(x) = -S'(x)$ if derivative exists

## Hazard Function

$h(x) = \frac{f(x)}{S(x)}=\displaystyle \lim_{\delta \to 0} \frac{\mathrm{Pr}(x<X<x+\delta)/\delta}{\mathrm{Pr}(X\ge x)}=\displaystyle \lim_{\delta \to 0}\frac{1}{\delta}\mathrm{Pr}(x<X<x+\delta|X\ge x)$ 

$h(x) = \frac{f(x)}{S(x)} =\frac{-S'(x)}{S(x)}=-\frac{d}{dx}\mathrm{logS(x)}$

$S(x) = e^{-\int_{0}^{x}h(t)dt}$

- **Cumulative Hazard**

$\Lambda(x) = \int_{0}^{x} h(t)dt$
