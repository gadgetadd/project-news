import './js/mobile-menu.js';
import './js/switch';

// Отримати кнопку AddToFavorite
const addToFavoriteBtn = document.querySelector('.button-card');
addToFavoriteBtn.addEventListener('click', addToFavorite);

function addToFavorite() {
  // Отримати інформацію про додану новину
  const newsCard = document.querySelector('.news__item');

  // Отримати масив новин, які вже додані в обране (якщо такі є)
  let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];

  // Додати нову новину до масиву доданих в обране новин
  favoriteNews.push(newsCard);

  // Зберегти масив доданих в обране новин в локальному сховищі браузера
  localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

  //   hasCard = card => favoriteNews.some(({ id }) => id === card.id);
}

function displayFavorites() {
  const gallery = document.getElementById('.gallery');
  //   let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];
  //   // очищаємо попередній контент галереї
  //   gallery.innerHTML = '';

  // проходимося по списку збережених новин та створюємо картки для кожної з них
  favoriteNews.forEach(news => {
    const favoriteCard = createCard(news);
    gallery.appendChild(favoriteCard);
  });
}

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
