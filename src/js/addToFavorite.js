import { availabilityCheck } from './addToRead';

const articleInFavorites = (elem) => {
    elem.children[0].children[0].children[2].childNodes[0].textContent = 'Remove from favorite';
    elem.children[0].children[0].children[2].children[0].classList.add('button-card-icon-remove');
};

const addingInFavorite = (el, arr, id) => {
    const article = {
        id: el.attributes[1].value,
        category: el.children[0].children[0].children[1].textContent,
        date: el.children[1].children[0].attributes[0].value,
        descr: el.children[0].children[2].innerText,
        image: el.children[0].children[0].children[0].children[0].children[2].attributes[1].value,
        title: el.children[0].children[1].innerText,
        url: el.children[1].children[1].attributes[1].value,
    };
    
    arr.push(article);
    localStorage.setItem('favoriteArticles', JSON.stringify(arr));
    articleInFavorites(el);

    el.children[0].children[0].children[2].addEventListener('click', (evt) => {
        removingIntoFavorite(el, arr, id);
    }, { once: true });
};

const removingIntoFavorite = (el, arr = [], id) => {
    const index = arr.findIndex((elem) => elem.id === id);
    arr.splice(index, 1);
    localStorage.setItem('favoriteArticles', JSON.stringify(arr));

    el.children[0].children[0].children[2].childNodes[0].textContent = 'Add to favorite';
    el.children[0].children[0].children[2].children[0].classList.remove('button-card-icon-remove');

    el.children[0].children[0].children[2].addEventListener('click', (evt) => {
            addingInFavorite(el, arr);
        }, { once: true});
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

        el.children[0].children[0].children[2].addEventListener('click', (evt) => {
            addingInFavorite(el, favoriteArticles, el.attributes[1].value);
        }, { once: true});
    };
};

export const removeFromFavorite = () => {
    const articles = document.querySelectorAll('.news__item');
    const favoriteArticles = [...JSON.parse(localStorage.getItem('favoriteArticles'))];

    for (let i = 0; i < articles.length; i += 1) {
        const el = articles[i];

        if (favoriteArticles.some((elem) => elem.id === el.attributes[1].value)) {
            el.children[0].children[0].children[2].addEventListener('click', (evt) => {
                removingIntoFavorite(el, favoriteArticles, el.attributes[1].value);
            }, { once: true });
        };
    };
};

addToFavorite();
removeFromFavorite();