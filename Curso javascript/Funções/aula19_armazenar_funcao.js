// Exemplo 1

const nome = "Ariel";    // String
let nota = 10;          // Inteiro
let media = 5.9;        // Decimal
const estaSol = false;  // Booleano

// function somar (a, b)
let soma = function (a, b){
    return a + b;
}
//console.log(soma(10, 2));


// Exemplo 2

function subtrair (a, b){
    return a - b;
}
const menos = subtrair;

//console.log(subtrair(6, 4));    // Chamei a função
//console.log(menos(4, 5));       // Chamei a constánte que faz referência a função


// Exemplo 3 - Passar função como parâmetro

function multiplicar (a, b){
    return a * b;
}

function fazer (funcao){
    funcao()
}
fazer(10)   // aqui eu passei um numero inteiro o não uma função

// typeof - ele verifica o tipo de dadp que estamos utilizado

//console.log(typeof fazer)
//console.log(typeof fazer === "function")

function fazer(funcao){
    if( typeof funcao === "function" ){
        console.log(funcao()) 
    }
}


function ola(){
    return "ola"    // é uma string
}

//console.log(ola())

//fazer(ola())    // fazer("ola")

//fazer("ola")    // aqui estamos passando uma string retornada pela função

// forma correta

//fazer(ola)


// Exemplo 4 

function falaNome(funcao){  // aqui eu recebo como parêmentro a função 
    //console.log(funcao()) 1
    funcao()    // aqui eu chamdo a função recebida como parâmentro 4
}

function meuNome(){
    //return "Ariel" 1
    //console.log("Ariel") 2
    console.log("vindo da função: Ariel")   // 3
}

//falaNome(meuNome) 1

meuNome()   // 2

console.log("vindo do console: Ariel")  //3

falaNome(meuNome)   // 4