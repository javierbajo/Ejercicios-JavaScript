/*
Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
```
*/


muestraFocus = (evento) => {
    //console.log(evento);
    console.log(evento.target.value)
}


document.querySelector("input").addEventListener("focus",muestraFocus);
//document.getElementsByTagName("input")[0].addEventListener("focus",muestraFocus); OTRA FORMA

