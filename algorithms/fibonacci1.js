// Fibonacci sequence | Recursion
// O(2^n) run-time
// not efficient

function fibonacci(position) {
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2);
}
   
console.log(fibonacci(6)); // returns 8
console.log(fibonacci(4)); // returns 3
console.log(fibonacci(9)); // returns 34