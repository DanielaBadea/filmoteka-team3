// document.addEventListener('DOMContentLoaded', function(){
//     const queue=document.getElementById('queueButton');
//     const hiddenQueue = document.querySelector('.hiddenContent-queue');
//     let imgVisible = false;
//     queue.addEventListener('click', function(){
//         if(imgVisible){
//             hiddenQueue.style.display = 'none';
//             imgVisible = false;
//         }else{
//             hiddenQueue.style.display = 'block';
//             imgVisible = true;

//         }
//     })
// });
import { loadLocalStorage} from "./storage";
import { IMG_BASE_URL, IMG_W500 } from "./api";

document.addEventListener('DOMContentLoaded', function() {
  let isContentVisible = false; 

  const queueButton = document.querySelector('#queueButton');
  queueButton.addEventListener('click', handleQueueButtonClick);

  function handleQueueButtonClick() {
    const queueMoviesList = document.querySelector('.queue-movies-list');

    if (isContentVisible) {
     queueMoviesList.innerHTML = '';
      isContentVisible = false;
    } else {
      const queueMovies = loadLocalStorage('queue') || [];

      if (queueMovies && queueMovies.length > 0) {
        var movies = getWatchedMoviesDetails(queueMovies);
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

        queueMoviesList.innerHTML = postersMarkup;
        isContentVisible = true;
      } else {
        queueMoviesList.innerHTML = '<p>No watched movies found.</p>';
        isContentVisible = true;
      }
    }
  }
});

function getWatchedMoviesDetails(queueMovies) {
  const moviesData = loadLocalStorage('moviesData');
  const genresList = loadLocalStorage('genresList');
  var moviesDetailed = [];
  for (let i = 0; i < queueMovies.length; i++) {
    for (let j = 0; j < moviesData.length; j++) {
      if (parseInt(moviesData[j].id) === parseInt(queueMovies[i])) {
        // Adăugați informații despre genuri în detaliile filmelor
        const movieDetails = { ...moviesData[j] };
        movieDetails.genre_names = genresList.filter(genre => movieDetails.genre_ids.includes(genre.id)).map(genre => genre.name).join(', ');
        moviesDetailed.push(movieDetails);
      }
    }
  }
  return moviesDetailed;
}
