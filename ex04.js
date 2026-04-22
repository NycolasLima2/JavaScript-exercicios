const prompt = require('prompt-sync')();

console.log("----- Cauculo da Quantidade gasta de combustivel em uma viagem -----");

let Distancia = (prompt("Qual foi a sua distancia percorrida em Kilometros: "));
let consumo = (prompt("Qual foi o seu consumo, em litros: "));
 
let litros = Distancia / consumo;

console.log(`o gasto de sua viagem é de ${litros} litros.`);