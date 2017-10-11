// O(n^2) time complexity

function twoSum(numArray, sum) {
    var pairs = [];
    
    for(var i = 0; i < numArray.length; i++) {
      for(j = i; j < numArray.length; j++) {
        if(numArray[i] + numArray[j] === sum) {
          pairs.push([numArray[i], numArray[j]]);
        }
      }
    }
    return pairs;
  }
  
  var array = [1,6,4,5,3,3];
  twoSum(array, 7);