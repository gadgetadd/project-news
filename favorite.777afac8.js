!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,r,c,o,a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},l=a.parcelRequireeb85;null==l&&((l=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},a.parcelRequireeb85=l),l.register("iE7OH",(function(t,n){var r,c;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return c}),(function(e){return c=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},c=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var c={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=c[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),c[e]=t),t}})),l.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),l("iE7OH").register(JSON.parse('{"StDo9":"favorite.777afac8.js","410VS":"icons.c1237735.svg","jGvtw":"no-news-desktop.0f33a02c.png","fAZ51":"no-news-desktop@2x.50482234.png","229vv":"no-news-tablet.7a43ff6f.png","IOMIB":"no-news-tablet@2x.9203222f.png","kQrnE":"no-news-mobile.9c3a8cf3.png","hNzlM":"no-news-mobile@2x.cd1eff34.png"}')),n=document.querySelector("[data-menu-button]"),r=document.querySelector("[data-menu-button2]"),c=document.querySelector("[data-menu]"),o=document.querySelector("[data-thema]"),n.addEventListener("click",(function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.classList.toggle("is-open"),n.setAttribute("aria-expanded",!e),r.classList.toggle("is-open"),r.setAttribute("aria-expanded",!e),c.classList.toggle("is-open"),o.classList.toggle("is-open"),document.body.classList.toggle("mobile-body")})),document.querySelectorAll(".site-nav__link").forEach((function(e){e.href===window.location.href&&e.parentNode.classList.add("active")}));var u={input:document.querySelector(".switch__input")};function d(){var e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(u.input.checked=!0,document.querySelector("html").classList.add("dark")))}d(),u.input.addEventListener("click",(function(e){var t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));d()}));var f;f=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("410VS");var m;m=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("jGvtw");var g;g=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("fAZ51");var v;v=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("229vv");var p;p=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("IOMIB");var h;h=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("kQrnE");var _;_=l("aNJCr").getBundleURL("StDo9")+l("iE7OH").resolve("hNzlM");var w=document.querySelector("#box-container");!function(){var e=JSON.parse(localStorage.getItem("favoriteArticles"));if(0!==e.length){var n=function(e){var n=document.createElement("ul");n.classList.add("news");var r=e.reduce((function(e,n){var r,c,o=(r=new Date(n.date),c={month:0,day:0,year:r.getFullYear()},r.getMonth()<=8?c.month="".concat("0").concat(r.getMonth()+1):c.month=r.getMonth()+1,r.getDate()<=9?c.day="".concat("0").concat(r.getDate()):c.day=r.getDate(),c),a=o.day,i=o.month,s=o.year;return e+'\n    <li class="news__item" id="'.concat(n.id,'">\n    <div class="news__card">\n        <div class="news__img">\n          <div class="news__img-wrap">\n              <picture>\n              <source\n                  srcset="').concat(n.image,'"\n                  media="(max-width: 767px)"\n                  width="288"\n                  height="395"\n              />\n              <source\n                  srcset="').concat(n.image,'"\n                  media="(max-width: 1279px)"\n                  width="353"\n                  height="395"\n              />\n              <img\n                  class="news__image"\n                  srcset="').concat(n.image,'"\n                  src="').concat(n.image,'"\n                  alt=""\n                  width="395"\n                  height="395"\n              />\n              </picture>\n          </div>\n            <p class="news__category">').concat(n.category,'</p>\n\n            <button type="button" class="button-card">\n            Remove from favorite\n            <svg class="button-card-icon button-card-icon-remove" width="16" height="16">\n                <use href="').concat(t(f),'#icons_heart"></use>\n            </svg>\n            </button>\n        </div>\n        <div class="news__title-wrap">\n            <h1 class="news__title">').concat(n.title,'</h1>\n        </div>\n        <p class="news__text">\n            ').concat(n.descr,'\n        </p>\n    </div>\n    <div class="news__info">\n        <time datetime="').concat(n.date,'" class="news__time">').concat(a,"/").concat(i,"/").concat(s,'</time>\n        <a class="news__link" href="').concat(n.url,'">Read more</a>\n    </div>\n</li>')}),"");return n.insertAdjacentHTML("beforeend",r),n}(e);document.querySelector("#box-container").append(n)}else w.innerHTML=' <picture>\n                <source\n                    srcset="'.concat(t(h)," 1x, ").concat(t(_),' 2x"\n                    media="(max-width: 767px)">\n                <source\n                    srcset="').concat(t(v)," 1x, ").concat(t(p),' 2x"\n                    media="(max-width: 1279px)">\n                <source\n                    srcset="').concat(t(m)," 1x, ").concat(t(g),' 2x"\n                    media="(min-width: 1280px)">\n                <img class="favorite__no-news" src="').concat(t(h),'"\n                    alt="Зображення не має новин">\n            </picture>')}();!function(){for(var e=function(e){var r=n[e];r.children[0].children[0].children[2].addEventListener("click",(function(e){!function(e){var t=JSON.parse(localStorage.getItem("favoriteArticles")),n=t.findIndex((function(t){return t.id===e}));-1!==n&&(t.splice(n,1),localStorage.setItem("favoriteArticles",JSON.stringify(t)));var r=document.getElementById("".concat(e));r&&r.remove()}(r.attributes[1].value),0===document.querySelectorAll(".news__item").length&&(w.innerHTML=' <picture>\n                <source\n                    srcset="'.concat(t(h)," 1x, ").concat(t(_),' 2x"\n                    media="(max-width: 767px)">\n                <source\n                    srcset="').concat(t(v)," 1x, ").concat(t(p),' 2x"\n                    media="(max-width: 1279px)">\n                <source\n                    srcset="').concat(t(m)," 1x, ").concat(t(g),' 2x"\n                    media="(min-width: 1280px)">\n                <img class="favorite__no-news" src="').concat(t(h),'"\n                    alt="Зображення не має новин">\n            </picture>'))}))},n=document.querySelectorAll(".news__item"),r=0;r<n.length;r+=1)e(r)}();var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y.default(e,t,n[t])}))}return e};var x,y=(x=l("hKHmD"))&&x.__esModule?x:{default:x}}();
//# sourceMappingURL=favorite.777afac8.js.map
