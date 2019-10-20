import axios from "axios";

/**
 * GITHUB try
 */
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
        } catch (err) {
            console.warn(`Falha na api ao buscar usuario ${username}: ${err}`);
        }
    }
}
Api.getUserInfo("luanneves07");

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

function umPorSegundoOld() {
    delay().then(() => {
        console.log('OLD: 1s');
        delay().then(() => {
            console.log('OLD: 2s');
            delay().then(() => {
                console.log('OLD: 3s');
            });
        })
    });
}
async function umPorSegundoAsync() {
    await delay();
    console.log('ASYNC: 1s');
    await delay();
    console.log('ASYNC: 2s');
    await delay();
    console.log('ASYNC: 3s');
}

umPorSegundoOld();
umPorSegundoAsync();


function oldGetUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
async function asyncGetUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    } catch (error) {
        console.warn(`Falha na requisicao ao buscar usuario ${user}: ${error}`);
    }
}

oldGetUserFromGithub('luanneves07');
oldGetUserFromGithub('luanneves3g124123');

asyncGetUserFromGithub('luanneves07');
asyncGetUserFromGithub('luanneves3g124123');

class OldGithub {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
class AsyncGitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.warn(`Repositório ${repo} não existe: ${error}`);
        }
    }
}

OldGithub.getRepositories('rocketseat/rocketseat.com.br');
OldGithub.getRepositories('rocketseat/dslkvmskv');

AsyncGitHub.getRepositories('rocketseat/rocketseat.com.br');
AsyncGitHub.getRepositories('rocketseat/dslkvmskv');

const oldBuscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${usuario}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
const asyncBuscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (error) {
        console.warn(`Usuario ${usuario} nao existe: ${error}`);
    }
}

oldBuscaUsuario('luanneves07');
asyncBuscaUsuario('luanneves07');