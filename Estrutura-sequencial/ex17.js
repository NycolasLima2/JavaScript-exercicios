const prompt = require('prompt-sync')();

console.log("----- Cáuculo da Area de um circulo-----");

let Raio = Number(prompt("Insira um valor: "));

let R = Math.PI * (Raio * Raio);

console.log(`o Resultado foi ${Math.round(R)}`);
