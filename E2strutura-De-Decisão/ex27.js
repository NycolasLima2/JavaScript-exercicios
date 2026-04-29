const prompt = require('prompt-sync')();

console.log("--- diferença de entre 2 numeros ---");

const V1 = Number(prompt("Digite um numero inteiro qualquer: "));
const V2 = Number(prompt("Digite um numero inteiro qualquer: "));

if (isNaN(V1 && V2)){
console.log("Dica: escreva um numero e não isso");
}else{

    if(V1 > V2){
const R = V1 - V2;
console.log(`o resutado é : ${R}`);
    }else{
const R2 = V2 - V1;
console.log(`o resutado é : ${R2}`);
    }

}