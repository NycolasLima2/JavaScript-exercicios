const prompt = require('prompt-sync')();

console.log("----- Cáuculo de votos de candidatos -----");

let C1 = Number(prompt("Insira a quantidadede votos: "));
let C2 = Number(prompt("Insira a quantidadede votos: "));
let C3 = Number(prompt("Insira a quantidadede votos: "));
let CN = Number(prompt("Insira a quantidadede votos: "));
let CB = Number(prompt("Insira a quantidadede votos: "));

let total = C1 + C2 + C3 + CN + CB;

let R1 = (C1 / total) * 100;
let R2 = (C2 / total) * 100;
let R3 = (C3 / total) * 100;
let RN = (CN / total) * 100;
let RB = (CB / total) * 100;

console.log(`o Resultado foi ${(R1)} %`);
console.log(`o Resultado foi ${(R2)} %`);
console.log(`o Resultado foi ${(R3)} %`);
console.log(`o Resultado foi ${(RN)} %`);
console.log(`o Resultado foi ${(RB)} %`);