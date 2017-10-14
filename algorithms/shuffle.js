// Shuffle
/*
- i will decrement and will start from the back of the array
- j will generate the random number
*/

function shuffle(arr) {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}





// var arr1 = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1];
var arr2 = [6000, 34, 203, 3, 746];
console.log(shuffle(arr2));