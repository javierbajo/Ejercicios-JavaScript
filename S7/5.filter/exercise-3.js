//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const streamerLegends = streamers.filter(individuo => individuo.gameMorePlayed = 'League of legends');



const nombreStreamerLegends = streamerLegends.map(individuo => individuo.name);

console.log(streamerLegends);
console.log(nombreStreamerLegends);