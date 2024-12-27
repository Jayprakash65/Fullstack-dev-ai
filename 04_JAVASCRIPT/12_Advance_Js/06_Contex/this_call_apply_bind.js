let person  = {
    name: 'jayprakash',

    greet: function(greeting){
        console.log(`Hi ${greeting} how are u ${this.name}`);
        
    }

}

// person.greet('Good morning')


let person1 = {
    name: 'prabir'
}


// call, apply, bind

// bind: it will change the contex to any object 

person.greet.call(person1, 'Good evening')

const args = ['Good morning']
person.greet.apply(person1, args)

// bind: it will change the contex to any object 

person.greet.bind(person1, args)


// bind: it will change the contex to any object and return a function which you can call later

const myFunc = person.greet.bind(anotherPerson)

myFunc('Good afternoon')


