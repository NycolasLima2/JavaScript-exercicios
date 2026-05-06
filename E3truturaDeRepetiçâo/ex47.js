const prompt = require('prompt-sync')();

console.log("---Valores divisiveis por 4 menres que 200 ---");

let resutado2 = "";

for(let numero = 0; numero < 200; numero += 4){
    let qua = numero;
    resutado2 += qua + ", "
}

console.log(resutado2);