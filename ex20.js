const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Velocidade----");

let Raio = Number(prompt("Insira uma velocidade em km: "));
let T = Number(prompt("Insira o tempo em horas: "))

let R = (Raio / T) / 3.6;

console.log(`o Resultado foi ${Math.round(R)} m/s`);
