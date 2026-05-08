const prompt = require('prompt-sync')();

console.log("--- Somatório e Média de Dez Valores---");
let somatorio = 0; 
let contador = 0;
while(contador < 10){
let Valor = Number(prompt("insira algum valor: "));
somatorio = somatorio + Valor;
contador = contador + 1;
media = somatorio / 10;
}
console.log(`Media = ${media}`);