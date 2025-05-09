/* 
Properties of String
    -Indexing
    -Immutability

*/

// String declaration

let str1 = 'Hello';
let str2 = 'World'
let str3 = `Template literals`;  // Backtics


// Template Literals / String Interpolation

let name = 'Jay'
let msg = `Hello, ${name}!`;
console.log(msg);    // Output: Hello, Jay!




// 1. Indexing

const names = 'Jayprakash Yadab'

console.log(names[5]);      // a



// 2. Immutability

let str = "Hello";

// Trying to modify a character
str[0] = "J";  // Attempt to change the first character

console.log(str);  // Output: "Hello"

// Reassigning the string (creates a new string)
str = "Jello";

console.log(str);  // Output: "Jello"



// Escape character

let str = "He said, \"Hello, World!\"";
console.log(str);                           // He said, "Hello, World!"

let str = "He said, \"Hello, Duniya!\"";
console.log(str);


/* 
String Methods
*/

let names1 = 'Jayprakash'

console.log(names1.length);
console.log(names1.slice(2,5));
console.log(names1.slice(-10,-5)); // negative indexing is only for slice 
console.log(names1.substring(2,5));
console.log(names1.replace('y','i'));  // jaiprakash
console.log(names1.replaceAll('a','z'));  // Jzyprzkzsh


console.log(names1.toLowerCase());
console.log(names1.toUpperCase());

console.log(names1.split('r'));  // return in the form of arryay

let names2 = '    Jayprakash    '
console.log(names1.trim());



// 🤓 Real-Life Use Case:

let username = prompt("Enter username: ");
if(username.trim().toLocaleLowerCase() === 'admin'){
    alert("Welcome, Admin!")
}else{
    alert('Access denied.')
}




