/**
 * Aguarda 2 segundos antes de verificar a idade
 */
checaIdade = function(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            18 <= idade ? resolve() : reject();
        }, 2000);
    });
}

/**
 * Cria elemento da lsita e adiciona na tela
 */
criaElementoCom = function(nomeRepositorio) {
    var itemList = document.createElement('li');
    var itemText = document.createTextNode(nomeRepositorio);
    itemList.appendChild(itemText);
    listElement.appendChild(itemList);
}

/**
 * Renderiza lista de repos na tela
 */
renderizaLista = function() {
    listElement.innerHTML = "";
    repos.map(criaElementoCom);
}

/**
 * Limpa lista da tela e insere elemento de carga antes de fazer a requisicao.
 */
refresh = function() {
    repos = [];
    renderizaLista();
    criaElementoCom("Carregando...");
}
