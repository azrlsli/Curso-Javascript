//  Exemplo 1 - foreach

const notas = [5, 4, 3, 5, 6]

for (let indice in notas){  // in indice
    //console.log(indice)
}

for (let nota of notas){    // Of = Os Valores
    //console.log(nota)
}

let espaco = '';

for(let nota of notas){     // Of = Os Valores
    espaco += nota + ' '
}
//console.log(espaco)


// Exemplo 2 - Perconrer um array de tras para frente

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
for (let i = 0; i < numeros.length; i ++){
    //console.log(numeros[i])
}
*/

/*
for (let i = numeros.length - 1; i >= 0; i--){  // - = 2    //  De tras para frente de 2 em 2
    //console.log(numeros[i])
}
*/

for (let x = 0; x < numeros.length; x++){
    //console.log(numeros[x])
}

for (let numero of numeros){
    console.log(numero)
}