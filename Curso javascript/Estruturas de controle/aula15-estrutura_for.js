// Exemplo 1

// Ex: For (declarar ; expressão ; variavel de controle ){

//}

/*

let contador = 10;

while (contador <=100){
    console.log(contador)
    contador += 10
}

*/

/*

for (let controle = 1; controle <= 5; controle ++){
    console.log("olá")
}

*/

/*

for (let controle = 0; controle <= 10; controle += 2){
    console.log(controle)
}

*/


/*

for ( let controle = 10; controle >= 0; controle -- ){ // controle -= 2
    console.log(controle)
}

*/

/*

for (controle = 1; controle <= 20; controle ++){
    if(controle % 2 == 0){
        console.log(controle)
    }
}

*/


/*

for (controle = 1; controle <= 20; controle ++){
    if(controle % 2 == 0){
        console.log(`este número é par: ${controle}` )
    } else{
        console.log(`este número é impar: ${controle}` )
    }
}

*/

/*

for (let fora = 1; fora <= 3; fora++) {
    console.log("fora")

    for (let dentro = 1; dentro <= 5; dentro++) {
        console.log("dentro")
    }

}

*/

/*

for (let fora = 1; fora <= 8; fora++) {
    console.log(`Fora vale: ${fora}`)

    if (fora % 2 == 0) { // verifico se é par
        
        for (let dentro = 1; dentro <= 3; dentro++) {
            console.log("dentro")
        }
    }

}

*/

let inteiro = 10;

console.log( inteiro.toString () );

inteiro = inteiro.toString() // 10

console.log( typeof inteiro )


// MDN - documentação do javacsript - Mozilla
    