const prompt = require('prompt-sync')();

console.log("--- Conversão de Celsius para Fah---");



for(let C = 10; C <= 100; C += 10){
    let F = (C * 9/5) + 32;
    console.log(`${F}`);
}

