import { getTrending } from './api';
import { renderMarkup } from './cardsMarkup';
import { saveLocalStorage } from './storage';
function getTrendingMovies() {
  getTrending(page).then(data => {
    renderMarkup(data);
    saveLocalStorage('moviesData', data.results);
  });
}
let page = 1;
getTrendingMovies();

const nextBtn = document.querySelector('.prev-btn');
const prevBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', () => {
  page++;
  getTrendingMovies();
});
prevBtn.addEventListener('click', () => {
  if (page > 1) {
    page--;
    getTrendingMovies();
  } else {
    prevBtn.classList.add('disabled');
  }
});
