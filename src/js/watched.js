// import { STORAGE_KEY_WATCHED } from "./constants";
import { loadLocalStorage } from "./storage";
import { IMG_BASE_URL, IMG_W500 } from "./api";

document.addEventListener('DOMContentLoaded', function() {
  let isContentVisible = false; // Variabilă pentru a ține evidența stării vizibilității
  
  const watchedButton = document.querySelector('#watchedButton');
  watchedButton.addEventListener('click', handleWatchedButtonClick);
  
  function handleWatchedButtonClick() {
    const watchedMoviesList = document.querySelector('.watched-movies-list');
    
    if (isContentVisible) {
      // Elimină conținutul
      watchedMoviesList.innerHTML = ''; 
      // Schimbă starea vizibilității
      isContentVisible = false; 
    } else {
      const watchedMovies = loadLocalStorage('moviesData');
  
      if (watchedMovies && watchedMovies.length > 0) {
        const limitedMovies = watchedMovies.slice(0, 6);
        const postersMarkup = limitedMovies.map(({ original_title, poster_path }) => {
          let posterPath = '';
          if (poster_path) { 
            posterPath = `${IMG_BASE_URL}${IMG_W500}/${poster_path}`;
          } else { 
            posterPath = 'No found poster!';
          }
          return `
            <div class='container-posters-ls'><img class='poster-list-img' src="${posterPath}" alt="${original_title} loading='lazy'">
            <h3 class='poster-list-title'>${original_title}</h3></div>
          `;
        }).join('');
  
        watchedMoviesList.innerHTML = postersMarkup;
        // Schimbă starea vizibilității
        isContentVisible = true; 
      } else {
        watchedMoviesList.innerHTML = '<p>No watched movies found.</p>';
        // Schimbă starea vizibilității
        isContentVisible = true; 
      }
    }
  }
});

