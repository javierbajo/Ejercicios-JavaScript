/*
Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="fn-insert-here"></div>
   <div></div>
   <div class="fn-insert-here"></div>
   <div>Aqui no va un p</div>
</body>
</html>```
*/


let selectorInsertar$$ = document.getElementsByClassName("fn-insert-here"); // Lo mismo que document.querySelectorAll(".fn-insert-here")

const arrayPes$$ = []; // Creo un array vacío donde meteré pes con el texto
for(let i = 0; i < selectorInsertar$$.length; i++){
    arrayPes$$[i] = document.createElement('p'); // en cada vuelta del bucle creo un elemento p en el array
    arrayPes$$[i].innerHTML = 'Voy dentro!'; // en cada vuelta del bucle añado texto a la correspondiente p del array
    selectorInsertar$$[i].appendChild(arrayPes$$[i]) // en cada elemento con la clase señalada meto un hijo con la p del texto, desde el correspondiente elemento del array 
}


console.log(arrayPes$$);
console.log(selectorInsertar$$)




