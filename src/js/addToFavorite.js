const addToFavoriteBtn = document.querySelectorALL('.button-card');
addToFavoriteBtn.forEach(battons => {
  battons.addEventListener('click', addToFavorite);
});

function addToFavorite() {
  // Отримати інформацію про додану новину
  const newsCard = document.querySelector('.news__item');
  console.log(newsCard);

  // Отримати масив новин, які вже додані в обране (якщо такі є)
  let favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];
  console.log('favoriteNews', favoriteNews);
  // Додати нову новину до масиву доданих в обране новин
  let newsArry = favoriteNews.push(newsCard);
  console.log(newsArry);

  // Зберегти масив доданих в обране новин в локальному сховищі браузера
  localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

  //   hasCard = card => favoriteNews.some(({ id }) => id === card.id);
}
