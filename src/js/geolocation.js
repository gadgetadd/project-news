import { fetchWeather } from './fetchWeather.js';

export async function weatherByGeolocation() {
  const options = {
    enableHighAccuracy: true,
    timeout: 3500,
    maximumAge: 0,
  };
  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    const coordinates = pos.coords;
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${coordinates.latitude}&lon=${coordinates.longitude}&apiKey=f266ae9456ab4ee184068910bc067d16`
    );
    const result = await response.json();
    const weather = await fetchWeather(result.features[0].properties.city);
    return weather;
  } catch (error) {
    console.log('Error:', error);
    const weather = await fetchWeather('New York');
    return weather;
  }
}
