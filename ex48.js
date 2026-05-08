const prompt = require('prompt-sync')();

console.log("--- Potencia de 3 ('_')---");

let resutado2 = "";

for(let expoente = 0; expoente <= 15; expoente += 1){
    let cub = Math.pow(3, expoente);
    resutado2 += cub + ", "
}

console.log(resutado2);