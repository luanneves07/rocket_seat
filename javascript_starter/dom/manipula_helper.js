/**
 * Método criado para retornar uma div vermelha em forma de um quadrado que possui
 * suas propriedades de tamanho especificadas pela assinatura da função.
 */
criaQuadradoDinamicamenteColorido = function(px) {
    var box = document.createElement('div');

    box.style.width = px;
    box.style.height = px;
    box.style.backgroundColor = '#F00';
    box.onmouseover = function() {
        box.style.backgroundColor = recuperaNovaCor();
    }

    return box;
}

/**
 * Recupera uma cor aleatoria
 */
recuperaNovaCor = function() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Cria uma ul para inserir na tela e para cada elemento dentro do array
 * cria uma li contendo o nome (Inserido como TextNode dentro da li).
 * Depois disto insere o item dentro da ul como Child e retorna a lista.
 */
criaListaDe = function(elementos) {
    var listView = document.createElement('ul')

    elementos.forEach(elemento => {
        adicionaElementoEm(listView, elemento);
    });

    return listView;
}

/**
 * Adiciona novo item na lista renderizando junto com os outros ja adicioandos em
 * criaListaDe(elements)
 */
adicionaElementoEm = function(ulList, elemento) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(elemento));
    ulList.appendChild(item);
}

/**
 * Verifica se o input nao está vazio e adiciona na lista já criada um novo elemento
 */
adicionar = function() {
    var inputElement = document.querySelector('input[name=nome]');
    var item = inputElement.value;
    if(item) {
        inputElement.value = '';
        var list = document.querySelector('ul');
        adicionaElementoEm(list, item);
    }
}