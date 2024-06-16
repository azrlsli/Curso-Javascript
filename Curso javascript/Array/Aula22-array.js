//  Exemplo 1

//             0 1 2 3
const notas = [7,6,7,8]

//console.log(notas)  // Iprime tudo o array
//console.log(notas[1])   // Imprime determinado ìndice
//console.log(`A nota desejada é: ${notas[3]}`)   // Template String
//console.log(notas[8])   // Estou tentando acessar um indice que não existe


notas[2] = 7.1


//console.log(`A nota corrigida é: ${notas[2]}`)     // ${notas[2]}


// Exemplo 2 - Exemplo com String

const nomes =["ARIEL", "Souza", "Lima"]

//console.log(nomes)

nomes[0] = "Ariel"
//console.log(nomes)

//nomes = "Alguma coisa"

let nota1 = 10;
//console.log(nota1);

nota1 = 12
//console.log(nota1)


// Exemplo 3 - outra forma de criar um array

const numeros =[]

numeros [0] = 20;
numeros [1] = 15;
numeros [2] = 7;
numeros [10] = 2;
numeros [5] = 12;

//console.log(numeros)
//console.log(numeros[5])



// Exemplo 4

//  Objeto seria uma mala que contem atributos e métodos
//  Os métodos seriam as funções desses elementos
//  Método é igual a função
//  Os Atributos são os dados desse objeto


function ola(){}

const alunos = ["Alunos1", "Alunos2"]   // Estrutura do Array  // 2
alunos.push()   // É  uma função do objeto array

console.log(typeof console) // Objeto
//console.log(typeof ola)
console.log(typeof console.log) // função

console.log(typeof alunos)  // Objeto    // 2

alunos.push(5)  // adiciona um elemento no final da array   // 3

console.log(alunos)

console.log(alunos.length)  // console.log("atributo length" + alunos. length)  // verifico o tamanho do array  // 4