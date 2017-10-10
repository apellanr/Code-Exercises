function palindrome(str) {
    var stringArr = str.toLowerCase().split('');
    var validCharArr = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var lettersArr = [];
    stringArr.forEach(char => {
        if (validCharArr.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true; 
    } else return false;
}

console.log(palindrome("Madam, I'm Adam"));