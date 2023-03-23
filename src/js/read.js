import axios from 'axios';

const URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';
const API_KEY = 'OBK3Did8o78UsdlrjUGmAIlHx1LUyO5b';

const getnews = (url, key) => {
    axios.get(`${url}`, {
    params: {
        'api-key': key
    }
    })
    .then(function (response) {
        console.log(response.data.results);
    })
    .catch(function (error) {
        console.log(error);
    });
};


getnews(URL, API_KEY)