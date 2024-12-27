// function addNum(){
//     let sum = 0;

//     for(let i = 0; i< arguments.length; i++){
//         sum = sum + arguments[i];
//     }

//     return sum
// }

// console.log(addNum(1, 2, 3));



// Rest opertor -> resting all value in a array

// Here we are collect all the value un nums array
function addNum(...nums){
    
    return nums.reduce((acc, data) => acc + data)
}

console.log(addNum(1, 2, 3, 4, 5, 6));
