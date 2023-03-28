import { createPagination } from './pagination'

const srearchRef = document.querySelector('.search')
const categoriesButton  = document.querySelectorAll('.categories__button');
srearchRef.addEventListener('submit', (e)=>{
    e.preventDefault();
    const valueForSearch = e.currentTarget.elements.search.value;
    createPagination.search(valueForSearch, getDate());
    categoriesButton.forEach((element)=>element.disabled = true)
});

export function getDate(){
    const data = JSON.parse(localStorage.getItem('date'));
    if(!data){
        return null;
    }
    return data.replaceAll('/', '')
}