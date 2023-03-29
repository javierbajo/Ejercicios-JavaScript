//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

muestraClick = evento => {
    console.log(evento);
    console.log(evento.target.innerHTML);
}

/*
function muestraClick(evento){
    console.log(evento);
    console.log(evento.target.innerHTML);
}
*/


document.getElementById("btnToClick").addEventListener("click", muestraClick);



