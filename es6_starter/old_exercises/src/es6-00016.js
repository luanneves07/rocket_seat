import ClasseUsuario from "./functions";
import { idade } from "./functions";
import Usuario, { idade as IdadeUsuario } from "./functions";

/**
 * 1.1
 */
ClasseUsuario.info();

/**
 * 1.2
 */
const outputBox = document.querySelector("div#app span.output");
const outputText = document.createTextNode(`Idade: ${idade}`);
outputBox.appendChild(outputText);
console.log(outputBox);

/**
 * 1.3
 */
Usuario.info();
console.log(IdadeUsuario);
