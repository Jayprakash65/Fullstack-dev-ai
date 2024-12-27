// Polyfill ek code snippet (JavaScript code) hota hai jo purane browsers me naye JavaScript features ka alternative provide karta hai.

// Matlab, agar koi modern JavaScript feature (jaise map, filter, Promise, etc.) purane browser me support nahi hota, toh hum Polyfill ka use karke us feature ka custom implementation karte hain.
// Pollyfill - code snippts to implement new feature in older enviroments.

// Array- includes

// if(!Array.prototype.includes){

// }

// Polyfills of includes

Array.prototype.myIncludes = function(element){

    for (let item of this) {
        if(item === element){
            return true;
        }
    }

    return false;
}

const arr = [1, 2, 3, 4];

console.log(arr.myIncludes(2));


// Polyfills of map

if(!Array.prototype.mymap){
    Array.prototype.mymap = function(callback){
        let newArr = [];

        for (let i = 0; i < this.length; i++) { 
            newArr.push(callback(this[i], i, this))
        }

        return newArr;
    }
}

let arr1 = [1, 2, 3, 4]

let newarray = arr1.mymap((num) => num * 2)

console.log(newarray);

