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