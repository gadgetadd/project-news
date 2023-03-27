import throttle from 'lodash.throttle';
import { renderFilter } from './categories/addCategories';

let currentState = getCurrentStateIndex();

window.addEventListener('resize', throttle(onResize, 300));

function getCurrentStateIndex() {
  const width = window.innerWidth;
  if (width < 768) {
    return 0;
  } else if (width < 1280) {
    return 1;
  } else {
    return 2;
  }
}


function onResize() {
  console.log(1);
  const newState = getCurrentStateIndex();
  if (newState !== currentState) {
    currentState = newState;
    // Сюди додати імпортовані функції рендеру
    renderFilter();
    // 
    // 
  }
}
