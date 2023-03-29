//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

// Creo una variable que seleccione el body del html (En ella voy a meter los 6 pes)

let bodyDelHtml$$ = document.querySelector("body");

// Creo una variable que contenga un nuevo div

let nuevoDiv$$ = document.createElement("div");

// Creo un array vacío para meter las pes

let arrayPes$$ = [];

// Voy creando pes en el array y las voy metiendo en el nuevo div mediante bucle for

for(let i = 0; i < 6; i++){
    arrayPes$$[i] = document.createElement("p");
    nuevoDiv$$.appendChild(arrayPes$$[i]);
}

// Introduzco el nuevo div (con 6 pes dentro) dentro del body del html original

bodyDelHtml$$.appendChild(nuevoDiv$$);

console.log(arrayPes$$)
