const prompt = require('prompt-sync')();

console.log("--- Valores divisíveis por 2 e 3 ---");

let valores = [
    Number(prompt("Insira o primeiro valor numérico: ")),
    Number(prompt("Insira o segundo valor numérico: ")),
    Number(prompt("Insira o terceiro valor numérico: ")),
    Number(prompt("Insira o quarto valor numérico: "))
];

for (let numero of valores) {
    if (numero % 2 === 0 && numero % 3 === 0) {
        console.log(numero);
    }
}
