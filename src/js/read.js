const contsiner = document.querySelector('#art-container');

const renderAccordion = (dateString, articles) => {
    const date = new Date(dateString);
    const content = renderArticles(articles);
    const { day, month, year } = normalizeDate(date)
    const accordion = document.createElement('div');
    accordion.classList.add('read__list-wrapper');
    accordion.innerHTML = `<h2 class="read__date">${day}/${month}/${year}</h2>`;
    accordion.insertAdjacentHTML('beforeend', content);
    contsiner.append(accordion);
};

const normalizeDate = (date) => {
    const zero = '0';
    const normalDate = {
        month: 0,
        day: 0,
        year: date.getFullYear(),
    };

    if (date.getMonth() <= 8) {
        normalDate.month = `${zero}${(date.getMonth() + 1)}`;
    } else {
        normalDate.month = (date.getMonth() + 1);
    };

    if (date.getDate() <= 9) {
        normalDate.day = `${zero}${date.getDate()}`;
    } else {
        normalDate.day = date.getDate();
    };
    return normalDate;
};

const renderArticles = (articles) => {
   return articles.reduce((acc, el) => {
        return acc += `
        <div class="testblock">${el.descr}</div>
        `
    },'')
};

const renderPage = () => {
    const articls = JSON.parse(localStorage.getItem('readArticles'));

    for (const key in articls) {
        renderAccordion(key, articls[key]);
    };

    const list = document.querySelectorAll('.read__list-wrapper')

    for (let i = 0; i < list.length; i += 1) {
        list[i].addEventListener('click', () => {
            const clientHeight = list[i].clientHeight;
            const height = list[i].scrollHeight
            if (clientHeight > 33) {
                list[i].style.height = "33px";
                return;
            };
            list[i].style.height = `${height}px`;
        });
    };
};

renderPage();
