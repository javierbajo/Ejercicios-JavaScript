/*Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
   <p>No me elimines!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
</body>
</html>```
*/

// Creo un array con todos los elementos que tengan como clase "fn-remove-me" mediante querySelectorAll

const arrayElementosBorrar$$ = document.querySelectorAll(".fn-remove-me");
console.log(arrayElementosBorrar$$);

// Elimino todos los elementos del array anterior, pasándolo por un bucle for-of, mediante remove()

for(elementos of arrayElementosBorrar$$){
    elementos.remove();
} 
