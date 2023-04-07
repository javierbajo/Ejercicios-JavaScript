
// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
*/

const baseUrl = 'https://api.nationalize.io?name=';



const get = async (nombre) => {
    response = await fetch(baseUrl + nombre);
    res = await response.json();
    draw(res);

}

const draw = (res) => {
    console.log(res.name);
    console.log(res);
    const body$$ = document.querySelector("body");
    const p$$ = document.createElement('p');
    body$$.appendChild(p$$);
    p$$.innerHTML = `El nombre ${res.name} tiene un ${(res.country[0].probability * 100).toFixed(2)}% de ser de ${res.country[0].country_id}  y un ${(res.country[1].probability * 100).toFixed(2)}%  porciento de ser de ${res.country[1].country_id}.`;

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


// para probar por dónde pasa la función: 
/*
    var today = new Date(); 
    // obtener la fecha y la hora
    var now = today.toLocaleString();
    console.log(now)
*/