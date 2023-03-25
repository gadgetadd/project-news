import { fetchWeather } from "./fetchWeather.js";
export function weatherByGeolocation(weather) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = async (pos) => {
    var coordinates = pos.coords;

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&apiKey=f266ae9456ab4ee184068910bc067d16`
    );
    const result = await response.json();
    // console.log(result);
    const weather = await fetchWeather(result.features[0].properties.city);
    // console.log(weather);
  };
  const error = (error) => {
    console.log(error.code + ' ' + error.message);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}