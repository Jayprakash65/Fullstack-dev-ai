/* 
Imp Methods

    -> sort 
    -> map
    -> filter
    -> reduce
    -> foreach

*/


let nums = [100, 4, 3, 2, 55]

// console.log(nums.sort((a,b) => a - b));



let sum = nums.map((value, index) => {
    // console.log(`${index} : ${value}`);     // itrate the elments and rturn a array
    
    return value + 1
})

// console.log(sum);




let sum1 = [1, 2, 3 , 4]

let allSum = sum1.reduce((acc, value) => {
    console.log(`${acc} + ${value}`);
    
    return acc + value
})

console.log(allSum);






