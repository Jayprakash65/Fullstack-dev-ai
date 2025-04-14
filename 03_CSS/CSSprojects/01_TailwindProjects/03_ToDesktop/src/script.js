const navDialog = document.getElementById('nav-dialog')

function handelMenu(){
    navDialog.classList.toggle('hidden');
    
}


const dtElement = document.querySelectorAll('dt');

dtElement.forEach((item) =>{
    
    
    
    item.addEventListener('click',() =>{
        const ddId = item.getAttribute('aria-controls');
        const ddelement = document.getElementById(ddId);
        console.log(ddelement);
        
        const ddArrowIcon = item.querySelector('i');
        console.log(ddArrowIcon);
        
        ddelement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('rotate-180');
    })
})
