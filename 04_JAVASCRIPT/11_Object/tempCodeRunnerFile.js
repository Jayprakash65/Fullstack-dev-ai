const person = {
    name: 'jayprakash',
    age: 20,
    course: 'BCA'
}

person.email = 'jay123@google.com'

// // Acessing element
//     console.log(person.name);
//     console.log(person['name']);

//     for(let key in person){
//         console.log(key);
        
//     }

    for(let values of person){
        console.log(values);
        
    }