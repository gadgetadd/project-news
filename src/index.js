import { fetchWeather } from "./js/fetchWeather";
import { weatherByGeolocation } from "./js/geolocation";
import { fetchWeather } from "./js/fetchWeather";


const weatherCard = document.querySelector('.weather-card');

function renderCard(arr) {
    const markup = arr
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `
          <div class="photo-card">
          <a href="${largeImageURL}">
          <img class="gallery__image" 
          src="${webformatURL}" 
          alt="${tags}" 
          loading="lazy"/>
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span>${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span>${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span>${downloads}</span>
            </p>
          </div>
        </div>
  `;
        }
      )
      .join('');
    gallery.insertAdjacentHTML('beforeend', markup);
  }