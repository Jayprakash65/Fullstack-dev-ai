let num1 = [1, 2, 3]
let num2 = [4, 5, 6]

// let combineArr = []

// // Combine using loop
// for(let data of num1){
//     combineArr.push(data)
// }

// for(let data of num2){
//     combineArr.push(data)
// }



// Combining using spread

let combineArr = [...num1, ...num2]

console.log(combineArr);        // [ 1, 2, 3, 4, 5, 6 ]


// Expanding using spread

let arr = [1,2,3]
let newArr = [...arr, 4, 5]

console.log(newArr);




// OBJECT

// Combining object
let obj1 = {name: 'jay'}
let obj2 = {course: 'BCA'}

let newObj = {...obj1, ...obj2}
console.log(newObj);

// Expanding object
let obj3 = {a: 1, b: 2, c: 3}

let newObject = {...obj3, d:4, e: 5 }
console.log(newObject);


