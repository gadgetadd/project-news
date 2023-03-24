fetch(
  'https://api.nytimes.com/svc/news/v3/content/inyt/arts.json?api-key=UCnH8wAkqzUehdRC7M4YLi0SFbn6Zju4'
)
  .then(response => response.json())
  .then(data => console.log(data));
fetch(
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=UCnH8wAkqzUehdRC7M4YLi0SFbn6Zju4&page=3'
)
  .then(response => response.json())
  .then(data => console.log(data));
fetch(
  'https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=UCnH8wAkqzUehdRC7M4YLi0SFbn6Zju4'
)
  .then(response => response.json())
  .then(data => console.log(data));
