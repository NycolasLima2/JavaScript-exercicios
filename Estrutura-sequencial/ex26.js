const prompt = require('prompt-sync')();

console.log("----- calculo do quadrado da divisão de dois numeros ----");

let N= Number(prompt("um numero natural: "));
let N1= Number(prompt("segundo numero natural: "));


let Na = N / N1;
let R = Math.pow(Na, 2);


console.log(`o resultado deu em ${R}`);
