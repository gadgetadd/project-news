import { createPagination } from './pagination';
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

async function renderPopular() {
  spinner.spin(cardsNewsEl);
  const { news, weather } = await createPagination.popular();
  const result = detectViewport(news, weather);
  const markup = result.join('');
  cardsNewsEl.innerHTML = markup;
  spinner.stop();
}

renderPopular();
