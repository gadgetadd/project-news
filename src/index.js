import './js/mobile-menu.js';

import { Categories, Search, Popular, Category } from './js/NewsAPI';

async function func() {
  const search = new Search('ukraine and israel');
  const res = await search.get();
  console.log(res);

  // const pop = new Popular();
  // const res3 = await pop.get();
  // console.log(res3);

  // const cat = new Category('all');
  // const res4 = await cat.get();
  // console.log(res4);
}
func();
