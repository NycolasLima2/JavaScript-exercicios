const prompt = require('prompt-sync')();

console.log("--- valor menor ou igual a 3 ");

let V1 = Number(prompt("insira um valor: "));

if(isNaN(V1)){
    console.log("erro: não tem apenas numeros");
}else{

if(V1 <= 3){
   console.log(`${V1}`); 
}else{

}


}