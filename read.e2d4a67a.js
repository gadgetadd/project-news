function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},o=n.parcelRequireeb85;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},n.parcelRequireeb85=o),o.register("kyEFX",(function(t,n){var r,s;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return s}),(function(e){return s=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("kyEFX").register(JSON.parse('{"jewIc":"read.e2d4a67a.js","8OQ7p":"icons.f553b1cc.svg","6pACT":"no-news-desktop.0f33a02c.png","3o6Q3":"no-news-desktop@2x.50482234.png","3fa3d":"no-news-tablet.7a43ff6f.png","epzzh":"no-news-tablet@2x.9203222f.png","7Jvi5":"no-news-mobile.9c3a8cf3.png","iyjs9":"no-news-mobile@2x.cd1eff34.png"}')),(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-button2]"),n=document.querySelector("[data-menu]"),r=document.querySelector("[data-thema]");e.addEventListener("click",(()=>{const s="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!s),t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!s),n.classList.toggle("is-open"),r.classList.toggle("is-open"),document.body.classList.toggle("mobile-body")}))})();const a={input:document.querySelector(".switch__input")};function i(){const e=localStorage.getItem("theme");e&&("light"===e?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("body-dark")):(a.input.checked=!0,document.querySelector("html").classList.add("dark")))}i(),a.input.addEventListener("click",(function(e){let t;e.target.checked?(t="dark",localStorage.setItem("theme",t)):(t="light",localStorage.setItem("theme",t));i()}));var c;c=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var d;d=new URL(o("kyEFX").resolve("6pACT"),import.meta.url).toString();var l;l=new URL(o("kyEFX").resolve("3o6Q3"),import.meta.url).toString();var u;u=new URL(o("kyEFX").resolve("3fa3d"),import.meta.url).toString();var g;g=new URL(o("kyEFX").resolve("epzzh"),import.meta.url).toString();var m;m=new URL(o("kyEFX").resolve("7Jvi5"),import.meta.url).toString();var p;p=new URL(o("kyEFX").resolve("iyjs9"),import.meta.url).toString();const h=document.querySelector("#art-container"),_=e=>{const t={month:0,day:0,year:e.getFullYear()};return e.getMonth()<=8?t.month=`0${e.getMonth()+1}`:t.month=e.getMonth()+1,e.getDate()<=9?t.day=`0${e.getDate()}`:t.day=e.getDate(),t},w=(e,n)=>{const r=new Date(e),s=(e=>{const n=document.createElement("ul");n.classList.add("news");const r=e.reduce(((e,n)=>{const r=new Date(n.date),{day:s,month:o,year:a}=_(r);return e+`\n                <li class="news__item">\n                    <div class="news__card">\n                        <div class="news__img">\n                          <div class="news__img-wrap">\n                              <picture>\n                              <source\n                                  srcset="${n.image}"\n                                  media="(max-width: 767px)"\n                                  width="288"\n                                  height="395"\n                              />\n                              <source\n                                  srcset="${n.image}"\n                                  media="(max-width: 1279px)"\n                                  width="353"\n                                  height="395"\n                              />\n                              <img\n                                  class="news__image"\n                                  srcset="${n.image}"\n                                  src="${n.image}"\n                                  alt=""\n                                  width="395"\n                                  height="395"\n                              />\n                              </picture>\n                          </div>\n                            <p class="news__category">${n.category}</p>\n\n                            <button type="button" class="button-card">\n                            Add to favorite\n                            <svg class="button-card-icon" width="16" height="16">\n                                <use href="${t(c)}#icons_heart"></use>\n                            </svg>\n                            </button>\n                        </div>\n                        <div class="news__title-wrap">\n                            <h1 class="news__title">${n.title}</h1>\n                        </div>\n                        <p class="news__text">\n                            ${n.descr}\n                        </p>\n                    </div>\n                    <div class="news__info">\n                        <time datetime="${n.date}" class="news__time">${s}/${o}/${a}</time>\n                        <a class="news__link" href="${n.url}">Read more</a>\n                    </div>\n                </li>`}),"");return n.insertAdjacentHTML("beforeend",r),n})(n),{day:o,month:a,year:i}=_(r),d=document.createElement("div");d.classList.add("read__list-wrapper"),d.innerHTML=`<h2 class="read__date">\n                            ${o}/${a}/${i}\n                            <svg class="read__date-icon" width="14" height="9">\n                                <use href="${t(c)}#arrow_up"></use>\n                            </svg>\n                            </h2>\n                            `,d.append(s),h.append(d)};(()=>{const e=JSON.parse(localStorage.getItem("readArticles"));if(null===e)return void(h.innerHTML=` <picture>\n                <source\n                    srcset="${t(m)} 1x, ${t(p)} 2x"\n                    media="(max-width: 767px)">\n                <source\n                    srcset="${t(u)} 1x, ${t(g)} 2x"\n                    media="(max-width: 1279px)">\n                <source\n                    srcset="${t(d)} 1x, ${t(l)} 2x"\n                    media="(min-width: 1280px)">\n                <img class="read__no-news" src="${t(m)}"\n                    alt="Зображення не має новин">\n            </picture>`);for(const t in e)w(t,e[t]);const n=document.querySelectorAll(".read__list-wrapper");console.log(n);for(let e=0;e<n.length;e+=1)n[e].children[0].addEventListener("click",(()=>{n[e].children[0].children[0].classList.toggle("read--rotate");const t=n[e].clientHeight,r=n[e].scrollHeight;n[e].style.height=t>33?"33px":`${r}px`}))})();
//# sourceMappingURL=read.e2d4a67a.js.map
