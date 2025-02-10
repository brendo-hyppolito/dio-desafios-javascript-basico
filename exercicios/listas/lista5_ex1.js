
const { gets, print } = require('./funcoesAuxiliares');

const entrada = [25, 550, 110, 9800, 211113];

//print(gets(entrada))

const numerosSorteados = [];
console.log(numerosSorteados);


//for (let j = 1; j <= 5; j++) {
 //   numerosSorteados.push(gets(entrada));
//}

let maiorValor = 0;

for (let i = 0; i < entrada.length; i++) {
    if (gets(entrada) >= maiorValor) {
        maiorValor = gets(entrada);
    };
}

print(maiorValor)