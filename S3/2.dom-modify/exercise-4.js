//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// Creo una variable con una p
let unaPe$$ = document.createElement("p");

// Creo un nodo de texto "Soy dinámico"
let textoDinamico = document.createTextNode("Quisiera ser el eco de tu voz oh oh... soy dinámico");

// Meto el texto dentro de la p
unaPe$$.appendChild(textoDinamico);

// Creo una variable que enlace con el body del html original
let bodyDelHtml$$ = document.querySelector("body");

// Meto la p creada (que tiene el texto dentro) como hijo del body
bodyDelHtml$$.appendChild(unaPe$$);








