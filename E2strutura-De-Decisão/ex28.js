const prompt = require('prompt-sync')();

console.log("--- Negativo ou Positivo?");

const NV = Number(prompt("insira um numero: "));

if(isNaN(NV)){
    console.log("Dica: use numeros.");
}else{
    if(NV > 0){
     console.log("Seu numero é positivo");  
    }else if (NV == 0) {
     console.log("Seu numero é neutro ");   
    } else {
        console.log("Seu numero é negativo ");
    }


}