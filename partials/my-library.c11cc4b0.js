var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire713f;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire713f=o);var i=o("5uEKZ"),r=o("7rYDH");document.addEventListener("DOMContentLoaded",(function(){let e=!1;document.querySelector("#watchedButton").addEventListener("click",(function(){const t=document.querySelector(".watched-movies-list");if(e)t.innerHTML="",e=!1;else{const n=(0,i.loadLocalStorage)("moviesData");if(n&&n.length>0){const o=n.slice(0,6).map((({original_title:e,poster_path:t})=>{let n="";return n=t?`${r.IMG_BASE_URL}${r.IMG_W500}/${t}`:"No found poster!",`\n            <div class='container-posters-ls'><img class='poster-list-img' src="${n}" alt="${e} loading='lazy'">\n            <h3 class='poster-list-title'>${e}</h3></div>\n          `})).join("");t.innerHTML=o,e=!0}else t.innerHTML="<p>No watched movies found.</p>",e=!0}}))}));
//# sourceMappingURL=my-library.c11cc4b0.js.map
