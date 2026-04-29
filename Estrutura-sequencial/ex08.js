const prompt = require('prompt-sync')();

console.log("----- Cáuculo de Volume de uma caixa -----");

let C = (prompt("insira o valor do comprimento da caixa: "));
let L = (prompt("insira o valor da largura da caixa: "));
let H = (prompt("insira o valor da altura da caixa da caixa: "));

let Vc = C * L * H;

console.log(`o Volume da caixa Retangular é de ${Vc}`);
