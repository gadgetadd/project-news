import { categories } from './categories';
import sprite from '../../images/icons.svg';

const wrapper = document.querySelector('.category-wrapper');
renderFilter();

function generateSelectMarkup(data) {
  return data.reduce((markup, ctg) => {
    return (markup += `
<div class="options">${ctg}</div>
`);
  }, '');
}

function generateButtonsMarkup(data) {
  return data
    ? data.reduce((markup, ctg) => {
        return (markup += `
<li class="categories__item">
        <button type="button" class="categories__button">${ctg}</button>
      </li>`);
      }, '')
    : '';
}

function generateFilter(buttons, select) {
  return `<ul id="categories" class="categories-wrapper list"> 
        ${generateButtonsMarkup(buttons)}     
       <li class="categories__item">
        <div class="select-menu">
          <button class="categories__button select" type="button">
            <span> Others</span>
            <svg class="categories__icon" width="14" height="14">
              <use href="${sprite}#arrow_down"></use>
            </svg>
          </button>
          <div class="select__list list">
            <div class="select__wrapper">${generateSelectMarkup(select)}</div>
          </div>
        </div>
      </li>
    </ul>`;
}

function generateMobileMarkup(data) {
  const buttons = null;
  const select = data;

  return generateFilter(buttons, select);
}

function generateTabletMarkup(data) {
  const buttons = data.slice(0, 4);
  const select = data.slice(4);

  return generateFilter(buttons, select);
}

function generateDesktopMarkup(data) {
  const buttons = data.slice(0, 6);
  const select = data.slice(6);

  return generateFilter(buttons, select);
}

function selectLayout(data) {
  if (window.innerWidth < 768) return generateMobileMarkup(data);
  if (window.innerWidth < 1280) return generateTabletMarkup(data);
  return generateDesktopMarkup(data);
}

export function renderFilter() {
  const filter = selectLayout(categories);
  wrapper.innerHTML = filter;
}
