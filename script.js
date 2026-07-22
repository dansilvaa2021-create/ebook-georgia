/*==================================================
            GEORGIA PREMIUM WEBSITE
            Parte 1
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*=========================================
            LOADER
=========================================*/

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML=`

<div class="loader-logo">

GEORGIA

</div>

`;

document.body.appendChild(loader);

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},800);

},1000);

});

/*=========================================
            MENU
=========================================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("header-scroll");

}else{

header.classList.remove("header-scroll");

}

});

/*=========================================
        MENU ATIVO
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-200;

const height=section.offsetHeight;

if(top>=offset && top<offset+height){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/*=========================================
        SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

window.scrollTo({

top:destino.offsetTop-80,

behavior:"smooth"

});

}

});

});

/*=========================================
        APARECER AO ROLAR
=========================================*/

const reveal=document.querySelectorAll(

".hero,.card3d,.produto-card,.titulo,.sobre,.depoimento-card,.contato"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

reveal.forEach(el=>observer.observe(el));

/*=========================================
        PARALLAX HERO
=========================================*/

const video=document.querySelector(".hero video");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

if(video){

video.style.transform=

`translateY(${value*.25}px) scale(1.08)`;

}

});

/*=========================================
        TITULO CINEMA
=========================================*/

const titulo=document.querySelector(".hero h1");

if(titulo){

titulo.style.opacity="0";

titulo.style.transform="translateY(50px)";

setTimeout(()=>{

titulo.style.transition="1.4s";

titulo.style.opacity="1";

titulo.style.transform="translateY(0)";

},800);

}

/*=========================================
        SUBTITULO
=========================================*/

const texto=document.querySelector(".hero p");

if(texto){

texto.style.opacity="0";

texto.style.transform="translateY(40px)";

setTimeout(()=>{

texto.style.transition="1.6s";

texto.style.opacity="1";

texto.style.transform="translateY(0)";

},1200);

}

});

