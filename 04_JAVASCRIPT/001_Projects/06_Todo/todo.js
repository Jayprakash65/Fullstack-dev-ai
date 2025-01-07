const inputBox = document.querySelector('#input-box');
const addButton = document.querySelector('button');
const listContainer = document.querySelector('#list-container');
const dele = document.querySelector('li span');


addButton.addEventListener('click',function(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)


    }
    inputBox.value = '';
})


listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove(); 
    }
});





