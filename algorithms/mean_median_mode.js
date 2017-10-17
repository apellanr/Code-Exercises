
function meanMedianMode(array) {
    // call other 3 functions
    // return obj which has mean, median, mode on it
    return {
        mean: getMean(array),
        median: getMedian(array),
        mode: getMode(array)
    };
}

function getMean(array) {
    // add all numbers and divide by n amount
    var sum = 0;
    array.forEach(num => {
        sum += num;
    });
    
    var mean = sum / array.length;
    return mean;
}

function getMedian(array) {
    // sort list in numerical order
    // get middle element
    array.sort(function(a,b){ return a - b});
    var median;

    if (array.length % 2 !== 0) {
        median = array[Math.floor(array.length / 2)]; 
    } else {
        var mid1 = array[(array.length / 2) - 1];
        var mid2 = array[(array.length / 2)]
    }
}
    
function getMode(array) {

}