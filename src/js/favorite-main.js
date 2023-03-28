import sprite from '../images/icons.svg';
import desktop from '../images/no-news-desktop.png';
import desktopX2 from '../images/no-news-desktop@2x.png';
import tablet from '../images/no-news-tablet.png';
import tabletX2 from '../images/no-news-tablet@2x.png';
import mobile from '../images/no-news-mobile.png';
import mobileX2 from '../images/no-news-mobile@2x.png';

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
                </li>`);
  }, '');
  list.insertAdjacentHTML('beforeend', articlesHTML);
  return list;
};

export const renderPage = () => {
  const articls = JSON.parse(localStorage.getItem('favoriteArticles'));

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
                <img class="favorite__no-news" src="${mobile}"
                    alt="Зображення не має новин">
            </picture>`;
    return;
  }

  const list = document.querySelectorAll('.favorite__list-wrapper');
  console.log(list);

  for (let i = 0; i < list.length; i += 1) {
    list[i].children[0].addEventListener('click', () => {
      list[i].children[0].children[0].classList.toggle('favorite--rotate');
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

// function removeFromFavorite(id) {
//   // Отримуємо список збережених новин з локального сховища
//   let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//   // Шукаємо новину за її ідентифікатором
//   const index = favorites.findIndex(item => item.id === id);

//   // Якщо новина знайдена, видаляємо її зі списку
//   if (index !== -1) {
//     favorites.splice(index, 1);
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }

//   // Видаляємо картку зі сторінки Favorite
//   const card = document.getElementById(`card-${id}`);
//   if (card) {
//     card.remove();
//   }
// }
