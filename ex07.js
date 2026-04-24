const prompt = require('prompt-sync')();

console.log("----- Adição e multiplicação de 4 numeros inteiros -----");

let I = (prompt("insira o valor 1: "));
let II = (prompt("insira o valor 2: "));
let III = (prompt("insira o valor 3: "));
let IV = (prompt("insira o valor 4: "));

let ISO = ((I * 1) + (II * 1));
let IISO = ((I * 1) + (III * 1));
let IIISO = ((I * 1) + (IV * 1));
let IVSO = ((II * 1) + (III * 1));
let VSO = ((II * 1) + (IV * 1));
let VISO = ((IV * 1) + (III * 1));

let ISO2 = I * II;
let IISO2 = I * III;
let IIISO2 = I * IV;
let IVSO2 = II * III;
let VSO2 = II * IV;
let VISO2 = IV * III;

console.log(`ADIÇÃO a: ${ISO}`);
console.log(`ADIÇÃO b: ${IISO}`);
console.log(`ADIÇÃO c: ${IIISO}`);
console.log(`ADIÇÃO d: ${IVSO}`);
console.log(`ADIÇÃO f: ${VSO}`);
console.log(`ADIÇÃO g: ${VISO}`);

console.log(`MULTIPLICAÇÃO a: ${ISO2}`);
console.log(`MULTIPLICAÇÃO b: ${IISO2}`);
console.log(`MULTIPLICAÇÃO c: ${IIISO2}`);
console.log(`MULTIPLICAÇÃO d: ${IVSO2}`);
console.log(`MULTIPLICAÇÃO f: ${VSO2}`);
console.log(`MULTIPLICAÇÃO g: ${VISO2}`);