let phone = new Set()

phone.add(123)
phone.add(456)

const iterator = phone.values()

console.log(iterator.next().value);
console.log(iterator.next().value);


phone.forEach((data) => {
    console.log(data);
    
})