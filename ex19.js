const prompt = require('prompt-sync')();

console.log("----- Cáuculo de todas as operações basicas com 2 numeros-----");

let V1 = Number(prompt("Insira um valor: "));
let V2 = Number(prompt("Insira um valor: "));

let R = V1 + V2;
let R2 = V1 - V2;
let R3 = V1 * V2;
let R4 = V1 / V2;

console.log(`o Resultado foi ${(R)}`);
console.log(`o Resultado foi ${(R2)}`);
console.log(`o Resultado foi ${Math.round(R3)}`);
console.log(`o Resultado foi ${Math.round(R4)}`);