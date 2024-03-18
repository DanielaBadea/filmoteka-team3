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
    } else {
      watchedMoviesList.innerHTML = '<p>No watched movies found.</p>';
      // Schimbă starea vizibilității
    }
  }
});

// function getWatchedMoviesDetails(watchedMovies) {
//   const moviesData = loadLocalStorage('moviesData');
//   const watchedList = loadLocalStorage('watchedList');
//   var moviesDetailed = [];
//   for (let i = 0; i < watchedMovies.length; i++) {
//     for (let j = 0; j < moviesData.length; j++) {
//       if (parseInt(moviesData[j].id) === parseInt(watchedMovies[i])) {
//         // Adăugați informații despre genuri în detaliile filmelor
//         const movieDetails = { ...moviesData[j] };
//         movieDetails.genre_names = watchedList.filter(genre => movieDetails.genre_ids.includes(genre.id)).map(genre => genre.name).join(', ');
//         moviesDetailed.push(movieDetails);
//       }
//     }
//   }
//   return moviesDetailed;
// }
function getWatchedMoviesDetails(watchedMovies) {
  const moviesData = loadLocalStorage('moviesData');
  const genresList = loadLocalStorage('genresList');
  var moviesDetailed = [];

  if (!moviesData || !genresList) {
    console.error("Error: Missing data in local storage");
    return moviesDetailed;
  }

  for (let i = 0; i < watchedMovies.length; i++) {
    for (let j = 0; j < moviesData.length; j++) {
      if (parseInt(moviesData[j].id) === parseInt(watchedMovies[i])) {
        const movieDetails = { ...moviesData[j] };
        const genreIds = movieDetails.genre_ids;
        if (genreIds && Array.isArray(genreIds)) {
          movieDetails.genre_names = genresList.filter(genre => genreIds.includes(genre.id)).map(genre => genre.name).join(', ');
          moviesDetailed.push(movieDetails);
        } else {
          console.error(`Error: Missing genre_ids property for movie with ID ${movieDetails.id}`);
        }
      }
    }
  }
  return moviesDetailed;
}
