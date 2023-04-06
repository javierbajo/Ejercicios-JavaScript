
// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

//- Ejecuta esta función sin pasar ningún parametro

const miFuncion = (a = 10, b = 5) => {
    console.log(a + b);
}

miFuncion()

//- Ejecuta esta función pasando un solo parametro

miFuncion(2)

//- Ejecuta esta función pasando dos parametros

miFuncion(2, 7)


