let prato;
let bebida;
let sobremesa;

function selecionarPrato(botao) {
    const botaoSelecionadoAntes = document.querySelector(".pratos-opcoes .selecionado");

    if (botaoSelecionadoAntes !== null){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }
    botao.classList.add('selecionado');


    prato = botao.innerHTML;
    ligarBotao();
    

}

function selecionarBebida(botao){

    const botaoSelecionadoAntes = document.querySelector(".bebidas-opcoes .selecionado");

    if( botaoSelecionadoAntes !== null ) {
        botaoSelecionadoAntes.classList.remove("selecionado");
    }

    botao.classList.add('selecionado');

    bebida = botao.innerHTML;
    ligarBotao();
    
}

function selecionarSobremesa(botao) {
    const botaoSelecionadoAntes = document.querySelector(".sobremesas-opcoes .selecionado");

    if(botaoSelecionadoAntes !== null ){
        botaoSelecionadoAntes.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");

    sobremesa = botao.innerHTML;
    ligarBotao();
    
}

function ligarBotao() {
    if ( prato !== undefined){
        
    } if ( bebida !== undefined){

    } if ( sobremesa !== undefined){
        const acenderBotao = document.querySelector(".botao-finalizar");
        acenderBotao.classList.add("botao-selecionado");
        acenderBotao.innerHTML = "Fechar pedido";
    }
}

function finalizarPedido() {
    let mensagem = 
    `Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70`

    mensagem = encodeURIComponent(mensagem)

    window.open("https://wa.me/5521983951240?text=" + mensagem)

}

