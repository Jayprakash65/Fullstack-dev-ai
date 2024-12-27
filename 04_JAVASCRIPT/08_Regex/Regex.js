// Use this code in interview also

const str = 'I am Jay';
const pattern = new RegExp('Jay');
const result = pattern.test(str);

console.log(result);


//Using Litral
const str1 = 'I am Jay';
const pattern1 = /'Jay'/;
const result1 = pattern.test(str);

console.log(result1);



// Email validation just example this is not use in production

const str2 = 'jayprakash@gmail.com';
const pattern2 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/;
const result2 = pattern2.test(str2);

console.log(result2);
