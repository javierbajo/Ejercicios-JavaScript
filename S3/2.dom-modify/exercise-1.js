//Inserta dinamicamente en un html un div vacio con javascript.


// Creo un elemento tipo div
let newdiv$$ = document.createElement("div");

// PARA PONER "Hola mundo" DENTRO DEL DIV CREADO
//let insertaHolaMundo$$ = document.createTextNode("hola mundo");
//newdiv$$.appendChild(insertaHolaMundo$$);

// Creo una variable que seleccione el body en el html original
let bodyEnHtml$$ = document.querySelector("body");

// Meto el nuevo div creado en el body del html
bodyEnHtml$$.appendChild(newdiv$$);
