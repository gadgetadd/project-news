import { weatherByGeolocation } from './geolocation.js';

const weatherCard = document.querySelector('.body');
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const currentDate = new Date();
var dayName = days[currentDate.getDay()];
var month = months[currentDate.getMonth()];

export async function fetchWeather(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2fa5e7124eb1861eb7ba33fe6cd0b40a`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const markup = `<div class="weather-card">
            <div class="weather-card__description">
              <div class="weather-card__temperature">
                <p class="weather-card__degrees">${
                  Math.round(data.main.temp) + '&deg;'
                }</p>
              </div>
              <div class="weather-card__geoblock">
                <p class="weather-card__forecast">${
                  data.weather[0]['description'].charAt(0).toUpperCase() +
                  data.weather[0]['description'].slice(1)
                }</p>
                <p class="weather-card__geolocation">${data.name}</p>
              </div>
            </div>
            <div class="weather-card__icon">${`<img class="icon__weather" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png"></img>`}</div>
            <p class="weather-card__date">${dayName}</p>
            <p class="weather-card__year">${
              currentDate.getUTCDate() +
              ' ' +
              month +
              ' ' +
              currentDate.getFullYear()
            }</p>
          </div>`;
      weatherCard.innerHTML = markup;
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function app() {
  const weather = await weatherByGeolocation();
}
app();
