// Passo 1: Pegar (querySelector) elementos que representam os botões necessários para abrir e fechar trailer;
// Passo 2: Pegar (querySelector) elemento modal do html para usar no js;
// Passo 3: Identificar (addEventListener) quando o usuario clicar no botão;
// Setar link do video para resetar sempre que abrir e fechar trailer;
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const selectPlayer = document.getElementById("player");
const botaoFecharModal = document.querySelector(".fechar-modal");


// Passo 4: Função para alternar classe do modal aberto ou fechado com video resetado:
function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    selectPlayer.setAttribute("src", selectPlayer);
});

botaoFecharModal.addEventListener("click", () => {
   alternarModal();
   selectPlayer.setAttribute("src", "");
});

