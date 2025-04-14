function counter(){
    let count = 0;

    return function(){
        count++
        console.log(count);
    }
}

const counterfn = counter()

counterfn()
counterfn()
counterfn()