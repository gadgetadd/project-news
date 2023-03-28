import sprite from '../images/icons.svg';
import { availabilityCheck } from './addToRead';

const articleInFavorites = (elem) => {
    elem.textContent = 'Remove from favorite';
    elem.children[0].children[0].children[2].children[0].classList.add('button-card-icon-remove');
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
    
        el.addEventListener('click', (evt) => {
            
        });
    };
    // articleInFavorites();
};