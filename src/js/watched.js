// import { STORAGE_KEY_WATCHED } from "./constants";
import { loadLocalStorage } from "./storage";
import { IMG_BASE_URL, IMG_W500, getMovieDetails } from "./api";

document.addEventListener('DOMContentLoaded', function() {
  const watchedButton = document.querySelector('#watchedButton');
  watchedButton.addEventListener('click', displayWatchedMovies);
  handleWatchedButtonClick();

  function displayWatchedMovies() {
    const watchedMoviesList = document.querySelector('.watched-movies-list');
    const queueMoviesList = document.querySelector('.queue-movies-list');
    watchedMoviesList.classList.remove('inactive')
    queueMoviesList.classList.add('inactive')
  }

  function handleWatchedButtonClick() {
    const watchedMoviesList = document.querySelector('.watched-movies-list');


    const watchedMovies = loadLocalStorage('watched');

    if (watchedMovies && watchedMovies.length > 0) {
      var movies = getWatchedMoviesDetails(watchedMovies);
      const postersMarkup = movies.map(({ original_title, poster_path }) => {
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
    } else {
      watchedMoviesList.innerHTML = '<p>No watched movies found.</p>';
      // Schimbă starea vizibilității
    }
  }
});

function  getWatchedMoviesDetails(watchedMovies) {
  const moviesData = loadLocalStorage('moviesData');
  var moviesDetailed = [];
  for (let i = 0; i < watchedMovies.length; i++) {
    for (let j = 0; j < moviesData.length; j++) {
      if (parseInt(moviesData[j].id) === parseInt(watchedMovies[i])) {
        moviesDetailed.push(moviesData[j]);
      }
    }
  }
  return moviesDetailed;
}

