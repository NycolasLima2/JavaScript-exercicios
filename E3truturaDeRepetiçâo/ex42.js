const prompt = require('prompt-sync')();

console.log("---Quadrado na Faixa de valores---");

let resutado2 = "";

for(let numero = 15; numero <= 200; numero++){
    let quadrado = numero * numero;
    resutado2 += quadrado + ", "
}

console.log(resutado2);