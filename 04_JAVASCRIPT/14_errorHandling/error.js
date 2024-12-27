// try-catch; try-catch-finally;

/* 
try: put your program
catch: the error are captured here / on gettibg error this block executes
finally: irrespective of getting an error or not this block will execute

*/

const userDetails = null;

try {
    console.log(`Hi, ${userDetails.name}`);
    
} catch (error) {
console.log(`Got an error  ${error.name} , ${error.message}`);
    
}finally{
    console.log('Program ended');
    
}