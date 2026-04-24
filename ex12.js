const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Volume de uma caixa -----");

let Vr = (prompt("Insia o valor em Reais: "));

let VD = Vr / 4.99;
console.log(`o valor foi de U$ ${VD}`);