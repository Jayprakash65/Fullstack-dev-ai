// let accessKey = Mn75elo1q7bNrzy3mjrQviG4ArQukwRPzQg7ehw_gSI;

const searchForm = document.querySelector('#search-form');
const searchBox = document.querySelector('#search-box');
const searchResult = document.querySelector('.search-result');
const showMoreBtn = document.querySelector('#show-more-btn');

let keyword = '';
let page = 1;

async function searchImage(){
    keyword = searchBox.value;

    let accessKey = 'Mn75elo1q7bNrzy3mjrQviG4ArQukwRPzQg7ehw_gSI';


    let url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;

    if(page == 1){
        searchResult.innerHTML = ''
    }

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.cover_photo.urls.small;
    
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);


    })

    showMoreBtn.style.display = 'block'
    
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImage()
})