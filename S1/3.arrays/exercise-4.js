const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

// AÑADIR AL PRINCIPIO
/*
rickAndMortyCharacters.unshift("Morty","Summer");
console.log(rickAndMortyCharacters);
*/

// AÑADIR AL FINAL
/*
rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters);
*/

// AÑADIR DESPUÉS DE RICK
/*
rickAndMortyCharacters.splice(1,0,"Morty","Summer");
console.log(rickAndMortyCharacters);
*/

// AÑADIR DESPUÉS DE BETH

console.log(rickAndMortyCharacters.splice(2,0,"Morty","Summer"));
console.log(rickAndMortyCharacters);

// MUESTRA POR CONSOLA EL ÚLTIMO ELEMENTO DEL ARRAY

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);
