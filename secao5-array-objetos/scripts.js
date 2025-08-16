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
    if (usuarios[i]==="Isabelly"){
        console.log(`${usuarios[i]} vc é linda perfeita`)
    }
    console.log(`Listando o usuário ${usuarios[i]}`);
}
const listaNumeros = [1, 2, 3, 8, 5, 3];
for (let a = 0; a <listaNumeros; a++){
    console.log(`Números da lista ${listaNumeros[a]}`)
}
const vassoura = {
    cabo: true,
    cerdas: true
}
vassoura.listras = true;
console.log(vassoura);
console.log(Object.keys(vassoura));
console.log(Object.entries(vassoura));

//  11 -  Métodos pop e push

usuarios.push("Lanna", "Akira", "Aline");
console.log(usuarios);
const remocaoUsuarios = usuarios.pop();
console.log(remocaoUsuarios);

//  12 - Métodos Shift e unshift

const letras = ['a', 'b', 'c', 'd'];
console.log(letras);
console.log(letras.shift("a"));
letras.unshift("z");
console.log(letras);

//  13 - Métodos indexOf e lastIndexOf

const sinara = {
    front: ["Rego", "Belly"],
    back: ["Turquia", "Vinósio"],
    dados: ["Pêra", "Rafael","Soaphro"]
};
console.log(sinara.front.indexOf("Belly"));
console.log(sinara.dados.lastIndexOf("Rafael"));

//  14 - Método slice

const testeSlice = ['a','b','c','d','e','f','g','h'];

const subArray = testeSlice.slice(2,4);
console.log(subArray);
const subArray2  = testeSlice.slice(2,4+1);
console.log(subArray2);

//  15 - Foreach

const nums = [1, 2 , 3, 4, 5]
nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
})
const posts = [
    {title: "Primeiro post",category: "Python"},
    {title: "Segundo post", category: "PHP"},
    {title: "Terceiro post", category: "MongoDB"},
    {title: "Quarto post", category: "JavaScript"}
]
posts.forEach((post) => {
    console.log(`Exibindo ${posts.title} da categoria ${posts.category}`);
});

//  16 - Includes

const brands = ["Ferrari", "Fiat", "Sinara", "Jbs"];

console.log(brands.includes("Jbs"));
console.log(brands.includes("Maizena")); // podemos usar uma estrutura condicional para enviar uma mensagem ao usuário

//  17 - Reverse

const reverseTest = [1,2,3,4,5,6,7,8,9,10];
reverseTest.reverse();
console.log(reverseTest)

//  18 - Trim

const $trim = "Essa trim é um teste \n   slk";
console.log($trim);
console.log($trim.trim());
console.log($trim.length);
console.log($trim.trim().length);

//  19 - Padstart

const isa = "Isabelly";

const c = isa.padStart(20, "0");
console.log(c);
console.log(c.padEnd(30,"a"))

//  20 - Split

const amor = "O amor correspondido pode até ser divertido, mas o vazio de um fora será difícil ser preenchido. O amor pode ser recíproco mas não deve ser dolorido";
const arrayAmor = amor.split(" ");
console.log(arrayAmor);

//  21 - Join

console.log(arrayAmor.join("-"));

// 22 - Restart

const palavra = "Testando";
console.log(palavra.repeat(3));

//  23 - Rest Operator

const somaInfinita = (...args) =>{
    let total = 0;
    for (let i = 0; i< args.length; i++){
        total+= args[í];
    }   return total;
 
};
console.log(somaInfinita(1, 10, 54));

