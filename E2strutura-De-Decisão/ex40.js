const prompt = require('prompt-sync')();

console.log("---Soma e Verificação---");

const I = Number(prompt("insira o primeiro Valor: "));
const II = Number(prompt("insira o segundo Valor: "));
const III = Number(prompt("insira o terceiro Valor: "));

var R = I + II + III;

if(isNaN(I & II & III)){
console.log("Erro: não ha numeros conclusentes em sua entrada");
}else{
    if(R > 100){
       console.log(` a soma dos valores deu ${R}, estando adequado a nossa expectativa`); 
    }else{
        console.log("sua escolha de numeros não estao a nossas expectativas");
    }
}