import sprite from '../images/icons.svg';
import desktop from '../images/no-news-desktop.png';
import desktopX2 from '../images/no-news-desktop@2x.png';
import tablet from '../images/no-news-tablet.png';
import tabletX2 from '../images/no-news-tablet@2x.png';
import mobile from '../images/no-news-mobile.png';
import mobileX2 from '../images/no-news-mobile@2x.png';

const container = document.querySelector('#art-container');

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
                            Add to favorite
                            <svg class="button-card-icon" width="16" height="16">
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

const renderAccordion = (dateString, articles) => {
  const date = new Date(dateString);
  const content = renderArticles(articles);
  const { day, month, year } = normalizeDate(date);
  const accordion = document.createElement('div');
  accordion.classList.add('read__list-wrapper');
  accordion.innerHTML = `<h2 class="read__date">
                            ${day}/${month}/${year}
                            <svg class="read__date-icon" width="14" height="9">
                                <use href="${sprite}#arrow_up"></use>
                            </svg>
                            </h2>
                            `;
  accordion.append(content);
  container.append(accordion);
};

export const renderPage = () => {
  const articls = JSON.parse(localStorage.getItem('readArticles'));

  if (articls === null) {
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
                <img class="read__no-news" src="${mobile}"
                    alt="Зображення не має новин">
            </picture>`;
    return;
  }

  for (const key in articls) {
    renderAccordion(key, articls[key]);
  }

  const list = document.querySelectorAll('.read__list-wrapper');

  for (let i = 0; i < list.length; i += 1) {
    list[i].children[0].addEventListener('click', () => {
      list[i].children[0].children[0].classList.toggle('read--rotate');
      const clientHeight = list[i].clientHeight;
      const height = list[i].scrollHeight;
      if (clientHeight > 33) {
        list[i].style.height = '33px';
        return;
      }
      list[i].style.height = `${height}px`;
    });
  }
};

renderPage();
