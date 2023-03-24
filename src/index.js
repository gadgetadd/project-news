// import { fetchWeather } from "./js/fetchWeather";
import { weatherByGeolocation } from "./js/geolocation";
import { fetchWeather } from "./js/fetchWeather";


const btn = document.querySelector('.btn');
// btn.addEventListener('click', weatherByGeolocation);
btn.addEventListener('click', fetchWeather);
