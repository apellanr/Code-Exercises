// Fibonacci Sequence | Memoization
// index: index of number in fibonacci sequence
// cache: an aray used as memory

function fibMemo(index, cache) {
    var cache = cache || [];

    if(cache[index]) return cache[index];
    else {
        if(index < 3) return 1;
        else {
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
        }
    } 
    return cache[index];
}

console.log(fibMemo(12)); // 144
console.log(fibMemo(8)); // 21
console.log(fibMemo(15)); // 610