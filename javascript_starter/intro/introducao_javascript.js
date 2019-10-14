/**
 * Cria objetos utilizados no desafio
 */
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux", "Java"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir", "C++"]
    }
];

/**
 * Realiza os desafios
 */
console.log("Exercício 1");
console.log(recuperaDadosDe(endereco));

console.log("Exercício 2");
console.log(analisaNumerosParesEntre(10, 20));

console.log("Exercício 3");
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

console.log("Exercicio 4");
var anosEstudo = 7;
console.log(recuperaExperienciaBaseadaEm(anosEstudo));

console.log("Exercicio 5");
console.log(analisaHabilidadesDe(usuarios));