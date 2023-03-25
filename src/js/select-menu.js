const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelectorAll('.options');
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
    select.querySelector('span').innerHTML = option.innerHTML;
    option.classList.add('selected');
    select__list.classList.toggle('active');
    select.querySelector('.categories__icon').classList.toggle('inverted');
  });
});
