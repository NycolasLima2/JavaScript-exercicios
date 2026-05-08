const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez---");

let totalGrãos = 0;
let i = 1;
let Grãospor4
while(i <= 64){
Grãospor4 = Math.pow(2,(i - 1));
totalGrãos = totalGrãos + Grãospor4;
i = i + 1;
console.log(`Total de grãos de trigo no tabuleiro de xadrez = ${totalGrãos}`);
}