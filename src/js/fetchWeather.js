// import { weatherByGeolocation } from './geolocation.js';
// export async function fetchWeather(city) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2fa5e7124eb1861eb7ba33fe6cd0b40a`
//     );
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function app() {
//   const weather = await weatherByGeolocation();
// }
// app();
import { weatherByGeolocation } from './geolocation.js';

export async function fetchWeather(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2fa5e7124eb1861eb7ba33fe6cd0b40a`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector('.weather-card__degrees').innerHTML =
        Math.round(data.main.temp) + '&deg;';
      document.querySelector('.weather-card__forecast').innerHTML =
        data.weather[0]['description'].charAt(0).toUpperCase() +
        data.weather[0]['description'].slice(1);
      document.querySelector('.weather-card__geolocation').innerHTML =
        data.name;
      document.querySelector(
        '.weather-card__icon'
      ).innerHTML = `<img class="icon__w" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
      document.querySelector('.weather-card__date').innerHTML =
        new Date().toDateString();
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function app() {
  const weather = await weatherByGeolocation();
}
app();
