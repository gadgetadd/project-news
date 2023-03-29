import axios from 'axios';
import moment from 'moment/moment';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Загальний клас для базових даних і методів

class NewsAPI {
  BASE_URL = 'https://api.nytimes.com/svc/';
  API_KEY = 'vVHb9x2ZvJACextBSwzpPJg5KNN9Tso5';

  async get() {
    try {
      const response = await axios.get(this.URL, {
        params: this.options,
      });
      if (this.hasOwnProperty('hits')) {
        this.hits = response.data.response.meta.hits;
      }
      return this.normalize(response.data);
    } catch {
      Notify.failure('Sorry, error retrieving data. Please try again later.');
    }
  }
}

// Клас для отримання списку категорій

export class CategoriesList extends NewsAPI {
  URL = `${this.BASE_URL}news/v3/content/section-list.json`;
  options = { ['api-key']: this.API_KEY };

  normalize({ results }) {
    return results.map(el => el.display_name);
  }
}

// Клас для пошуку, екземпляр приймає стрічку для запиту, і необов'язковий параметр дата
// (в форматі об'єкта Date або стрічку стандарту ISO 8601)
// приклад застосування:

// import { CategoriesList, Search, Popular, Category } from './js/NewsAPI';

// const search = new Search('ukraine');
// або
// const search = new Search('ukraine', date);
// const res = await search.get();

// створений об'єкт search має методи getHits, getPage, setPage для пагінації
// запит завжди повертає 10 елементів, за документацією максимальне значення сторінки 100, тому можна отримати не більше 1000 результатів не залежно від hits.

export class Search extends NewsAPI {
  URL = `${this.BASE_URL}search/v2/articlesearch.json`;
  options = {
    ['api-key']: this.API_KEY,
    page: 0,
  };
  hits = 0;

  constructor(query, date = null) {
    super();
    if (date) {
      this.options.begin_date = moment(date).format('YYYYMMDD');
      this.options.end_date = moment(date).format('YYYYMMDD');
    }
    this.options.q = encodeURIComponent(query.toLowerCase());
  }

  normalize({ response: { docs } }) {
    return docs.map(res => {
      return {
        id: res.uri.split('/').pop(),
        category: res.section_name,
        image: res.multimedia[0]
          ? `https://static01.nyt.com/${res.multimedia[0].url}`
          : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
        title: res.abstract,
        descr: res.lead_paragraph,
        date: res.pub_date,
        url: res.web_url,
      };
    });
  }
  getHits() {
    return this.hits;
  }
  getPage() {
    return this.options.page;
  }
  setPage(num) {
    this.options.page = num;
  }
}

// Клас для запиту популярних статей, приклад:
// const pop = new Popular();
// const res3 = await pop.get();

export class Popular extends NewsAPI {
  URL = `${this.BASE_URL}mostpopular/v2/viewed/1.json`;
  options = { ['api-key']: this.API_KEY };

  constructor() {
    super();
  }

  normalize({ results }) {
    return results.map(res => {
      return {
        id: res.uri.split('/').pop(),
        category: res.section,
        image: res.media[0]?.['media-metadata'][2]
          ? res.media[0]['media-metadata'][2].url
          : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
        title: res.title,
        descr: res.abstract,
        date: res.published_date,
        url: res.url,
      };
    });
  }
}

// Клас для запиту по категорії, екземпляр приймає стрічку з назвою категорії
//  const cat = new Category('Smarter Living');
//   const res4 = await cat.get();

export class Category extends NewsAPI {
  URL = `${this.BASE_URL}news/v3/content/all/`;
  options = {
    ['api-key']: this.API_KEY,
    limit: 500,
  };

  constructor(category = 'all') {
    super();
    this.URL += `${encodeURIComponent(category.toLowerCase())}.json `;
  }

  normalize({ results }) {
    return results.map(res => {
      return {
        id: res.uri.split('/').pop(),
        category: res.section,
        image:
          res.multimedia && res.multimedia[2]
            ? res.multimedia[2].url
            : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
        title: res.title,
        descr: res.abstract,
        date: res.published_date,
        url: res.url,
      };
    });
  }
}

// Всі запити повертають масив даних одного формату
// category: "Health"
// date: "2023-03-22"
// descr: "By analyzing seven samples of hair said to have come from Ludwig van Beethoven, researchers debunked myths about the revered composer while raising new questions about his life and death."
// id: 100000008820741
// image: "https://static01.nyt.com/images/2023/03/22/multimedia/22beethoven-promo/22beethoven-promo-mediumThreeByTwo440.jpg"
// title: "DNA From Beethoven’s Hair Unlocks Medical and Family Secrets"
// url: "https://www.nytimes.com/2023/03/22/health/beethoven-death-dna-hair.html"
