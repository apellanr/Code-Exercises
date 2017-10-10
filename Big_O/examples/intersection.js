// O(a*b)
// a = length of arrA; b = length of arrB

function intersectionSize(arrA, arrB) {
    var count = 0;
    for(i = 0; i < arrA.length; i++) {
        for (j = i; j < arrB.length; j++) {
            if (arrA[i] == arrB[j]) {
                count += 1;
            }
        }
    }
    return count;
}

var arr1 = [2,4,5,50, 30, 20, 40];
var arr2 = [2,7,5,3,10,60, 40];

intersectionSize(arr1, arr2);