function mergeSort(arr) {
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
    var result = [];
    while(arr1.length && arr2.length) {
        var minElement;
        if (arr1[0] < arr2[0]) minElement = arr1.shift();
        else minElement = arr2.shift();
        result.push(minElement);
    }

    if (arr1.length) result = result.concat(arr1);
    else result = result.concat(arr2);
    return result;
}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));

