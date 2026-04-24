const prompt = require('prompt-sync')();

console.log("----- Cáuculo de pés para metros----");

let Raio = Number(prompt("Insira um valor: "));


let R = Raio * 0.3048;

console.log(`o Resultado foi ${(R)}`);
