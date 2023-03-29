// createPagination.popular(). Функція запускається по замовчуванню при відкритті домашньої сторінки.
// Функція повертає з запиту масив для відмальовки першої сторінки.

// сreatePagination.category(arg). Функцію запускає слухач подій на кнопках категорій. Агрументом потрібно передати назву категорії з кнопки.
// Функція повертає з запиту масив для відмальовки першої сторінки.

// сreatePagination.search(arg).Функцію запускає слухач подій на сабміті поля пошуку. Агрументом потрібно пошуковий запит з інпуту.
// Функція повертає з запиту масив для відмальовки першої сторінки.

// сreatePagination.onPageChange().
// При переході на інші сторінки, слухачем подій запускається функція для рендеру, в яку агрументом передається функція CreatePagination.onPageChange.
// Функція повертає масив для відмальовки необхідної сторінки.
import desktop from '../images/no-news-desktop.png';
import desktopX2 from '../images/no-news-desktop@2x.png';
import tablet from '../images/no-news-tablet.png';
import tabletX2 from '../images/no-news-tablet@2x.png';
import mobile from '../images/no-news-mobile.png';
import mobileX2 from '../images/no-news-mobile@2x.png';

import { Popular, Category, Search } from './NewsAPI';
import { createCardsMarkup } from './card-main';
import { weatherByGeolocation } from './geolocation.js';
import { Spinner } from 'spin.js';
import { addToRead } from './addToRead.js';
import { addToFavorite } from './addToFavorite.js';
import { removeFromFavorite } from './addToFavorite.js';
import 'spin.js/spin.css';
import moment from 'moment/moment';

const cardsNewsEl = document.querySelector('.news');
const mainPage = document.querySelector('.card-news__wrap');
const pgBlock = document.querySelector('.pagination');
const pg = document.getElementById('pagination');
const btnNextPg = document.querySelector('button.pagination__button--next');
const btnPrevPg = document.querySelector('button.pagination__button--prev');

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 0,
  itemsPerPage: 0,
  totalPages: 0,
  searchType: '',
  searchParam: '',
  totalHits: 0,
  response: {},
};

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

function setPageParam(response) {
  const device = typeOfDevice();
  if (device === 'mobile') {
    valuePage.itemsPerPage = 5;
    valuePage.numLinksTwoSide = 0;
  } else if (device === 'tablet') {
    valuePage.itemsPerPage = 8;
  } else {
    valuePage.itemsPerPage = 9;
  }
  if (valuePage.searchType === 'search') {
    if (valuePage.totalHits > 1000) {
      valuePage.totalHits = 1000;
    }
    valuePage.totalPages = Math.ceil(valuePage.totalHits / 10);
        return;
  }
  valuePage.totalPages = Math.ceil(response.length / valuePage.itemsPerPage);
}

export function typeOfDevice() {
  if (window.matchMedia('(max-width:767px)').matches) {
    return 'mobile';
  } else if (window.matchMedia('(min-width:1280px)').matches) {
    return 'desktop';
  } else {
    return 'tablet';
  }
}

export const createPagination = {
  async popular() {
    spinner.spin(cardsNewsEl);
    valuePage.searchType = 'popular';
    valuePage.curPage = 1;
    const popular = new Popular();
    const response = await popular.get();
    valuePage.response = response;
       const weatherCard = await weatherByGeolocation();
    setPageParam(response);
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage - 1 * valuePage.curPage
    );
    pagination();
    spinner.stop();
    renderPopular(itemsToShow, weatherCard);
    return [itemsToShow, weatherCard];
  },

  async category(cat, date = null) {
    cardsNewsEl.innerHTML = '';
    spinner.spin(cardsNewsEl);
    valuePage.searchType = 'category';
    valuePage.curPage = 1;
    const category = new Category(cat);
    let response = await category.get();
    if (date) {
      const normalizedDate = moment(date).format('YYYY-MM-DD');
      const filteredResponse = response.filter(
        value => value.date.slice(0, 10) === normalizedDate
      );
      response = filteredResponse;
    }
    valuePage.response = response;
    
    setPageParam(response);
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage * valuePage.curPage
    );
    pagination();
    spinner.stop();
    renderDefault(itemsToShow);
  
    return itemsToShow;
  },

  async search(input, date = null) {
    cardsNewsEl.innerHTML = '';
    spinner.spin(cardsNewsEl);
    valuePage.searchType = 'search';
    valuePage.searchParam = input;
    valuePage.curPage = 1;
    const search = new Search(input, date);
    const response = await search.get();
    valuePage.totalHits = search.getHits();
   
    setPageParam(response);
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage * valuePage.curPage
    );
    pagination();
    
    spinner.stop();
    renderDefault(itemsToShow);
  },

  async onPageChange() {
    cardsNewsEl.innerHTML = '';
    spinner.spin(cardsNewsEl);
    if (valuePage.searchType === 'search') {
      const search = new Search(valuePage.searchParam);
      search.setPage(valuePage.curPage - 1);
      const response = await search.get();
    
      const itemsToShow = response.slice(0, valuePage.itemsPerPage);
      pagination();
      spinner.stop();
      renderDefault(itemsToShow);
      
      return itemsToShow;
    }
    const response = valuePage.response;
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage * valuePage.curPage
    );
    pagination();

    spinner.stop();
    renderDefault(itemsToShow);

    return itemsToShow;
  },
};

