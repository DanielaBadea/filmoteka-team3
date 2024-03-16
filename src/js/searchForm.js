
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import { getSearchMovie } from './api'; 
import { renderMarkup } from './cardsMarkup'; 
import { saveLocalStorage } from './storage';
import { STORAGE_KEY_SEARCH } from './constants';

const loader = document.querySelector('.loader');

const searchInput = document.getElementById('header-input');

Notiflix.Notify.init({
    width: '400px',
    position: 'right-bottom',
    distance: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    timeout: 3000, 
    pauseOnHover: true,
});

async function handleSearch(event) {
    event.preventDefault(); 
    const searchTerm = searchInput.value.trim();

    try {
        if (!searchTerm) {
            return Notiflix.Notify.failure("Please enter a movie name!");
        }

        if (loader.style.display === 'block') {
            loader.style.display = 'block';
            document.querySelector('.hendlerCont').innerHTML = "";
        }

        const searchResult = await getSearchMovie(searchTerm, 1); 
        
        if (!searchResult.results || searchResult.results.length === 0) {
            return Notiflix.Notify.failure("Search result not successful. Enter the correct movie name!");
        }

         saveLocalStorage(STORAGE_KEY_SEARCH, searchResult);

        renderMarkup(searchResult);
    } catch (error) {
        console.error('Error searching for movies:', error);
    } finally {
        loader.style.display = 'none';
    }
}


document.querySelector('.header-form').addEventListener('submit', handleSearch);
