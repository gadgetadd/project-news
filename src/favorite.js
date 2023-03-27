import './js/mobile-menu.js';
import './js/switch';

// Отримати кнопку AddToFavorite
const addToFavoriteBtn = document.querySelector('.button-card');
addToFavoriteBtn.addEventListener('click', addToFavorite);

function addToFavorite() {
  // Отримати інформацію про додану новину
  const newsCard = document.querySelector('.news');

  // Отримати масив новин, які вже додані в обране (якщо такі є)
  let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];

  // Додати нову новину до масиву доданих в обране новин
  favoriteNews.push(newsCard);

  // Зберегти масив доданих в обране новин в локальному сховищі браузера
  localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

  // hasCard = card => favoriteNews.some(({ id }) => id === card.id);
}

// Відображаємо галерею зі списком збережених новин
const favoriteGallery = document.querySelector('#favorite-gallery');
favoriteNews.forEach(news => {
  const newsCard = document.createElement('div');
  newsCard.innerHTML = ` 
    // <h2>${news.title}</h2>
    // <p>${news.description}</p>
    // <button data-id="${news.id}" class="remove-btn">RemoveFromFavorite</button>
  `;
  favoriteGallery.appendChild(newsCard);
});

function removeFromFavorite(id) {
  // Отримуємо список збережених новин з локального сховища
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Шукаємо новину за її ідентифікатором
  const index = favorites.findIndex(item => item.id === id);

  // Якщо новина знайдена, видаляємо її зі списку
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // Видаляємо картку зі сторінки Favorite
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.remove();
  }
}
