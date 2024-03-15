document.addEventListener('DOMContentLoaded',function(){const myLibraryBtns = document.querySelectorAll(".button");
myLibraryBtns.forEach(myLibraryBtn => {
    myLibraryBtn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    myLibraryBtn.classList.add("active");
    });
});
});

// document.addEventListener('DOMContentLoaded', function() {
//     const myBtns = document.querySelectorAll(".button");

//     // Funcție pentru a evidenția butonul activ
//     function highlightActiveButton() {
//         const activeButton = localStorage.getItem('activeButton');
// if (activeButton) {
//     document.querySelector('.active')?.classList.remove('active');
//     const buttonToHighlight = document.querySelector('#' + activeButton);
//     buttonToHighlight?.classList.add('active');
// }
//     }
//     // Adaugă evenimentul de click pentru fiecare buton
//     myBtns.forEach(myBtn => {
//         myBtn.addEventListener("click", () => {
//             document.querySelector(".active")?.classList.remove("active");
//             myBtn.classList.add("active");
//             // Stocarea id-ului butonului activ în localStorage
//             localStorage.setItem('activeButton', myBtn.id);
//         });
//     });

//     // Evidențiază butonul activ la încărcarea paginii
//     highlightActiveButton();
// });
