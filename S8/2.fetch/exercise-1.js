//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.



const get = async () =>  {
    const response = await fetch('https://api.agify.io?name=michael');
    const res = await response.json();
    return res;

}

const draw = (datos) => {
    console.log(datos);
    console.log(`Nombre: ${datos.name}`);
    console.log(`Edad: ${datos.age}`);
    console.log(`Nº de cuenta: ${datos.count}`);
}

const init = async () => {
    const datos = await get();
    draw(datos);
}
init();