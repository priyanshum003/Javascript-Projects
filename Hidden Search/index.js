const btn = document.querySelector('.btn');
const searchBox = document.querySelector('.search');

btn.addEventListener('click',()=> {
    searchBox.classList.toggle('active')
    searchBox.focus()
});