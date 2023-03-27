import sprite from '../images/icons.svg';

const cardsNewsBoxEl = document.querySelector('.card-wrap');
const cardNewsEl = document.querySelector('.news');
const weatherCard = document.querySelector('.weather-card');

const normalizeDate = date => {
  const zero = '0';
  const normalDate = {
    month: 0,
    day: 0,
    year: date.getFullYear(),
  };

  if (date.getMonth() <= 8) {
    normalDate.month = `${zero}${date.getMonth() + 1}`;
  } else {
    normalDate.month = date.getMonth() + 1;
  }

  if (date.getDate() <= 9) {
    normalDate.day = `${zero}${date.getDate()}`;
  } else {
    normalDate.day = date.getDate();
  }
  return normalDate;
};

// const renderArticles = articles => {
//   const list = document.createElement('ul');
//   list.classList.add('news');
//   const articlesHTML = articles.reduce((acc, el) => {
//     const date = new Date(el.date);
//     const { day, month, year } = normalizeDate(date);
//     return (acc += `
//                 <li class="news__item">
//                     <div class="news__card">
//                         <div class="news__img">
//                             <picture>
//                             <source
//                                 srcset="${el.image}"
//                                 media="(max-width: 767px)"
//                                 width="288"
//                                 height="395"
//                             />
//                             <source
//                                 srcset="${el.image}"
//                                 media="(max-width: 1279px)"
//                                 width="353"
//                                 height="395"
//                             />
//                             <img
//                                 srcset="${el.image}"
//                                 src="${el.image}"
//                                 alt=""
//                                 width="395"
//                                 height="395"
//                             />
//                             </picture>

//                             <p class="news__category">${el.category}</p>

//                             <button type="button" class="button-card">
//                             Add to favorite
//                             <svg class="button-card-icon" width="16" height="16">
//                                 <use href="${sprite}#icons_heart"></use>
//                             </svg>
//                             </button>
//                         </div>
//                         <h1 class="news__title">${el.title}</h1>
//                         <p class="news__text">
//                             ${el.descr}
//                         </p>
//                     </div>
//                     <div class="news__info">
//                         <time datetime="${el.date}" class="news__time">${day}/${month}/${year}</time>
//                         <a class="news__link" href="${el.url}">Read more</a>
//                     </div>
//                 </li>`);
//   }, '');
//   cardsNewsBoxEl.insertAdjacentHTML('beforeend', articlesHTML);
//   return list;
// };

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function renderCardsNews(ar) {
  return ar.map(el => {
    const date = new Date(el.date);
    const { day, month, year } = normalizeDate(date);
    return `
          <li class="news__item">
              <div class="news__card">
                  <div class="news__img">
                      <picture>
                      <source
                          srcset="${el.image}"
                          media="(max-width: 767px)"
                          width="288"
                          height="395"
                      />
                      <source
                          srcset="${el.image}"
                          media="(max-width: 1279px)"
                          width="353"
                          height="395"
                      />
                      <img
                          srcset="${el.image}"
                          src="${el.image}"
                          alt=""
                          width="395"
                          height="395"
                      />
                      </picture>

                      <p class="news__category">${el.category}</p>

                      <button type="button" class="button-card">
                      Add to favorite
                      <svg class="button-card-icon" width="16" height="16">
                          <use href="${sprite}#icons_heart"></use>
                      </svg>
                      </button>
                  </div>
                  <h1 class="news__title">${el.title}</h1>
                  <p class="news__text">
                      ${el.descr}
                  </p>
              </div>
              <div class="news__info">
                  <time datetime="${el.date}" class="news__time">${day}/${month}/${year}</time>
                  <a class="news__link" href="${el.url}">Read more</a>
              </div>
          </li>`;
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

cardsNewsBoxEl.insertAdjacentHTML('afterbegin', markup);
