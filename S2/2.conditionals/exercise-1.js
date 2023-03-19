const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for(let i = 0; i < alumns.length; i++){ //recorre las personas
    let contador = 0;//Cuenta el número de trimestres aprobados
    if(alumns[i].T1){
        contador++;
    }
    if(alumns[i].T2){
        contador++;
    }
    if(alumns[i].T3){
        contador++;
    }
    if(contador > 1) {
        alumns[i].isApproved = true; //Añade isApproved al objeto y lo asigna true si tiene más de un trimestre
    }else{
        alumns[i].isApproved = false; //Añade isApproved al objeto y lo asigna false si no tiene más de un trimestre
    }
}

console.log(alumns);








/*
const Francisco = {name: 'Paco', age: '25'};

Francisco.nacionalidad = 'Español';

console.log(Francisco);
*/