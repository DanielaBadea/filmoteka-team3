import { getMovieGenres, IMG_BASE_URL, IMG_W500 } from './api';
import { saveLocalStorage } from './storage';
// import { themeRender } from './theme-mode';
 const list = document.querySelector('.list-cards');
async function getGenres() {
  const genres = await getMovieGenres().then(({ genres }) => genres);
  return { genres };
};
// async function getGenres() {
//   try {
//     const response = await getMovieGenres();
//     return { genres: response.data.genres };
//   } catch (error) {
//     console.error('Error fetching movie genres:', error);
//     throw error;
//   }
// }
export function renderMarkup(data) {
  getGenres().then(({ genres }) => {
    saveLocalStorage('genresList', genres);
    if (data.results) {
      data.results.forEach(film => {
        const { genre_ids } = film;
        const genreNames = genre_ids.map(id => {
          const genre = genres.find(genre => genre.id === id);
          return genre ? genre.name : "Unknown";
        });
        film.genre_names = genreNames.join(', ');
        if (film.release_date) {
          film.release_date = film.release_date.slice(0, 4);
        }
      });
    }
    const markupList = createListMarkup(data.results);
    if (list) {
      list.innerHTML = markupList;
    }
    // themeRender();
  });
};


export function createListMarkup(data) {
  if (data && data.length > 0) {
    const moviesToShow = data.slice(0, 9);
    const markup = moviesToShow.map(({ original_title, poster_path, overview, vote_average, id, genre_names, release_date }) => {
      let posterPath = '';
      if (poster_path) { 
        posterPath = `${IMG_BASE_URL}${IMG_W500}/${poster_path}`;
      } else { 
        posterPath = 'No found poster!';
      }
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
            <p class='poster-list-age text-posters'>| ${release_date}</p>
          </div>
        </div>
      </li>`;
    }).join('');
    console.log(data);
    return markup;
  }
};