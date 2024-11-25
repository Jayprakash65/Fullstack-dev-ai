/*

* function and its advantages [DRY]
* function declartion
* function invocation
* function with paramerters
* function with default parameters
* function with n number or parameters
* function with return

*/



// Dont repaeat yourself [DRY]

//function with default parameters

// function sayHi(name = 'User'){
//     console.log(`hello ${name}`);
//     console.log(`hi`);
    
// }

// sayHi()




//function with n number or parameters

function addNumber(){
    // console.log(arguments);    // {"0":1,"1":2,"2":3}

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]  
    }
    console.log(sum);  
}

addNumber(1, 2, 3) 
addNumber(1, 2, 3, 4)  
addNumber(1, 2, 3, 5)  
addNumber(1, 2, 3, 6)  



// function with return

// ham sub variable ko bhar use nahi kar skate hai because of scope bit using return ham usey bhar bej skate hai 

function subTwoNum(a,b){

    let sub = b-a;

    return sub
}

let result = subTwoNum(5,2)

console.log(result);


