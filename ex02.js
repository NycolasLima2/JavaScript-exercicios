const prompt = require('prompt-sync')();

console.log(`----- Conversor de Temperatura 2 -----`);

let FG = (prompt("insira o valor, em graus Fahrenheit, uma temperatura: "));

let Conversor = (FG - 32) * 5/9; 

console.log(`O valor da temperatra em C (Celcius): ${Conversor}`);