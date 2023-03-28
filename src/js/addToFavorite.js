import { availabilityCheck } from './addToRead';

const articleInFavorites = (elem) => {
    elem.children[0].children[0].children[2].childNodes[0].textContent = 'Remove from favorite';
    elem.children[0].children[0].children[2].children[0].classList.add('button-card-icon-remove');
};

const addingInFavorite = (evt) => {
    const article = {
        id: el.attributes[1].value,
        category: el.children[0].children[0].children[1].textContent,
        date: el.children[1].children[0].attributes[0].value,
        descr: el.children[0].children[2].innerText,
        image: el.children[0].children[0].children[0].children[0].children[2].attributes[1].value,
        title: el.children[0].children[1].innerText,
        url: el.children[1].children[1].attributes[1].value,
    };
    
    favoriteArticles.push(article);
    localStorage.setItem('favoriteArticles', JSON.stringify(favoriteArticles));
    articleInFavorites(el);
    el.addEventListener('click', removingIntoFavorite, { once: true });
};

const removingIntoFavorite = (evt) => {
    el.children[0].children[0].children[2].childNodes[0].textContent = 'Add to favorite';
    el.children[0].children[0].children[2].children[0].classList.remove('button-card-icon-remove');
    el.addEventListener('click', addingInFavorite, { once: true});
};

export const addToFavorite = () => {
    if (!(localStorage.getItem('favoriteArticles'))) {
        localStorage.setItem('favoriteArticles', JSON.stringify([]));
    };

    const articles = document.querySelectorAll('.news__item');
    const favoriteArticles = [...JSON.parse(localStorage.getItem('favoriteArticles'))];

    for (let i = 0; i < articles.length; i += 1) {
        const el = articles[i];
        if (availabilityCheck(favoriteArticles, el.children[0].children[1].innerText)) {
            articleInFavorites(el);
            continue;
        };

        el.addEventListener('click', addingInFavorite, { once: true});
    };
};

export const removeFromFavorite = () => {
    const articles = document.querySelectorAll('.news__item');
    const favoriteArticles = [...JSON.parse(localStorage.getItem('favoriteArticles'))];

    for (let i = 0; i < articles.length; i += 1) {
        const el = articles[i];

        if (favoriteArticles.some((elem) => elem.id === el.attributes[1].value)) {
            el.addEventListener('click', removingIntoFavorite, { once: true });
        };
    };
};