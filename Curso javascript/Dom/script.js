//  achando o elemento pela tag
//  queremos a tag h1

let titulo = document.getElementsByTagName('h1');

//console.log(titulo); 1n

//console.log(titulo[0]); 2n

console.log(titulo[0].innerText); // 3n

let lista = document.getElementsByTagName('li');

//console.log(lista);


//  Pegando elemento pelo atributo classe

let subtitulo = document.getElementsByClassName('subtitulo');

//console.log(subtitulo[0]);


//  Pegando o elemento pelo atributo ID

let paragrafo = document.getElementById('paragrafo');

//console.log(paragrafo);


//  outra foram que temos para pegar os elementos é com:
//  querySeletor

let listaDois = document.querySelector('.lista');
//console.log(listaDois);

let listaTres = document.querySelectorAll('.lista');
//console.log(listaTres);


let listasucos = document.querySelectorAll("#lista-suco .sucos");

//console.log(listasucos);


/*
    a diferença entre o querySeletor
    e o querySeletorAll é que o primiero ele 
    seleciona apens um elemento, e já o segundo 
    ele seleciona mais de um elemento
*/

//  Como alterar o contéundo do elemento

//  O primeiro passo é selecionarmos o elemento


let trocatitulo = document.querySelector('#titulo');

trocatitulo.innerHTML = "Outra coisa";


//  Outra forma de alterar o conteúdo do elemento

let trocaSubtitulo = document.querySelector('.subtitulo');

trocaSubtitulo.textContent = "O SUBTITULO MODOU!";


// Como remover um elemneto da nossa página

//let removeTitulo = document.querySelector('#titulo');

//removeTitulo.remove();


function removeTitulo(){
    let removeTitulo = document.querySelector('#titulo');

    removeTitulo.remove();
}

