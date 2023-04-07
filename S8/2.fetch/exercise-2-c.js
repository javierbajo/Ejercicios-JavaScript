// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name=';

let contador = 1;

const get = async (nombre) => {
    response = await fetch(baseUrl + nombre);
    res = await response.json();
    draw(res);

}

const eliminarP = (claseEliminar) => {
    let pEliminar$$ = document.querySelector(`.${claseEliminar}`);
    pEliminar$$.remove();
    
    let botonEliminar$$ = document.querySelector(`.${claseEliminar}`);
    botonEliminar$$.remove();

}

const draw = (res) => {
    console.log(res.name);
    console.log(res);
    const body$$ = document.querySelector("body");
    const p$$ = document.createElement('p');
    p$$.setAttribute('class', `fila${contador}`);
    body$$.appendChild(p$$);
    p$$.innerHTML = `El nombre ${res.name} tiene un ${(res.country[0].probability * 100).toFixed(2)}% de ser de ${res.country[0].country_id}  y un ${(res.country[1].probability * 100).toFixed(2)}%  porciento de ser de ${res.country[1].country_id}.`;
    const buttonELiminar$$ = document.createElement('button');
    buttonELiminar$$.setAttribute('class', `fila${contador}`);
    buttonELiminar$$.innerHTML = 'Eliminar';
    body$$.appendChild(buttonELiminar$$)

    buttonELiminar$$.addEventListener('click', () => eliminarP(p$$.getAttribute('class')));
    contador++;


}

const takeInput = () => {

    const input$$ = document.querySelector('input');
    const button$$ = document.querySelector('button');
    button$$.addEventListener('click', () => get(input$$.value));

}

const init = () => {

    takeInput();
    console.log('bienvenidos!');
}
init();

