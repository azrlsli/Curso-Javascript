// Operador logicos E 

let temosDinherio = true // booleano
let estaEnsolarado = true 
let resultadoE = temosDinherio && estaEnsolarado // aqui fizemos compraração 

console.log('O Resultado do operador E é: ' + resultadoE)

let compraPao = temosDinherio && estaEnsolarado

console.log('Vamos comprar pão?' , compraPao)

/*
let soma = 5+5
console.log('O Valor da soma É :' , soma)
*/


// Exemplos operador OU

let bicicletaAzul = true
let bicicletaVermelha = false
let resultadoOU = bicicletaAzul || bicicletaVermelha

console.log("O Resultado do operador OU é: " , resultadoOU)

let irParaPadaria = bicicletaAzul || bicicletaVermelha
console.log("Vamos ir até a padaria? " , irParaPadaria)


// Operação de igualdade

console.log("Exemplos de operação de igualdade")
console.log(true == true) // true
console.log(true == false) // false
console.log(false == true) // false
console.log(false == false) // true

let aluno1 = "Ariel"
let aluno2 = "Ariel"
let verificarAluno = aluno1 == aluno2

console.log("O nome dos alunos são iguais? " , verificarAluno)


// Operador de negação

console.log("Exemplos de operação de negação")
console.log(true  != true)  // false
console.log(true  != false) // true
console.log(false != true)  // true
console.log(false != false) // false

// Exemplo de operador de negação

/*
temosDinherio = "Ariel Lima"
console.log("novo valor 1" , temosDinherio)

temosDinherio = "Souza"
console.log("Novo valor 2" , temosDinherio)
*/

let temosDinherio2 = true
let estaEnsolarado2 = false
let resultadoE2 = temosDinherio && estaEnsolarado2

console.log('O Resultado de operador E é: ' +resultadoE2)