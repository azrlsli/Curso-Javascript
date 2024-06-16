// Exemplo 1

/*
const nota = 7;
let resultado;

if( nota >= 7){
    resultado = "passou!";
} else if ( nota >= 5){
    resultado = "recuperação!";
} else{
    resultado = "reprovado!";
}

    console.log(resultado);
*/
/*
const nota = 4;
let resultado;

if (nota >= 7) {
    resultado = "passou!";
} else {
    resultado = "reprovado!";
} if (nota >= 5) {
    resultado = "recuperação!"
}
console.log(resultado);
*/
// Exercicio calculadora
// Operadores aritméticos = +, -, /, *, %

/*
let a = 8;
let b = 2;

const operador = "+";  // aqui a escrever 
let valorFinal;

if (operador === "+") {
    valorFinal = a + b;
} else if (operador === "-") {
    valorFinal = a - b;
} else if (operador === "/") {
    valorFinal = a / b;
} else if (operador === "*") {
    valorFinal = a * b;
} else {
    valorFinal = a % b;
}

    console.log(valorFinal);
*/

    let a = 8;
    let b = 2;
    
    const operador = "+";
    let valorFinal;
    
    if (operador === "+") {
        valorFinal = "soma: " + (a + b);
    } else if (operador === "-") {
        valorFinal = a - b;
    } else if (operador === "/") {
        valorFinal = a / b;
    } else if (operador === "*") {
        valorFinal = a * b;
    } else if (operador === "%"){
        valorFinal = a % b;
    }else{
        valorFinal = "Valor inálido, informe outro valor."
    }
    
        console.log(valorFinal);
    


