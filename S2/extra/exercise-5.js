/*Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()``*/

function rollDice(numeroCaras){
    return Math.floor(Math.random() * numeroCaras +1);
}


let caras = 6;

//Tiramos una vez de prueba
console.log(rollDice(caras));


//VAMOS A PROBAR LA FIABILIDAD DE LOS VALORES GENERADOS

//Crea un array de orden igual al número de caras del dado, con todos los valores igual a cero:
const contador = []; 
for(let i = 0; i < caras; i++){
    contador[i] = 0;
}
console.log(`Contador inicial ${contador}`);

//Tiramos el dado un número "iteraciones" de veces y se introduce las veces que sale cada resultado en el array "contador"
let iteraciones = 100000000;
for(let i = 0; i < iteraciones; i++){ 
    let resultado = rollDice(caras);
    contador[resultado - 1]++; 
}
console.log(`Número de iteraciones ${iteraciones}`)
console.log(`Contador final ${contador}`);

// Se muestra la frecuencia de cada uno de los resultados en %
for(let i = 0; i < caras; i++){
    let frecuencia = contador[i]/iteraciones * 100;
    console.log(`La frecuencia del resultado ${i+1} es ${frecuencia.toFixed(3)} %`);
}


