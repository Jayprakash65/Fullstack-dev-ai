// Storage; CURD: Create, Read, UPdate, Delete

// Variables -> Storage -> 8GB, 16GB -> Named storage location 

// var, let, const -> keywords

/* 

var:

-> Global scope
-> you can reassign the value 
-> you can redeclare


let:

-> Block scope
-> you can reassign the value 
-> you cannot redeclare


const:

-> Block scope
-> you cannot reassign the value 
-> you cannot redeclare

*/

var a = 'jaypraksh'
let b = 'sanju'
const c = 'deep'

// // Redeclare 
// var a = 'jaypraksh2'
// let b = 'sanju2'
// const c = 'deep2'

// // Reassign
// a = 'jay2'
// b = 'sanju2'
// c = 'deep2'


//global and block

{
    var a = 'jaypraksh3'
    let b = 'sanju3'
    const c = 'deep3'
}

// console.log(a);
// console.log(b);
// console.log(c);


// Js is dynamacally types programming language (means we are not telling that whic type of datatypes we are using during variable declaration javarscript automatially know the type of variable)

let name = 'Mithun'

// js is case sensitive 


let firstName; // camelcase
let FirstName; // pasacal case
let first_name; // snake case

