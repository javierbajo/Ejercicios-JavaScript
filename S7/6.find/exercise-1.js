//Dado el siguiente array, usa .find() para econtrar el número 100.


const numbers = [32, 21, 63, 95, 100, 67, 43];

// numero a probar si está en el array
const numero = 100;

// mediante .find y .findIndex buscamos si el número está y en qué posición. Si no está el valor da undefined y la posición -1
const encontrarValor = numbers.find(individuo => individuo == numero);
const encontrarIndex = numbers.findIndex(individuo => individuo == numero );

// Imprimo esta chorrada por consola
if (encontrarValor) console.log(`El valor ${encontrarValor} existe en el array y está en la posición del índice ${encontrarIndex}`);
else console.log(`El valor ${numero} no existe en el array`);

//console.log(encontrarValor)
//console.log(encontrarIndex)
