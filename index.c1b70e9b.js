function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequireeb85;async function a(){const e={enableHighAccuracy:!0,timeout:3500,maximumAge:0};try{const t=(await new Promise(((t,n)=>{navigator.geolocation.getCurrentPosition(t,n,e)}))).coords,n=await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${t.latitude}&lon=${t.longitude}&apiKey=f266ae9456ab4ee184068910bc067d16`),r=await n.json(),i=await d(r.features[0].properties.city);console.log(i)}catch(e){console.log("Error:",e);const t=await d("New York");console.log(t)}}null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequireeb85=o),o.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.c1b70e9b.js","8OQ7p":"icons.97836ac9.svg"}'));var s;s=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const c=new Date;var l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][c.getDay()],u=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][c.getMonth()];async function d(e){return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=2fa5e7124eb1861eb7ba33fe6cd0b40a`).then((function(e){return e.json()})).then((function(e){const n=function(e,n,r,i){return`<div class="weather-card">\n    <div class="weather-card__description">\n      <div class="weather-card__temperature">\n        <p class="weather-card__degrees">${Math.round(e.main.temp)}&deg;</p>\n      </div>\n      <div class="weather-card__geoblock">\n        <p class="weather-card__forecast">${e.weather[0].description.charAt(0).toUpperCase()+e.weather[0].description.slice(1)}</p>\n        <div class="weather-card__geolocation">\n        <svg\n        class="weather-card__geoelocation__icon"\n        width="19"\n        height="24"\n      >\n        <use href="${t(s)}#location"></use>\n      </svg>\n        <p class="weather-card__geolocation__text">${e.name}</p>\n        </div>\n      </div>\n    </div>\n    <div class="weather-card__icon"><img class="icon__weather" src="https://openweathermap.org/img/wn/${e.weather[0].icon}@4x.png"></img></div>\n    <p class="weather-card__date">${r}</p>\n    <p class="weather-card__year">${n.getUTCDate()+" "+i+" "+n.getFullYear()}</p>\n  </div>`}(e,c,l,u);weatherCard.innerHTML=n})).catch((function(e){console.log(e)}))}!async function(){await a()}();const g=["Admin","Arts","Automobiles","Books","Briefing","Business","Climate","Corrections","Crosswords & Games","Education","En Español","Fashion","Food","Guides","Health","Home & Garden","Home Page","Job Market","Lens","Magazine","Movies","Multimedia/Photos","New York","Obituaries","Opinion","Parenting","Podcasts","Reader Center","Real Estate","Science","Smarter Living","Sports","Style","Sunday Review","T Brand","T Magazine","Technology","The Learning Network","The Upshot","The Weekly","Theater","Times Insider","Today’s Paper","Travel","U.S.","Universal","Video","Well","World","Your Money"],p=document.querySelector(".category-wrapper");function f(e){return e.reduce(((e,t)=>e+`\n<div class="options">${t}</div>\n`),"")}function v(e){return e.reduce(((e,t)=>e+`\n<li class="categories__item">\n        <button type="button" class="categories__button">${t}</button>\n      </li>`),"")}function h(e){return window.innerWidth<768?function(e){return`\n<div class="select-menu">\n  <button class="categories__button select" type="button">\n    <span>Categories</span>\n    <svg class="categories__icon" width="14" height="14">\n      <use href='${t(s)}#arrow_down'></use>\n    </svg>\n  </button>\n  <div class="select__list">\n    <div class="select__wrapper">${f(e)}</div>\n  </div>\n</div>\n`}(e):window.innerWidth<1280?function(e){const n=e.slice(0,4),r=e.slice(4);return`<ul id="categories" class="categories-wrapper list"> \n        ${v(n)}     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="${t(s)}#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">${f(r)}</div>\n          </div>\n        </div>\n      </li>\n    </ul>`}(e):function(e){const n=e.slice(0,6),r=e.slice(6);return`<ul id="categories" class="categories-wrapper list"> \n        ${v(n)}     \n       <li class="categories__item">\n        <div class="select-menu">\n          <button class="categories__button select" type="button">\n            <span> Others</span>\n            <svg class="categories__icon" width="14" height="14">\n              <use href="${t(s)}#arrow_down"></use>\n            </svg>\n          </button>\n          <div class="select__list list">\n            <div class="select__wrapper">${f(r)}</div>\n          </div>\n        </div>\n      </li>\n    </ul>`}(e)}function _(){const e=h(g);p.innerHTML=e}_(),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-button2]"),n=document.querySelector("[data-menu]"),r=document.querySelector("[data-thema]");e.addEventListener("click",(()=>{const i="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!i),t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!i),n.classList.toggle("is-open"),r.classList.toggle("is-open")}))})();const m=document.querySelector(".select"),w=document.querySelector(".select__list"),b=document.querySelectorAll(".options");m.addEventListener("click",(()=>{w.classList.toggle("active"),m.querySelector(".categories__icon").classList.toggle("inverted")})),b.forEach((e=>{e.addEventListener("click",(()=>{b.forEach((e=>{e.classList.remove("selected")})),m.querySelector("span").innerHTML=e.innerHTML,e.classList.add("selected"),w.classList.toggle("active"),m.querySelector(".categories__icon").classList.toggle("inverted")}))}));const y={input:document.querySelector(".switch__input")};function S(){const e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(y.input.checked=!0,document.querySelector("html").classList.add("dark")))}S(),y.input.addEventListener("click",(function(e){let t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));S()}));var L,T=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,k=/^0o[0-7]+$/i,x=parseInt,O="object"==typeof n&&n&&n.Object===Object&&n,M="object"==typeof self&&self&&self.Object===Object&&self,q=O||M||Function("return this")(),j=Object.prototype.toString,A=Math.max,F=Math.min,H=function(){return q.Date.now()};function C(e,t,n){var r,i,o,a,s,c,l=0,u=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function f(e){return l=e,s=setTimeout(h,t),u?p(e):a}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function h(){var e=H();if(v(e))return _(e);s=setTimeout(h,function(e){var n=t-(e-c);return d?F(n,o-(e-l)):n}(e))}function _(e){return s=void 0,g&&r?p(e):(r=i=void 0,a)}function m(){var e=H(),n=v(e);if(r=arguments,i=this,c=e,n){if(void 0===s)return f(c);if(d)return s=setTimeout(h,t),p(c)}return void 0===s&&(s=setTimeout(h,t)),a}return t=W(t)||0,N(n)&&(u=!!n.leading,o=(d="maxWait"in n)?A(W(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),m.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=i=s=void 0},m.flush=function(){return void 0===s?a:_(H())},m}function N(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function W(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==j.call(e)}(e))return NaN;if(N(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=N(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(T,"");var n=$.test(e);return n||k.test(e)?x(e.slice(2),n?2:8):E.test(e)?NaN:+e}L=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return N(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),C(e,t,{leading:r,maxWait:t,trailing:i})};let P=R();function R(){const e=window.innerWidth;return e<768?0:e<1280?1:2}window.addEventListener("resize",t(L)((function(){const e=R();e!==P&&(P=e,_())}),300));
//# sourceMappingURL=index.c1b70e9b.js.map
