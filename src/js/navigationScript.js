document.addEventListener('DOMContentLoaded', function () {
  const watchedButton = document.getElementById('watchedButton');
  const clearButton = document.getElementById('clearButton');
  const watchedMoviesContainer = document.querySelector(
    '.watched-movies-container'
  );

  // Array to store watched movies
  const watchedMovies = [];

  // Function to update the watched movies display
  function updateWatchedMovies() {
    // Clear the previous content
    watchedMoviesContainer.innerHTML = '';

    // Display each watched movie
    watchedMovies.forEach(movie => {
      const movieItem = document.createElement('p');
      movieItem.textContent = movie;
      watchedMoviesContainer.appendChild(movieItem);
    });
  }

  // Add event listeners and functionality for the buttons
  watchedButton.addEventListener('click', function () {
    // Assume you have a prompt to enter the movie name;
    const movieName = prompt('Enter the name of the watched movie:');

    if (movieName) {
      // Add the movie to the watchedMovies array
      watchedMovies.push(movieName);

      // Update the watched movies display
      updateWatchedMovies();
    }
  });

  clearButton.addEventListener('click', function () {
    // Clear the watched movies array
    watchedMovies.length = 0;

    // Update the watched movies display
    updateWatchedMovies();
  });

  // You can add more event listeners and functionality as needed
});
