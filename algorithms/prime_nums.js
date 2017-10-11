// return all prime numbers up to num in an array

function primeNums(n) {
    var primesArr = [];
    for(var i = 0; i <= n; i++) {
        primesArr[i] = true;
    }
    
    prime[0] = false;
    prime[1] = false;

    // mark multiples of each index as false
    for (var i = 2; i <= Math.sqrt(n); i++) {
        for(var j = 2; j * i <= n; j++) {
            primes[i * j] = false;
        }
    }

    var result = [];
    for (var i = 0; i < primes.length; i++) {
        if(primes[i]) result.push(i);
    }
    return result;
}

console.log(primeNums(20)); // [2,3,5,7,11,13,17,19]