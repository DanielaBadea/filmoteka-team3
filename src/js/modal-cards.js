import { IMG_BASE_URL, IMG_W400 } from './api';
import {loadLocalStorage, saveLocalStorage} from './storage';

const modalBackdrop = document.querySelector('.modal-backdrop');
const movieModal = document.querySelector('.modal');
const list= document.querySelector('.list-cards');


const genresConverting = (genresIds) => {
  const genresList = loadLocalStorage('genresList');
  const genreArray = [];
  genresIds.map(genreId => {
    genresList.map(genre => {
      if (genreId === genre.id) {genreArray.push(genre.name)}
    });
  });
  return(genreArray.join(', '));
};

const modalMoviemarkup = ({poster_path, popularity, vote_average, vote_count, original_title, genre_ids, overview}) => {
let posterPath = ``;
if(poster_path){posterPath=`${IMG_BASE_URL}${IMG_W400}/${poster_path}`}else{posterPath='No found poster!'}
return `
<button type = "button" class="modal__btn-closs btn__closs-modal">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
      </svg>
    </button>
<div class="modal__movi-poster">
<img src="${posterPath}" alt="placeholder" />
</div>
<div class="modal_movi-info">
<h2 class="modal__title">${original_title}</h2>
<div class="modal__info-card info-card">
  <ul class="info-card__list-parametrs">
    <li class="info-card__item info-card__item-paramter">Vote / Votes</li>
    <li class="info-card__item info-card__item-point">
      <span>${vote_average.toFixed(1)}</span> <span>/</span> <span>${vote_count}</span>
    </li>
    <li class="info-card__item info-card__item-paramter">Popularity</li>
    <li class="info-card__item info-card__item-point">${popularity.toFixed(1)}</li>
    <li class="info-card__item info-card__item-paramter">Original Title</li>
    <li class="info-card__item info-card__item-point">${original_title}</li>
    <li class="info-card__item info-card__item-paramter">Genre</li>
    <li class="info-card__item info-card__item-point">${genresConverting(
      genre_ids
    )}</li>
  </ul>
</div>
<div class="modal__about">
  <h3 class="modal__about-title">ABOUT </h3>
  <p class="modal__about-text">
    ${overview}
  </p>
</div>
<div class="modal__buttons">
    <button type="button" id="btn-removeWatched" class="modal__remove-watched inactive" data-watched='false'>remove from watched</button>
    <button type="button" id="btn-addWatched" class="modal__add-watched" data-watched='false'>add to watched</button>
    <button type="button" id="btn-removeQueue" class="modal__add-queue inactive" data-queue='false'>remove from queue</button>
    <button type="button" id="btn-addQueue" class="modal__add-queue" data-queue='false'>add to queue</button>
    </div>
    </div>
  </div>`;
};

if (list) {
  list.addEventListener('click', createModal);
};
export function createModal(event) {
    const selectedMovie = event.target.closest('li');
    const selectedMovieId = Number(selectedMovie.getAttribute('key'));
    const parseData = localStorage.getItem('moviesData')
    const moviesData = JSON.parse(parseData);

    if (selectedMovie && moviesData) {
      const movieData = moviesData.find(movie => movie.id === selectedMovieId);
      console.log(movieData);
      renderModalContent(movieData);
      openModal();
      document.getElementById('btn-addWatched').addEventListener("click", addToWatched)
      document.getElementById('btn-addWatched').addEventListener("click", addToQueue)
      changeStateWatchedBtn();
      document.getElementById('btn-removeWatched').addEventListener("click", removeFromWatched)
      document.getElementById('btn-removeWatched').addEventListener("click", removeFromQueue)
      changeStateQueueBtn();


      modalBackdrop.firstElementChild.dataset.id = movieData.id;
    } else {
      console.error('Selected movie or moviesData is not defined.');
    }
  }

function renderModalContent(movieData) {
  modalBackdrop.firstElementChild.innerHTML = modalMoviemarkup(movieData);
};

function openModal() {
  modalBackdrop.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  setCloseOptionModal();
};

function setCloseOptionModal() {
    modalBackdrop.addEventListener('click', offModalForClickBeackdrop);
    document.addEventListener('keydown', offModalForEscape);
    document
      .querySelector('.modal__btn-closs')
      .addEventListener('click', offModal);
  };

