import { getTrending } from './api';
import { renderMarkup } from './cardsMarkup';
import { saveLocalStorage } from './storage';

getTrending(1).then(data => {
  renderMarkup(data), saveLocalStorage('moviesData', data.results);
});
