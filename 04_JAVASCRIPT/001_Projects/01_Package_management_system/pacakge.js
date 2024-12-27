// Courier Package System

/* 
Feature: To calculate the courior price.

-> Manually: Paper Pen

How were you doing it before ?
Cosidering: Distance, weight, charges
Chart, rules => constant
Output: Price

*/




function calculatePackagePrice(distance, weight){
    let totalPrice = 0;

    if(distance <= 0 && weight <= 0){
        return 'Invalid request' 
    }

    else if(distance <= 50 && weight <= 50){
        totalPrice = 15;
        return totalPrice
    }else if(distance <= 50 && weight <= 200 ){
        totalPrice = 25;
        return totalPrice
    }else if(distance <= 50 && weight <= 500 ){
        totalPrice = 35;
        return totalPrice
    }else if(distance <= 50 && weight <= 1000 ){
        totalPrice = 45;
        return totalPrice
    }else{
        console.log();
        
    }
}

console.log(calculatePackagePrice(60,100));
