!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequireeb85;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequireeb85=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.cba36c65.js","410VS":"icons.97836ac9.svg"}'));var s,c=["Admin","Arts","Automobiles","Books","Briefing","Business","Climate","Corrections","Crosswords & Games","Education","En Español","Fashion","Food","Guides","Health","Home & Garden","Home Page","Job Market","Lens","Magazine","Movies","Multimedia/Photos","New York","Obituaries","Opinion","Parenting","Podcasts","Reader Center","Real Estate","Science","Smarter Living","Sports","Style","Sunday Review","T Brand","T Magazine","Technology","The Learning Network","The Upshot","The Weekly","Theater","Times Insider","Today’s Paper","Travel","U.S.","Universal","Video","Well","World","Your Money"];s=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("410VS");var a,u,l,d,f=document.querySelector(".category-wrapper");function v(e){return e.reduce((function(e,t){return e+'\n<div class="options">'.concat(t,"</div>\n")}),"")}function g(e){return e.reduce((function(e,t){return e+'\n<li class="categories__item">\n        <button type="button" class="categories__button">'.concat(t,"</button>\n      </li>")}),"")}function p(e){return window.innerWidth<768?function(e){return'\n<div class="select-menu">\n  <button class="categories__button select" type="button">\n    <span>Categories</span>\n    <svg class="categories__icon" width="14" height="14">\n      <use href=\''.concat(t(s),'#arrow_down\'></use>\n    </svg>\n  </button>\n  <div class="select__list">\n    <div class="select__wrapper">').concat(v(e),"</div>\n  </div>\n</div>\n")}(e):window.innerWidth<1280?function(e){var n=e.slice(0,4),r=e.slice(4);return'<ul id="categories" class="categories-wrapper list"> \n        '.concat(g(n),'     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="').concat(t(s),'#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">').concat(v(r),"</div>\n          </div>\n        </div>\n      </li>\n    </ul>")}(e):function(e){var n=e.slice(0,6),r=e.slice(6);return'<ul id="categories" class="categories-wrapper list"> \n        '.concat(g(n),'     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="').concat(t(s),'#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">').concat(v(r),"</div>\n          </div>\n        </div>\n      </li>\n    </ul>")}(e)}function m(){var e=p(c);f.innerHTML=e}m(),a=document.querySelector("[data-menu-button]"),u=document.querySelector("[data-menu-button2]"),l=document.querySelector("[data-menu]"),d=document.querySelector("[data-thema]"),a.addEventListener("click",(function(){var e="true"===a.getAttribute("aria-expanded")||!1;a.classList.toggle("is-open"),a.setAttribute("aria-expanded",!e),u.classList.toggle("is-open"),u.setAttribute("aria-expanded",!e),l.classList.toggle("is-open"),d.classList.toggle("is-open")}));var h=document.querySelector(".select"),b=document.querySelector(".select__list"),_=document.querySelectorAll(".options");h.addEventListener("click",(function(){b.classList.toggle("active"),h.querySelector(".categories__icon").classList.toggle("inverted")})),_.forEach((function(e){e.addEventListener("click",(function(){_.forEach((function(e){e.classList.remove("selected")})),h.querySelector("span").innerHTML=e.innerHTML,e.classList.add("selected"),b.classList.toggle("active"),h.querySelector(".categories__icon").classList.toggle("inverted")}))}));var y={input:document.querySelector(".switch__input")};function w(){var e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(y.input.checked=!0,document.querySelector("html").classList.add("dark")))}w(),y.input.addEventListener("click",(function(e){var t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));w()}));var S,L={};Object.defineProperty(L,"__esModule",{value:!0}),L.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var E="Expected a function",T=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,q=/^0o[0-7]+$/i,k=parseInt,j="object"==typeof n&&n&&n.Object===Object&&n,M="object"==typeof self&&self&&self.Object===Object&&self,H=j||M||Function("return this")(),N=Object.prototype.toString,A=Math.max,C=Math.min,R=function(){return H.Date.now()};function W(e,t,n){var r,i,o,s,c,a,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(E);function v(t){var n=r,o=i;return r=i=void 0,u=t,s=e.apply(o,n)}function g(e){return u=e,c=setTimeout(m,t),l?v(e):s}function p(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-u>=o}function m(){var e=R();if(p(e))return h(e);c=setTimeout(m,function(e){var n=t-(e-a);return d?C(n,o-(e-u)):n}(e))}function h(e){return c=void 0,f&&r?v(e):(r=i=void 0,s)}function b(){var e=R(),n=p(e);if(r=arguments,i=this,a=e,n){if(void 0===c)return g(a);if(d)return c=setTimeout(m,t),v(a)}return void 0===c&&(c=setTimeout(m,t)),s}return t=U(t)||0,P(n)&&(l=!!n.leading,o=(d="maxWait"in n)?A(U(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=a=i=c=void 0},b.flush=function(){return void 0===c?s:h(R())},b}function P(e){var n=void 0===e?"undefined":t(L)(e);return!!e&&("object"==n||"function"==n)}function U(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(L)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==N.call(e)}(e))return NaN;if(P(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=P(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(T,"");var r=x.test(e);return r||q.test(e)?k(e.slice(2),r?2:8):O.test(e)?NaN:+e}S=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(E);return P(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),W(e,t,{leading:r,maxWait:t,trailing:i})};var B=F();function F(){var e=window.innerWidth;return e<768?0:e<1280?1:2}window.addEventListener("resize",t(S)((function(){var e=F();e!==B&&(B=e,m())}),300))}();
//# sourceMappingURL=index.cba36c65.js.map
