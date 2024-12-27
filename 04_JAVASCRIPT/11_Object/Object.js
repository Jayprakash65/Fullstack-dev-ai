const person = {
    name: 'jayprakash',
    age: 20,
    course: 'BCA'
}

person.email = 'jay123@google.com'

// Acessing element
    console.log(person.name);
    console.log(person['name']);

    for(let key in person){
        console.log(key);
        
    }


// Methods

    console.log('name' in person); // true

    console.log(Object.keys(person));
    console.log(Object.values(person));
    console.log(Object.entries(person));


// Optional Chaning

    console.log(person?.name);   // jayprakash 
    console.log(person?.names);  // undefine (no error)
    
    









