const prompt = require('prompt-sync')();

console.log("----- Cauculo da Prestação atrasada -----");

let Va = (prompt("valor da Prestação original: "));
let MesA = (prompt("valor dos meses em atraso: "));
let Ju = (prompt("valor dos Juros mensais: "));

let RSS = Va * (1 + (Ju/100) * MesA);

console.log(`o valor da prestação em atraso é de ${RSS} reais`);
