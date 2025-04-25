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




// 💡 1. Why Functions? (Aur DRY kya hota hai?)

// ❓ Pehle yeh samjho — hume functions ki zarurat kyun padti hai? Manlo tum ek chai banana ka code baar baar likh rahe ho:

console.log("Boil water");
console.log("Add tea leaves");
console.log("Add sugar");
console.log("Add milk");
console.log("Boil again");

// Agar tumhe yehi steps 5 baar repeat karne ho, toh 5 baar same code likhna padega — this breaks DRY.


//🧾 2. Function Declaration

function makeTea() {
    console.log("Boil water");
    console.log("Add tea leaves");
    console.log("Add sugar");
    console.log("Add milk");
    console.log("Boil again");
  }
  
// 🚀 3. Function Invocation (ya Function Call)

makeTea();



// 🧳 4. Function with Parameters (jaise tandoori chai ya masala chai)
// Parameters = Input

function makeTea(sugarAmount){
    console.log(`Boil water`);
    console.log(`Add ${sugarAmount} spoon of sugar`);
    console.log(`Add tea leaves and milk`);
}

makeTea(2); // Output: Add 2 spoons of sugar
makeTea(1); // Output: Add 1 spoon of sugar




// 🧂 5. Default Parameters
// Agar koi input nahi diya toh ek default value use karo:

function makeTea(sugarAmount = 2) {
    console.log(`Making tea with ${sugarAmount} spoons of sugar`);
  }
  
  makeTea();      // 2 spoons
  makeTea(1);     // 1 spoon
  


// 🧮 6. Function with N Number of Parameters (Rest operator)
// Kabhi kabhi tumhe nahi pata kitne ingredients honge — use karo ...rest:

// Matlab: jitne bhi arguments tum function call mein doge, woh sabko ek array banakar ingredients naam ke variable me daal dega.
// ingredients = ["Ginger", "Cardamom", "Cinnamon"]



function makeTea(...ingredients) {
    console.log("Making tea with:");
    ingredients.forEach(item => console.log(item));
  }
  
  makeTea("Ginger", "Cardamom", "Cinnamon");
  


// 🔁 7. Function with Return

function add(a, b){
    return a+b;        // return ka matlab — yeh function output de raha hai.
}

let sum = add(2,3)
console.log(sum);







// 🏹 Arrow Functions

const greet = () => {
    console.log("Hello!");
  };
  


// 1. Functions are first-class citizens
// Iska matlab: functions ko variable me store kar sakte ho, parameter me bhej sakte ho, return kar sakte ho.


const sayHello = function(){
    console.log('Hello!');
    
}

function callFn(fn){
    fun();             // function call inside function
}

callFn(sayHello);       // Output: Hello!


// 📍2. What are arrow functions?

const add = (a,b) => a+b;
console.log(add(2,8));





//1. Functon Chaining 

const calculate = {
    value: 0,

    add: function(x){
        this.value = this.value + x
        return this
    }, 

    sub: function(x){
        this.value = this.value  - x
        return this
    },
    mul: function(x){
        this.value = this.value * x
        return this
    },
    print: function(){
        console.log(this.value);   
    }
}

calculate.add(10).sub(5).mul(2).print()



// 2. Pure and Impure function

// Pure Function: If your input is same the output will be same. This is not dependent on values outside the function. Side effect is not observed.

function addTwoNum(a, b){
    return a + b
}

console.log(addTwoNum(2,3));
console.log(addTwoNum(2,3));
console.log(addTwoNum(2,3));
console.log(addTwoNum(2,3));




//🔹 Pure Function Kya Hota Hai?
//Ek aisa function jo:

//Hamesha same input pe same output deta hai

//Kisi external cheez (file, variable, console, DB, etc.) ko touch nahi karta

// ✅ Example of Pure Function:

function add(a, b) {
  return a + b;
}

//🧪 Test:

add(2, 3) // → always gives 5

//No console.log, no global variable, no file read/write → Pure hai bhai!



/* 
🔹 Impure Function Kya Hota Hai?
    Aisa function jo:

    Same input pe same output guarantee nahi deta

    External cheezon ko change ya use karta hai (console, file, database, global variable, etc.)

*/


let total = 0;

function addToTotal(x) {
  total = total + x;
  return total;
}

console.log(addToTotal(5));
console.log(addToTotal(5));
console.log(addToTotal(5));
console.log(addToTotal(5));






