// Write a function that calculates the sum of all numbers from 1 up to and including N.

// basic add-up method
// (f(n) = n); f(n) is linear
// as N grows, the number of operations grows O(n)
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n ; i++) {
        total += i;
    }
    return total;
}

// faster add-up method
// (f(n) = 1); f(n) is constant
// O(1) - always 3 operations
function addUpToN(n) {
    return n * (n + 1) / 2;
}

// O(n) opearion inside of an O(n) operation
// O(n squared)
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// measure the performance difference
let t1 = performance.now();
printAllPairs(5);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);



