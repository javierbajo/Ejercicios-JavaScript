/*
Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p class="fn-remove-me">Bye bye</p>
</body>

</html>
```
*/

//let elementoBorrar$$ = document.getElementsByClassName('fn-remove-me'); 
let elementoBorrar$$ = document.querySelector('.fn-remove-me');
console.log(elementoBorrar$$)

//elementoBorrar[0].remove();
elementoBorrar$$.remove();