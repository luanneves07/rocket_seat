class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    setAdmin(status) {
        this.admin = status;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.setAdmin(true);
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true