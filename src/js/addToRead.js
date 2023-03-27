export const addToRead = () => {
    const AllArticles = document.querySelectorAll('.news__item');

    for (let i = 0; i < AllArticles.length; i += 1) {
        const el = AllArticles[i];

        el.children[1].children[1].addEventListener('click', (evt) => {
            const articlesRead = {...(JSON.parse(localStorage.getItem('readArticles')))}
            const article = {
                category: el.children[0].children[0].children[1].textContent,
                date: el.children[1].children[0].attributes[0].value,
                descr: el.children[0].children[2].innerText,
                image: el.children[0].children[0].children[0].children[2].attributes[1].value,
                title: el.children[0].children[1].textContent,
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

const availabilityCheck = (arr, value) => {
    return arr.some((el) => {
        return (el.title === value)
    }); 
};