/* 
Reverse the provided string.
You may need to turn into an array before you can reverse it.
Result must be a string.

*/

function reverseString(str) {
    // First, we need to use .split to change the string into an array so it can be further manipulated.
    // Passing "" (an empty string) into the method splits the string at every character.
    // .reverse method reverses the order of the elements in our newly formed array.
    // .join method to reassemble our array back into a string. 
    var reverseStr = str.split("").reverse().join(); 
    return reverseStr;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("Howdy")); // "ydowH"
console.log(reverseString("Greetings from Earth")); // "htraE morf sgniteerG"
console.log(reverseString("Halt. Who goes there")); // "ereht seog ohW .tlaH"
