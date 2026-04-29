const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Raiz ----");

let Raio = Number(prompt("Insira um valor: "));
let ELV = Number(prompt("insira o expoente: "))

let R = Math.pow(Raio,(1/ELV));

console.log(`o Resultado foi ${(R)}`);
