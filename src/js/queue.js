document.addEventListener('DOMContentLoaded', function(){
    const queue=document.getElementById('queueButton');
    const hiddenQueue = document.querySelector('.hiddenContent-queue');
    let imgVisible = false;
    queue.addEventListener('click', function(){
        if(imgVisible){
            hiddenQueue.style.display = 'none';
            imgVisible = false;
        }else{
            hiddenQueue.style.display = 'block';
            imgVisible = true;

        }
    })
});

// document.addEventListener('DOMContentLoaded', function() {
//     let isQueueVisible = false; // Variabilă pentru a ține evidența stării de vizibilitate a conținutului colecției
//     let isWatchedVisible = false; // Variabilă pentru a ține evidența stării de vizibilitate a conținutului urmărit
  
//     const queueButton = document.getElementById('queueButton');
//     const watchedButton = document.getElementById('watchedButton');
//     const queueMoviesList = document.querySelector('.hiddenContent-queue');
//     const watchedMoviesList = document.querySelector('.watched-movies-list');
  
//     queueButton.addEventListener('click', function() {
//       // Verificăm dacă colecția este deja vizibilă și o ascundem, altfel o afișăm
//       if (!isQueueVisible) {
//         queueMoviesList.classList.remove('hiddenContent');
//         isQueueVisible = true;
  
//         // Dacă conținutul urmărit este vizibil, îl ascundem
//         if (isWatchedVisible) {
//           watchedMoviesList.classList.add('hiddenContent');
//           isWatchedVisible = false;
//         }
//       }
//     });
  
//     watchedButton.addEventListener('click', function() {
//       // Verificăm dacă conținutul urmărit este deja vizibil și îl ascundem, altfel îl afișăm
//       if (!isWatchedVisible) {
//         watchedMoviesList.classList.remove('hiddenContent');
//         isWatchedVisible = true;
  
//         // Dacă colecția este vizibilă, o ascundem
//         if (isQueueVisible) {
//           queueMoviesList.classList.add('hiddenContent');
//           isQueueVisible = false;
//         }
//       }
//     });
//   });
  