/*
Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).

La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.

Ejecuta varias veces la función father y haz finalmente un console.log de numbersList
*/

const numbersList = [];

function sum(a, b){
    return(a + b);

}

function substract(a, b){
    return(a - b);
}

function father(a, b, callback){
    
    numbersList.push(callback(a,b));
    console.log(numbersList)
}

setTimeout(() => father(3, 4, sum), 1000);
setTimeout(() => father(2, 5, substract), 2000);
setTimeout(() => father(6, 8, sum), 3000);
setTimeout(() => father(9, 1, substract), 4000);
console.log(`En este no sale nada porque no es asíncrono ${numbersList}`)
