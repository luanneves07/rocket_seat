/**
 * Elementos da tela que serao manipulados para concluir os exercicios
 */
var listElement = document.querySelector('div#app ul');
var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button');

var repos = [];

console.log("Exercicio 1");
checaIdade(12)
    .then(function(response) {
        console.log("Maior que 18");
    })
    .catch(function(error) {
        console.log("Menor que 18");
    });

console.log("Exercicio 2");

/**
 * Renderiza lista de repos na tela
 */
function renderRepos() {
    listElement.innerHTML = "";
    repos.map(render);
}

function requestRepos() {
    if(inputElement.value.trim()) {
        repos = [];
        var userName = inputElement.value;
        axios.get(String.format('https://api.github.com/users/{0}/repos', userName))
        .then(function(response) {
            inputElement.value = "";
            response.data.map(repo => repos.push(repo.name));
            renderRepos();
        })
        .catch(function(error) {
            console.warn(error);
            repos.push("Usuario nao encontrado");
            renderRepos();
        });
    }
}

buttonElement.onclick = requestRepos;

console.log("Exercicio 3");