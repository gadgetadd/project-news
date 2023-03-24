import axios from 'axios';

// Загальний клас для базових даних і методів

class NewsAPI {
  BASE_URL = 'https://api.nytimes.com/svc/';
  API_KEY = 'vVHb9x2ZvJACextBSwzpPJg5KNN9Tso5';

  async get() {
    try {
      const response = await axios.get(this.URL, {
        params: this.options,
      });
      console.log(response.data);
      return this.normalize(response.data);
    } catch {
      throw new Error('data retrieval error');
    }
  }
}

// Клас для отримання списку категорій

export class Categories extends NewsAPI {
  URL = `${this.BASE_URL}news/v3/content/section-list.json`;
  options = { ['api-key']: this.API_KEY };

  async get() {
    try {
      const response = await axios.get(this.URL, {
        params: this.options,
      });
      return response.data.results;
    } catch {
      throw new Error('data retrieval error');
    }
  }
}

// Клас для пошуку, екземпляр приймає стрічку для запиту
// приклад застосування:

// import { Categories, Search, Popular, Category } from './js/NewsAPI';

// const search = new Search('ukraine');
// const res = await search.get();

export class Search extends NewsAPI {
  URL = `${this.BASE_URL}search/v2/articlesearch.json`;
  options = {
    ['api-key']: this.API_KEY,
    page: 0,
  };

  constructor(query) {
    super();
    this.options.fq = query;
  }

  normalize({ response: { docs } }) {
    return docs.map(res => {
      return {
        id: res.uri.split('/').pop(),
        category: res.section_name,
        image: res.multimedia[0]
          ? `https://static01.nyt.com/${res.multimedia[0].url}`
          : 'https://demofree.sirv.com/nope-not-here.jpg?w=400',
        title: res.abstract,
        descr: res.lead_paragraph,
        date: res.pub_date,
        url: res.web_url,
      };
    });
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
          : 'https://demofree.sirv.com/nope-not-here.jpg?w=400',
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

  constructor(category) {
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
            : 'https://demofree.sirv.com/nope-not-here.jpg?w=400',
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
