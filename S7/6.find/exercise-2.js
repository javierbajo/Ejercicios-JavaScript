// Dado el siguiente array, usa .find() para encontrar la pelicula del año 2010.


const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

const year = 2010;
const encontrarPelicula = movies.find(pelicula => pelicula.date == year);

console.log(encontrarPelicula);
console.log(`La película del año ${year} es ${encontrarPelicula.title}`);