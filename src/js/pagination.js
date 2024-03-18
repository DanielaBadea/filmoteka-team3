import { getTrending } from './api';
import { renderMarkup } from './cardsMarkup';
import { loader } from './searchForm'; 
import { saveLocalStorage } from './storage';


const content = document.querySelector('.fetch-cards');
const nextBtn = document.querySelector('.prev-btn'); 
const prevBtn = document.querySelector('.next-btn');
const pageNumberContainer = document.querySelector('.page-number');


let currentPage = 1;
const totalItems = 1000;
const itemsPerPage = 20;
const totalPages = Math.ceil(totalItems / itemsPerPage);

function getTrendingMovies(page) {
  loader.style.display = 'block';
  content.style.display = 'none';

  getTrending(page).then(data => {
    renderMarkup(data);
    saveLocalStorage('moviesData', data.results);
    displayPageNumbers(totalPages); 
    updateActiveButton(); 
  }).catch(error => {
    console.error("Failed to fetch trending movies:", error);
  }).finally(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
  });
}

getTrendingMovies(currentPage);

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) { 
    currentPage++; 
    getTrendingMovies(currentPage); 
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--; 
    getTrendingMovies(currentPage);
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

function updateActiveButton() {
  const buttons = pageNumberContainer.querySelectorAll('button');
  buttons.forEach(button => {
    button.classList.remove('active');
    if (parseInt(button.textContent) === currentPage) {
      button.classList.add('active');
    }
  });
}

function displayPageNumbers(totalPages) {
  pageNumberContainer.innerHTML = '';
  const maxButtonsToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

  if (totalPages > maxButtonsToShow && currentPage > Math.floor(maxButtonsToShow / 2)) {
    startPage = Math.min(currentPage - Math.floor(maxButtonsToShow / 2), totalPages - maxButtonsToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const button = createPageNumberButton(i);
    pageNumberContainer.appendChild(button);
  }
  updateActiveButton();
}

displayPageNumbers(totalPages);