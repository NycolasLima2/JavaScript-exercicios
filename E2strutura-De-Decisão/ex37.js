const prompt = require('prompt-sync')();

console.log("--- Verificação da faixa de Valor ---");
 const V1 = Number(prompt("insira um valor (de preferencia de 1 a 9;: "));

 if(isNaN(V1)){
    console.log("dica: use numeros");
 }else{

    if(V1 >= 1 && V1 <=9 ){
       console.log(`Seu numero escolhido, ${V1}, esta dentro de nossa faixa`); 
    }else{
        console.log(`Seu numero esta inadequado`);
    }






 }
