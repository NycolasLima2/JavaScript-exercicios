// Importando o módulo que você via terminal
const prompt = require('prompt-sync')();

console.log(`----- Conversor de Temperatura -----`);

let CG = (prompt("insira o valor, em graus Celcius, uma temperatura: "));

let Conversor = CG * 9/5 + 32; 

console.log(`O valor da temperatra em F (Fahrenheit): ${Conversor}`);