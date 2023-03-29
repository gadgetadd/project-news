import sprite from '../images/icons.svg';

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

export function createCardsMarkup(card) {
  return card.map(element => {
    const date = new Date(element.date);
    const { day, month, year } = normalizeDate(date);
    return `
      
            <li class="news__item" id="${element.id}">
                <div class="news__card">
                    <div class="news__img">
                    <div class="news__img-wrap">
                        <picture>
                        <source
                            srcset="${element.image}"
                            media="(max-width: 767px)"
                            width="288"
                            height="395"
                        />
                        <source
                            srcset="${element.image}"
                            media="(max-width: 1279px)"
                            width="353"
                            height="395"
                        />
                        <img
                            class="news__image"
                            srcset="${element.image}"
                            src="${element.image}"
                            alt=""
                            width="395"
                            height="395"
                        />
                        </picture>
                        </div>

                        <p class="news__category">${element.category}</p>

                        <button type="button" class="button-card" aria-label="add to favorite">
                        Add to favorite
                        <svg class="button-card-icon" width="16" height="16">
                            <use href="${sprite}#icons_heart"></use>
                        </svg>
                        </button>
                    </div>
                    <div class="news__title-wrap">
                    <h1 class="news__title">${element.title}</h1>
                    </div>
                    <p class="news__text">
                        ${element.descr}
                    </p>      
                    </div>          
                <div class="news__info">
                    <time datetime="${element.date}" class="news__time">${day}/${month}/${year}</time>
                    <a class="news__link" href="${element.url}" target="_blank">Read more</a>
                </div>
            </li>`;
  });
}
