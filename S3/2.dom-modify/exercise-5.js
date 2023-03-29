/*
Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h2 class="fn-insert-here"></h2> 
</body>
</html>
```
*/

// Creo una variable con el texto que quiero meter
let textoWubba$$ = document.createTextNode("Wubba Lubba dub dub");

// Creo una variable que seleccione el nodo con la clase fn-insert-here
let nodoClase$$ = document.querySelector(".fn-insert-here");

// Meto el texto en el nodo 
nodoClase$$.appendChild(textoWubba$$);
