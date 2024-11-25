/*
Arrow Function:

1. Function are first-class citizens.
2. what are arrow function?
3. Implicit and explicit return.
4. this binding.
5. Recursive function.

*/



// First-class: Datatypes: store in a variable, pass as argument, return

// // Traditinal function
// function sayHi(){
//     console.log("Radhe Radhe");
    
// }

// sayHi()

// // Function expression
// let sayHello = function(){
//     console.log('Hello');
    
// }

// sayHello()


// //Arrow function

// let sayNamaste = (name) => {
//     console.log(`Namaste ${name}`);
    
// }

// sayNamaste("Jaypraksh");



/*
Return:
    Explicit: use return keyword: () => {}
    Implicit: not return keyword: () => ()

*/

let sayNamaste1 = () => {
    return 'jay'
    
}

const greet1 = sayNamaste1();
console.log(greet1);


let sayNamaste2 = () => (
    'Jaypraksh'
)

const greet2 = sayNamaste2();
console.log(greet2);             // return 'Jaypraksh' without using return and we can just return one value no multiple 




/* 
=> this binding : set context 
    -> this is avalabile in arrow function

*/

// i want to print 'jaypraksh' but when i run it will print Mithun keuki ey function name ko bhar koj rah hai isley ham this keyword ka use karte hai taki uska context fixed ho jaye or wo usi anat se koj ke de.

let name = "Mithun";

const person ={
    name: 'jaypraksh',
    sayNam: function(){
        console.log(`Hello, ${name}`);
        
    }
}

person.sayNam()  // Hello, Mithun

const person2 ={
    name: 'jaypraksh2',
    sayNam: function(){
        console.log(`Hello, ${this.name}`);
        
    }
}

person2.sayNam() //Hello, jaypraksh2




// 5. Recursive function: 

/* 

- Function
- Base Condition: Condition Where repetion should stop.
- Recursive condition: Change the input and call same function.

*/

// Print number from n to 0: 5 => 5, 4, 3, 2, 1

function printNumber(n){
    if(n == 0){
        return
    }

    console.log(n);

    printNumber(n-1)
}

printNumber(5)