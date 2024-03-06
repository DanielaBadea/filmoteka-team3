document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeButton = document.querySelector(".toggle-theme");
    const body = document.querySelector("body");
  
    toggleThemeButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");
    });
  });
  