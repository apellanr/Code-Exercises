/* FIZZBUZZ ====================
Function takes in number as param
  - log out to console every number from
  1 to num
Rules:
  - if num % 3, log out Fizz
  - if num % 5, log out Buzz
  - num % 3 and 5, log out FizzBuzz
============================= */

function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
      if (i % 15 === 0) console.log('FizzBuzz');
      else if (i % 3 === 0) console.log("Fizz"); 
      else if (i % 5 === 0) console.log("Buzz");
      else console.log(i);
    }
  }
  
  fizzBuzz(20);