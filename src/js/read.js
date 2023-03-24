// import axios from 'axios';

// const URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';
// const API_KEY = 'OBK3Did8o78UsdlrjUGmAIlHx1LUyO5b';
// const test = document.querySelector('.test');

// const getnews = (url, key) => {
//    axios.get(`${url}`, {
//         params: {
//             'api-key': key
//         }
//     })
//         .then(function (response) {
//             return console.log(response);;
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// };

// getnews(URL, API_KEY)

const list = document.querySelector('.read__list-wrapper')

list.addEventListener('click', () => {
    list.classList.toggle('open');
})

const renderRead = () => {
    const articls = localStorage.getItem('readArticle');
    
    articls.reduce((acc, el) => {
        acc += `
            `
    },'')
};

// renderRead()