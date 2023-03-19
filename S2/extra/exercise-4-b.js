/*Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/


function findArrayIndex(array, text) {

    for(let i = 0; i < array.length; i++){
        if(array[i] == text){
            return(i);
        }
    }
} 

function removeItem(array, text) {

    let i = findArrayIndex(array, text);
    array.splice(i, 1);
    return (array);
}

const arrayEjemplo1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(removeItem(arrayEjemplo1, "Mosquito"));

const arrayEjemplo2 = ['Paco', 'Miguel', 'Jorge', 'Rubén', 'Cris', 'Lola'];
console.log(removeItem(arrayEjemplo2, "Jorge"));
console.log(removeItem(arrayEjemplo2, "Paco"));
console.log(removeItem(arrayEjemplo2, "Lola"));