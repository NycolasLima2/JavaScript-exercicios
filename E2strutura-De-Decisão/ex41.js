const prompt = require('prompt-sync')();

console.log("---Multiplicaçâo e Verificação---");

const I = Number(prompt("insira o primeiro Valor: "));

var R = I * 2;

if(isNaN(I)){
console.log("Erro: não ha numeros conclusentes em sua entrada");
}else{
    if(R > 30){
       console.log(` a soma dos valores deu ${R}, estando adequado a nossa expectativa`); 
    }else{
        console.log("sua escolha de numeros não estao a nossas expectativas");
    }
}