function pagination() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;
  const range = delta + 4; // use for handle visible number of links left side

  let render = '';
  let renderTwoSide = '';
  let dot = `...`;
  let countTruncate = 0; // use for ellipsis - truncate left side or right side

  // use for truncate two side
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;

  let active = '';
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'pagination__item--active' : '';

    // truncate
    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        // truncate 2 side
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        // truncate left side or right side
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      // not truncate
      render += renderPage(pos, active);
    }
  }

  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    pg.innerHTML = renderTwoSide;
  } else {
    pg.innerHTML = render;
  }
}

function renderPage(index, active = '') {
  return ` <div class="pagination__item ${active}" data-page="${index}">
        ${index}
    </div>`;
}

document.querySelector('.pagination').addEventListener('click', function (e) {
  handleButton(e.target);
});

function handleButton(element) {
  if (element.classList.contains('pagination__button--prev')) {
    valuePage.curPage--;
    handleButtonLeft();
    btnNextPg.disabled = false;
  } else if (element.classList.contains('pagination__button--next')) {
    valuePage.curPage++;
    handleButtonRight();
    btnPrevPg.disabled = false;
  }

  if (element.dataset.page) {
    const pageNumber = parseInt(element.dataset.page, 10);
    valuePage.curPage = pageNumber;
    handleButtonLeft();
    handleButtonRight();
  }


  createPagination.onPageChange();
}

function handleButtonLeft() {
  if (valuePage.curPage === 1) {
    btnPrevPg.disabled = true;
  } else {
    btnPrevPg.disabled = false;
  }
}
function handleButtonRight() {
  if (valuePage.curPage === valuePage.totalPages) {
    btnNextPg.disabled = true;
  } else {
    btnNextPg.disabled = false;
  }
}

// createPagination.popular();

// Функція для першої сторінки
function detectViewport(news, weather) {
  if (typeOfDevice() === 'mobile') {
    news.splice(0, 0, weather);
  } else if (typeOfDevice() === 'tablet') {
    news.splice(1, 0, weather);
  } else {
    news.splice(2, 0, weather);
  }
  return news;
}

export function renderPopular(data, weather) {
  if (data.length === 0) {
    pgBlock.classList.add('pagination--disabled');
    return placeholder();
  }
  const news = createCardsMarkup(data);
  const markup = detectViewport(news, weather).join('');
  pgBlock.classList.remove('pagination--disabled');
  cardsNewsEl.innerHTML = markup;
  addToRead();
  addToFavorite();
  removeFromFavorite();
}

function renderDefault(data) {
  if (data.length === 0) {
    pgBlock.classList.add('pagination--disabled');
    return placeholder();
  }
  const markup = createCardsMarkup(data).join('');
  pgBlock.classList.remove('pagination--disabled');
  cardsNewsEl.innerHTML = markup;
  addToRead();
  addToFavorite();
  removeFromFavorite();
}

function placeholder() {
  mainPage.innerHTML = ` <picture>
                <source
                    srcset="${mobile} 1x, ${mobileX2} 2x"
                    media="(max-width: 767px)">
                <source
                    srcset="${tablet} 1x, ${tabletX2} 2x"
                    media="(max-width: 1279px)">
                <source
                    srcset="${desktop} 1x, ${desktopX2} 2x"
                    media="(min-width: 1280px)">
                <img class="main__no-news" src="${mobile}"
                    alt="Зображення не має новин">
            </picture>`;
}

export const firstPageData = createPagination.popular();
