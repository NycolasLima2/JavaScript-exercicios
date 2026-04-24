const prompt = require('prompt-sync')();

console.log("----- Cáuculo do novo salario-----");

let salario = Number(prompt("Insira um valor: "));
let porcentagem = Number(prompt("Insira um valor: "));

let AU = salario * (porcentagem / 100);
let R = salario + AU;

console.log(`o Resultado foi ${R}`);
