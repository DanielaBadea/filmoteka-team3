import { saveLocalStorage } from './storage';
import { IMG_BASE_URL, IMG_W400 } from './api';
import {loadLocalStorage} from './storage';

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
    <button type="button" class="modal__add-watched" data-watched='false' data-liery='false'>add to watched</button>
    <button type="button" class="modal__add-queue" data-queue='false' data-liery='false'>add to queue</button>
    </div>
    </div>
  </div>`;
};

if (list) {
  list.addEventListener('click', createModal);
};
function createModal(event) {
    const selectedMovie = event.target.closest('li');
    const selectedMovieId = Number(selectedMovie.getAttribute('key'));
    let moviesData = JSON.parse(localStorage.getItem('moviesData')); // Mutăm inițializarea aici
    saveLocalStorage('moviesData', moviesData);
    console.log(moviesData);
  
    if (selectedMovie && moviesData) { // Verificăm dacă selectedMovie și moviesData sunt definite
      const movieData = moviesData.find(movie => movie.id === selectedMovieId);
      console.log(movieData);
      renderModalContent(movieData);
      openModal();
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
//   modalBackdrop.firstElementChild.dataset.id = '';
  movieModal.innerHTML = '';
  };

// const modalCloseBtn = `
// <button class="modal__btn-closs btn__closs-modal">
//       <svg
//       <use xlink:href="../images/symbol-defs.svg#icon-close"></use>
//       </svg>
//     </button>
// `;