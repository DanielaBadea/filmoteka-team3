// import { STORAGE_KEY_QUEUE } from "./constants";
import { loadLocalStorage } from "./storage";
import { IMG_BASE_URL, IMG_W500, getMovieDetails } from "./api";

document.addEventListener('DOMContentLoaded', function() {
  let isContentVisible = false; // Variabilă pentru a ține evidența stării vizibilității

  const queueButton = document.querySelector('#queueButton');
  queueButton.addEventListener('click', handleQueueButtonClick);

  function handleQueueButtonClick() {
    const queueMoviesList = document.querySelector('.queue-movies-list');

    if (isContentVisible) {
      // Elimină conținutul
      queueMoviesList.innerHTML = '';
      // Schimbă starea vizibilității
      isContentVisible = false;
    } else {
      const queueMovies = loadLocalStorage('queue');

      if (queueMovies && queueMovies.length > 0) {
        var movies = getQueueMoviesDetails(queueMovies);
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

        queueMoviesList.innerHTML = postersMarkup;
        // Schimbă starea vizibilității
        isContentVisible = true;
      } else {
        queueMoviesList.innerHTML = '<p>No queue movies found.</p>';
        // Schimbă starea vizibilității
        isContentVisible = true;
      }
    }
  }
});

function  getQueueMoviesDetails(queueMovies) {
  const moviesData = loadLocalStorage('moviesData');
  var moviesDetailed = [];
  for (let i = 0; i < watchedMovies.length; i++) {
    for (let j = 0; j < moviesData.length; j++) {
      if (parseInt(moviesData[j].id) === parseInt(queueMovies[i])) {
        moviesDetailed.push(moviesData[j]);
      }
    }
  }
  return moviesDetailed;
}











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

// // document.addEventListener('DOMContentLoaded', function() {
// //     let isQueueVisible = false; // Variabilă pentru a ține evidența stării de vizibilitate a conținutului colecției
// //     let isWatchedVisible = false; // Variabilă pentru a ține evidența stării de vizibilitate a conținutului urmărit
  
// //     const queueButton = document.getElementById('queueButton');
// //     const watchedButton = document.getElementById('watchedButton');
// //     const queueMoviesList = document.querySelector('.hiddenContent-queue');
// //     const watchedMoviesList = document.querySelector('.watched-movies-list');
  
// //     queueButton.addEventListener('click', function() {
// //       // Verificăm dacă colecția este deja vizibilă și o ascundem, altfel o afișăm
// //       if (!isQueueVisible) {
// //         queueMoviesList.classList.remove('hiddenContent');
// //         isQueueVisible = true;
  
// //         // Dacă conținutul urmărit este vizibil, îl ascundem
// //         if (isWatchedVisible) {
// //           watchedMoviesList.classList.add('hiddenContent');
// //           isWatchedVisible = false;
// //         }
// //       }
// //     });
  
// //     watchedButton.addEventListener('click', function() {
// //       // Verificăm dacă conținutul urmărit este deja vizibil și îl ascundem, altfel îl afișăm
// //       if (!isWatchedVisible) {
// //         watchedMoviesList.classList.remove('hiddenContent');
// //         isWatchedVisible = true;
  
// //         // Dacă colecția este vizibilă, o ascundem
// //         if (isQueueVisible) {
// //           queueMoviesList.classList.add('hiddenContent');
// //           isQueueVisible = false;
// //         }
// //       }
// //     });
// //   });
  