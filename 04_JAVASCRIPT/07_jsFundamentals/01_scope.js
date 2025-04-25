/*
1. Scope 
2. Lexical Scope 
3. Closure
4. Scope Chaining 
5. Encapsulation: Private Variables

*/

// 1. Scope 

/*

var
-> Global Scope
-> Redeclareable
-> Reassignable

let
-> Block Scope
-> not redeclarable
-> Reassignable

const 
-> Block Scope
-> Not redeclarable
-> Not Reassignable

Scope: It is the area in which you can acess your variable/function/object.

1. Globa scope 
2. Local scope
    -> Funcion Scope
    -> Block Scope

*/


let fruit = "mango";

function showFruit(){
    console.log(fruit);     // mango
    
}
showFruit()
console.log(fruit);        // mango




function testScope(){
    let bike = 'BMW';
    console.log(bike);      // BMW  
    
}

testScope()
console.log(bike);         // ❌ Error: bike is not defined



{
    let car = 'BMW';
    console.log(car);       // BMW
    
}

console.log(car);           // ❌ Error: car is not defined 









// Closure: The child function has acess to parent scope variable even after outer function finished

function counter(){
    let count = 0;

    return function(){
        count++
        console.log(count);
    }
}

const counterfn = counter()

counterfn()
counterfn()
counterfn()





