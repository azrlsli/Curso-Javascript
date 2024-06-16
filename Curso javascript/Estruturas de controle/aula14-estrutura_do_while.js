// Exemplo 1 

let controle = 0;

do{
    console.log("bom dia! " + controle)
    controle++
} while(controle <= 5 )


let hora = 10;

do{
    console.log("lavando pratos " + hora + " horas")
    hora++
} while (hora <= 14)


// template string

let idade = 20;

do{
    // console.log("me chamo Ariel Lima tenho " + idade + " anos.")
    console.log (`me chamo Ariel Lima tenho ${idade} anos.`)  // shift + letra p lado ``
    idade++
} while(idade <= 27)

