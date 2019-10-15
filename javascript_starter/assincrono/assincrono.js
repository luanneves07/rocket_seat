/**
 * Elementos da tela que serao manipulados para concluir os exercicios
 */
var listElement = document.querySelector('div#app ul');
var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button');

var repos = [];

console.log("Exercicio 1 -> Realiza o output daqui 2 segundos...");
checaIdade(12)
    .then(function(response) {
        console.log("Maior que 18");
    })
    .catch(function(error) {
        console.log("Menor que 18");
    });

console.log("Exercicio 2 e 3 -> Busque um usuario do gitHub no input");
function requestRepos() {
    if(inputElement.value.trim()) {
        refresh();
        var userName = inputElement.value;
        axios.get(String.format('https://api.github.com/users/{0}/repos', userName))
        .then(function(response) {
            inputElement.value = "";
            response.data.map(repo => repos.push(repo.name));
            renderizaLista();
        })
        .catch(function(error) {
            console.warn(error);
            repos.push("Usuario nao encontrado");
            renderizaLista();
        });
    }
}
buttonElement.onclick = requestRepos;