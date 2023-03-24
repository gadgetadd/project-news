import { weatherByGeolocation } from './geolocation.js';
export async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2fa5e7124eb1861eb7ba33fe6cd0b40a`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
async function app() {
  const weather = await weatherByGeolocation();
}
app();
