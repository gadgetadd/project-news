import { Categories } from './js/NewsAPI';

const func = async () => {
  const res = await Categories.get();
  console.log(res);
};

func();
