const prompt = require('prompt-sync')();

console.log("--- Cálculo da media e vereficaçao de aprovação ---");
console.log("as notas tem que ser de 0 a 10");
const N = Number(prompt("Insira sua nota da sua avaliação: "));
const NS = Number(prompt("Insira sua nota da seu trabalho individual: "));
const NL = Number(prompt("Insira sua nota da sua avaliação em dupla: "));
const N1 = Number(prompt("Insira sua nota da sua prova final: "));

if(isNaN(N && NS && NL && N1)){
console.log("Dica: use numeros");

}else{
let C = (N + NS + NL + N1) / 4;

if(C > 4.9){
    console.log(`SUA MEDIA ESTA APROVADA: Media de ${C}`);
}else{
    console.log(`sua media te reprova em nosso sistema: ${C}`);
}



}