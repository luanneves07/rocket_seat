import api from "./api";
/**
 * O objetivo desta classe e buscar os repositorios inseridos no campo de texto
 * pelo usuario, recuperar as informacoes e inserir na tela.
 * Esta classe foi criada para realizar a implementacao do aplicativo
 * especificado no treinamento de ES6 da rocketSeat.
 */
class App {
    /**
     * Construtor padrao
     */
    constructor() {
        this.repositories = [];
        this.formEl = document.querySelector('form#repo-form');
        this.inputEl = document.querySelector('form#repo-form input[name=repository]');
        this.listEl = document.querySelector('ul#repo-list');
        this.registerHandlers();
    }
    /**
     * Registra os eventos realizados pelo usuario na interface
     */
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    /**
     * Exibe ou remove da interface uma mensagem que indica que o sistema está
     * executando o request na api para buscar o repositório inserido no campo
     * de texto pelo usuário.
     * 
     * @param {Boolean} visible Por default é verdadeiro. Indica que deve mostrar 
     * a mensagem de carregamento enquanto o request está sendo executado.
     */
    showRequestSplash(visible = true) {
        if (visible) {
            let splashEl = document.createElement("span");
            splashEl.appendChild(document.createTextNode("Carregando..."));
            splashEl.setAttribute("id", "loading");

            this.formEl.appendChild(splashEl);
        } else {
            document.getElementById("loading").remove();
        }
    }

    /**
     * Adiciona um novo repositório dentro da interface do usuário.
     * 
     * @param {*} event evento disparado na acao do usuario apenas para realizar 
     * o preventDefault() para impedir o reload da página que é feito por padrão 
     * dentro de um form.
     */
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if (repoInput.length === 0) {
            return;
        }
        
        this.showRequestSplash();
        try {
            const response = await api.get(`/repos/${repoInput}`)
            const { name, description, html_url, owner: { avatar_url } } = response.data;
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.inputEl.value = "";
            this.render();
        } catch (error) {
            alert(`O repositório ${repoInput} não existe.`);
            console.warn(`Falha ao recuperar repositorio: ${error}`);
        }
        this.showRequestSplash(false);
    }

    /**
     * Apaga todos os elementos do HTML existente dentro da lista e renderiza 
     * novamente com a lista de repositorios
     */
    render() {
        this.listEl.innerHTML = "";

        this.repositories.forEach(repo => {
            let imgEl = document.createElement("img");
            imgEl.setAttribute("src", repo.avatar_url);

            let titleEl = document.createElement("strong");
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement("p");
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let htmlEl = document.createElement("a");
            htmlEl.setAttribute("href", repo.html_url);
            htmlEl.appendChild(document.createTextNode("Acessar"));

            let listItemEl = document.createElement("li");
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(htmlEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

/**
 * Apenas para rodar o construtor e realizar funcionamento default da aplicação
 */
new App();