const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Volume de uma caixa -----");

let V1 = (prompt("Insira um valor: "));
let V2 = (prompt("Insira um valor: "));
let V3 = (prompt("Insira um valor: "));
let V4 = (prompt("Insira um valor: "));

let R = ((V1 * 1) * (V3 * 1));
let R2 = ((V2 * 1) + (V4 * 1));
console.log(`o Resultado do produto foi ${R}`);
console.log(`o Resultado da soma foi ${R2}`);