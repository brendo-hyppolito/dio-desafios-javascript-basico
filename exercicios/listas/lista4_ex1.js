
function retornarTabuada(numero) {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        tabuada.push(numero * (i));
    }  
    return tabuada;
}

function dizerTabuada(numero) {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        console.log(numero * (i));
    }  
}

(function(){
    console.log(retornarTabuada(7));

    dizerTabuada(7);
})()


