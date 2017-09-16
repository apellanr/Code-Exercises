/* 
Reverse the provided string.
You may need to turn into an array before you can reverse it.
Result must be a string.

*/

function reverseString(str) {
    var reverseStr = str.split("").reverse().join(); 
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("Howdy")); // "Howdy"
console.log(reverseString("Greetings from Earth")) // "htraE morf); sgniteerG"
console.log(reverseString("Halt. Who goes there")); // "ereht seog); ohW .tlaH"
