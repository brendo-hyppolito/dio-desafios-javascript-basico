

function calcularSalario(salarioBruto, adicionais) {
    let impostoSalario = null;
    if (0 <= salarioBruto && salarioBruto <= 1100) {
        impostoSalario = salarioBruto * 0.05;
    }

    else if (1100 < salarioBruto && salarioBruto <= 2500) {
        impostoSalario = salarioBruto * 0.1;
    }

    else if (salarioBruto > 2500) {
        impostoSalario = salarioBruto * 0.15;        
    }

    else {
        impostoSalario = 'Valor inserido para salário bruto inválido.';
    }

    let salario = salarioBruto - impostoSalario + adicionais;
    return `R$${salario}.`
}


//Main
(function(){
    const {gets, print} = require('./funcoesAuxiliares');

    const entrada = [5000, 0];

   

    print(calcularSalario(gets(entrada),(gets(entrada))));
})()