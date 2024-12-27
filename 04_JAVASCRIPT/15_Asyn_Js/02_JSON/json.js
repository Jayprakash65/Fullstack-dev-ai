const person = {
    name: 'Jaypraksh',
    age: 25
}

console.log(person);

// Object -> JSON :- JSON.stringify()
const personJSON = JSON.stringify(person);

console.log(personJSON);        // {"name":"Jaypraksh","age":25}


// JSON -> object :- JSON.parse()
console.log(JSON.parse(personJSON));


