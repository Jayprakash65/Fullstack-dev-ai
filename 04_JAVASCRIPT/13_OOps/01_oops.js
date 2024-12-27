// Class Declaration

class Person{
    constructor(name = 'Guest', age = null, place = 'N/A'){
        this.name = name;
        this.age = age;
        this.place = place;

    }

    sayHi(){
        console.log(`Hi, ${this.name}`);
        
    }
}

// const mithun = new Person('Mithun')
// console.log(mithun);


// Class Expression --> we rarely use 

const Student = class{
    constructor(name){
        this.name = name;
    }

   sayHello(){
        console.log(`Hello, ${this.name}`);
        
   }
}


// const prabir = new Student('Prabir')
// console.log(prabir);


// Hoisting in Class  

// console.log(Person);
// console.log(Student);


// Abstraction: keep the private methods private and getter and setter

class Person1{
    constructor(){
        this._secret = 'this is the secret'     // // The underscore `_` indicates a private-like property+

    }

    get getSecret(){
        // Validation
        return this._secret
    }

    set setSecret(newSecret){
        this._secret = newSecret;
    }
}

// let mithun = new Person1()
// console.log(mithun.getSecret);

// mithun.setSecret = 'this is the new secret'
// console.log(mithun.getSecret);



class Product {
    constructor(name, basePrice) {
      this.name = name;
      this._basePrice = basePrice; // Base price of the product
      this._discount = 0; // Default discount percentage
    }
  
    // Getter for final price after discount
    get finalPrice() {
      return this._basePrice - (this._basePrice * this._discount) / 100;
    }
  
    // Setter for applying discount
    set discount(value) {
      if (value < 0 || value > 100) {
        console.log("Discount must be between 0% and 100%.");
      } else {
        this._discount = value;
      }
    }
  }
  
  // Example 
  const product = new Product("Laptop", 1000);
  
  console.log(`Base Price: $${product._basePrice}`); // Base Price: $1000
  console.log(`Final Price: $${product.finalPrice}`); // Final Price: $1000 (no discount applied)
  
  // Apply a valid discount
  product.discount = 20; // Set discount to 20%
  console.log(`Final Price after 20% discount: $${product.finalPrice}`); // Final Price: $800
  
  // Try applying an invalid discount
  product.discount = -10; // Invalid discount
  console.log(`Final Price remains: $${product.finalPrice}`); // Final Price: $800
  
  product.discount = 150; // Invalid discount
  console.log(`Final Price remains: $${product.finalPrice}`); // Final Price: $800
  

