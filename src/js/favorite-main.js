import sprite from '../images/icons.svg';
import desktop from '../images/no-news-desktop.png';
import desktopX2 from '../images/no-news-desktop@2x.png';
import tablet from '../images/no-news-tablet.png';
import tabletX2 from '../images/no-news-tablet@2x.png';
import mobile from '../images/no-news-mobile.png';
import mobileX2 from '../images/no-news-mobile@2x.png';
import { addToRead } from './addToRead.js';

const container = document.querySelector('#box-container');

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

const renderArticles = articles => {
  const list = document.createElement('ul');
  list.classList.add('news');
  const articlesHTML = articles.reduce((acc, el) => {
    const date = new Date(el.date);
    const { day, month, year } = normalizeDate(date);
    return (acc += `
    <li class="news__item" id="${el.id}">
    <div class="news__card">
        <div class="news__img">
          <div class="news__img-wrap">
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
                  class="news__image"
                  srcset="${el.image}"
                  src="${el.image}"
                  alt=""
                  width="395"
                  height="395"
              />
              </picture>
          </div>
            <p class="news__category">${el.category}</p>

            <button type="button" class="button-card">
            Remove from favorite
            <svg class="button-card-icon button-card-icon-remove" width="16" height="16">
                <use href="${sprite}#icons_heart"></use>
            </svg>
            </button>
        </div>
        <div class="news__title-wrap">
            <h1 class="news__title">${el.title}</h1>
        </div>
        <p class="news__text">
            ${el.descr}
        </p>
    </div>
    <div class="news__info">
        <time datetime="${el.date}" class="news__time">${day}/${month}/${year}</time>
        <a class="news__link" href="${el.url}" target="_blank">Read more</a>
    </div>
</li>`);
  }, '');
  list.insertAdjacentHTML('beforeend', articlesHTML);
  return list;
};

export const renderPage = () => {
  const articls = JSON.parse(localStorage.getItem('favoriteArticles'));

  if (articls.length === 0) {
    container.innerHTML = ` <picture>
                <source
                    srcset="${mobile} 1x, ${mobileX2} 2x"
                    media="(max-width: 767px)">
                <source
                    srcset="${tablet} 1x, ${tabletX2} 2x"
                    media="(max-width: 1279px)">
                <source
                    srcset="${desktop} 1x, ${desktopX2} 2x"
                    media="(min-width: 1280px)">
                <img class="favorite__no-news" src="${mobile}"
                    alt="Зображення не має новин">
            </picture>`;
    return;
  }

  const articlesFav = renderArticles(articls);

  const list = document.querySelector('#box-container');
  list.append(articlesFav);
};

renderPage();
addToRead();

function removeFromFavorite(id) {
  const articls = JSON.parse(localStorage.getItem('favoriteArticles'));

  const index = articls.findIndex(item => item.id === id);

  if (index !== -1) {
    articls.splice(index, 1);
    localStorage.setItem('favoriteArticles', JSON.stringify(articls));
  }

  const card = document.getElementById(`${id}`);

  if (card) {
    card.remove();
  }
}

const removeCard = () => {
  const cardsOnPage = document.querySelectorAll('.news__item');

  for (let i = 0; i < cardsOnPage.length; i += 1) {
    const el = cardsOnPage[i];

    el.children[0].children[0].children[2].addEventListener('click', evt => {
      removeFromFavorite(el.attributes[1].value);
      const amountCard = document.querySelectorAll('.news__item').length;
      if (amountCard === 0) {
        container.innerHTML = ` <picture>
                <source
                    srcset="${mobile} 1x, ${mobileX2} 2x"
                    media="(max-width: 767px)">
                <source
                    srcset="${tablet} 1x, ${tabletX2} 2x"
                    media="(max-width: 1279px)">
                <source
                    srcset="${desktop} 1x, ${desktopX2} 2x"
                    media="(min-width: 1280px)">
                <img class="favorite__no-news" src="${mobile}"
                    alt="Зображення не має новин">
            </picture>`;
      }
    });
  }
};

removeCard();
