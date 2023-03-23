import axios from 'axios';

// categoriesListURL =
//   'https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=vVHb9x2ZvJACextBSwzpPJg5KNN9Tso5';
// categoryURL =
//   'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=yourkey';
// searchURL =
//   'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey';
// popularURL =
//   'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey';

class NewsAPI {
  BASE_URL = 'https://api.nytimes.com/svc/';
  API_KEY = 'vVHb9x2ZvJACextBSwzpPJg5KNN9Tso5';

  async get() {
    try {
      const response = await axios.get(this.URL, {
        params: this.options,
      });
      return this.normalize(response.data);
    } catch {
      throw new Error('data retrieval error');
    }
  }
}

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

export class Search extends NewsAPI {
  URL = `${this.BASE_URL}search/v2/articlesearch.json`;
  options = { ['api-key']: this.API_KEY };

  constructor(query) {
    super();
    this.options.fq = query;
  }

  normalize({ response: { docs } }) {
    return docs.map(doc => {
      return {
        id: doc._id,
        category: doc.section_name,
        image: doc.multimedia[0]
          ? `https://static01.nyt.com/${doc.multimedia[0].url}`
          : 'https://demofree.sirv.com/nope-not-here.jpg?w=400',
        title: doc.abstract,
        descr: doc.lead_paragraph,
        date: doc.pub_date,
        url: doc.web_url,
      };
    });
  }
}

export class Popular extends NewsAPI {
  URL = `${this.BASE_URL}mostpopular/v2/viewed/1.json`;
  options = { ['api-key']: this.API_KEY };

  constructor() {
    super();
  }

  normalize({ results }) {
    return results.map(res => {
      return {
        id: res.id,
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
