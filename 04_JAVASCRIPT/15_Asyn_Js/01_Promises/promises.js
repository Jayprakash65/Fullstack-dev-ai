const isChocolateavailabe = false;

const giftingFriend = new Promise(function (resolve, reject){
    if(isChocolateavailabe){
        resolve("Happy birthday here is your chocolate");
    }else{
        reject('Happy birthday, i am not able to fullfill the promise')
    }
})

// giftingFriend.then(
//     data => console.log(data)
    
// ).catch(
//     err => console.log(err)
    
// )


async function getResult(){
    try {
        const result = await giftingFriend;
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}

getResult()