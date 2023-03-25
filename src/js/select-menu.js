const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelectorAll('.options');

select.addEventListener('click', () => {
  select__list.classList.toggle('active');
  // стрілка вниз вверх
  select.querySelector('.categories__icon').classList.toggle('inverted');
});
// вибір опцій
options.forEach(option => {
  option.addEventListener('click', () => {});
});
