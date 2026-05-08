const prompt = require('prompt-sync')();

console.log("---Soma dos numeros impares Naturais Faixa ---");

let resutado2 = "";

for(let numero = 1; numero <= 199; numero += 2){
    let quadrado = numero;
    resutado2 += quadrado + ", "
}

console.log(resutado2);