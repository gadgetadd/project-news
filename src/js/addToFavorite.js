const addToFavoriteBtns = document.querySelectorAll('.button-card');
const cardsNewsEl = document.querySelector('.news');

cardsNewsEl.addEventListener('click', addToFavorite);

function addToFavorite(e) {
  // Отримати інформацію про додану новину

  if (!e.target.closest('.button-card')) {
   return
  }
 const newsCard = e.target.closest('.news__item');
 console.log(newsCard);
  // // Отримати масив новин, які вже додані в обране (якщо такі є)
  // let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];
  // console.log('favoriteNews', favoriteNews);
  // // Додати нову новину до масиву доданих в обране новин
  // let newsArry = favoriteNews.push(newsCard);
  // console.log(newsArry);

  // // Зберегти масив доданих в обране новин в локальному сховищі браузера
  // localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

  //   hasCard = card => favoriteNews.some(({ id }) => id === card.id);
}
