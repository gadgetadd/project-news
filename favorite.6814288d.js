function e(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},i={},r=n.parcelRequireeb85;null==r&&((r=function(e){if(e in s)return s[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequireeb85=r),r.register("kyEFX",(function(t,n){var s,i;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var r={};s=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"favorite.6814288d.js","8OQ7p":"icons.f26c47cc.svg"}'));var o;function a(e){return e.reduce(((e,t)=>e+`\n<div class="options">${t}</div>\n`),"")}function l(e){return e.reduce(((e,t)=>e+`\n<li class="categories__item">\n        <button type="button" class="categories__button">${t}</button>\n      </li>`),"")}o=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const c=document.querySelector(".filter-wrapper"),u=(d=["Admin","Arts","Automobiles","Books","Briefing","Business","Climate","Corrections","Crosswords & Games","Education","En Español","Fashion","Food","Guides","Health","Home & Garden","Home Page","Job Market","Lens","Magazine","Movies","Multimedia/Photos","New York","Obituaries","Opinion","Parenting","Podcasts","Reader Center","Real Estate","Science","Smarter Living","Sports","Style","Sunday Review","T Brand","T Magazine","Technology","The Learning Network","The Upshot","The Weekly","Theater","Times Insider","Today’s Paper","Travel","U.S.","Universal","Video","Well","World","Your Money"],window.innerWidth<768?function(e){return`\n<div class="select-menu">\n  <button class="categories__button select" type="button">\n    <span>Categories</span>\n    <svg class="categories__icon" width="14" height="14">\n      <use href='${t(o)}#arrow_down'></use>\n    </svg>\n  </button>\n  <div class="select__list">\n    <div class="select__wrapper">${a(e)}</div>\n  </div>\n</div>\n`}(d):window.innerWidth<1280?function(e){const n=e.slice(0,4),s=e.slice(4);return`<ul id="categories" class="categories-wrapper list"> \n        ${l(n)}     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="${t(o)}#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">${a(s)}</div>\n          </div>\n        </div>\n      </li>\n    </ul>`}(d):function(e){const n=e.slice(0,6),s=e.slice(6);return`<ul id="categories" class="categories-wrapper list"> \n        ${l(n)}     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="${t(o)}#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">${a(s)}</div>\n          </div>\n        </div>\n      </li>\n    </ul>`}(d));var d;c.insertAdjacentHTML("afterbegin",u),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-button2]"),n=document.querySelector("[data-menu]"),s=document.querySelector("[data-thema]");e.addEventListener("click",(()=>{const i="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!i),t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!i),n.classList.toggle("is-open"),s.classList.toggle("is-open")}))})();
//# sourceMappingURL=favorite.6814288d.js.map
