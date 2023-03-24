import './js/mobile-menu.js';

import { Categories, Search, Popular, Category } from './js/NewsAPI';

const func = async () => {
  const cats = new Categories();
  const res2 = await cats.get();
  console.log(res2);

  const search = new Search('ukraine');
  const res = await search.get();
  console.log(res);

  const pop = new Popular();
  const res3 = await pop.get();
  console.log(res3);

  const cat = new Category('Smarter Living');
  const res4 = await cat.get();
  console.log(res4);
};

func();
