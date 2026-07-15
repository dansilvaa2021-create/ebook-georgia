
/* ============================
   ELITEBOOKS - APP.JS
=============================*/

// Carrinho
let carrinho = [];

// Favoritos
let favoritos = [];

/* ============================
   BOTÕES COMPRAR
=============================*/

const botoesComprar = document.querySelectorAll(".card button");

botoesComprar.forEach((botao) => {

    botao.addEventListener("click", () => {

        const card = botao.parentElement;

        const nome = card.querySelector("h3").innerText;

        const preco = card.querySelector("span").innerText;

        carrinho.push({
            nome,
            preco
        });

        alert(nome + " foi adicionado ao carrinho!");

        atualizarCarrinho();

    });

});

/* ============================
   ATUALIZAR CARRINHO
=============================*/

function atualizarCarrinho(){

    console.clear();

    console.log("CARRINHO");

    console.table(carrinho);

}

/* ============================
   FAVORITOS
=============================*/

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    const favorito = document.createElement("button");

    favorito.innerHTML="❤️";

    favorito.classList.add("favorito");

    card.appendChild(favorito);

    favorito.addEventListener("click",()=>{

        const titulo = card.querySelector("h3").innerText;

        favoritos.push(titulo);

        favorito.style.background="#ff4d6d";

        favorito.style.color="white";

        console.log(favoritos);

    });

});

/* ============================
   NEWSLETTER
=============================*/

const formulario = document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

const email = formulario.querySelector("input").value;

if(email==""){

alert("Digite um e-mail.");

return;

}

alert("Cadastro realizado com sucesso!");

formulario.reset();

});

}

/* ============================
   BOTÃO VOLTAR AO TOPO
=============================*/

const voltar = document.createElement("button");

voltar.innerHTML="↑";

voltar.id="topo";

document.body.appendChild(voltar);

voltar.style.position="fixed";
voltar.style.right="30px";
voltar.style.bottom="30px";
voltar.style.width="55px";
voltar.style.height="55px";
voltar.style.borderRadius="50%";
voltar.style.border="none";
voltar.style.cursor="pointer";
voltar.style.fontSize="22px";
voltar.style.background="#6A11CB";
voltar.style.color="white";
voltar.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

voltar.style.display="block";

}else{

voltar.style.display="none";

}

});

voltar.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ============================
   ANIMAÇÃO DOS CARDS
=============================*/

const observer = new IntersectionObserver((itens)=>{

itens.forEach((item)=>{

if(item.isIntersecting){

item.target.style.opacity="1";

item.target.style.transform="translateY(0px)";

}

});

});

cards.forEach((card)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

observer.observe(card);

});

/* ============================
   PIX
=============================*/

const botaoPix = document.querySelector(".pix a");

if(botaoPix){

botaoPix.addEventListener("click",(e)=>{

e.preventDefault();

alert("Aqui será aberta a tela de Checkout com QR Code PIX.");

});

}