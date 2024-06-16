// Exemplo 1

function multiplicar (a=0,b=0){   // (a=o,b=o)
    return  a * b;
}
//console.log(multiplicar(2,3))   

// not a number = não é um número

// Exemplo 2

function soma (n1=0,n2=0,n3=0){
    return  n1 + n2 + n3
}
//console.log(soma(1,2,3))    // 1+2+3
//console.log(soma(1,2,   ))  // 1+2+0
//console.log(soma(1))    // 1+0+0
//console.log(soma()) // 0+0+0
//console.log(soma(1,2,3,4))

//console.log(`A Multiplicação é ${multiplicar(2,4)}`)
//console.log("Multiplicação " + multiplicar(2,))


function exibeNome (nome= "padrão"){
    return `O seu nome é ${nome}`;
}
console.log(exibeNome());
console.log(exibeNome("ARIEL"));