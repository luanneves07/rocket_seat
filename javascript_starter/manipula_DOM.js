var container = document.querySelector('#app');
var btnElement = document.querySelector('button.botao');

console.log("Exercício 1");
btnElement.onclick = function() {
    container.appendChild(criaQuadrado(100));
}

console.log("Exercicio 2 -> Passe o mouse em cima do quadrado criado");
