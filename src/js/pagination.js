// createPagination.popular(). Функція запускається по замовчуванню при відкритті домашньої сторінки.
// Функція повертає з запиту масив для відмальовки першої сторінки.

// сreatePagination.category(arg). Функцію запускає слухач подій на кнопках категорій. Агрументом потрібно передати назву категорії з кнопки.
// Функція повертає з запиту масив для відмальовки першої сторінки.

// сreatePagination.search(arg).Функцію запускає слухач подій на сабміті поля пошуку. Агрументом потрібно пошуковий запит з інпуту.
// Функція повертає з запиту масив для відмальовки першої сторінки.

// сreatePagination.onPageChange().
// При переході на інші сторінки, слухачем подій запускається функція для рендеру, в яку агрументом передається функція CreatePagination.onPageChange.
// Функція повертає масив для відмальовки необхідної сторінки.

import { Popular, Category, Search } from './NewsAPI';
import { createCardsMarkup } from './card-main';
import { weatherByGeolocation } from './geolocation.js';
import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

const cardsNewsEl = document.querySelector('.news');
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
    console.log(valuePage);
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
    const popular = new Popular();
    const response = await popular.get();
    valuePage.response = response;
    // console.log('response :', response);
    const weatherCard = await weatherByGeolocation();
    setPageParam(response);
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage * valuePage.curPage
    );
    pagination();
    spinner.stop();
    renderPopular(itemsToShow, weatherCard);
    return [itemsToShow, weatherCard];
  },

  async category(cat) {
    cardsNewsEl.innerHTML = '';
    spinner.spin(cardsNewsEl);
    valuePage.searchType = 'category';
    const category = new Category(cat);
    const response = await category.get();
    valuePage.response = response;
    // console.log('response :', response);
    setPageParam(response);
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage * valuePage.curPage
    );
    pagination();
    spinner.stop();
    renderDefault(itemsToShow);
    // console.log('картки для відмальовки', itemsToShow);
    return itemsToShow;
  },
  async search(input, date = null) {
    cardsNewsEl.innerHTML = '';
    spinner.spin(cardsNewsEl);
    valuePage.searchType = 'search';
    valuePage.searchParam = input;
    const search = new Search(input, date);
    const response = await search.get();
    valuePage.totalHits = search.getHits();
    // console.log('response :', response);
    setPageParam(response);
    const itemsToShow = response.slice(
      valuePage.itemsPerPage * (valuePage.curPage - 1),
      valuePage.itemsPerPage * valuePage.curPage
    );
    pagination();
    // console.log('картки для відмальовки', itemsToShow);
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
      // console.log('response :', response);
      const itemsToShow = response.slice(0, valuePage.itemsPerPage);
      pagination();
      spinner.stop();
      renderDefault(itemsToShow);
      // console.log('картки для відмальовки', itemsToShow);
      return itemsToShow;
    }
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
  return ` <li class="pagination__item ${active}" data-page="${index}">
        ${index}
    </li>`;
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

  // if (
  //   valuePage.searchType === 'popular' ||
  //   valuePage.searchType === 'category'
  // ) {
  // }
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
  if (window.innerWidth < 768) {
    news.splice(0, 0, weather);
  } else if (window.innerWidth < 1280) {
    news.splice(1, 0, weather);
  } else {
    news.splice(2, 0, weather);
  }
  return news;
}

export function renderPopular(data, weather) {
  const news = createCardsMarkup(data);
  const markup = detectViewport(news, weather).join('');
  cardsNewsEl.innerHTML = markup;
}

function renderDefault(data) {
  const markup = createCardsMarkup(data).join('');
  cardsNewsEl.innerHTML = markup;
}

export const firstPageData = createPagination.popular();
