
// function Car(brand, name){
//     this.brand  = brand;                            // Blueprint
//     this.name = name;

//     this.drive = function(){
//         console.log(`${this.name}, ${this.brand} ki car chal rahi hai!`);
        
//     }
// }


// let car1 = new Car('BMW', 'Jayprakash')             // new object (instance)
// car1.drive()

// let car2 = new Car('Tata', 'Mithun')
// car2.drive()

// let car3 = new Car('Mahindra', 'Prabir')
// car3.drive()


// // console.log(Object.getOwnPropertyNames(String.prototype));





const person = {
    name: 'Mithun',

    greet: function(){
        console.log(`Hi , ${this.name}`)
    }
}

const person2 = {
    name: 'Mithun',

}

// person.greet.call(person2)


// Problem: Code Duplcation -> call, apply, bind
// Problem: code duplication ; Steps are more: Create a object, Create a method, Create another objject, then use call method



// THis prblm is solved by constructor method 

function Person(name){
    this.name = name;

    this.greet = function(){
        console.log(`Hi , ${this.name}`);
        
    }

}


const jay = new Person('Jaypraksh')
jay.greet()

const prabir = new Person('Prabir')
prabir.greet()
