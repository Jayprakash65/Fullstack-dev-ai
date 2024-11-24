// Write a program which says if the day is a week off or working day
let day = "sunday";

// if (day === "monday") {
//     console.log(`Its is a working day`);
    
// }else if(day === "tuesday"){
//     console.log(`Its is a working day`);
// }else if(day === "wednesday"){
//     console.log(`Its is a working day`);
// }else if(day === "thrusday"){
//     console.log(`Its is a working day`);
// }else if(day === "friday"){
//     console.log(`Its is a working day`);
// }else if(day === "saturday"){
//     console.log(`Its is a working day`);
// }else if(day === "sunday"){
//     console.log(`Its is a off day`);
// }

// else {
//     console.log(`Please enter proper day`);
    
// }



// switch (day) {
//     case "monday":
//         console.log(`Its is a working day`);
        
//         break;
//     case "tuesday":
//         console.log(`Its is a working day`);
//         break;
//     case "wednesday":
//         console.log(`Its is a working day`);
//     break;
    
//     case "thrusday":
//         console.log(`Its is a working day`);
//     break;

//     case "friday":
//         console.log(`Its is a working day`);
//     break;

//     case "saturday":
//         console.log(`Its is a working day`);
//     break;

//     case "sunday":
//         console.log(`Its is a off day`);
//     break;

//     default:
//         console.log(`Please enter proper day`);
        
//     break;
// }


switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thrusday":
    case "friday":
    case "saturday":
        console.log(`Its is a working day`);
        break;
    case "sunday":
        console.log(`Its is a off day`);
    break;

    default:
        console.log(`Please enter proper day`);
        
    break;
}