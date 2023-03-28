const select = document.querySelector('.select');
const select__list = document.querySelector('.select__list');
const options = document.querySelectorAll('.options');
const ctgBtns = document.querySelectorAll('.categories__button');
// const nameCtg = document.querySelector('.name');
const categoriesWrapper = document.querySelector('.categories-wrapper');


categoriesWrapper.addEventListener('click', OnCategoriesWrapperClick);

// виїжає випадалка
select.addEventListener('click', (e) => {
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
    select.querySelector('span').innerHTML = option.innerHTML;
    // nameCtg.innerHTML = option.innerHTML;
    option.classList.add('selected');
    select.classList.add('active-category');

    select__list.classList.toggle('active');
    select.querySelector('.categories__icon').classList.toggle('inverted');
  });
});
ctgBtns.forEach(ctgBtn => {
  ctgBtn.addEventListener('click', () => {
    ctgBtns.forEach(ctgBtn => {
      ctgBtn.classList.remove('active');
    });
    ctgBtn.classList.add('active');
    select.classList.remove('active-category');
  });
});
function OnCategoriesWrapperClick(e){
  if(e.target.dataset.select === "button"){
    select.querySelector('span').textContent = 'Others'
  }
}