const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector(".nav");toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open);toggle.textContent=open?"×":"☰"});document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"}));document.getElementById("year").textContent=new Date().getFullYear();document.getElementById("contact-form").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.target);const msg=`Olá! Meu nome é ${data.get("nome")}. Meu telefone é ${data.get("telefone")}. Gostaria de conversar sobre: ${data.get("projeto")}`;window.open(`https://wa.me/5511991850228?text=${encodeURIComponent(msg)}`,"_blank","noopener");});
// Animações de entrada, cabeçalho dinâmico e destaque da seção atual.
(() => {
 const header=document.querySelector(".header");
 const revealItems=document.querySelectorAll(".reveal");
 const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 if(!reduce && "IntersectionObserver" in window){
  const observer=new IntersectionObserver((entries,obs)=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");obs.unobserve(entry.target)}});
  },{threshold:.12,rootMargin:"0px 0px -35px 0px"});
  revealItems.forEach(el=>observer.observe(el));
 }else{revealItems.forEach(el=>el.classList.add("visible"))}
 const onScroll=()=>{header.classList.toggle("scrolled",window.scrollY>40)};
 onScroll();window.addEventListener("scroll",onScroll,{passive:true});
 const sections=[...document.querySelectorAll("main section[id]")];
 const links=[...document.querySelectorAll(".nav a")];
 if("IntersectionObserver" in window){
  const sectionObserver=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id))}});
  },{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(section=>sectionObserver.observe(section));
 }
})();
