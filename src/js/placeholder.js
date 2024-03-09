function removePlaceholder() {
   document.querySelector("#header-input").removeAttribute("placeholder");

}

function restorePlaceholder(){
    const placeholder = document.querySelector("#header-input");
    if( placeholder.value === ""){
        placeholder.setAttribute("placeholder", "Movie search")
    }
}