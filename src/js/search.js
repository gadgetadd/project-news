import { createPagination } from './pagination';
import validator from 'validator';
import { Notify } from 'notiflix';

const searchRef = document.querySelector('.search');
searchRef.addEventListener('submit', e => {
  e.preventDefault();
  const valueForSearch = e.currentTarget.elements.search.value;
  const isValid =
    validator.isAlphanumeric(valueForSearch, 'en-US', {
      ignore: ' ,.-/',
    }) && validator.isLength(valueForSearch, { min: 3, max: 50 });
  if (isValid) {
    createPagination.search(valueForSearch, getDate());
  } else {
    Notify.warning(
      'Please enter a valid search query in Latin containing 3 to 50 characters'
    );
  }
});

export function getDate() {
  const data = JSON.parse(localStorage.getItem('date'));
  if (!data) {
    return null;
  }
  return data.replaceAll('/', '');
}
