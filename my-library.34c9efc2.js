!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire713f;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequire713f=o);var r=o("jzQFI"),a=o("b7ONl");document.addEventListener("DOMContentLoaded",(function(){var e=!1;document.querySelector("#watchedButton").addEventListener("click",(function(){var n=document.querySelector(".watched-movies-list");if(e)n.innerHTML="",e=!1;else{var t=(0,r.loadLocalStorage)("watched");if(t&&t.length>0){var o=function(e){for(var n=(0,r.loadLocalStorage)("moviesData"),t=[],o=0;o<e.length;o++)for(var a=0;a<n.length;a++)parseInt(n[a].id)===parseInt(e[o])&&t.push(n[a]);return t}(t),i=o.map((function(e){var n=e.original_title,t=e.poster_path,o="";return o=t?"".concat(a.IMG_BASE_URL).concat(a.IMG_W500,"/").concat(t):"No found poster!","\n            <div class='container-posters-ls'><img class='poster-list-img' src=\"".concat(o,'" alt="').concat(n," loading='lazy'\">\n            <h3 class='poster-list-title'>").concat(n,"</h3></div>\n          ")})).join("");n.innerHTML=i,e=!0}else n.innerHTML="<p>No watched movies found.</p>",e=!0}}))}))}();
//# sourceMappingURL=my-library.34c9efc2.js.map
