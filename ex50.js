const prompt = require('prompt-sync')();

console.log("--- sequencia de Fibonacci ('_')---");

var T1 = 0
var T2 = 1

console.log(`valor: 0`);
console.log("valor: 1");
let i = 3;
while(i <= 15){
    var p2Term = T1 + T2;
    var T1 = T2;
    var T2 = p2Term;
    i = i + 1;
    console.log(`${p2Term}`);
}
