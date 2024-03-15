
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import { getSearchMovie } from './api'; 
import { renderMarkup } from './cardsMarkup'; 

// Declarație pentru elementul loader
const loader = document.querySelector('.loader');

const searchInput = document.getElementById('header-input');

// Configurare Notiflix
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

        // Afiseaza loader-ul
        loader.style.display ='block';

        const searchResult = await getSearchMovie(searchTerm, 1); 
       
        if (!searchResult.results || searchResult.results.length === 0) {
            return Notiflix.Notify.failure("Search result not successful. Enter the correct movie name!");
        }        
        renderMarkup(searchResult);
    } catch (error) {
        console.error('Error searching for movies:', error);
    } finally {
        // Ascunde loader-ul
        loader.style.display = 'none';
    }
}

document.querySelector('.header-form').addEventListener('submit', handleSearch);
