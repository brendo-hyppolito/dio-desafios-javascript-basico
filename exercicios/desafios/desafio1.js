


function classificarMedia (media) {
    if (0 <= media && media < 5) {
        return 'Reprovado';
    }
    else if (5 <= media && media < 7) {
        return 'Recuperação';
    }
    else if (media >= 7) {
        return 'Aprovado';
    }
    else {
        return 'Insira uma média válida';
    }
}

//Main

(function(){
    const {gets, print} = require('./funcoesAuxiliares');

    const entrada = ['aaa'];

    print((classificarMedia(gets(entrada)) + "."));
})()