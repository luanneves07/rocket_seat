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

render = function(repo) {
    var itemList = document.createElement('li');
    var itemText = document.createTextNode(repo);
    itemList.appendChild(itemText);
    listElement.appendChild(itemList);
}
