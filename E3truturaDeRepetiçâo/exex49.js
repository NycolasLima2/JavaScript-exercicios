const prompt = require('prompt-sync')();

console.log("--- Potencia de uma base Elevada a um expoente---");

let base = Number(prompt("insira a base: "));
let expoente = Number(prompt("insira o expoente: "));

// Iniciamos com 1, pois todo número elevado a 0 é 1
let potencia = 1;

for (let n = 1; n <= expoente; n++) {
    potencia = potencia * base;
}

console.log(`A potencia deu ${potencia}`);
