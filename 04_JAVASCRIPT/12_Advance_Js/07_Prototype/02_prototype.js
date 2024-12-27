// function Car(brand, name){
//     this.brand  = brand;                            // Blueprint
//     this.name = name;

//     this.drive = function(){
//         console.log(`${this.name}, ${this.brand} ki car chal rahi hai!`);
        
//     }
// }


// function sayName(){
//     console.log(`hi, ${this.name}`);
    
// }

// Car.prototype.sayName = sayName;

// // console.log(Car.prototype);

// let car1 = new Car("RR", 'jay');
// // car1.sayName()
// // car1.drive()


// let Car2 = new Car('Bhugati', 'Anand')
// console.log(Car2.__proto__);





// Prototype 

const person = {
    name: 'Mithun',
    place: 'Bengaluru'
}

// console.log(person.name);
// console.log(person.place);

// console.log(person.toString()); // ey tostring tho person maii nahi tho acess kaisey ho raha hai ?? reason hai bahut are methood prototype mai already hai or prototype object ke sath hota hi hai jiske wajhaisey ham isey acess kar pa rahe hai. or u can prototype a kind off extra luggage.


// console.log(person.prototype);  // undefine    // Prototype -> Blueprint ke pass mileyga 
// console.log(person.__proto__);  // {}          // __proto__ -> Object ke pass mileyga 



// Blueprint
function Person(name){
    this.name = name;

    this.greet = function(){
        console.log(`Hi , ${this.name}`);
        
    }

}

// Object
let mithun = new Person('Mithun')

console.log(Person.prototype);  // {}
console.log(mithun.__proto__);  // {}

console.log(Person.prototype === mithun.__proto__);  // true




// Keu chahiey prototype ??  -> If u wnat to send extra things in blueprint we use prototype  because ham blueprint ke ander method ko reuse nahi kar skate hai na isley kar bhi skate hai par using call, bind aplly jo bahut steps ho jata hai 

function Person(name){
    this.name = name;
}

function Student(name){
    this.name = name;

}

function greet (){
    console.log(`Hi , ${this.name}`);      // ey function bar bar repete ho raha tha isley hamne isko bhar nikal diya or prototype ke mada se share kar rahe hai 
    
}

Person.prototype.greet = greet;
Student.prototype.greet = greet;

let Basu = new Person('Basu');
let cheetri = new Student('Cheetri')

Basu.greet()
cheetri.greet()




// Prototypal inheritence 

const person2 = {
    name: 'Mithun',
    
    greet: function(){
        console.log(`Namaste, ${this.name}`);
    },

    sayBye: function(){
        console.log(`Namaste, ${this.name}`);
    }
}

let anotherPerson = Object.create(person2)      // ab anotherPerson, person ke properties ko inherit kar liya hai 
console.log(anotherPerson.__proto__);
