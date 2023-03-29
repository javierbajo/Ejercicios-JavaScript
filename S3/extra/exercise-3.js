/*
Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div data-function="printHere"></div>

</body>
</html>
```

```js
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
```
*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let lista$$ = document.createElement('ul');

for(let i = 0; i < cars.length; i++){
    lista$$.innerHTML += `<li>${cars[i]}</li>`;
}
console.log(lista$$)
let miDiv$$ = document.querySelector('[data-function="printHere"');
miDiv$$.appendChild(lista$$);