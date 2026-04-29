const prompt = require('prompt-sync')();

console.log("--- Ordenação de 3 numeros ---");

const N1 = Number(prompt("Insira seu numero: "));
const N2 = Number(prompt("Insira seu numero: "));
const N3 = Number(prompt("Insira seu numero: "));
var Maor ;
var medor;
var meor;
if(isNaN(N1 && N2 && N3)){
console.log("Dica: NÃO USE LETRAS");

}else{

    if(N1 > N2 && N1 > N3){
        var Maor = N1;
    }else if(N1 > N2 && N1 < N3){
        var medor = N1;
    }else if (N1 < N2 && N1 > N3) {
        var medor = N1;
    } else {
        var meor = N1;
    }

    if(N2 > N1 && N2 > N3){
        var Maor = N2;
    }else if(N2 > N1 && N2 < N3){
        var medor = N2;
    }else if (N2 < N1 && N2 > N3) {
        var medor = N2;
    } else {
        var meor = N2;
    }

    if(N3 > N2 && N3 > N1){
        var Maor = N3;
    }else if(N3 > N2 && N3 < N1){
        var medor = N3;
    }else if (N3 < N2 && N3 > N1) {
        var medor = N3;
    } else {
        var meor = N3;
    }

console.log(`em ordem Crecente: ${meor}, ${medor}, ${Maor}`);



}




