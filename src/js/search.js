import { createPagination } from './pagination'

const srearchRef = document.querySelector('.search')
srearchRef.addEventListener('submit', (e)=>{
    e.preventDefault();
    const valueForSearch = e.currentTarget.elements.search.value;
    createPagination.search(valueForSearch, getDate());
});

export function getDate(){
    const data = JSON.parse(localStorage.getItem('date'));
    if(!data){
        return null;
    }
    return data.replaceAll('/', '')
}