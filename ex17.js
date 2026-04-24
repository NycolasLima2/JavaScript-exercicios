const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Volume de uma caixa -----");

let Raio = Number(prompt("Insira um valor: "));

let R = Math.PI * (Raio * Raio);

console.log(`o Resultado foi ${Math.round(R)}`);
