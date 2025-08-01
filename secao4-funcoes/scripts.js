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
