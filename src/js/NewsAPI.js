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
  static BASE_URL = 'https://api.nytimes.com/svc/';
  static API_KEY = 'vVHb9x2ZvJACextBSwzpPJg5KNN9Tso5';
}

export class Categories extends NewsAPI {
  static URL = `${this.BASE_URL}news/v3/content/section-list.json`;
  static options = { ['api-key']: this.API_KEY };

  static async get() {
       try {
      const response = await axios.get(this.URL, {
        params: this.options,
      });
      return response;
    } catch {
      throw new Error('data retrieval error');
    }
  }
}


