import { categories } from './categories';
import sprite from '../../images/icons.svg';
import { typeOfDevice, firstPageData, renderPopular } from '../pagination';
import throttle from 'lodash.throttle';
import { setActiveLink } from '../activMenu';

const wrapper = document.querySelector('.category-wrapper');
let currentState = typeOfDevice();
window.addEventListener('resize', throttle(onResize, 300));
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
        <button aria-label="category" type="button" class="categories__button standalone" data-select="button">${ctg}</button>
      </li>`);
      }, '')
    : '';
}

function generateFilter(buttons, select) {
  return `<ul id="categories" class="categories-wrapper"> 
        ${generateButtonsMarkup(buttons)}     
       <li class="categories__item">
        <div class="select-menu">
          <button aria-label="category select" class="categories__button select" type="button" data-select="select">
            <span>${
              typeOfDevice() === 'mobile' ? 'Categories' : 'Others'
            }</span>
            <svg class="categories__icon" width="14" height="14">
              <use href="${sprite}#arrow_down"></use>
            </svg>
          </button>
          <div class="select__list">
            <div class="select__wrapper">${generateSelectMarkup(select)}</div>
          </div>
        </div>
      </li>
    </ul>`;
}

function generateMarkup(data) {
  const device = typeOfDevice();
  let buttons;
  let select;
  if (device === 'mobile') {
    buttons = null;
    select = data;
  } else if (device === 'tablet') {
    buttons = data.slice(0, 4);
    select = data.slice(4);
  } else if (device === 'desktop') {
    buttons = data.slice(0, 6);
    select = data.slice(6);
  }
  return generateFilter(buttons, select);
}

export function renderFilter() {
  const filter = generateMarkup(categories);
  wrapper.innerHTML = filter;
}

function onResize() {
  const newState = typeOfDevice();
  if (newState !== currentState) {
    currentState = newState;
    renderFilter();
    setActiveLink();
    firstPageData.then(data => renderPopular(...data)).catch(console.log);
  }
}
