import throttle from 'lodash.throttle';
import { createPagination } from './pagination'

const srearchRef = document.querySelector('.search')
console.log(srearchRef);

srearchRef.addEventListener('submit', (e)=>{
    e.preventDefault();
    const valueForSearch = e.currentTarget.elements.search.value;  
    createPagination.search(valueForSearch)
});