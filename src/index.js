import './js/mobile-menu.js';

import { Categories, Search, Popular } from './js/NewsAPI';

const func = async () => {
  // const arch = new Search('ukraine');
  // const res = await arch.get();
  // console.log(res);
  // const cat = new Categories();
  // const res2 = await cat.get();
  // console.log(res2);
  const pop = new Popular();
  const res3 = await pop.get();
  console.log(res3);
};

func();
