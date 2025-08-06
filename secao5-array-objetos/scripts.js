//  1 - Array 

const listaTeste = ["Isabelly", 15, ["Não sei"]];

console.log(typeof listaTeste);
console.log(listaTeste);

// 2 - mais sobre arrays

const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

//  3 - Propriedades

const lista2 = [13,16,17,10,"oi"];

console.log(listaTeste.length);
console.log(lista2["length"]);
console.log(lista2[4]);
const numeros = [5, 3, 4]

//  4 - Métodos

const outrosNumeros= [1, 2, 3];

const todosOsNumeros= numeros.concat(outrosNumeros);
console.log(todosOsNumeros);

const texto= "Texto aleatório";
console.log(texto.toUpperCase());
console.log(typeof texto.toLocaleUpperCase());
console.log(texto.indexOf("o"));

//  5 - Objetos

const pessoa = {
    nome: "Isabelly",
    idade: 15,
    situacao: "Estudante de ensino médio"
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.nome.length);

//  6 - Criando e deletando propriedades

const carro= {
    motor: 2.0,
    marca: "Porsche",
    modelo: "Sedan?",
    km: 20000
};  // este objetos tem 4 propriedades

console.log(carro);
carro.portas = 2; // foi adicionada uma nova propriedade
console.log(carro)
delete carro.km;
console.log(carro);

//  7 - Mais sobre objetos

const objeto = {
    a: "teste",
    b: true
};

console.log(objeto);
console.log(objeto instanceof Object);

const objeto2 = {
    c: []
};

Object.assign(objeto2,objeto); // Isso fará com que o objeto 2 adquira as propriedades do objeto.
console.log(objeto2);

//  8 - Conhecendo melhor os objetos

console.log(Object.keys(objeto));
console.log(Object.keys(objeto2));
console.log(Object.keys(carro));
console.log(Object.entries(carro));

//  9 - Mutação

const a = {
    name: "Belly",
}
const b = a;

console.log(a);
console.log(b);
console.log( a === b);
 
a.age = 15;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);


//  10 - Estruturas de repetição em arrays

const usuarios= ["Isabelly", "Sophia","Tarqui","Rego", "Pedra", "Vinósio","Prada"]
for( let i = 0; i < usuarios.length; i++){
    console.log(`Listando o usuário ${usuarios[i]}`);
}
