/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:*/

function swap(array, a, b){
    let pivote = array[a];
    array.splice(a,1,array[b]);
    array.splice(b,1,pivote);
    return array;
}

const myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const arrayResultante =swap(myArray,1,3);
console.log(arrayResultante);

