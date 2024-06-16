// Exemplo 1

/*
const numeros = [1, 2, 3, 4]

for (let idade = 0; idade <= 17; idade ++){
    console.log(idade)
}
*/

//               0  1  2  3
const numeros = [1, 2, 3, 4]

//      0 < 4   0++ = 1
//      1 < 4   1++ = 2
//      2 < 4   2++ = 3
/*
for (let numero = 0; numero < 4; numero ++){
    //console.log(numeros)
    console.log(numeros[numero])
      
}
*/

for (let n = 0; n < 4; n++) {
    //console.log(numeros[n]) // ele não peronre todos os indices
}

const notas = [5.1, 4.3, 6.3, 5.7, 4.5, 7.4]

for (let x = 0; x < notas.length; x++) {
    console.log(notas[x])
}