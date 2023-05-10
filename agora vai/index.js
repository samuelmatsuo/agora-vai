const imagem = document.querySelector(".img");
const body = document.querySelector("body");

body.addEventListener("click", adicionarImagem);

let posX = 0;
let posY = 0;
let dirX = 1;
let dirY = 1;

function moverImagem() {
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;

  posX += dirX;
  posY += dirY;

  if (posX + imagem.width >= larguraTela || posX <= 0) {
    dirX *= -1;
    
  }

  if (posY + imagem.height >= alturaTela || posY <= 0) {
    dirY *= -1;
    
  }

  imagem.style.transform = `translate(${posX}px, ${posY}px)`;

  requestAnimationFrame(moverImagem);
}

moverImagem();

function adicionarImagem(event) {
  const novaImagem = document.createElement("img");
  novaImagem.src =
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg";
  novaImagem.style.position = "absolute";
  novaImagem.style.top = `${event.clientY}px`;
  novaImagem.style.left = `${event.clientX}px`;
  novaImagem.style.width = "300px";
  novaImagem.style.height = "200px";
  novaImagem.classList.add("img");

  body.appendChild(novaImagem);
}

moverImagem();
