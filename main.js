(()=>{"use strict";var e={112:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=()=>{const e=document,t=e.getElementById("app"),n=e.createElement("footer");n.classList.add("footer"),n.textContent="This is my Footer",t.insertAdjacentElement("beforeend",n)}},320:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=()=>{const e=document,t=e.createElement("header"),n=e.getElementById("app"),a=e.createElement("nav"),o=e.createElement("div"),s=e.createElement("div"),r=e.createDocumentFragment();t.classList.add("header"),a.classList.add("nav","container"),s.classList.add("flex-cont");const d=e.createElement("a");let i;d.classList.add("logo"),d.href="/",d.innerHTML='<img src="https://img.icons8.com/ios/50/000000/man-logo.png"\n  />',["Home","Menu","Contact"].forEach((t=>{i=e.createElement("a"),i.dataset.route=t,i.textContent=t,i.id=t,r.appendChild(i)})),s.appendChild(d),s.appendChild(r),o.innerHTML='<img src="https://img.icons8.com/ios-glyphs/30/000000/search.png" />',a.appendChild(s),a.appendChild(o),t.appendChild(a),n.insertAdjacentElement("afterbegin",t)}},471:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=()=>{document.getElementById("content").innerHTML='<section class="home">\n    <article class="copy">\n      <p class="head">CHEF\'S SPECIAL</p>\n      <h1 class="title">\n        Freshness <br />\n        in every bite\n      </h1>\n      <p class="description">\n        Healthy Sashimi Tuna Bites With Sashimi grade Tuna, <br />110\n        calories and 13g protein.\n      </p>\n      <button class="btn">Download Recipe</button>\n    </article>\n    <article class="hero">\n      <figure>\n        <img src="./assets/plate.png" alt="" />\n      </figure>\n    </article>\n  </section>'}},6:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(471);const o=()=>{document.getElementById("content").innerHTML="This Is My Menu <br> <h1>Comeme Esta Papi</h1>"},s=()=>{document.getElementById("content").innerHTML="This Is My Contact<br> <h1>Minimo un mensajito no?</h1>"},r=e=>{let t=location.hash.slice(1);const n={Home:a.default,Menu:o,Contact:s};(n[t]||n.Home)()}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{default:e}=n(112),{default:t}=n(320),{default:a}=n(471),{default:o}=n(6);document.addEventListener("DOMContentLoaded",(()=>{t(),a(),e()})),document.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".header a")&&(location.hash=e.target.dataset.route)})),window.addEventListener("hashchange",(e=>{o()}))})()})();