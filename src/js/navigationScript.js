document.addEventListener('DOMContentLoaded', function () {
  const watchedButton = document.getElementById('watchedButton');
  const queueButton = document.getElementById('queueButton');
  const clearButton = document.getElementById('clearButton');
  const watchedMoviesContainer = document.querySelector(
    '.watched-movies-container'
  );
  const queueMoviesContainer = document.querySelector(
    '.queue-movies-container'
  );

  // Arrays to store watched and queued movies
  const watchedMovies = [];
  const queuedMovies = [];

  // Function to update the movie display
  function updateMovies(container, movies) {
    // Clear the previous content
    container.innerHTML = '';

    // Display each movie
    movies.forEach(movie => {
      const movieItem = document.createElement('p');
      movieItem.textContent = movie;
      container.appendChild(movieItem);
    });
  }

  // Event listener for the "WATCHED" and "Queue" buttons
  function handleButtonClick(type, moviesArray, container) {
    const movieName = prompt(
      `Enter the name of the ${type.toLowerCase()} movie:`
    );
    if (movieName !== null && movieName.trim() !== '') {
      moviesArray.push(movieName);
      updateMovies(container, moviesArray);
    }
  }

  watchedButton.addEventListener('click', function () {
    handleButtonClick('WATCHED', watchedMovies, watchedMoviesContainer);
  });

  queueButton.addEventListener('click', function () {
    handleButtonClick('Queue', queuedMovies, queueMoviesContainer);
  });

  // Event listener for the "CLEAR WATCHED LIST" button
  clearButton.addEventListener('click', function () {
    watchedMovies.length = 0;
    updateMovies(watchedMoviesContainer, watchedMovies);
  });

  // You can add more event listeners and functionality as needed
});

//MODAL WINDOW

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('myModal');
  var movieCards = document.querySelectorAll('.movie-card');

  function openModal(movieId) {
    var closeBtn = document.querySelector('.close');
    var movieTitleElem = document.querySelector('.movie-title');
    var movieOverviewElem = document.querySelector('.movie-overview');
    var movieReleaseDateElem = document.querySelector('.movie-release-date');

    // Fetch movie details from the API
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5b28406cf15f01386b735b4e48c0f3f4`
    )
      .then(response => response.json())
      .then(data => {
        // Update modal content with movie details
        movieTitleElem.textContent = data.title;
        movieOverviewElem.textContent = data.overview;
        movieReleaseDateElem.textContent = `Release Date: ${data.release_date}`;
        // Update more elements with other movie details as needed

        modal.style.display = 'block';
      })
      .catch(error => console.error('Error fetching movie details:', error));

    // Event listener for the close button inside the modal
    closeBtn.addEventListener('click', closeModal);
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  movieCards.forEach(function (card) {
    card.addEventListener('click', function () {
      // Get the movie ID from the card's data attribute or any other method you use
      var movieId = card.dataset.movieId; // Adjust this based on your card structure

      // Open the modal with the selected movie's details
      openModal(movieId);
    });
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
