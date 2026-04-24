const prompt = require('prompt-sync')();

console.log("----- Cáuculo de volume da esfera----");

let Raio = Number(prompt("Insira o valor do raio: "));


let R = (4/3)* Math.PI* Math.pow(Raio,3);

console.log(`o Resultado foi ${(R)}`);
