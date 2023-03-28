import { createPagination } from './pagination';
import { getDate } from './search';

const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelectorAll('.options');
const ctgBtns = document.querySelectorAll('.categories__button');
const categoriesWrapper = document.querySelector('.categories-wrapper');

categoriesWrapper.addEventListener('click', onCategoriesWrapperClick);

// виїжає випадалка
select.addEventListener('click', e => {
  select__list.classList.toggle('active');
  // console.log(e.target)
  // стрілка вниз вверх
  select.querySelector('.categories__icon').classList.toggle('inverted');
});
// вибір опцій
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(option => {
      option.classList.remove('selected');
    });
    select.querySelector('span').textContent = option.textContent;
    option.classList.add('selected');
    select.classList.add('active-category');
    select__list.classList.toggle('active');
    select.querySelector('.categories__icon').classList.toggle('inverted');
    createPagination.category(option.textContent, getDate());
  });
});

ctgBtns.forEach(ctgBtn => {
  ctgBtn.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('standalone')) {
      createPagination.category(e.currentTarget.textContent, getDate());
    }

    ctgBtns.forEach(ctgBtn => {
      ctgBtn.classList.remove('active');
    });
    ctgBtn.classList.add('active');
    select.classList.remove('active-category');
  });
});
// перезапис селекту на початковий вибір
function onCategoriesWrapperClick(e) {
  if (e.target.dataset.select === 'button') {
    select.querySelector('span').textContent = 'Others';
  }
}
