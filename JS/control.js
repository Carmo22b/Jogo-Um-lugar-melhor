window.onload = function() {
    const audioElement = document.getElementById('meuAudio');
    audioElement.volume = 0.5; 
};
const cenario = document.querySelector(".cenario");
const fotos_personagem = document.querySelector("#fotos_personagem");

let cenarioPosX = 0;
const moveAmount = 16;

fotos_personagem.src = "./SRC/imgs/Novo Projeto (3).png";


document.addEventListener("keydown", (event) => {
    if (event.key === "d" || event.key === "D") {

        if (cenarioPosX > -8120) {
            cenarioPosX -= moveAmount;
            cenario.style.transform = `translateX(${cenarioPosX}px)`;
            fotos_personagem.src = "./SRC/imgs/Novo Projeto (8).png";
        }

    } else if (event.key === "a" || event.key === "A") {

        if (cenarioPosX < 0) {
            cenarioPosX += moveAmount;
            cenario.style.transform = `translateX(${cenarioPosX}px)`;
            fotos_personagem.src = "./SRC/imgs/Novo Projeto (10).png";
        }

    }
});


document.addEventListener("keyup", (event) => {
    if (event.key === "d" || event.key === "D" || event.key === "a" || event.key === "A") {

        fotos_personagem.src = (event.key === "d" || event.key === "D")
            ? "./SRC/imgs/Novo Projeto (3).png"
            : "./SRC/imgs/Novo Projeto (9).png";
    };
});

