//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


const listaDiv$$ = [];
let miBody$$ = document.querySelector('body');
for(let i = 0; i < countries.length; i++){
    listaDiv$$[i] = document.createElement('div');
    listaDiv$$[i].innerHTML = `<h4>${countries[i].title}</h4>`;
    listaDiv$$[i].innerHTML += `<img src=${countries[i].imgUrl}"></h4>`;
    miBody$$.appendChild(listaDiv$$[i]);
}


let boton1$$ = document.querySelector('button');
let boton2$$ = document.createElement('button');
boton2$$.innerHTML = `Púlsame oh sí baby`;

miBody$$.insertBefore(boton2$$, boton1$$);

boton2$$.addEventListener("click", () => listaDiv$$[listaDiv$$.length - 1].remove());


