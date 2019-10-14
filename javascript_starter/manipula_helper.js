/**
 * Método criado para retornar uma div vermelha em forma de um quadrado que possui
 * suas propriedades de tamanho especificadas pela assinatura da função.
 */
criaQuadrado = function(px) {
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
criaListaDe = function(elements) {
    var listView = document.createElement('ul')

    elements.forEach(element => {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(element));
        listView.appendChild(item);
    });

    return listView;
}