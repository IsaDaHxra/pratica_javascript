//  1 - Criando uma função

function minhaFuncao(){
    console.log("Testando");
}
minhaFuncao();
const minhaFuncaoEmVariavel = function () {
    console.log("Função em uma variável");
}
minhaFuncaoEmVariavel();

function funcaoComParametro(texto) {
    console.log(`O texto escrito pelo usuário foi: ${texto}.`);
}
//let txt = prompt("Digite algum texto: ");
//funcaoComParametro(txt);

const poema = "Na ponte frágil, Doce e incerto, Um passo, um abismo. E o coração, um eco mudo, Questiona se este caminho É lar ou precipício." ;
funcaoComParametro(poema);


//  2 - Return

const a = 40;
const b = 20;
const c = 54;
const d = 12;

function soma(n1,n2){
    return n1 + n2;
}
const resultado = soma(a,b);

console.log(resultado);
console.log(soma(c,d));

//  3 - Escopo das funções

let y = 12;

function testandoEscopo(){
    let y = 15
    console.log(`Y dentro da função é ${y}.`);
}
console.log(`Y fora da função é ${y}`);
testandoEscopo();

//  4 - Escopo Aninhado

let m = 30;

function escopoAninhado(){
    let m = 20;

    if(true){
        let m = 12;
        
        if(true){
            let m = 34
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}
escopoAninhado();
console.log(m);

//  5 - Arrow Function

const testeArrow = () => {
    console.log("Esta é uma arrow function");
}
testeArrow();

const numero = 32;
const parImpar = (n) => {
    if (n%2===0){
        console.log("O número é par.");  
    }
    else{
        console.log("O número é ímpar");
    }
}
//parImpar(numero);

//  6 - Mais sobre arrow function

//const numeroAoQuadrado = (x) => x * x;

//console.log(numeroAoQuadrado(4));

//  7 - Parâmetro opcional

//const multiplicação = function(m, n){
    //if (n === undefined){
     //   return m *2;
    //}
   // else { 
  //      return m * n
 //   }
//}
//console.log(multiplocação(5,10))

//  8 - Valor default

//const customGreeting = (nome, greet = "Oiêê!") => {
//    return `${greet}, bom dia ${nome}`;
//}
//console.log(customGreeting("Belly"))
//console.log(customGreeting("Belly","boa noite"))

//  9 - Closure

//function someFunction(){
    //let txt = "Aleatório"
    //function display() {
    //    console.log(txt);
  //  }
//    display();
//}
//someFunction();

//  10 - Mais sobre closure

const multiplicationClosure = (n) => {
    return (n) =>{
         return n * m;
    }
}
const c1 = multiplicationClosure(14);
const c2 = multiplicationClosure(43);

console.log(c1);
console.log(c2);
console.log(c1(14))
console.log(c2(43));

//  11 - Recursão

const untilTen = (n, m) =>{
    if (n < 10){
        console.log("A função parou de executar");
    }
    else{
        const x = n - m;
        
        console.log(x);

        untilTen(x, m);

    }
}
untilTen(100,10);

// Cálculo de fatorial

function fatorial(x){
    if (x === 0) {
        return 1;
    }   else{
        return x * fatorial(x - 1);
    }
}
const number = 6;

const result = fatorial(number);
console.log(`O fatorial do número ${number} é ${result}`);