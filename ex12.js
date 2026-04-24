const prompt = require('prompt-sync')();

console.log("----- Conversão de dinheiro 2 -----");

let Vr = (prompt("Insia o valor em Reais: "));

let VD = Vr / 4.99;
console.log(`o valor foi de U$ ${VD}`);