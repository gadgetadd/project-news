function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequireeb85;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequireeb85=o),o.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"5ZPII":"favorite.0322e6d0.js","8OQ7p":"icons.f26c47cc.svg"}'));const s=["Admin","Arts","Automobiles","Books","Briefing","Business","Climate","Corrections","Crosswords & Games","Education","En Español","Fashion","Food","Guides","Health","Home & Garden","Home Page","Job Market","Lens","Magazine","Movies","Multimedia/Photos","New York","Obituaries","Opinion","Parenting","Podcasts","Reader Center","Real Estate","Science","Smarter Living","Sports","Style","Sunday Review","T Brand","T Magazine","Technology","The Learning Network","The Upshot","The Weekly","Theater","Times Insider","Today’s Paper","Travel","U.S.","Universal","Video","Well","World","Your Money"];var c;c=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const a=document.querySelector(".category-wrapper");function l(e){return e.reduce(((e,t)=>e+`\n<div class="options">${t}</div>\n`),"")}function u(e){return e.reduce(((e,t)=>e+`\n<li class="categories__item">\n        <button type="button" class="categories__button">${t}</button>\n      </li>`),"")}function d(e){return window.innerWidth<768?function(e){return`\n<div class="select-menu">\n  <button class="categories__button select" type="button">\n    <span>Categories</span>\n    <svg class="categories__icon" width="14" height="14">\n      <use href='${t(c)}#arrow_down'></use>\n    </svg>\n  </button>\n  <div class="select__list">\n    <div class="select__wrapper">${l(e)}</div>\n  </div>\n</div>\n`}(e):window.innerWidth<1280?function(e){const n=e.slice(0,4),i=e.slice(4);return`<ul id="categories" class="categories-wrapper list"> \n        ${u(n)}     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="${t(c)}#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">${l(i)}</div>\n          </div>\n        </div>\n      </li>\n    </ul>`}(e):function(e){const n=e.slice(0,6),i=e.slice(6);return`<ul id="categories" class="categories-wrapper list"> \n        ${u(n)}     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="${t(c)}#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">${l(i)}</div>\n          </div>\n        </div>\n      </li>\n    </ul>`}(e)}function f(){const e=d(s);a.innerHTML=e}f(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-button2]"),n=document.querySelector("[data-menu]"),i=document.querySelector("[data-thema]");e.addEventListener("click",(()=>{const r="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!r),n.classList.toggle("is-open"),i.classList.toggle("is-open")}))})();const g=document.querySelector(".select"),p=document.querySelector(".select__list"),v=document.querySelectorAll(".options");g.addEventListener("click",(()=>{p.classList.toggle("active"),g.querySelector(".categories__icon").classList.toggle("inverted")})),v.forEach((e=>{e.addEventListener("click",(()=>{v.forEach((e=>{e.classList.remove("selected")})),g.querySelector("span").innerHTML=e.innerHTML,e.classList.add("selected"),p.classList.toggle("active"),g.querySelector(".categories__icon").classList.toggle("inverted")}))}));const m={input:document.querySelector(".switch__input")};function b(){const e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(m.input.checked=!0,document.querySelector("html").classList.add("dark")))}b(),m.input.addEventListener("click",(function(e){let t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));b()}));var h,y=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,S=/^0o[0-7]+$/i,L=parseInt,E="object"==typeof n&&n&&n.Object===Object&&n,T="object"==typeof self&&self&&self.Object===Object&&self,k=E||T||Function("return this")(),O=Object.prototype.toString,x=Math.max,q=Math.min,$=function(){return k.Date.now()};function j(e,t,n){var i,r,o,s,c,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,o=r;return i=r=void 0,l=t,s=e.apply(o,n)}function p(e){return l=e,c=setTimeout(m,t),u?g(e):s}function v(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=o}function m(){var e=$();if(v(e))return b(e);c=setTimeout(m,function(e){var n=t-(e-a);return d?q(n,o-(e-l)):n}(e))}function b(e){return c=void 0,f&&i?g(e):(i=r=void 0,s)}function h(){var e=$(),n=v(e);if(i=arguments,r=this,a=e,n){if(void 0===c)return p(a);if(d)return c=setTimeout(m,t),g(a)}return void 0===c&&(c=setTimeout(m,t)),s}return t=H(t)||0,M(n)&&(u=!!n.leading,o=(d="maxWait"in n)?x(H(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),h.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=a=r=c=void 0},h.flush=function(){return void 0===c?s:b($())},h}function M(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==O.call(e)}(e))return NaN;if(M(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=M(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var n=w.test(e);return n||S.test(e)?L(e.slice(2),n?2:8):_.test(e)?NaN:+e}h=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return M(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),j(e,t,{leading:i,maxWait:t,trailing:r})};let A=F();function F(){const e=window.innerWidth;return e<768?0:e<1280?1:2}window.addEventListener("resize",t(h)((function(){console.log(1);const e=F();e!==A&&(A=e,f())}),300));
//# sourceMappingURL=favorite.0322e6d0.js.map
