const prompt = require('prompt-sync')();

console.log("--- 3 e 5 ---");

const V1 = Number(prompt("insira um numero"));

if(isNaN(V1)){
    console.log("erro de execução. insira um numero");
}else{

if(V1 % 3 === 0 && V1 % 5 === 0){
    console.log(`${V1}`);
}



}