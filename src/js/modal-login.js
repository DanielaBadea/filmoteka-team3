const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn-connect");

function registerUser() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function loginUser() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.querySelector(".toggle-btn[onclick='login()']");
  const registerBtn = document.querySelector(".toggle-btn[onclick='register()']");

  if (loginBtn) {
      loginBtn.onclick = null;
      loginBtn.addEventListener("click", loginUser);
  }
  if (registerBtn) {
      registerBtn.onclick = null;
      registerBtn.addEventListener("click", registerUser); 
  }
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();