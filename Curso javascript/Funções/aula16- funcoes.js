// Exemplo 1 

const nome1 = "Ariel";   //nome1
const sobreNome1 = "Lima";   //nome1
const truma1 = "A";  //nome1

//console.log(`O nome é: ${nome1}`);
//console.log(`O sobrenome é: ${sobreNome1}`);
//console.log(`A truma é: ${truma1}`);


const nome2 = "Ariela";
const sobreNome2 = "Souza";
const truma2 = "B";

//console.log(`O nome é: ${nome2}`);
//console.log(`O sobrenome é: ${sobreNome2}`);
//console.log(`A truma é: ${truma2}`);

// 2 
function exibirDadosAluno2() {
    console.log(`O nome é: ${nome2} o sobrenome é ${sobreNome2} e a truma é ${truma2}.`);
    
}
//exibirDadosAluno2();
//exibirDadosAluno2();

// 3
function exeibirDados(){

    let nome = "alguem";
    let sobreNome = "outra pessoa";
    let truma = "C";

    console.log(`o nome é ${nome} o sobrenome é ${sobreNome} e a truma é ${truma}.`)
}
//exeibirDados();
//exeibirDados();

// 4
function exibirDados2(nome, sobreNome, truma){
    console.log(`o nome é ${nome} o sobrenome é ${sobreNome} e a truma é ${truma}.`)
}

function exibirNome(nome){
    console.log(`o nome é ${nome}`)
}
exibirNome(4);
exibirDados2("Ariel", "Lima", "A");
exibirDados2("Ketlen", "Santos", "B");
exibirDados2("Gabriel", "Souza", "C");
exibirDados2("Ana Clara", "Sousa", "D");

