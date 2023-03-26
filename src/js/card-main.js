const cardNewsEl = document.querySelector('.card-wrap');

// searchForm.addEventListener('submit', onSearch);

// function onSearch(event) {
//   event.preventDefault();
// }

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function renderCardsNews(ar) {
  return ar.map(el => {
    return `<div class="card-wrap__box">${el}</div>`;
  });
}
const elementsArray = renderCardsNews(array);

const weather = '<div class="card-wrap__weather">555</div>';

function detectViewport(arr) {
  if (window.innerWidth < 768) {
    arr.splice(0, 0, weather);
  } else if (window.innerWidth < 1280) {
    arr.splice(1, 0, weather);
  } else {
    arr.splice(2, 0, weather);
  }
}

detectViewport(elementsArray);

const markup = elementsArray.join('');

cardNewsEl.insertAdjacentHTML('afterbegin', markup);
