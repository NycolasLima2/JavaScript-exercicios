const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Volume de uma caixa -----");

let V1 = (prompt("Insira um valor: "));
let V2 = (prompt("Insira um valor: "));
let V3 = (prompt("Insira um valor: "));

let R = ((V1 *1) * (V1 *1))  + ((V2 *1) * (V2 *1)) + ((V3 *1) * (V3 *1));
console.log(`o Resultado foi ${R}`);