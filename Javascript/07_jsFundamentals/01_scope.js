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


// Closure: The child function has acess to parent scope 

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



