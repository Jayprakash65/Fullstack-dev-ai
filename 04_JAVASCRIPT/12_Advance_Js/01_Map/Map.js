let person = new Map()

person.set('name', 'jay')
person.set(64 , 'jayprakash')

console.log(person.get(64));    // jay
console.log(person.has('name'));  // true
console.log(person.delete('name'));
console.log(person.clear());

console.log(person.size);


console.log(person.keys());
console.log(person.values());
console.log(person.entries());




console.log(person);
