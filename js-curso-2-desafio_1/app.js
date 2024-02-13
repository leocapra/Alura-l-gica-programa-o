let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

function verificarClique() {
    console.log('O botão foi clicado');
}

function mostrarAlerta() {
    alert('Eu amo JS');
}

function mostrarPrompt() {
    var cidade = prompt('Em qual cidade você mora?');
    alert('Estive em '+ cidade + ' e lembrei de você');
}

function mostrarSoma() {
    let primeiroNumero = Number(prompt('Digite o primeiro número:'));
    let segundoNumero = Number(prompt('Digite o segundo número:'));
    let terceiroNumero = primeiroNumero + segundoNumero;
    alert('A soma dos dois números são: ' + terceiroNumero)
}