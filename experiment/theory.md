### The Array Data Structure

- In this framework, we now see the array as a data structure. The typical operations on this data structure are as follows:  

    ♦ to create an array data structure, called create(name, size),  
    ♦ to access the element at a given index i, called ElementAt(index, name),    
    ♦ to find the size of the array, called size(name), and  
    ♦ to print the contents of the array, called print(name).  

- While we are used to writing A[i] to access element i of an array A, it can be seen as the way to access the ith element in a non-object oriented programming language. The other operations are also not explicity specified when one uses languages such as C. But, when one considers purely object oriented languages, such operations are required to be supported. Similarly, in C, array creation is done by malloc() or a compile time declaration as int A[10];. However, when one looks at a data structure in terms of its operations, a create() operation is required.  

### 1. Sorting  

- Sorting is a fundamental operation and we shall see two sorting algorithms in this section.  

**1.1 Merge Sort**

- The idea of merge sort is to shift the onus to the combine step. To this end, we come up with the following design   

   ♦ Divide the n element input into two n/2 element sequences.  
   ♦ Sort the n/2 element sequences recursively.  
   ♦ Merge the two n/2 element sequences into a sorted n element sequence.  

- The only non straightforward operation in the above is the last step. So let us first concentrate on this step. The job is to merge two sorted sequences. For this, we can think of comparing elements of the two sorted sequences and iteratively constructively the required sorted array. For simplicity let us assume that elements in arrays L and R each of size l + 1 and r + 1 respectively are to be merged into an array A of size l + r. The elements indexed l + 1 and r + 1 are set to 1 in L and R respectively. The following performs the merge:

    1. 1.Procedure Merge(L,R,A) 1. i = 1, j = 1

    2. 2.for k = 1 to l + r do 

    3. 3.if L[i] < R[j] then
    
    4. 4.A[k] = L[i]; i = i + 1

    5. 5.else 

    6. 6.A[k] = R[j]; j = j + 1; 

    7. 7.End 

**1.2 Quick Sort**

Let us look at one final example of sorting algorithms along with a short proof of correctness. While merge sort can be said to be optimal in terms of its time requiement, it does use some extra space. So one question to prusue is to design a sorting algorithm that can sort in-place, i.e., without using any extra space. C. A. R. Hoare gave an algorithm based on the divide and conquer strategy called the quick sort that can sort in place. The 3 steps of the algorithm in the framework of divide and conquer are:   

   ♦ Divide: Divide the input into 3 parts L,E, and R where L < E < R based on a pivot.  
   ♦ Conquer: Solve the sorting problem recursively on L and R. Assuming that all the items are distinct,we have that |E| = 1 hence already sorted.  
   ♦ Combine: Produce the sorted L, E, and R in that order.  
  
One can notice that the third step is quite trivial here. In fact, this is an example of the so called partition based algorithms. Let us look at the only non-trivial step, that of partitioning the input. The key to the partition step is to select a pivot and rearrange the elements of the array. For this the following approach is presented.  
        
   1. 1.Procedure Parition(A, l, h)

   2. 2.pivot = A[h];

   3. 3.i = l - 1; 4. for j = p to h - 1 do

   4. 4.if A[j] <= pivot

   5. 5.i = i + 1;

   6. 6.swap A[i] with A[j]

   7. 7.swap A[i + 1] with A[h]

   8. 8.End Procedure

