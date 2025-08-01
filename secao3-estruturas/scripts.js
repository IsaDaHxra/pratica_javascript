// 1 - Variáveis
//let x = "Ana";

//console.log(x);
//console.log("Ana");
 
//x = "Ana Luísa"

//console.log(x);

//const y = 50;

//console.log(y);
// 2 - Mais sobre variáveis
// let 2teste = "Inválido"
// let @teste = "Inválido"

//let a = 10,
//    b = 20,
//    c = 30;

//console.log(a, b, c);
//const nomeCompleto = "Isabelly Vila Silva da Hora";
//const nomecompleto =  "Algum nome e sobrenome aí";

//console.log(nomeCompleto);
//console.log(nomecompleto);

//let _teste = "Ok / Válido";
//let $teste = "Ok / Válido tbm";

//console.log(_teste, $teste);

//  3 - Prompt

//const age = prompt("Digite a sua idade:");
//console.log(`Você tem ${age} anos!`);

//  4 - Alert

//alert("Testando");

//const z = 10;

//alert(z);

//  5 - Math

//console.log(Math.max(6, 7, 13, 2));

//console.log(Math.floor(2.53));

//console.log(Math.ceil(2.53));

//  6 - Console

//console.log("Exibe uma mensagem");
//console.error("Ele exibe uma mesagem de erro!");
//console.warn("Aviso!");

//  7 - if

//const m= 10;
//const n=12;
//if(m < n){
//    alert("M é menor que N");
//}
//let nome = prompt("Digite o seu nome: ")
//if (nome === "Maria"){
//    console.log(`Seu nome é muito lindo, Maria!`);
//}
//else{
//    console.log(`Seu nome é terrivelmente feio, ${nome}`)
//}

//  8 - Else
//const loggedIn= false;

//if(loggedIn){
//    console.log("Está autenticado!");
//}
//else{
//    console.log("Não está autenticado!")
//}

//  9 - Else if
//if (2 < 3){
//    console.log("Teste");
//}
//else if(2 > 3){
//    console.log("Teste 2");
//}
//else{
//    console.log("Teste 3");
//}

//  10 - While

//let p = 0;
//while(p < 5){
    //console.log(`Repetindo ${p}`);
    //p+=1;
//}

//  11 - Do while

//let o = 10;

//do{
//    console.log(`Valor de o: ${o}`);
//    o--;
//}
//while (o > 10);

//  12 - For

//for(let t = 0; t < 10; t++){
//    console.log("Repetindo algo...");
//}

//  13 - Identação

//for(let u = 0; u < 10; u++){
//    if(u * 2 >10){
//        console.log(`Maior que 10! ${u}`);    
//    }
//    else{
//        if (u / 2 ===0){
//            console.log("Deu 0");    
//        }    
//    }
//}

//  14 - Break

//for(let g = 20; g >10; g--){
  //  console.log(`O valor de g é: ${g}`);
   // if(g === 12){
     //   console.log(`O g é 12!`);
       // break;
    //}
//}

//  15 - Continue

//for(let s = 0; s < 10; s++){
    // operador resto = %
  //  if(s%2 === 0){
    //    console.log(`O número é par`);
      //  continue;
    //}
    //console.log(s);
//} //    Ele só vai exibir os números fora da estrura de repetição

//  16 - Switch

const job = prompt("Digite a sua profissão: ");

switch(job){
    case "Programador":
        console.log("Você é um programador!");
        break
    case "Enfermeira":
        console.log("Você é uma enfermeira!");
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada")
}