
//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


// SIN innerHTML:
/*
let lista$$ = document.createElement('ul');
const arrayLi$$ = [];
const arrayNodosTexto$$ = [];

for(let i = 0; i<countries.length; i++){
    arrayLi$$[i] = document.createElement('li');
    arrayNodosTexto$$[i] = document.createTextNode(countries[i]);
    arrayLi$$[i].appendChild(arrayNodosTexto$$[i]);
    lista$$.appendChild(arrayLi$$[i]);
}
let miBody$$ = document.querySelector('body');
miBody$$.appendChild(lista$$);
*/


//CON innerHTML:
let lista$$ = document.createElement('ul');

for(let i = 0; i<countries.length; i++){
    lista$$.innerHTML += `<li>${countries[i]}</li>`
}

let miBody$$ = document.querySelector('body');
miBody$$.appendChild(lista$$);