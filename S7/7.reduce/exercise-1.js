//Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().


const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// va recorriendo cada elemento del array pasando de vuelta el valor del acumulador. El elemento se refiere al elemento actual en el bucle. Devueve el valor del contador después de pasar por todos los elementos. El cero del final de la línea es el valor inicial del contador
let suma = exams.reduce((acumulador, elemento) => acumulador = acumulador + elemento.score, 0);

console.log(suma);