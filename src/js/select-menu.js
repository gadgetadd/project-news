import { createPagination } from './pagination';

const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelectorAll('.options');
const ctgBtns = document.querySelectorAll('.categories__button');
// const nameCtg = document.querySelector('.name');
// виїжає випадалка
select.addEventListener('click', () => {
  select__list.classList.toggle('active');
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
    createPagination.category(option.textContent);
  });
});

ctgBtns.forEach(ctgBtn => {
  ctgBtn.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('standalone')) {
      createPagination.category(e.currentTarget.textContent);
    }

    ctgBtns.forEach(ctgBtn => {
      ctgBtn.classList.remove('active');
    });
    ctgBtn.classList.add('active');
    select.classList.remove('active-category');
  });
});
