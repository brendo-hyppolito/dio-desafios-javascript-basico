



function criarListaNumeros(numero) {
    listaNumeros = [];
    for (let i = 0; i <= numero; i++) {
        listaNumeros.push(i);
    }
    return listaNumeros;
}

function imprimirNumerosPares(numero) {
    criarListaNumeros(numero);
    for (let i = 0; i < listaNumeros.length; i++) {
        if ((listaNumeros[i] % 2) === 0) {
            console.log(listaNumeros[i]);
        }
    }
}


//Main
(function () {
    imprimirNumerosPares(897);
}())
