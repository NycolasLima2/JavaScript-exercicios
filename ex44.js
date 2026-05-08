const prompt = require('prompt-sync')();

console.log("---Soma dos 100 primeiros numeros Naturais---");

var Soma = 0;
var numero = 1;
for(let numero = 1; numero <= 100; numero++){
    var Soma = Soma + numero;
}

console.log(`${Soma}`);