const prompt = require('prompt-sync')();

console.log("--- Tabuada de um numero---");

let resutado2 = Number(prompt("insira um numero: "));

for(let numero = 1; numero <= 10; numero++){
console.log(`${resutado2} x ${numero} = ${resutado2 * numero}`);
}