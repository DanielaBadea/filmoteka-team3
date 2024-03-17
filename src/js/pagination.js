import { getTrending } from './api';
import { renderMarkup } from './cardsMarkup';
import { loader } from './searchForm';
import { saveLocalStorage } from './storage';
import { loader } from './searchForm';
const content = document.querySelector(".fetch-cards");
function getTrendingMovies() {
  loader.style.display ="block";
  content.style.display ="none";
  getTrending(page).then(data => {
    renderMarkup(data);
    saveLocalStorage('moviesData', data.results);
    loader.style.display ="none";
    content.style.display ="block";
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
