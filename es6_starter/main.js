class List {
    constructor() {
        this.items = [];
    }

    add(data) {
        this.items.push(data);
        console.log(this.items);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Luan';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
    MinhaLista.mostraUsuario();
}

console.log(Matematica.soma(50, 200));