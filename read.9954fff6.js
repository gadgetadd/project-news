function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},c=n.parcelRequireeb85;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){i[e]=t},n.parcelRequireeb85=c),c.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var c={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},i=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c("kyEFX").register(JSON.parse('{"jewIc":"read.9954fff6.js","8OQ7p":"icons.c1237735.svg","6pACT":"no-news-desktop.0f33a02c.png","3o6Q3":"no-news-desktop@2x.50482234.png","3fa3d":"no-news-tablet.7a43ff6f.png","epzzh":"no-news-tablet@2x.9203222f.png","7Jvi5":"no-news-mobile.9c3a8cf3.png","iyjs9":"no-news-mobile@2x.cd1eff34.png"}')),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-button2]"),n=document.querySelector("[data-menu]"),r=document.querySelector("[data-thema]");e.addEventListener("click",(()=>{const i="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!i),t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!i),n.classList.toggle("is-open"),r.classList.toggle("is-open"),document.body.classList.toggle("mobile-body")}))})();const o={input:document.querySelector(".switch__input")};function s(){const e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(o.input.checked=!0,document.querySelector("html").classList.add("dark")))}s(),o.input.addEventListener("click",(function(e){let t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));s()}));var l;l=new URL(c("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var a;a=new URL(c("kyEFX").resolve("6pACT"),import.meta.url).toString();var d;d=new URL(c("kyEFX").resolve("3o6Q3"),import.meta.url).toString();var u;u=new URL(c("kyEFX").resolve("3fa3d"),import.meta.url).toString();var h;h=new URL(c("kyEFX").resolve("epzzh"),import.meta.url).toString();var m;m=new URL(c("kyEFX").resolve("7Jvi5"),import.meta.url).toString();var g;g=new URL(c("kyEFX").resolve("iyjs9"),import.meta.url).toString();const p=document.querySelector("#art-container"),v=e=>{const t={month:0,day:0,year:e.getFullYear()};return e.getMonth()<=8?t.month=`0${e.getMonth()+1}`:t.month=e.getMonth()+1,e.getDate()<=9?t.day=`0${e.getDate()}`:t.day=e.getDate(),t},f=(e,n)=>{const r=new Date(e),i=(e=>{const n=document.createElement("ul");n.classList.add("news");const r=e.reduce(((e,n)=>{const r=new Date(n.date),{day:i,month:c,year:o}=v(r);return e+`\n                <li class="news__item" id="${n.id}">\n                    <div class="news__card">\n                        <div class="news__img">\n                          <div class="news__img-wrap">\n                              <picture>\n                              <source\n                                  srcset="${n.image}"\n                                  media="(max-width: 767px)"\n                                  width="288"\n                                  height="395"\n                              />\n                              <source\n                                  srcset="${n.image}"\n                                  media="(max-width: 1279px)"\n                                  width="353"\n                                  height="395"\n                              />\n                              <img\n                                  class="news__image"\n                                  srcset="${n.image}"\n                                  src="${n.image}"\n                                  alt=""\n                                  width="395"\n                                  height="395"\n                              />\n                              </picture>\n                          </div>\n                            <p class="news__category">${n.category}</p>\n\n                            <button type="button" class="button-card">\n                            Add to favorite\n                            <svg class="button-card-icon" width="16" height="16">\n                                <use href="${t(l)}#icons_heart"></use>\n                            </svg>\n                            </button>\n                        </div>\n                        <div class="news__title-wrap">\n                            <h1 class="news__title">${n.title}</h1>\n                        </div>\n                        <p class="news__text">\n                            ${n.descr}\n                        </p>\n                    </div>\n                    <div class="news__info">\n                        <time datetime="${n.date}" class="news__time">${i}/${c}/${o}</time>\n                        <a class="news__link" href="${n.url}">Read more</a>\n                    </div>\n                </li>`}),"");return n.insertAdjacentHTML("beforeend",r),n})(n),{day:c,month:o,year:s}=v(r),a=document.createElement("div");a.classList.add("read__list-wrapper"),a.innerHTML=`<h2 class="read__date">\n                            ${c}/${o}/${s}\n                            <svg class="read__date-icon" width="14" height="9">\n                                <use href="${t(l)}#arrow_up"></use>\n                            </svg>\n                            </h2>\n                            `,a.append(i),p.append(a)};(()=>{const e=JSON.parse(localStorage.getItem("readArticles"));if(null===e)return void(p.innerHTML=` <picture>\n                <source\n                    srcset="${t(m)} 1x, ${t(g)} 2x"\n                    media="(max-width: 767px)">\n                <source\n                    srcset="${t(u)} 1x, ${t(h)} 2x"\n                    media="(max-width: 1279px)">\n                <source\n                    srcset="${t(a)} 1x, ${t(d)} 2x"\n                    media="(min-width: 1280px)">\n                <img class="read__no-news" src="${t(m)}"\n                    alt="Зображення не має новин">\n            </picture>`);for(const t in e)f(t,e[t]);const n=document.querySelectorAll(".read__list-wrapper");for(let e=0;e<n.length;e+=1)n[e].children[0].addEventListener("click",(()=>{n[e].children[0].children[0].classList.toggle("read--rotate");const t=n[e].clientHeight,r=n[e].scrollHeight;n[e].style.height=t>33?"33px":`${r}px`}))})();const _=(e,t)=>e.some((e=>e.title===t)),w=e=>{e.children[0].children[0].children[2].childNodes[0].textContent="Remove from favorite",e.children[0].children[0].children[2].children[0].classList.add("button-card-icon-remove")},b=(e,t,n)=>{const r={id:e.attributes[1].value,category:e.children[0].children[0].children[1].textContent,date:e.children[1].children[0].attributes[0].value,descr:e.children[0].children[2].innerText,image:e.children[0].children[0].children[0].children[0].children[2].attributes[1].value,title:e.children[0].children[1].innerText,url:e.children[1].children[1].attributes[1].value};t.push(r),localStorage.setItem("favoriteArticles",JSON.stringify(t)),w(e),e.children[0].children[0].children[2].addEventListener("click",(r=>{y(e,t,n)}),{once:!0})},y=(e,t=[],n)=>{index=t.findIndex((e=>e.id===n)),t.splice(index,1),localStorage.setItem("favoriteArticles",JSON.stringify(t)),e.children[0].children[0].children[2].childNodes[0].textContent="Add to favorite",e.children[0].children[0].children[2].children[0].classList.remove("button-card-icon-remove"),e.children[0].children[0].children[2].addEventListener("click",(n=>{b(e,t)}),{once:!0})};(()=>{localStorage.getItem("favoriteArticles")||localStorage.setItem("favoriteArticles",JSON.stringify([]));const e=document.querySelectorAll(".news__item"),t=[...JSON.parse(localStorage.getItem("favoriteArticles"))];for(let n=0;n<e.length;n+=1){const r=e[n];_(t,r.children[0].children[1].innerText)?w(r):r.children[0].children[0].children[2].addEventListener("click",(e=>{b(r,t,r.attributes[1].value)}),{once:!0})}})(),(()=>{const e=document.querySelectorAll(".news__item"),t=[...JSON.parse(localStorage.getItem("favoriteArticles"))];for(let n=0;n<e.length;n+=1){const r=e[n];t.some((e=>e.id===r.attributes[1].value))&&r.children[0].children[0].children[2].addEventListener("click",(e=>{y(r,t,r.attributes[1].value)}),{once:!0})}})();
//# sourceMappingURL=read.9954fff6.js.map
