const person = ['jay', 20, 'howrah'];

// console.log(person[1]);

// for(let i = 0; i < person.length; i++){
// console.log(person[i]);
    
// }


for(let item of person){        
     console.log(item);             // give value 
    
}

for(let item in person){
     console.log(item);              // give indexs
    
}


// Array methods 

let person2 = ['Jayprakash', 20, 'Howrah']

person2.push('Brainwarre university')
person2.unshift('I am 1st element')

person2.pop()
person2.shift()



// console.log(person2);



let nums = [1,2,3,4,5]

// console.log(nums.slice(0,3));
// console.log(nums); // nothing change in orginal array

// console.log(nums.splice(0,4));
// console.log(nums); //  changed in original array

console.log(nums.reverse());
console.log(nums.join());     // converts array to string


console.log(nums.includes(5));  // true
console.log(nums.indexof(5));  // -1 for false


// 🧠 Real-Life Use:

let cart = [];

function addToCart(item){
    cart.push(item);
    console.log(`${item} added to cart.`);
}

addToCart('Shoes');
addToCart('Watch')

console.log(cart);  // ['Shoes', 'Watch']
