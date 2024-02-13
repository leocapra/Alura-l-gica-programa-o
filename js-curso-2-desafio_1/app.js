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
    let primeiroNumero = prompt('Digite o primeiro número:')
    let segundoNumero = prompt('Digite o segundo número:')
    let num1 = Number(primeiroNumero);
    let num2 = Number(segundoNumero);
    let terceiroNumero = num1 + num2;
    alert('A soma dos dois números são: ' + terceiroNumero)
}