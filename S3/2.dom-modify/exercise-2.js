//Inserta dinamicamente en un html un div que contenga una p con javascript.

let nuevoDiv$$ = document.createElement("div");
let nuevaPe$$ = document.createElement("p");

// Meto la p dentro del div

nuevoDiv$$.appendChild(nuevaPe$$);

// Creo una variable que seleccione el body del html

let bodyDelHtml$$ = document.querySelector("body");

// Ahora meto el div (que tiene una p dentro) como hijo del body en el html

bodyDelHtml$$.appendChild(nuevoDiv$$);


// Ahora meto un saludo dentro de la nueva p creada (para probar que funciona)
let saludoEnLaPe$$ = document.createTextNode("Buenas noches, bienvenidos, hijos del rockanroll");
nuevaPe$$.appendChild(saludoEnLaPe$$);
