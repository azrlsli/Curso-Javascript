// Resolução soma

function soma ( numero1, numero2 ){
    // Template string
    console.log (`A soma é ${numero1 + numero2}`);
}
// soma (2,3);
// soma (10, 5);


// Unoefineo = Inoefinido

let a;
let numero = 10;
let carro = null;
let valor = 0;
let paciente = " "; // Strnig vazia

// console.log (a)
// console.log (10)
// console.log (carro)
// console.log (valor)
// console.log(paciente)


// return = retorno

/*
function retornaOla (){
    console.log("Olá!")
    return "olá"; // 4
}
// retornaOla() 1

let saudacao = retornaOla() // 2

console.log(saudacao) // 3
*/

function retornaOla(){
    
    return "olá"; 
}

retornaOla()
// console.log ("Olá com retorno: " + retornaOla()) // 2


// Exemplo 2

/*
function retornaBomdia(){
    return "Bom dia!";

}

// console.log(retornaBomdia()); // 1

let cumprimentar = retornaBomdia() // 2

console.log(cumprimentar)
*/

function retornaBomdia(verdaderio){
    
    if(verdaderio == true){
        return "Bom dia!";
    }else{
        return "Boa noite!";
    }
}

let cumprimentar = retornaBomdia(false) // Bom dia é true / Boa noite é false

console.log(cumprimentar)
