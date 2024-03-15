(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-js]'),
    closeModalBtn: document.querySelector('[data-modal-close-js]'),
    mondial: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mondial.classList.toggle('is-hidden');
  }
})();