function offModalForEscape(e) {
  if (e.key === 'Escape') {
    offModal();
  };
};

function offModalForClickBeackdrop(e) {
  if (e.target === modalBackdrop) {
    offModal();
  };
};

function offModal() {
modalBackdrop.firstElementChild.classList.add('modal');
  modalBackdrop.classList.remove('modal-open');
  document.body.style.overflow = 'overlay';
  document.removeEventListener('keydown', offModalForEscape);
  modalBackdrop.removeEventListener('keydown', offModalForClickBeackdrop);
  movieModal.innerHTML = '';
  };



function addToWatched() {
  const id = modalBackdrop.firstElementChild.dataset.id;
  const watchedMovies = loadLocalStorage('watched');
  var moviedToWatchIds = [];
  if (watchedMovies) {
    if (watchedMovies.includes(id)) {
      return;
    }
    moviedToWatchIds  = watchedMovies;
  }
  moviedToWatchIds.push(id);
  saveLocalStorage('watched', moviedToWatchIds)
  changeStateWatchedBtn()
}

function removeFromWatched() {
  const id = modalBackdrop.firstElementChild.dataset.id;
  const watchedMovies = loadLocalStorage('watched');
  var moviedToWatchIds = [];
  if (watchedMovies) {
    for (let i = 0; i < watchedMovies.length; i++) {
      if (id !== watchedMovies[i]) {
        moviedToWatchIds.push(watchedMovies[i]);
      }
    }
    saveLocalStorage('watched', moviedToWatchIds)
  }

  changeStateWatchedBtn()
}
function changeStateWatchedBtn() {
  const id = modalBackdrop.firstElementChild.dataset.id;
  const watchedMovies = loadLocalStorage('watched');
  if (watchedMovies) {
    if (watchedMovies.includes(id)) {
      // adauga clasa inactive pe buton
      document.getElementsByClassName('modal__add-watched')[0].classList.add("inactive")
      // scoate clasa inactive de pe butonul cu clasa "modal__remove-watched"
      document.getElementsByClassName('modal__remove-watched')[0].classList.remove("inactive")

    }
  }
  // scoate clasa inactive pe buton
  document.getElementsByClassName('modal__add-watched')[0].classList.remove("inactive")
   // adauga clasa inactive de pe butonul cu clasa "modal__remove-watched"
   document.getElementsByClassName('modal__remove-watched')[0].classList.add("inactive")
}


// queue


function addToQueue() {
  const id = modalBackdrop.firstElementChild.dataset.id;
  const queueMovies = loadLocalStorage('queue');
  var moviedToQueueIds = [];
  if (queueMovies) {
    if (queueMovies.includes(id)) {
      return;
    }
    moviedToQueueIds  = queueMovies;
  }
  moviedToQueueIds.push(id);
  saveLocalStorage('queue', moviedToQueueIds)
  changeStateQueueBtn()
}

function removeFromQueue() {
  const id = modalBackdrop.firstElementChild.dataset.id;
  const queueMovies = loadLocalStorage('queue');
  var moviedToQueueIds = [];
  if (queueMovies) {
    for (let i = 0; i < queueMovies.length; i++) {
      if (id !== queueMovies[i]) {
        moviedToQueueIds.push(queueMovies[i]);
      }
    }
    saveLocalStorage('queue', moviedToQueueIds)
  }

  changeStateQueueBtn()
}
function changeStateQueueBtn() {
  debugger
  const id = modalBackdrop.firstElementChild.dataset.id;
  const queueMovies = loadLocalStorage('queue');
  if (queueMovies) {
    if (queueMovies.includes(id)) {
      // adauga clasa inactive pe buton
      document.getElementsByClassName('modal__add-queue')[0].classList.add("inactive")
      // scoate clasa inactive de pe butonul cu clasa "modal__remove-queue"
      document.getElementsByClassName('modal__remove-queue')[0].classList.remove("inactive")

    }
  }
  // scoate clasa inactive pe buton
  document.getElementsByClassName('modal__add-queue')[0].classList.remove("inactive")
   // adauga clasa inactive de pe butonul cu clasa "modal__remove-queue"
   document.getElementsByClassName('modal__remove-queue')[0].classList.add("inactive")
}
