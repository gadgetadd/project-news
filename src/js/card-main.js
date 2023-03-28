import sprite from '../images/icons.svg';
<<<<<<< HEAD
import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

const cardsNewsEl = document.querySelector('.news');

const opts = {
  lines: 8,
  length: 60,
  width: 18,
  radius: 36,
  scale: 0.3,
  corners: 1,
  speed: 1.1,
  rotate: 0,
  animation: 'spinner-line-fade-more',
  direction: 1,
  color: '#4440f6',
  fadeColor: 'transparent',
  top: '50%',
  left: '50%',
  shadow: '0 0 1px transparent',
  zIndex: 2000000000,
  className: 'spinner',
  position: 'absolute',
};

const spinner = new Spinner(opts);
=======
>>>>>>> main

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

<<<<<<< HEAD
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
const weather = '<div class="card-wrap__weather">555</div>';

=======
>>>>>>> main
export function createCardsMarkup(card) {
  return card.map(element => {
    const date = new Date(element.date);
    const { day, month, year } = normalizeDate(date);
    return `
      
<<<<<<< HEAD
            <li class="news__item" id="${element.id}">
=======
            <li class="news__item" id="${element.id}>
>>>>>>> main
                <div class="news__card">
                    <div class="news__img">
                    <div class="news__img-wrap">
                        <picture>
                        <source
                            srcset="${element.image}"
                            media="(max-width: 767px)"
                            width="288"
                            height="395"
                        />
                        <source
                            srcset="${element.image}"
                            media="(max-width: 1279px)"
                            width="353"
                            height="395"
                        />
                        <img
                            class="news__image"
                            srcset="${element.image}"
                            src="${element.image}"
                            alt=""
                            width="395"
                            height="395"
                        />
                        </picture>
                        </div>

                        <p class="news__category">${element.category}</p>

                        <button type="button" class="button-card">
                        Add to favorite
                        <svg class="button-card-icon" width="16" height="16">
                            <use href="${sprite}#icons_heart"></use>
                        </svg>
                        </button>
                    </div>
                    <div class="news__title-wrap">
                    <h1 class="news__title">${element.title}</h1>
                    </div>
                    <p class="news__text">
                        ${element.descr}
                    </p>                
                <div class="news__info">
                    <time datetime="${element.date}" class="news__time">${day}/${month}/${year}</time>
                    <a class="news__link" href="${element.url}">Read more</a>
                </div>
                </div>
            </li>`;
  });
}
