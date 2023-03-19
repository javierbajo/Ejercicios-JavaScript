/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:*/


function findArrayIndex(array, text) {

    for(let i = 0; i < array.length; i++){
        if(array[i] == text){
            return(i);
        }
    }

}

const arrayEjemplo1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(arrayEjemplo1, "Caracol"));
console.log(findArrayIndex(arrayEjemplo1, "Mosquito"));
console.log(findArrayIndex(arrayEjemplo1, "Salamandra"));
console.log(findArrayIndex(arrayEjemplo1, "Ajolote"));

const arrayEjemplo2 = ['Paco', 'Miguel', 'Jorge', 'Rubén', 'Cris', 'Lola'];
console.log(findArrayIndex(arrayEjemplo2, "Jorge"));
console.log(findArrayIndex(arrayEjemplo2, "Paco"));