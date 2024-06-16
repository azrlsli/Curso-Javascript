// Exemplo  1

function Nome() {
    return  "Ariel Lima";    //  Retorno é uma string // meuNome -1
}
//console.log(Nome())


function retornaFuncao(){   
    
    function meuNome() {     // não esta acessível
        return "Retorno da função de dentro";     // Valor que será retornado
    }
    return meuNome;   // retorno da função mais externa - 4
}
//console.log(retornaFuncao)  // O nome da função mais externa - 1
//console.log(retornaFuncao())  // O nome da função mais interno -2
//console.log(retornaFuncao()())  // aqui estou chamado a função mais interna - 3


let retorno = retornaFuncao();  // Estou chamando a função de fora a atribuindo a uma variável
//console.log(retorno()); // Imprimindo no console e chamando a função interna


// Exemplo 2 - Retorno de uma função anônima

function funcaoAnonima() {
    
    return function () {
        return function () {    //4
            return "Olá da função mais interna ainda"
        }
    }
}
console.log(funcaoAnonima)
console.log(funcaoAnonima())
console.log(funcaoAnonima()())
console.log(funcaoAnonima()()())    // 4


// Exemplo 3 - Passando parâmentro para função externa e interna

function multiplicacao (x,y){
    return x*y;
}
function multiplica(){
    return function (a,b){
        return a*b;
    }
}
//console.log(multiplica()(2,4))


function multi(n1){
    return function (n2){
        return n1*n2;
    }
}
//console.log(multi(3)(2))