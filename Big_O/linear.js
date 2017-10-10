/*
Takes in array and logs all elements in array

Linear Runtime | Big O Notation: O(n)
  + As input size increases, runtime will increase
  + Runtime will increase proportionally to input size
*/

function logAll(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

logAll([1,2,3,4]);
logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6, 7,8,9,10])