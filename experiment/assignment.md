
Easy Questions

Answer the following questions with respect to sorting algorithms on arrays.

    Are there sorting algorithms that take the same asymptotic runtime irrespective of the input?

    Most of the algorithms we studied so far made no assumptions on the maximum input values in the input. When some bounds on the input values are known, it is possible to design sorting algorithms that benefit from this knowledge. A simple example is the following: Let A be a set of n numbers whose values are between 1 to O(n). Now, to sort A, declare an array B of size max A[i]. Mark B[i] as 1 iff A[j] = i. Now, print i if B[i] =1 in increasing order of i. Can you modify this scheme when the maximum number in A in more than O(n), say in O(n^2), while still using only |A| space?
    An inversion is a pair of indices $i$ and $j$ so that $A[i]$ more than A[j]$ but $i$ is less than j$, i.e., elements are not in the natural(sorted) order. Design an algorithm based on sorting algorithms to count the number of inversions in a given array A of n numbers.

Difficult Questions

    Notice that for merge sort to work, one does not need to know the entire data at once. Consider settings where the entire data may not it into the memory of a computer system. In that case, one can bring in as much data as it is possible to work with, sort in piece and then write back the sorted piece, and bring fresh unsorted data in to the memory.
    Once all data is sorted in pieces, these pieces can be then merged in a similar fashion.
    This process is called as "external sorting'' as we imagine that the data is available externally to the computer. Merge sort is one such sorting algorithm that extends naturally to an external setting.
    Problem: Develop the idea of external sorting using merge sort. Describe the nature of data movements that are to be used in your scheme.
    Problem: Why would insertion sort not work in an external setting?
    Since it is clear that merge sort can work with only partial data, it may be possible to think of a parallel version of merge sort. One can view a parallel algorithm as follows. An algorithm is a sequence of tasks $T1_, T_2, \cdots$. These tasks may have inter-dependecies, so that task $T_i$ should be completed before task $T_j$ for some $i,j$. However, it is often the case that there are several algorithms where many tasks are independent of each other. (In some cases, the algorithm or the computation has to be expressed in that indepedent-task fashion). In such a setting, one can imagine that tasks that are indepedent of each other can be done simultaneously, or in parallel.
    Consider such parallel execution and the problem of sorting a given set of numbers. When using merge sort, we divide the input into two parts. These two tasks -- of sorting each part -- are independent of each other and hence can be done in parallel. So let us investigate this possibility further. We have to also merge sorted sequences. The way we have described merge sort, when merging two sequences of length $\ell$ each, we have $2\ell$ tasks. These $2\ell$ tasks find the position of each element in the two merged seuqences in the combined sequence of $2\ell$ elements. These $2\ell$ tasks are also completely dependent in the way they are written. However, a rewrite is possible.
    Let us call the two sorted sequences as $A$ and $B$. Think of searching for each element of $A$ in $B$ and vice-versa. Since the sequences $A$ and $B$ are sorted, one can use binary search. Still there are $2\ell$ tasks but these $2\ell$ tasks are independent of each other. Once these tasks finish, one can see that element $A[i]$ from $A$ can be placed at index $i'$ where $i'= i + Rank(A[i], B)$. In the former expression, $Rank(A[i], B)$ refers to the rank of element $A[i]$ in the array $B$ obtained using binary search.
    There are several enhancements to the above idea of a simple parallel merge sort. An interested reader can find more details in the book ''An Introduction to Parallel Algorithms'', by J. JaJa.


