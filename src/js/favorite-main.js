// import sprite from '../images/icons.svg';
// import desktop from '../images/no-news-desktop.png';
// import desktopX2 from '../images/no-news-desktop@2x.png';
// import tablet from '../images/no-news-tablet.png';
// import tabletX2 from '../images/no-news-tablet@2x.png';
// import mobile from '../images/no-news-mobile.png';
// import mobileX2 from '../images/no-news-mobile@2x.png';
// const container = document.querySelector('#art-container');

import { createCardsMarkup } from './card-main';

function displayFavorites() {
  const gallery = document.querySelector('.gallery');
  let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews'));
  const cardsMarkup = createCardsMarkup(favoriteNews);
  gallery.insertAdjacentHTML('afterbegin', cardsMarkup);
}

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

displayFavorites();
