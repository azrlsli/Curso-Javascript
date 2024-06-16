// Tipos de funcões

// Primeiro tipo = funções com parâmentro (os) e com retorno

// Função para realizar a soma de dois valores


function somar (a, b){
    return a + b;
}

let resultado = "a somar é: " + somar (1,2);
//let resultado = (`a somar é ${somar(1,2)}`);

console.log(resultado);
console.log("somar é: " + somar(5,3));


// Segundo tipo = Funções com parâmento (os) e sem retuno

function exibirSubtracao(x, y){
    console.log(x-y);
}
exibirSubtracao(10,6);


// Terceiro tipo - função sem parâmento e com retuno

function retornaNumero(){
    return Math.random(); // Retorna um número entre 0 e 1 = 0.98997744
}
console.log(retornaNumero())


// Quanto tipo = Função sem parâmento e sem retorno.

function digaOla(){
    console.log("Olá!")
}
digaOla()


// Receber um valor e retornar um tipo de seviço

function valorTipoServico(valor) {
    if (valor == 1) {
        return "lavagem do carro"
    }else{
        if (valor == 2)
        return "troca óleo"
    {
        if (valor == 3)
        return "troca pneu"
    }
}
}
console.log(valorTipoServico(1))
console.log(valorTipoServico(2))
console.log(valorTipoServico(3))