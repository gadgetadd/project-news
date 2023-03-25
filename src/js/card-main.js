const cardNewsEl = document.querySelector('.container');

// searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
}

function renderCardNews(card) {
  const marcup = card
    .map(options => {
      return `<div class="card-wrap">
      <div class="card-wrap__weather"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
      <div class="card-wrap__box"></div>
    </div>`;
    })
    .join();
  // cardNewsEl.insertAdjacentElement('afterbegin', marcup);
}

const elements = renderCardNews;
cardNewsEl.append(...elements);

