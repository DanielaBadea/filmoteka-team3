import { getMovieGenres, IMG_BASE_URL, IMG_W400 } from './api';
import { saveLocalStorage } from './storage';
 const list = document.querySelector('.list-cards');
async function getGenres() {
  const genres = await getMovieGenres().then(({ genres }) => genres);
  return { genres };
};

export function renderMarkup(data) {
  getGenres().then(({ genres }) => {
    saveLocalStorage('genresList', genres);
    if (data.results) {
      data.results.forEach(film => {
        const { genre_ids, release_date } = film;
        genres.forEach(({ name, id }) => {
          if (genre_ids.includes(id)) {
            if (genre_ids.length > 2) {
              genre_ids.splice(2, genre_ids.length - 1, 'Other');
            };
            genre_ids.splice(genre_ids.indexOf(id), 1, name);
          };
          film.genre_names = genre_ids.join(', ');
          if (film.release_date) {
            film.release_date = release_date.slice(0, 4);
          };
        });
      });
    };
    const markupList = createListMarkup(data.results);
    if (list) {
      list.innerHTML = markupList;
    };
  });
};

export function createListMarkup(data) {
  if (data) {
    return data
      .map(
        ({
          original_title,
          poster_path,
          overview,
          vote_average,
          id,
          genre_names,
          release_date,
        }) => {
          let posterPath = ``
          if (poster_path) { posterPath = `${IMG_BASE_URL}${IMG_W400}/${poster_path}` }
          else { posterPath = 'No found poster!' }
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
          </li>`}
      )
      .join('');
  };
};
