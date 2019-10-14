var container = document.querySelector('#app');
var btnElement = document.querySelector('button.botao');

console.log("Exercício 1");
btnElement.onclick = function() {
    container.appendChild(criaQuadrado(100));
}