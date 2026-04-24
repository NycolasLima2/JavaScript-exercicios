const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Volume de uma caixa -----");

let VD = (prompt("Insia o valor em Dolar: "));

let Vr = VD * 4.99;
console.log(`o valor foi de R$ ${Vr}`);