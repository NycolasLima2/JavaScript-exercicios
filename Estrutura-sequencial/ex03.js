const prompt = require('prompt-sync')();

console.log("----- Cálculo do Voume de uma lata de oleo -----");

let R =(prompt("insira o valor do rai desta lata: "));
let pi = 3.14;
let h = (prompt("insira o valor da altura da lata: "));

let Rs = (pi * (R * R)) * 10;

console.log(`o volume é de ${Rs} cm²`);