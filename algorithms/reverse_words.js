function reverseWords(str) {
    var wordsArr = str.split(' ');
    var reversedWordArr = [];

    wordsArr.forEach(word => {
        var reversedStr = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reversedStr += word[i];
        }
        reversedWordArr.push(reversedStr);
    });
    
    return reversedWordArr.join(' ');
}

console.log(reverseWords('this is a string of words'));
console.log(reverseWords('Coding JavaScript'));
