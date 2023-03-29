import { createPagination } from './pagination';
import { getDate } from './search';

const categoriesWrapper = document.querySelector('.category-wrapper');

categoriesWrapper.addEventListener('click', onCategoriesWrapperClick);

function onCategoriesWrapperClick(e) {
  const select = document.querySelector('.select');
  const select__list = document.querySelector('.select__list');
  const options = document.querySelectorAll('.options');
  const ctgBtns = document.querySelectorAll('.categories__button');
  // console.log(e.target);
  if (e.target.dataset.select === 'button') {
    select.querySelector('span').textContent = 'Others';
  }

  if (e.target.closest('.select')) {
    select__list.classList.toggle('active');
    select.querySelector('.categories__icon').classList.toggle('inverted');
  }

  if (e.target.classList.contains('options')) {
    options.forEach(option => {
      option.classList.remove('selected');
    });
    select.querySelector('span').textContent = e.target.textContent;
    e.target.classList.add('selected');
    select.classList.add('active-category');
    select__list.classList.toggle('active');
    select.querySelector('.categories__icon').classList.toggle('inverted');
    createPagination.category(e.target.textContent, getDate());
  }

  if (e.target.classList.contains('categories__button')) {
    ctgBtns.forEach(ctgBtn => {
      ctgBtn.classList.remove('active');
    });
    e.target.classList.add('active');
    select.classList.remove('active-category');
  }

  if (e.target.classList.contains('standalone')) {
    createPagination.category(e.target.textContent, getDate());
  }
}
