import sprite from '../images/icons.svg';

export const availabilityCheck = (arr, value) => {
    return arr.some((el) => {
        return (el.title === value)
    }); 
};

const alreadyRead = (elem) => {
    elem.classList.add('read__already-read');
    const isRead = `<span class="is-read">
                    Already read
                    <svg class="is-read__icon" width="15" height="11">
                        <use href="${sprite}#icon-check"></use>
                    </svg>
                    </span>`;
    elem.insertAdjacentHTML('beforeend', isRead)
};

export const addToRead = () => {
    if (!(localStorage.getItem('readArticles'))) {
        localStorage.setItem('readArticles', JSON.stringify({}));
    };


    const AllArticles = document.querySelectorAll('.news__item');
    const articlesRead = { ...(JSON.parse(localStorage.getItem('readArticles'))) };

    for (let i = 0; i < AllArticles.length; i += 1) {
        const el = AllArticles[i];

        for (const key in articlesRead) {
            if (key === el.children[1].children[0].attributes[0].value) {
                if (availabilityCheck(articlesRead[key], el.children[0].children[1].innerText)) {
                    alreadyRead(el);
                };
            };
        };

        el.children[1].children[1].addEventListener('click', (evt) => {
            const article = {
                id: el.attributes[1].value,
                category: el.children[0].children[0].children[1].textContent,
                date: el.children[1].children[0].attributes[0].value,
                descr: el.children[0].children[2].innerText,
                image: el.children[0].children[0].children[0].children[0].children[2].attributes[1].value,
                title: el.children[0].children[1].innerText,
                url: el.children[1].children[1].attributes[1].value,
            };

            if (article.date in articlesRead) {
                if (availabilityCheck(articlesRead[article.date], article.title)) {
                    return
                };
                articlesRead[article.date].push(article);
            } else {
                articlesRead[article.date] = [article];
            };

            localStorage.setItem('readArticles', (JSON.stringify(articlesRead)));
        });
    };
};
