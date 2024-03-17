// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open-js]'),
//     closeModalBtn: document.querySelector('[data-modal-close-js]'),
//     mondial: document.querySelector('[data-modal-js]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.mondial.classList.toggle('is-hidden');
//   }
// })();
document.addEventListener('DOMContentLoaded', function () {
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
