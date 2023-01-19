---
id: Code - Parallel_Computation - Lab 1
title: Lab 1
sidebar_position: 1
---

### Test Platform

- **Model Name:** MacBook Pro
- **Chip:**	Apple M1 Pro
- **Total Number of Cores:** 8 (6 performance and 2 efficiency)
- **Memory:** 16 GB

### Problem 1

#### Naive-based Solution

```c
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        for (k = 0; k < n; k++) {
            C[i][j] += A[i][k] * B[k][j];
        }
    }
}
```

#### Naive-based Results

- Run 1:
    ```
    Number of FLOPs = 137438953472, Execution time = 835.737475 sec,
    164.452304 MFLOPs per sec
    C[100][100]=879616000.000000
    ```
- Run 2:
    ```
    Number of FLOPs = 137438953472, Execution time = 835.089545 sec,
    164.579900 MFLOPs per sec
    C[100][100]=879616000.000000
    ```

#### Block-based Solution

```c
// Block-based
int b = atoi(argv[1]);
int m = n / b;
for (i = 0; i < m; i++) {
    for (j = 0; j < m; j++) {
        for (k = 0; k < m; k++) {
            for (int x = 0; x < b; x++) {
                for (int y = 0; y < b; y++)
                    for (int z = 0; z < b; z++)
                        C[i * b + x][j * b + y] += A[i * b + x][k * b + z] * B[k * b + z][j * b + y];
            }
        }
    }
}
```

#### Block-based Results

1. Using b = 4:
    - Run 1:
        ```
        Number of FLOPs = 137438953472, Execution time = 350.400956 sec,
        392.233386 MFLOPs per sec
        C[100][100]=879616000.000000
        ```
    - Run 2:
        ```
        Number of FLOPs = 137438953472, Execution time = 347.018526 sec,
        396.056531 MFLOPs per sec
        C[100][100]=879616000.000000
        ```

2. Using b = 8:
    - Run 1:
        ```
        Number of FLOPs = 137438953472, Execution time = 280.395665 sec,
        490.160764 MFLOPs per sec
        C[100][100]=879616000.000000
        ```
    - Run 2:
        ```
        Number of FLOPs = 137438953472, Execution time = 278.799464 sec,
        492.967065 MFLOPs per sec
        C[100][100]=879616000.000000
        ```

3. Using b = 16:
    - Run 1:
        ```
        Number of FLOPs = 137438953472, Execution time = 285.159648 sec,
        481.971957 MFLOPs per sec
        C[100][100]=879616000.000000
        ```
    - Run 2:
        ```
        Number of FLOPs = 137438953472, Execution time = 283.044927 sec,
        485.572926 MFLOPs per sec
        C[100][100]=879616000.000000
        ```

### Problem 2

#### K-means Implementation
```c
//  Your code goes here
double means[] = {0, 85, 170, 255};
unsigned char *output = (unsigned char*) malloc (sizeof(unsigned int)*h*w);
unsigned int *class = (unsigned int*) malloc (sizeof(unsigned int)*h*w);
int count = 0;

// Step 2
step_two:
for (i = 0; i < h * w; i++) {
    int curr = a[i];
    double diff = 255;
    int j;
    for (j = 0; j < 4; j++) {
        if (fabs(means[j] - curr) < diff) {
            diff = fabs(means[j] - curr);
            class[i] = j;
        }
    }
    
}
// Step 3
int n[] = {0, 0, 0, 0};
for (i = 0; i < h * w; i++) {
    means[class[i]] += (a[i] - means[class[i]]) / ++n[class[i]];
}

count++;
if (count < 30)
    goto step_two;

for (i = 0; i < h * w; i++) {
    output[i] = ((int) means[class[i]]) + '0';
}
```

#### Results

1. Run time:
    ```
    Execution time = 0.276082 sec.
    ```

2. Original Image:

    ![](/img/code_img/Parallel/k-means-orig.png)

3. K-meanslized Image:

    ![](/img/code_img/Parallel/k-means.png)