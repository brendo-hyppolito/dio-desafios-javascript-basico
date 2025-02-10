function verificarMaioridade(age){
    if (age >= 18) {
        return `Você tem ${age} anos, portanto já está na maioridade.`
    }
    else if (0 <= age && age < 18) {
        return `Você tem ${age} anos, portanto ainda não está na maioridade.`
    }
    else {
        return `Insira um valor válida para idade.`
    }
}


// Main
(function (){
    console.log(verificarMaioridade(20))
})()