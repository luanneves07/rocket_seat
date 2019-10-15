/**
 * Elementos da view utilizadas nesta unidade
 */
var list = document.querySelector('div#app ul');
var input = document.querySelector('div#app input');
var button = document.querySelector('div#app button');

/**
 * Lista de afazeres para renderizar na tela
 */
toDoList = recuperaLocalStorage();

/**
 * Renderiza a lista na tela
 */
function renderizaToDos() {
    list.innerHTML = '';

    for(index = 0; index < toDoList.length; index++) {
        var toDo = toDoList[index];
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(toDo);

        var excludeElement = document.createElement('a');
        excludeElement.setAttribute('href', '#');
        excludeElement.setAttribute('onclick', String.format("removeToDo({0})", index));
        var excludeText = document.createTextNode("Excluir");

        itemElement.appendChild(itemText);
        excludeElement.appendChild(excludeText);

        list.appendChild(itemElement);
        itemElement.appendChild(excludeElement);
    }
}

/**
 * Adiciona uma nova tarefa na lista e renderiza na tela
 */
function addToDo() {
    if(input.value) {
        var text = input.value;
        input.value = "";
        toDoList.push(text);
        renderizaToDos();
        salvaNoStorage();
    }
}

/**
 * Remove um item da lista de toDos e renderiza na tela a lista inteira novamente
 * @param {Indice do elemento que deve ser removido da lista} index 
 */
function removeToDo(index) {
    toDoList.splice(index, 1);
    renderizaToDos();
    salvaNoStorage();
}

/**
 * Salva os dados no localStorage
 */
function salvaNoStorage() {
    localStorage.setItem('todo_list', JSON.stringify(toDoList));
}

/**
 * Recupera uma lista contendo os dados contidos em localStorage. Caso contrario
 * recupera uma lista default definida no exercicio.
 */
function recuperaLocalStorage() {
    return JSON.parse(localStorage.getItem('todo_list')) || [
        "Fazer cafe",
        "Estudar Javascript",
        "Acessar comunidade da Rocketseat"
    ];
}

console.log("Unidade 3")
button.onclick = addToDo;
renderizaToDos();

