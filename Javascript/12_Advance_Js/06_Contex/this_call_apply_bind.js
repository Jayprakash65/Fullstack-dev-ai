let person  = {
    name: 'jayprakash',

    greet: function(greeting){
        console.log(`Hi ${greeting} how are u ${this.name}`);
        
    }


}

person.greet('Good morning')


let anotherPerson = {
    name: 'prabir'
}


// call, apply, bind

// bind: it will change the contex to any object 

person.greet.call(anotherPerson, 'Good evening')

const args = ['Good morning']
person.greet.apply(anotherPerson, args)

// bind: it will change the contex to any object 

person.greet.bind(anotherPerson, args)


// bind: it will change the contex to any object and return a function which you can call later

const myFunc = person.greet.bind(anotherPerson)

myFunc('Good afternoon')


