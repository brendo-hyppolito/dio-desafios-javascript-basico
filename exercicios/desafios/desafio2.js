
function verificarMaiorNumeroParMenorNumeroImpar(listaNumeros) {
    let maiorPar = Number.NEGATIVE_INFINITY;
    let menorImpar = Number.POSITIVE_INFINITY;

    for (let i = 1; i < listaNumeros.length; i++) {
        if (!isNaN(listaNumeros[i])){
            if ((listaNumeros[i] % 2 === 0) && (listaNumeros[i] > maiorPar)) {
                maiorPar = listaNumeros[i];
            }
            else if ((listaNumeros[i] % 2 === 1) && (listaNumeros[i] < menorImpar)) {
                menorImpar = listaNumeros[i];
            }
        }
        else {
            return 'Dados de entrada inválidos. Todos os devem ser números.'
        }
    }
    return `Maior número par: ${maiorPar}\nMenor número ímpar: ${menorImpar}`;
}

//Main

(function(){
    const {gets, print} = require('./funcoesAuxiliares');

    const entrada = [5, 3, 4, 1, 10, 8];

    let listaNumeros = [];
    for (let i = 1; i <= entrada.length; i++) {
        listaNumeros.push(gets(entrada))        
    }


    print(verificarMaiorNumeroParMenorNumeroImpar(listaNumeros))
})()