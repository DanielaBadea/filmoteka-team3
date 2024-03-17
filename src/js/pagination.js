import { getTrending } from './api';
import { renderMarkup } from './cardsMarkup';
import { saveLocalStorage } from './storage';
function getTrendingMovies(page) {
  getTrending(page).then(data => {
    renderMarkup(data);
    saveLocalStorage('moviesData', data.results);
  });
}
let currentPage = 1;
getTrendingMovies(currentPage);

const nextBtn = document.querySelector('.prev-btn');
const prevBtn = document.querySelector('.next-btn');
const pageNumberContainer = document.querySelector('.page-number');
nextBtn.addEventListener('click', () => {
  page++;
  getTrendingMovies(currentPage);
});
prevBtn.addEventListener('click', () => {
  if (page > 1) {
    page--;
    getTrendingMovies(currentPage);
  } else {
    prevBtn.classList.add('disabled');
  }
});

function createPageNumberButton(pageNumber) {
  const button = document.createElement('button');
  button.textContent = pageNumber;
  button.addEventListener('click', () => {
    currentPage = pageNumber;
    getTrendingMovies(currentPage);
  });
  return button;
}
const totalItems = 1000;
const itemsPerPage = 20;
const totalPages = Math.ceil(totalItems / itemsPerPage);
function displayPageNumbers(totalPages) {
  pageNumberContainer.innerHTML = '';
  const maxButtonsToShow = 3;
  const startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    const button = createPageNumberButton(i);
    pageNumberContainer.appendChild(button);
  }
}

displayPageNumbers(totalPages);
