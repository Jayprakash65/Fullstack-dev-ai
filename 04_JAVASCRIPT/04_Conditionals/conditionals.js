// conditinals : Making decision

// write a program to check if a person can vote or not 
// Input : Age should be minimum 18 years
// Output: A message saying he can vote or not 


// let age = "11";

// if (!/^\d+$/.test(age) || typeof age !== "number"){
//     console.log('plz give valid input');  
// }
// else if(age >= 18){
//     console.log('u can vote'); 
// }

// else{
//     console.log('You cannot vote');  
// }



// to check a number is even or not 

// let num = 0;

// if (num == 0){
//     console.log('not valid');  
// }else if(num%2 === 0){
//     num%2 === 0
// }else{
//     console.log('odd');  
// }



// if a user is logged in send him to homepage if he is not logged in semd to login page



let isUserLoggedIn = false;
let requestedPage = '/courses'

if(isUserLoggedIn){
    // console.log('You are in home page');

    if (requestedPage == '/courses') {
        console.log('u are in course page ');
        
    } else {
        console.log('You are in 404 page');
        
    }
    
}else{
    console.log('U are in login page ');
    
}