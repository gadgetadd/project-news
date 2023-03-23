const search = document.querySelector('.menu-btn_search');
const formSearch = document.querySelector('.form-input');

search.addEventListener('click', ()=>{
  formSearch.classList.add('form-search--activ');
});
formSearch.addEventListener('click', ()=>{
  search.classList.remove('form-search--activ');
});