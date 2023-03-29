/*
Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div></div>
   <div></div>
</body>
</html>````
*/

// UTILIZANDO appendChild
/*
// creo una variable que contenga una p
let miP$$ = document.createElement('p');

// creo un nodo de texto que contenga la frase
let miTexto$$ = document.createTextNode('Voy en medio!');

// meto el nodo de texto como hijo de p
miP$$.appendChild(miTexto$$);
//console.log(miP$$)

// Creo una variable que seleccione el primer div de los dos que hay
let miDiv$$ = document.querySelector('div');
//miDiv$$ = document.getElementsByTagName('div');
//console.log(miDiv$$)

// creo una variable que seleccione el padre del elemento a introducir
let miBody$$ = document.querySelector('body');
//console.log(miBody$$)

// meto mi p después del primer div, hijo del body
miBody$$.insertBefore(miP$$, miDiv$$.nextSibling);
*/



// UTILIZANDO innerHTML
let miP$$ = document.createElement('p');
miP$$.innerHTML = 'Voy en medio!';

let miDiv$$ = document.querySelector('div');
let miBody$$ = document.querySelector('body');
miBody$$.insertBefore(miP$$, miDiv$$.nextSibling);

