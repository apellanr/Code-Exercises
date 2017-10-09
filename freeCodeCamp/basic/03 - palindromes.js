/*
function palindrome should return true if str is a palindrome
returns false if not

Requirements:
- Remove all non-alphanumeric characters (punc, spaces, and symbols)
- Lower case all characters in order to check for palindromes
*/




// Regex
function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() === 
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome('eye'); // true
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("nope"); // false
palindrome("almostomla"); // false
palindrome("My age is 0, 0 si ega ym."); // true
palindrome("1 eye for of 1 eye."); // false
palindrome("0_0 (: /-\ :) 0-0"); // true
palindrome("five|\_/|four"); // false