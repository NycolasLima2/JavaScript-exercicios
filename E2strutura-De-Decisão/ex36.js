const prompt = require('prompt-sync')();

console.log("--- par ou impar ---");
const V1 = Number(prompt("insira um numero: "));

if(isNaN(V1)){
console.log("Dica: use numeros");
}else{

if(V1 % 2 === 0){
  console.log("Par");  
}else{
    console.log("Impar");
}
}