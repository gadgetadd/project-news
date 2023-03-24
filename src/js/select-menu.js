const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelectorAll('.options');

select.addEventListener('clic', () => {
  select__list.classList.toggle('active');
  // не знаю як тут бути стрілка вниз вверх
  select
    .querySelector('.categories__icon')
    .classList.toggle('.categories__icon');
});
// вибір опцій
options.forEach(option => {
  option.addEventListener('click', () => {});
});
