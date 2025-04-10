/*

1. Function Chaining
2. Function Expressions
3. Anonymus functions: function without any names
4. IIFE: its a way of calling anonymus function
5. Pure and Impure function
6. Callback Function
7. Lamda Expressions. : Arrow function 
8. Higher Order Function
9. Function Currying.

*/


// 1. Function Chaining: SRP: Single responsibilty principal => one function should perform only one functionality.


const calculate = {
    value: 0,

    add: function(x){
        this.value += x

        return this
    },

    sub: function(x){
        this.value -= x

        return this
    },

    mul: function(x){
        this.value *= x

        return this
    },

    result: function(){

        return this.value
    }
}

const result = calculate.add(5).sub(2).result()
console.log(result); // 3




//Function Expressions

let greet = function(){
    console.log("Namaste World");
    
}

greet(); // Output: Hello, World!

/* 
In the above example, function() has no name and is stored directly
in the variable greet.
*/



// //IIFE
(function (){
    // function logic here
})()


/*
Pure and Impure function

Pure: if your output isa same the ouput will be same.

Impure: for same iput their might be differen output. This is dppndent on the funvvtion . side effect is observed.
*/


function addTwoNumbers(a, b){

    return a + b
}

console.log(addTwoNumbers(2, 3));
console.log(addTwoNumbers(2, 3));
console.log(addTwoNumbers(2, 3));



let count = 0;

function counter(){
    count++
    return count
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



// Lamda Expressions: Simple function expression .Arrow functions.

const addTwoNumbers = (a,b) => (a + b);
console.log(addTwoNumbers(4,5));




// High Order Function [HOF]: Pass a function as an argument and you can return a function from another function.

function addprint(a,b){
    const result= a+b ;
    return function(){
        console.log(result);
        
    }
}

console.log(addprint(2,3)());


// Function Currying: splitting multiple params into multiple funtions

function addThreenumbers(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}


console.log(addThreenumbers(1)(2)(3));

