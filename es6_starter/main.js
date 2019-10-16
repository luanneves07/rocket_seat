class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    setAdmin(status) {
        this.admin = status;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.setAdmin(true);
    }
}

/****************
 * Exercício 1  *
 ***************/
console.log("Exercício 1");
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

/****************
 * Exercício 2  *
 ***************/
console.log("Exercício 2");
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
const idades = usuarios.map(usuario => usuario.idade);
const filter = usuarios.filter(usuario => 'Rocketseat' === usuario.empresa && 18 < usuario.idade);
const find = usuarios.find(usuario => 'Google' === usuario.empresa);
const result = usuarios.reduce(function (filtro, usuario) {
    var idadeAlterada = 2 * usuario.idade;
    const user = { nome: usuario.nome, idade: idadeAlterada, empresa: usuario.empresa }
    if (50 >= idadeAlterada) {
        filtro.push(user);
    }
    return filtro;
}, []);
console.log(idades);
console.log(filter);
console.log(find);
console.log(result);

/****************
 * Exercício 3  *
 ***************/
console.log("Exercício 3");
const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//     return item + 10;
// });
const r = arr.map(item => 10 + item);
console.log(r);

const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

const nome = "Diego";
const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }
const promise = () => new Promise(resolve => resolve());
console.log(promise());