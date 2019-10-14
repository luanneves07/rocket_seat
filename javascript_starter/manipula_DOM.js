/**
 * VAriaveis utilizadas para realizar os exercicios
 */
var container = document.querySelector('#app');
var btnElement = document.querySelector('button.botao');

/**
 * Realiza os exercicios do desafio
 */
console.log("Exercício 1");
btnElement.onclick = function() {
    container.appendChild(criaQuadrado(100));
}

console.log("Exercicio 2 -> Passe o mouse em cima do quadrado criado");

console.log("Exercicio 3");
var nomes = ["Diego", "Gabriel", "Lucas", "Luan", "Ronaldinho Gaúcho"];
container.appendChild(criaListaDe(nomes));
