// Recursion - when a function calls itself

// Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24

function factorial(num) {
    // base case - return same param for correct output
    if (num <= 2) {
        return num;
    } else {
        // if num does not equal 1 return recursive func
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));
