!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=e.parcelRequire713f;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var l=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,l.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire713f=l),l.register("1zmFW",(function(e,o){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".toggle-theme"),o=document.querySelector(".sun"),t=document.querySelector(".moon"),l=document.querySelector(".span-text"),n=document.querySelector(".students"),r=document.querySelector(".footer-container-btn"),c=localStorage.getItem("isLightMode");function d(e){var c=document.querySelectorAll(".poster-list-title");e?(o.style.display="block",t.style.display="none",document.body.classList.add("light-mode"),document.body.style.backgroundColor="#fff",l.style.color="#545454",n.style.color="#545454",r.style.color="#545454",o.style.fill="#f5f84d",c.forEach((function(e){e.style.color="#000"}))):(t.style.display="block",o.style.display="none",document.body.classList.remove("light-mode"),document.body.style.backgroundColor="#000000e6",document.body.style.color="#fff",l.style.color="#fff",n.style.color="#fff",r.style.color="#ca2525",t.style.fill="#5469c7",c.forEach((function(e){e.style.color="#fff"})))}o.style.fill="#f5f84d",null!==c&&d("true"===c),e.addEventListener("click",(function(){var e=document.body.classList.toggle("light-mode");localStorage.setItem("isLightMode",e),d(e)}))}))})),l("1zmFW")}();
//# sourceMappingURL=my-library.32d368ce.js.map