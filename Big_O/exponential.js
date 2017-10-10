/*
Function addAndLog that takes in an array
  + Gives every possible combination of pairs
  in array
  + Iterates through whole array but hits every
  element again with second iteration

Exponential Runtime | Big O Notation: O(N^2)
  - Not efficient or performant, no scalability
  - Can slow down an application
*/

function addAndLog(array) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}

addAndLog(['A', 'B', 'C']); // 9 pairs
addAndLog(['A', 'B', 'C', 'D']); // 16 paris
addAndLog(['A', 'B', 'C', 'D', 'E']); // 25 pairs