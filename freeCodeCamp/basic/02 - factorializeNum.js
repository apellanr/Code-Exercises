/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

// For Loop
function factorialize(val) {
    // error handling for input of 0, which should result as 1
    if(val === 0) {
        return 1;
    } else {
        for(var i = val - 1; i > 0; i--) {
            val *= i; // take inserted value and multiply by decrementing num
        }
    }
    return val;
}

// Recursion
function factorialize(num) {
    if(num === 0) { return 1; }

    // return given num mult. by function itself but w/ param value of num - 1
    // every call checks to see if number is 0 or 1
    // if 0 or 1, recursion stops and returns 1
    return num * factorialize(num - 1);
}

factorialize(0); // should return 1
factorialize(5); // should return 120 
factorialize(10); // should return 3628800
factorialize(20); // should return 2432902008176640000



