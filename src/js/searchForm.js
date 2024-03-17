import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import { getSearchMovie } from './api'; 
import { renderMarkup } from './cardsMarkup'; 
import { saveLocalStorage } from './storage';
import { STORAGE_KEY_SEARCH } from './constants';
import { createModal } from './modal-cards';

export const loader = document.querySelector('.loader');
const searchInput = document.getElementById('header-input');
const list = document.querySelector('.list-cards');

Notiflix.Notify.init({
    width: '400px',
    position: 'right-bottom',
    distance: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    timeout: 3000, 
    pauseOnHover: true,
});

// Funcție pentru a efectua căutarea cu debounce
const debouncedSearch = debounce(async (searchTerm) => {
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
        saveLocalStorage('moviesData', searchResult.results);

        renderMarkup(searchResult);
    } catch (error) {
        console.error('Error searching for movies:', error);
    } finally {
        loader.style.display = 'none';
    }
}, 300); // Așteaptă 300 milisecunde după ultimul eveniment de tastare

// Funcție pentru a gestiona evenimentul de tastare
function handleSearchInput(event) {
    const searchTerm = event.target.value.trim();
    debouncedSearch(searchTerm);
}

// Adaugă evenimentul de tastare la input pentru a gestiona căutarea automată cu debounce
searchInput.addEventListener('input', handleSearchInput);

if (list) {
    list.addEventListener('click', handleListClick);
};

function handleListClick(event) {
    createModal(event);
}

document.querySelector('.header-form').addEventListener('submit', (event) => {
    event.preventDefault();
    handleSearch(event);
});
