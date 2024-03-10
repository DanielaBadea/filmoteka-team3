const myLibraryBtns = document.querySelectorAll(".button");
myLibraryBtns.forEach(myLibraryBtn => {
    myLibraryBtn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    myLibraryBtn.classList.add("active");
    });
});