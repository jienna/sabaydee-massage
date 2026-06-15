(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const u=[{name:"Thai oljemassage",desc:"Mjuk massage med olja, fokus på muskler och blodcirkulation",durations:["55 min","85 min","120 min"]},{name:"Aromamassage",desc:"Varm olja och avslappnande teknik — total avkoppling för kropp och sinne",durations:["55 min","85 min","120 min"]},{name:"Hotstone massage",desc:"Varma lavastenar med aromaolja löser blockeringar och skapar balans",durations:["55 min","85 min"]},{name:"Sportmassage",desc:"Förhindrar skador, återställer rörlighet, minskar smärta och stress",durations:["40 min","55 min","85 min"]},{name:"Rygg, axlar & huvud",desc:"Snabb lindring för spänningar i överkroppen",durations:["40 min","55 min","85 min"]},{name:"Fotmassage",desc:"Reflexologi som balanserar energiflödet och ger avkoppling nerifrån och upp",durations:["45 min"]}],m=[{stars:5,text:"Fantastisk massage, kände mig helt avslappnad efteråt. Weepakon är otroligt skicklig och har verkligen koll på kroppen.",author:"Anna S.",source:"Verifierad kund · Bokadirekt"},{stars:5,text:"Bästa massagen jag har haft. Professionell och omtänksam. Kommer definitivt tillbaka!",author:"Erik L.",source:"Verifierad kund · Bokadirekt"},{stars:5,text:"Hotstonemassagen var underbar. Rummet är lugnt och välkomnande, och Weepakon tar sig verkligen tid.",author:"Maria K.",source:"Verifierad kund · Bokadirekt"}],p=[{days:"Måndag – Torsdag",hours:"10:00 – 18:00",dayIndices:[1,2,3,4]},{days:"Fredag",hours:"08:00 – 16:00",dayIndices:[5]},{days:"Lördag",hours:"Enligt överenskommelse",dayIndices:[6]},{days:"Söndag",hours:"Stängt",dayIndices:[0]}],g=new Set([2,4]),d=["Sön","Mån","Tis","Ons","Tor","Fre","Lör"];function v(){const r=document.getElementById("treatment-list");r&&(r.innerHTML=u.map(e=>`
    <li class="treatment-item">
      <div>
        <div class="treatment-name">${e.name}</div>
        <div class="treatment-desc">${e.desc}</div>
      </div>
      <div class="treatment-times">
        ${e.durations.map(t=>`<span class="treatment-time">${t}</span>`).join("")}
      </div>
    </li>
  `).join(""))}function f(){const r=document.getElementById("review-list");r&&(r.innerHTML=m.map(e=>{const t=e.author.split(" ").map(s=>s[0]).join("").slice(0,2),n="★".repeat(e.stars);return`
      <li class="review-card" role="listitem">
        <div class="review-stars" aria-label="${e.stars} av 5 stjärnor">${n}</div>
        <p class="review-text">${e.text}</p>
        <div class="review-author">
          <div class="review-avatar" aria-hidden="true">${t}</div>
          <div>
            <span class="review-name">${e.author}</span>
            <span class="review-source">${e.source}</span>
          </div>
        </div>
      </li>
    `}).join(""))}function h(){const r=document.getElementById("opening-hours");if(!r)return;const e=new Date().getDay();r.innerHTML=p.map(t=>{const n=t.dayIndices.includes(e);return`
      <div class="opening-hours-row${n?" today":""}"
           ${n?'aria-current="true"':""}>
        <span class="opening-hours-day">${t.days}</span>
        <span>${t.hours}</span>
      </div>
    `}).join("")}function y(){const r=document.getElementById("booking-availability");if(!r)return;const e=new Date().getDay(),t=[1,2,3,4,5,6].map(n=>{const s=g.has(n),i=n===e;return`
      <div class="day-chip"
           data-available="${s}"
           data-today="${i}"
           aria-label="${d[n]}${s?" – ledig tid":""}${i?" (idag)":""}">
        <div class="day-chip-bar"></div>
        <span class="day-chip-label">${d[n]}</span>
      </div>
    `});r.innerHTML=t.join("")}function b(){const r=document.getElementById("nav-hamburger"),e=document.getElementById("nav-menu");!r||!e||(r.addEventListener("click",()=>{const t=r.getAttribute("aria-expanded")==="true";r.setAttribute("aria-expanded",String(!t)),e.classList.toggle("open",!t)}),e.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{r.setAttribute("aria-expanded","false"),e.classList.remove("open")})}),document.addEventListener("click",t=>{const n=document.getElementById("site-header");n&&!n.contains(t.target)&&(r.setAttribute("aria-expanded","false"),e.classList.remove("open"))}))}function k(){const r=document.getElementById("site-header");if(!r)return;const e=new IntersectionObserver(([n])=>r.classList.toggle("scrolled",!n.isIntersecting),{threshold:0,rootMargin:"-1px 0px 0px 0px"}),t=document.createElement("div");t.style.cssText="position:absolute;top:0;height:1px;width:100%;pointer-events:none",document.body.prepend(t),e.observe(t)}function E(){const r=document.querySelectorAll("main section[id]"),e=document.querySelectorAll(".nav-link"),t=new IntersectionObserver(n=>{n.forEach(s=>{if(s.isIntersecting){const i=s.target.getAttribute("id");e.forEach(a=>{a.classList.toggle("active",a.getAttribute("href")===`#${i}`)})}})},{rootMargin:"-50% 0px -50% 0px"});r.forEach(n=>t.observe(n))}function L(){const r=document.querySelectorAll(".reveal"),e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),e.unobserve(n.target))})},{threshold:.12});r.forEach(t=>e.observe(t))}function S(){window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{var o,c;const n=(o=e.getAttribute("href"))==null?void 0:o.slice(1);if(!n)return;const s=document.getElementById(n);if(!s)return;t.preventDefault();const i=((c=document.getElementById("site-header"))==null?void 0:c.offsetHeight)??0,a=s.getBoundingClientRect().top+window.scrollY-i-8;window.scrollTo({top:a,behavior:"smooth"})})})}function l(){v(),f(),h(),y(),b(),k(),E(),L(),S()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l();
