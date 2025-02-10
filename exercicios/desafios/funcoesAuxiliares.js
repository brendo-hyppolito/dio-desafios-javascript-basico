let i = 0;

function gets(entrada) {
        const valor = entrada[i];
    i++;
    return valor;
}


function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};