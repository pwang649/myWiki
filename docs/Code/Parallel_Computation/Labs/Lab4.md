---
id: Code - Parallel_Computation - Labs - Lab 4
title: Lab 4
sidebar_position: 4
---
---

## Problem 1

### Code

```c
main(int argc, char** argv)
{
    int size, rank;
    int number;

    MPI_Init(&argc, &argv);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    if (rank != 0)
    {
        MPI_Recv(&number, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        number += 1;
        printf("Process %d: Msg = %d\n", rank, number);
    }
    else
    {
        number = 451;
        printf("Process %d: Initially Msg = %d\n", rank, number);
    }

    MPI_Send(&number, 1, MPI_INT, (rank + 1) % size, 0, MPI_COMM_WORLD);

    if (rank == 0)
    {
        MPI_Recv(&number, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        printf("Process %d: Received Msg = %d. Done!\n", rank, number);
    }

    MPI_Finalize();

    return 0;
}
```

### Output

```bash
Process 1: Msg = 452
Process 3: Msg = 454
Process 0: Initially Msg = 451
Process 0: Received Msg = 454. Done!
Process 2: Msg = 453
```

## Problem 2

### Method I

#### Code

```c
main(int argc, char **argv)
{
    int size, rank;
    int number;

    MPI_Init(&argc, &argv);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    FILE *nd;
    nd = fopen("number.txt", "r");

    int arr[64];
    int i, localSum = 0;

    for (i = 0; i < 64; i++)
    {
        fscanf(nd, "%d", &arr[i]);
    }

    for (i = rank * 16; i < rank * 16 + 16; i++)
    {
        localSum += arr[i];
    }
    if (rank != 0) {
        MPI_Send(&localSum, 1, MPI_INT, 0, 0, MPI_COMM_WORLD);
    } else {
        int globalSum = localSum;
        MPI_Recv(&localSum, 1, MPI_INT, 1, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        globalSum += localSum;
        MPI_Recv(&localSum, 1, MPI_INT, 2, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        globalSum += localSum;
        MPI_Recv(&localSum, 1, MPI_INT, 3, 0, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
        globalSum += localSum;
        printf("p2_1 sum: %d\n", globalSum);
    }

    MPI_Finalize();

    return 0;
}
```

#### Output

```bash
p2_1 sum: 47126
```

### Method II

#### Code

```c
main(int argc, char **argv)
{
    int size, rank;
    int number;
    int arr[64];
    int i, localSum = 0;

    MPI_Init(&argc, &argv);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    if (rank == 0) {
        FILE *nd;
        nd = fopen("number.txt", "r");
        for (i = 0; i < 64; i++)
        {
            fscanf(nd, "%d", &arr[i]);
        }
    }

    MPI_Bcast(&arr, 64, MPI_INT, 0, MPI_COMM_WORLD);
    
    for (i = rank * 16; i < rank * 16 + 16; i++)
    {
        localSum += arr[i];
    }

    int globalSum;
    MPI_Reduce(&localSum, &globalSum, 1, MPI_INT, MPI_SUM, 0, MPI_COMM_WORLD);

    if (rank == 0)
    {
        printf("p2_2 sum: %d\n", globalSum);
    }

    MPI_Finalize();

    return 0;
}
```

#### Output

```bash
p2_2 sum: 47126
```

### Method III

#### Code

```c
main(int argc, char **argv)
{
    int size, rank;
    int number;
    int arr[64];
    int i, localSum = 0;

    MPI_Init(&argc, &argv);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);

    if (rank == 0)
    {
        FILE *nd;
        nd = fopen("number.txt", "r");
        for (i = 0; i < 64; i++)
        {
            fscanf(nd, "%d", &arr[i]);
        }
    }

    int newArr[16];
    MPI_Scatter(arr, 16, MPI_INT, &newArr, 16, MPI_INT, 0, MPI_COMM_WORLD);

    for (i = 0; i < 16; i++)
    {
        localSum += newArr[i];
    }

    int globalSum;
    int sumArr[4];
    MPI_Gather(&localSum, 1, MPI_INT, &sumArr, 1, MPI_INT, 0, MPI_COMM_WORLD);
    if (rank == 0)
    {
        for (i = 0; i < 4; i++)
        {
            globalSum += sumArr[i];
        }
        printf("p2_3 sum: %d\n", globalSum);
    }

    MPI_Finalize();

    return 0;
}
```

#### Output

```bash
p2_3 sum: 47126
```