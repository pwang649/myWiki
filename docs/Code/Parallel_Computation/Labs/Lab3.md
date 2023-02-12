---
id: Code - Parallel_Computation - Labs - Lab 3
title: Lab 3
sidebar_position: 3
---

### Test Platform

- **Model Name:** MacBook Pro
- **Chip:**	Apple M1 Pro
- **Total Number of Cores:** 8 (6 performance and 2 efficiency)
- **Memory:** 16 GB

## Problem 1

### DO/for Directive

```c
omp_set_num_threads(4);
#pragma omp parallel shared(data_point) reduction(+: num_of_points_in_circle) private(i)
{
    #pragma omp for schedule(dynamic, 10000000) nowait
    for (i = 0; i < num_of_points; i++)
    {
        if ((data_point[i].x - 0.5) * (data_point[i].x - 0.5) + (data_point[i].y - 0.5) * (data_point[i].y - 0.5) <= 0.25)
        {
            num_of_points_in_circle++;
        }
    }
    
}
```

### SECTIONS Directive

```c
omp_set_num_threads(2);
#pragma omp parallel shared(data_point) reduction(+: num_of_points_in_circle) private(i)
{
    #pragma omp sections nowait
    {
        #pragma omp section
        {
            for (i = 0; i < num_of_points/2; i++)
            {
                if ((data_point[i].x - 0.5) * (data_point[i].x - 0.5) + (data_point[i].y - 0.5) * (data_point[i].y - 0.5) <= 0.25)
                {
                    num_of_points_in_circle++;
                }
            }
        }
        #pragma omp section
        {
            for (i = num_of_points/2; i < num_of_points; i++)
            {
                if ((data_point[i].x - 0.5) * (data_point[i].x - 0.5) + (data_point[i].y - 0.5) * (data_point[i].y - 0.5) <= 0.25)
                {
                    num_of_points_in_circle++;
                }
            }
        }
    }
}
```

### Results

1. Serial version:
    ```bash
    Estimated pi is 3.141969, execution time = 0.261107 sec
    ```
2. Version a:
    ```bash
    Estimated pi is 3.141969, execution time = 0.067492 sec
    ```
3. Version b:
    ```bash
    Estimated pi is 3.141969, execution time = 0.139027 sec
    ```

## Problem 2

1. Serial version:
    ```bash
    Execution time = 0.202061 sec
    ```
2. m[i] = size − i version:
    ```bash
    Execution time = 0.162220 sec
    ```
3. m[i] = rand() version:
    ```bash
    Execution time = 0.217134 sec
    ```