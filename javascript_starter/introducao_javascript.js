console.log("Exercício 1");
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

console.log(String.format('O usuário mora em {0} / {1}, no bairro {2}, na rua "{3}" com nº {4}.', 
endereco.cidade, endereco.uf, endereco.bairro, endereco.rua, endereco.numero));

console.log("Exercício 2");
console.log(pares(10, 20));

console.log("Exercício 3");
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));

console.log("Exercicio 4");
var anosEstudo = 7;
console.log(experiencia(anosEstudo));