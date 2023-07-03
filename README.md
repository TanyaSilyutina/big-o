# Big O Intro

![Big O graph](./assets/Big%20O.png)

## Big O Shorthands 
* Constant:
    * Arithmetic operations
    * Variable assignment
    * Accessing elements in an array
* In a loop, the complexity is the length of the loop times the complexity of what happens inside the loop

### Space complexity

Auxiliary space complexity refers to space required by the algorithm, not including space taken up by the inputs

* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
___

## Big O of Objects
* Insertion -   O(1)
* Removal -   O(1)
* Searching -   O(N)
* Access -   O(1)

*When you don't need any ordering, objects are an excellent choice!*

### Big O of Object Methods
* Object.keys -   O(N)
* Object.values -   O(N)
* Object.entries -   O(N)
* hasOwnProperty -   O(1)

___
  
## Big O of Arrays
* Insertion - push and pop is always faster than shift and unshift (reindexing elements if adding to/removing from the beginning of the array)
* Removal -   depends on beginning or end of array
* Searching -   O(N)
* Access -   O(1)

### Big O of Array Operations
* push -   O(1)
* pop -   O(1)
* shift -   O(N)
* unshift -   O(N)
* concat -   O(N)
* slice -   O(N)
* splice -   O(N)
* sort -   O(N * log N)
* forEach/map/filter/reduce/etc. -   O(N)
___
The notes are from [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)