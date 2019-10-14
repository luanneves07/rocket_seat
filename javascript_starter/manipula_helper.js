/**
 * Método criado para retornar uma div vermelha em forma de um quadrado que possui
 * suas propriedades de tamanho especificadas pela assinatura da função.
 */
criaQuadrado = function(px) {
    var box = document.createElement('div');

    box.style.width = px;
    box.style.height = px;
    box.style.backgroundColor = '#F00';
 
    return box;
}