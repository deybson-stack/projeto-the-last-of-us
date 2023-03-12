/*
Objetivo- Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.


*/

const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoselecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoselecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}
