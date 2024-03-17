document.addEventListener('DOMContentLoaded', function() {
  var openModalButton = document.querySelector('[data-modal-open-js]');
  var closeModalButton = document.querySelector('[data-modal-close-js]');
  var modal = document.querySelector('[data-modal-js]');

  function toggleModalVisibility() {
    if (modal) {
      modal.classList.toggle('is-hidden');
    }
  }

  if (openModalButton) {
    openModalButton.addEventListener('click', toggleModalVisibility);
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', toggleModalVisibility);
  }
});