/*
Function binarySearch that takes two inputs
  + param 1: lists (must be sorted)
  + param 2: single value (search for within array)

Logarithmic Runtime | Big O Notation: O(log n)
  + Very performant
  + With every operation performed, the input is
  cut in half; look for a fraction of the elements
*/

function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];

        if(element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

/* Real life example: dictionarySearch
- want to find single word in dictionary
- binarySearch method utilized here
  + 'house' is before m section so the 
  second half is cut from the input size
  + again, the first half is cut because 
  'house' is not found from a - f; vice versa
*/