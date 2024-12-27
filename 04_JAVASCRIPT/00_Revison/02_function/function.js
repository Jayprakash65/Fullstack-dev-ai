// Function: increase reausability and costomize(value) as per the need.

/*
hello jay
hello rahul
hello avtar
hello 

*/


function sayHello(name = 'User'){ 
    console.log(`Hello ${name}`);
    
}

sayHello("jay");
sayHello("rahul")

// parametrs: when aceppt the value
// arugumnet: when we send the value

sayHello('')


// Recursion

function printNumber(n){
    if(n === 0){
        return
    }

    console.log(n);

    printNumber(n - 1);
    
}

printNumber(5)
