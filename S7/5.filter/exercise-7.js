/*Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
 introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>

*/

// OJO! DISTINGUE ENTRE MAYÚSCULAS. PARA QUE NO DISTINGA SE PASARÍA TODAS LAS ENTRADAS A MINÚSCULAS CON toLowerCase()
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];



const asignar = (caracteresEntrada) => {
    // limpio la consola al entrar para que no acumule guarrerías anteriores
    console.clear()
    // filtro el array de objetos a los que incluyan los introducidos por el input
    const streamerInputs = streamers.filter(individuo => individuo.name.includes(caracteresEntrada));
    // muestro por la consola los caracteres introducidos
    console.log(caracteresEntrada);
    // creo un array con los nombres de los individuos que incluyan lo introducido por el input y lo muestro 
    const streamerInputsName = streamerInputs.map(individuo => individuo.name)
    // imprimo por consola el array de objetos filtrado
    console.log(streamerInputs);
    // imprimo por consola los nombres de los streamer que incluyen los input
    console.log(...streamerInputsName);
} 

// Selecciono el input del html y lo meto en la variable input$$
let input$$ = document.querySelector('input');
// Creo un evento input y le mando el valor del mismo a la función asignar
input$$.addEventListener('input', () => asignar(input$$.value));



