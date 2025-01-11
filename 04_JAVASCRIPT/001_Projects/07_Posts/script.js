
let input = document.querySelector('#input')
let msg = document.querySelector('#msg')
let posts = document.querySelector('#posts')


form.addEventListener('submit',function(e){
    e.preventDefault()

    formValidation()
    
})

let formValidation = () => {
    if(input.value == ''){
        msg.innerHTML = 'Post cannot be blank'
        msg.style.color = 'red'
        
    }else{
        msg.innerHTML = ''
        acceptData()
    }
}

let data = [];

let acceptData = () => {
    let text = input.value
    data.push(text);

    // localStorage.setItem('posts', JSON.stringify(data));

    createPost()
};


let createPost = () => {
    posts.innerHTML = '';

    data.forEach((post , index) => {
        posts.innerHTML += `<div>
        <p>${post}</p>
        <span class="options">
            <i onclick="editPost(${index})" class="fas fa-edit"></i>
            <i onclick="deletePost(${index})" class="fas fa-trash"></i>
        </span>
      </div>`
    })

    

    input.value = ''


}



let editPost = (index) => {
    input.value = data[index];
    data.splice(index, 1);

    // localStorage.setItem('posts', JSON.stringify(data));
    // createPost()
}


let deletePost = (index) => {
    data.splice(index, 1);
    // localStorage.setItem('posts', JSON.stringify(data));
    createPost()
}

// (() => {
//     data = JSON.parse(localStorage.getItem("posts")) 
//     createPost();
    
    
// })()

console.log(data);
