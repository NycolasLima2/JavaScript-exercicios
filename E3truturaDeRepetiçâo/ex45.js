const prompt = require('prompt-sync')();

console.log("---Soma dos numeros pares Naturais ---");

var SomaP = 0;

for(let numero = 2; numero <= 500; numero += 2){
    var SomaP = SomaP + numero;
}

console.log(`${SomaP}`);