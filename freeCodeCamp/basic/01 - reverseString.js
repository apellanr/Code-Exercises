/* 
Reverse the provided string.
You may need to turn into an array before you can reverse it.
Result must be a string.
*/

// Chaining
function reverseString(str) {
    return str.split("").reverse().join(""); 
}

// Native Array Methods
function reverseString(str) {
    
    // First, we need to use .split method to change the string into 
    // an array so it can be further manipulated.
    // Passing "" (an empty string) into the method splits the string at every character.
    var str = str.split("");

    // .reverse method reverses the order of the elements in our newly formed array.
    str = str.reverse();

    // .join method to reassemble our array back into a string. 
    // passing in empty string ensures nothing is placed between each array element
    str = str.join("");

    // return modified str
    return str;
}

// No Array Methods
function reverseStr(str) {
    var newString = "";
    
    // loop starts at the end of the string and stops at the first letter
    // will store each consecutive letter in reverseStr variable
    for(var i = str.length - 1; i >= 0; i--) {
        console.log(i);
        newString += str[i];
        return newString;
    }
}


// Test Cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("Howdy")); // "ydowH"
console.log(reverseString("Greetings from Earth")); // "htraE morf sgniteerG"
console.log(reverseString("Halt. Who goes there")); // "ereht seog ohW .tlaH"
