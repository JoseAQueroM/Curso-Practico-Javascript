// const lista1 = [ // Creando la Lista
//     100, 
//     200, 
//     300,
//     500,
// ];

// let sumaLista1 = 0; // Variable con valor en 0, que luego se le a;adira un valor

// for (let i = 0; i < lista1.length; i++) { // Creando un ciclo para la sumatoria de cada 
//                                           //objeto
   
//     sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;


function calcularMediaAritmetica(lista){

    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){

    //     sumaLista = sumaLista + lista[i];
    // 

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){ 
            return valorAcumulado + nuevoElemento
        }


    );
    
    const promedioLista = sumaLista / lista.length; // Sacando el Promedio
    return promedioLista; // Retornando Valor

}   
   