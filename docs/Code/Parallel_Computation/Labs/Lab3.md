---
id: Code - Parallel_Computation - Labs - Lab 3
title: Lab 3
sidebar_position: 3
---
---

### Test Platform

- **Model Name:** MacBook Pro
- **Chip:** Apple M1 Pro
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
    Estimated pi is 3.141969, execution time = 0.209164 sec
    ```

2. Version a:

    ```bash
    Estimated pi is 3.141969, execution time = 0.156117 sec
    ```

3. Version b:

    ```bash
    Estimated pi is 3.141969, execution time = 0.222612 sec
    ```

---

## Problem 2

### Results

1. Serial version:

    ```bash
    Execution time = 0.202061 sec
    ```

2. m[i] = size − i version (Average over 10 runs):

    ```bash
    Execution time = 0.145642 sec
    ```

3. m[i] = rand() version (Average over 10 runs):

    ```bash
    Execution time = 0.238686 sec
    ```

### Analysis

The `rand()` version performed way worse than the descending array version. This is because the average swap operations performed in the latter are fewer. Here's why:

1. Descending array:

    **Worst case:** to choose the pivot index is the middle element, in which we need to perform n/2 swap operations since half of the elements are smaller than that, thus, need to be swapped with the other half of the bigger elements.

    **Best case:** the pivot is at chosen the end of the array. Two cases to consider: if everything is greater than the pivot we don't need to do any swaps until the last swap (swapping the pivot to the front); if everything is smaller than the pivot, `i` and `j` will have the same index thus the if statement will skip the swap operation, again, we only need to swap once.

    **Overall:** the number of swaps we need to perform is between 1 and n/2 (n is the size of the current partition).

2. Randomly sorted array:

    **Worst case:** when we select the second biggest element as our pivot and the order of the array is like this:
    ```bash
    Biggest element, small 1, small 2, small 3, ...
    ```
    In this case, indices `i` and `j` will not be the same so the biggest element will be swapped with all the other smaller elements, producing n as the worst-case number of swaps.

    **Best case:** the best case scenario will be the same as before (ordered array and end-positioned pivot index), which is 1 swap operation.

    **Overall:** the number of swaps we need to perform is between 1 and n (n is the size of the current partition).

We clearly see that range of the swap operations is greater and also capped higher in a randomly sorted array, which matches my results.

---

## Problem 3

### Comparison

| # of threads | PHW2 | PHW3 |
| :---: | :---: | :---: |
| **1** | 0.502734 sec | 0.539594 sec |
| **2** | 0.404511 sec | 0.366488 sec |
| **4** | 0.341998 sec | 0.254956 sec |
| **8** | 0.322975 sec | 0.249094 sec |

### Analysis

For the newer method, the execution time is down for threads of more than one. This is because we don't need to create new threads for each iteration and join all threads at the end of each iteration. Now we just need to create the threads once and inside each thread to perform the iterations, after all, join all threads once. This saves a lot of unnecessary overheads during the execution of threads creation and exit. When we have only one thread, the two methods are basically equivalent, since we are not making use of the condition variable. Thus, their execution times are close.