/* 

Login: 

Input: Email / Phone

Output: OTP -> 4

*/

/* 
Signup:

Email:

*/


const newsletterSubscribers = ['mithun@amierz.ai', 'raj@amierz.ai', 'avtar@amierz.ai', 'jay@amierz.ai']

function subscribeToNewsLetter(email){
    if(newsletterSubscribers.includes(email)){
        console.log('You are already subscriber to our newsletter');
        return
    }
    if(email){
        newsletterSubscribers.push(email);
        console.log('You are sucessfully subscriber to our newsletter');
        return
    }else{
        console.log('Invalid input');
        
    }
}

// subscribeToNewsLetter(null)

// console.log(newsletterSubscribers);



const user = ['mithun@aimerz.ai', 'raj@aimerz.ai', 'avtar@aimerz.ai', 'jay@aimerz.ai']

function SignIn(email){
    if(!user.includes(email)){
        return 'You are not sign up'
    }

    if(user.includes(email)){
       let otp = Math.floor(Math.random() * 9000 + 1000);
       return `Your otp is ${otp}`
    }
}

console.log(SignIn('jayprakash@aimerz.ai'));
console.log(SignIn('jay@aimerz.ai'));



