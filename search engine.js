const accessKey = 'kTbabFr-i_X6d0yHO-P3sJEgbvbk96AtMoISs3twUM0';
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');
const showMoreBtn = document.getElementById('show-more-btn');

let keyword="";
let page =1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href=result.links.html;
        imageLink.target= '_blank';
        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    })
}
searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})