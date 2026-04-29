const prompt = require('prompt-sync')();

console.log("----- Antecessor e Sucessor ----");

let Nyp= Number(prompt("me dê um numero: "));

let Na = Nyp - 1;
let Nq = Nyp + 1;

console.log(`Antecessor do ${Nyp} é : ${Na}`);
console.log(`sucecessor do ${Nyp} é : ${Nq}`);