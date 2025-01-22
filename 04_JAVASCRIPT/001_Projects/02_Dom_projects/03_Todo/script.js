let form = document.querySelector('#form');
let msg = document.querySelector('.msg');
let textInput = document.querySelector('#textInput');
let dateInput = document.querySelector('#dateInput');
let textarea = document.querySelector('#textarea');
let tasks = document.querySelector('#tasks');
let add = document.querySelector('#add');




form.addEventListener('submit', function(e){
    e.preventDefault();

    formValidation();

})

let formValidation = () => {
    if(textInput.value === ''){
        console.log('faiure');
        msg.innerHTML = 'Input cannot be blank'
        msg.style.color = 'red'

        add.removeAttribute("data-bs-dismiss");
    }else{
        msg.innerHTML = '';
        acceptData();
        add.setAttribute("data-bs-dismiss","modal" );
        
        add.click()

        (() => {
            add.setAttribute("data-bs-dismiss");
        })()
    }
};


let data = []

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        textarea: textarea.value
    })

    localStorage.setItem('data', JSON.stringify(data));

    createTasks()
}

let createTasks = () => {

    tasks.innerHTML = ""

    data.map((x, index) => {
        return (tasks.innerHTML += `
        <div id=${index}>
              <span class='text-bold' >${x.text}</span>
              <br>
              <br>
              <span>${x.date}</span>
              <br>
              <br>
              <p>${x.textarea}</p>
    
              <span class="options">
                <button onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="edit">Edit</button>
                <button onclick="deleteTask(this)" class="delete">Delete</button>
              </span>
            </div>`)
    })


          resestForm()
}

let resestForm = () => {
    textInput.value = ''
    dateInput.value = ''
    textarea.value = ''
}


let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem('data', JSON.stringify(data));
}

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerText
    dateInput.value = selectedTask.children[3].innerText
    textarea.value = selectedTask.children[6].innerText

    deleteTask(e);
}


(() => {
    data = JSON.parse(localStorage.getItem("data"))
    createTasks();
    console.log(data);
    
})()



// let form = document.querySelector('#form');
// let msg = document.querySelector('.msg');
// let textInput = document.querySelector('#textInput');
// let dateInput = document.querySelector('#dateInput');
// let textarea = document.querySelector('#textarea');
// let tasks = document.querySelector('#tasks');
// let add = document.querySelector('#add');

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     formValidation();
// });

// let formValidation = () => {
//     if (textInput.value === '') {
//         msg.innerHTML = 'Input cannot be blank';
//         msg.style.color = 'red';
//         add.removeAttribute('data-bs-dismiss');
//     } else {
//         msg.innerHTML = '';
//         acceptData();
//         add.setAttribute('data-bs-dismiss', 'modal');
//         add.click();
//     }
// };

// let data = JSON.parse(localStorage.getItem('data')) || [];

// let acceptData = () => {
//     data.push({
//         text: textInput.value,
//         date: dateInput.value,
//         textarea: textarea.value
//     });

//     localStorage.setItem('data', JSON.stringify(data));
//     createTasks();
// };

// let createTasks = () => {
//     tasks.innerHTML = '';

//     data.map((x, index) => {
//         tasks.innerHTML += `
//         <div id=${index}>
//               <span class='text-bold'>${x.text}</span>
//               <br><br>
//               <span>${x.date}</span>
//               <br><br>
//               <p>${x.textarea}</p>
//               <span class="options">
//                 <button class="edit" data-bs-toggle="modal" data-bs-target="#form">Edit</button>
//                 <button class="delete">Delete</button>
//               </span>
//         </div>`;
//     });

//     // Add event listeners dynamically
//     document.querySelectorAll('.edit').forEach((btn, idx) => {
//         btn.addEventListener('click', () => editTask(idx));
//     });

//     document.querySelectorAll('.delete').forEach((btn, idx) => {
//         btn.addEventListener('click', () => deleteTask(idx));
//     });

//     resetForm();
// };

// let resetForm = () => {
//     textInput.value = '';
//     dateInput.value = '';
//     textarea.value = '';
// };

// let deleteTask = (index) => {
//     data.splice(index, 1);
//     localStorage.setItem('data', JSON.stringify(data));
//     createTasks();
// };

// let editTask = (index) => {
//     let selectedTask = data[index];
//     textInput.value = selectedTask.text;
//     dateInput.value = selectedTask.date;
//     textarea.value = selectedTask.textarea;

//     deleteTask(index);
// };

// (() => {
//     createTasks();
// })();
