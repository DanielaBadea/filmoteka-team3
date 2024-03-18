// import { STORAGE_KEY_WATCHED } from "./constants";
import { loadLocalStorage} from "./storage";
import { IMG_BASE_URL, IMG_W500 } from "./api";
import { createModal } from "./modal-cards";
document.addEventListener('DOMContentLoaded', function() {
  let isContentVisible = false; 

  const watchedButton = document.querySelector('#watchedButton');
  watchedButton.addEventListener('click', handleWatchedButtonClick);

  function handleWatchedButtonClick() {
    const watchedMoviesList = document.querySelector('.watched-movies-list');

    if (isContentVisible) {
      watchedMoviesList.innerHTML = '';
      isContentVisible = false;
    } else {
      const watchedMovies = loadLocalStorage('watched') || [];

      if (watchedMovies && watchedMovies.length > 0) {
        var movies = getWatchedMoviesDetails(watchedMovies);
        const postersMarkup = movies.map(({ original_title, poster_path, vote_average, id, genre_names, release_date }) => {
          let posterPath = '';
          if (poster_path) { 
            posterPath = `${IMG_BASE_URL}${IMG_W500}/${poster_path}`;
          } else { 
            posterPath = 'No found poster!';
          }
          const releaseYear = release_date.slice(0, 4);
          return `<li class='list-cards-item' key='${id}'>
            <img
              class='poster-list__img'
              src='${posterPath}'
              alt='${original_title}'
              width
              loading='lazy'
            />
            <span class='poster-list-rate'>${vote_average.toFixed(1)}</span>
            <div class='poster-list-wrap'>
              <h2 class='poster-list-title text-posters'><b>${original_title}</b></h2>
              <div class='poster-list-info'>
                <p class='poster-list-text text-posters'>${genre_names}</p>
                <p class='poster-list-age text-posters'>| ${releaseYear}</p>
              </div>
            </div>
          </li>`;
        }).join('');

        watchedMoviesList.innerHTML = postersMarkup;
        isContentVisible = true;
      } else {
        watchedMoviesList.innerHTML = '<p>No watched movies found.</p>';
        isContentVisible = true;
      }
    }
  }
});

function getWatchedMoviesDetails(watchedMovies) {
  const moviesData = loadLocalStorage('moviesData');
  const genresList = loadLocalStorage('genresList'); // Încărcați lista de genuri
  var moviesDetailed = [];
  for (let i = 0; i < watchedMovies.length; i++) {
    for (let j = 0; j < moviesData.length; j++) {
      if (parseInt(moviesData[j].id) === parseInt(watchedMovies[i])) {
        // Adăugați informații despre genuri în detaliile filmelor
        const movieDetails = { ...moviesData[j] };
        movieDetails.genre_names = genresList.filter(genre => movieDetails.genre_ids.includes(genre.id)).map(genre => genre.name).join(', ');
        moviesDetailed.push(movieDetails);
      }
    }
  }
  return moviesDetailed;
}
const list = document.querySelector('.library-movies-list');
if (list) {
  list.addEventListener('click', handleListClick);
};

function handleListClick(event) {
  createModal(event);
}
