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
