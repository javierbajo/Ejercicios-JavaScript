// Dado el siguiente javascript, usa .find() para encontrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, añade la propiedad .mutation al alien con el valor de la mutación encontrada.

const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];


// busco el elemento del array mutations que contiene la mutación Porompompero y la meto en la nueva variable
const mutacionPorompompero = mutations.find(mutacion => mutacion.name == 'Porompompero');

//console.log(mutacionPorompompero);

// busco el elemento de aliens que tiene en la propiedad nombre el valor Cucushumushu y le añado una nueva propiedad llamada mutation con valor igual al nombre de la mutación Porompompero
aliens.find(alien => alien.name == 'Cucushumushu').mutation = mutacionPorompompero.name;


console.log(aliens);