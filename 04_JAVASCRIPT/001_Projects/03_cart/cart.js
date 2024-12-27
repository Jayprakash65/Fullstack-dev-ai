// Simple E-commerce app

/* 
-> Product listing: Done 
-> cart: done
-> Checkout: Done

*/

// Mock database

const productsDB = [
    {
        id: 1,
        name: 'Mackbook',
        category: 'Electronic',
        subCategory: 'Laptops',
        price: 90000
    },
    {
        id: 2,
        name: 'iPhone',
        category: 'Electronic',
        subCategory: 'Mobile',
        price: 60000
    },
    {
        id: 3,
        name: 'Master Js',
        category: 'Books',
        subCategory: 'Coding',
        price: 999
    },
    
];

// Product Listing

function listProduct(){
    for(let product of productsDB){
        console.log(product);
        
    }
}

//listProduct()


// Add to cart feature

const myCart = []

function addTocart(id){
    for(let product of productsDB){
        if(product.id === id){
            myCart.push(product);
 
        } 
    } 
}


function removeFromCart(id){
    for(let i=0; i < myCart.length; i++){
        if(myCart[i].id === id){
            myCart.splice(i , 1)
        }
    }
    
}


addTocart(2)
addTocart(3)
addTocart(1)

//console.log(myCart);

//removeFromCart(1)



// Calculate Toatal Price

function calculateTotal(){
    let totalPrice = 0;

    for(let product of myCart){
        totalPrice = totalPrice + product.price
    }

    console.log(`Your total is ${totalPrice}`);
    
}

//calculateTotal()






// User Management

const userDB = [
    { id: 1, email: 'jay123@gmail.com', password: 'jay123'},
    { id: 2, password: "John123", email: "john.doe123@gmail.com" },
    { id: 3, password: "Emily123", email: "emilyrose123@gmail.com" }
    
]

// Login: Store your id 

const loggedInUserId = 1;

// List User details

function listUserDetails(){
    for(let user of userDB){
        if(user.id === loggedInUserId){
            console.log(user);
            
        }
    }
}

listUserDetails()


function updateEmail(newEmail){
    for(let user of userDB){
        if(user.id === loggedInUserId){
            user.email = newEmail;
            console.log('Your updated details');
            console.log(user);

            
        }
    }
}

function updatePassword(newPassword){
    for(let user of userDB){
        if(user.id === loggedInUserId){
            user.password = newPassword;
            console.log('Your updated details');
            console.log(user);

            
        }
    }
}

updateEmail('jaypraksh@gmail.com');
updatePassword('jay123456789')