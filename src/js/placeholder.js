// Definiți funcțiile în afara evenimentului DOMContentLoaded
function removePlaceholder() {
    document.querySelector("#header-input").removeAttribute("placeholder");
}

function restorePlaceholder() {
    const placeholder = document.querySelector("#header-input");
    if (placeholder.value === "") {
        placeholder.setAttribute("placeholder", "Movie search")
    }
}

// Asociați funcțiile cu evenimentul DOMContentLoaded pentru a fi apelate când pagina este complet încărcată
document.addEventListener('DOMContentLoaded', function() {
    // Adăugați evenimentele onfocus și onblur la input
    const input = document.querySelector("#header-input");
    input.addEventListener('focus', removePlaceholder);
    input.addEventListener('blur', restorePlaceholder);
});
