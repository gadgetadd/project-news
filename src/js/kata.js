// масив з бекенду
const Arr = [];
function createCategMobilMarkup(Arr) {
  return Arr.map(({ category }) => {
    return `
<div class="select-menu">
      <button class="categories__button select" type="button">
        <span> Categories</span>

        <svg class="categories__icon" width="14" height="14">
          <use href="./images/icons.svg#arrow_down"></use>
        </svg>
      </button>

      <div class="select__list">
        <div class="select__wrapper">
          <div class="options">${category}</div>
          </div>
      </div>
    </div>

    <div>
      <button>select-date</button>
    </div>
  `;
  }).join('');
}
// 2 варік з десктопом

function createCategDescMarkup(Arr) {
  return Arr.map(({ category }) => {
    return `
 <ul class="categories-wrapper list">
      <li>
        <button type="button" class="categories__button">${category}</button>
      </li>
      <li>
        <button type="button" class="categories__button">${category}</button>
      </li>
      <li>
        <button type="button" class="categories__button">${category}</button>
      </li>
      <li>
        <button type="button" class="categories__button">${category}</button>
      </li>
      <li>
        <button type="button" class="categories__button">${category}</button>
      </li>
      <li>
        <button type="button" class="categories__button">${category}</button>
      </li>
     
      <li>
        <div class="select-menu">
          <button class="categories__button select" type="button">
            <span> Others</span>
            <svg class="categories__icon" width="14" height="14">
              <use href="./images/icons.svg#arrow_down"></use>
            </svg>
          </button>
          <div class="select__list list">
            <div class="select__wrapper">
              <div class="options">${category}</div>
             
            </div>
          </div>
        </div>
      </li>
    </ul>
  `;
  }).join('');
}
// 3 варік

const filterWrapper = document.querySelector('.filter-wrapper');
async function createCategoriesMarkup() {
  // тут Апі-сервіс
  const Arr = await newsApi.fetchCategories();
  if (window.screen.width < 768) {
    // або писати =320
    // розмітка мобілки
  }
  if (window.screen.width >= 768 && window.screen.width < 1280) {
    //  або писати =768
    // розмітка планшету
  }
  if (window.screen.width >= 1280) {
    //   або писати =1280
    //   розмітка десктопу
  }
}
function appendFilterMarkup(hits) {
  filterWrapper.insertAdjacentHTML('beforeend', createCategoriesMarkup(hits));
}
