
var name = 'Aman';
// console.log(name);

var name = 'Ravi';  // redeclare allowed
// console.log(name); 

name = 'Karan';
// console.log(name);



let age = 25;
// console.log(age);

age = 30;           // reassign allowed
// console.log(30);

// let age = 35;       // ❌ Error: age already declared



const city ='Delhi';
// console.log(city); // Delhi

// city = 'Mumbai';   // ❌ Error: can't reassign

// const city = 'Pune'   //  ❌ Error: can't redeclare  



// Scope

{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // ✅ 10 - var is function/global scoped
// console.log(b); // ❌ Error - b is not defined (block scoped)
// console.log(c); // ❌ Error - c is not defined (block scoped)    




function outerFunction() {
    let secretCode = 12345;
  
    function innerFunction() {
      let double = secretCode * 2;
      return double;
    }
  
    let result = innerFunction();
    console.log(result); // 🔥 Expected Output: 24690
  }
  
  outerFunction();
  



  // inner function outer function ko acess kar skat hai 


  let e = 10
  
  console.log(e++); // 10
  console.log(e);   // 11
  
  let f = 10;

  console.log(++f); 
  console.log(f);
  
  