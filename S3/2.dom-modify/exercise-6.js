/*
Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```
*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// Creo una variable lista ul
let lista$$ = document.createElement("ul");

// Creo un array vacío donde meteré los elementos de la lista (li list items)
const elementosLista$$ = [];
// Creo un array vacío donde meteré nodos de texto del array de apps
const appsNodosTexto$$ = [];



for(let i = 0; i < apps.length; i++){
    // Voy creando elementos de la lista y los meto dentro del array de li's
    elementosLista$$[i] = document.createElement("li");
    // Voy creando un nodo de texto para cada correspondiente elemento del array apps y lo meto dentro del array de nodos de texto
    appsNodosTexto$$[i] = document.createTextNode(apps[i]);
    // Meto el nodo de texto dentro del correspondiente nodo de elemento de lista li
    elementosLista$$[i].appendChild(appsNodosTexto$$[i]);
    //Meto cada elemento de la lista como nuevo hijo de la lista ul
    lista$$.appendChild(elementosLista$$[i]);
}

// Por último meto la lista completa dentro del html creando una variable que seleccione el body
let bodyDelHtml$$ = document.querySelector("body");
bodyDelHtml$$.appendChild(lista$$);





