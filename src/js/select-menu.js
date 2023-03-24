const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelector('.options');

select.addEventListener('clic', () => {
  select__list.classList.toggle('active');
});
