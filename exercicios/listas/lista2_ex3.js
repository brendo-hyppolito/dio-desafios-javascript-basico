
function calcularPrecoFinal(precoNormal, descontoOuAcrescimo){
        return precoNormal - (precoNormal * (descontoOuAcrescimo / 100));
}

function identificarTipoPagameto(modoPagamento, precoNormal){
    if (modoPagamento.toLowerCase() === "débito"){
        return `No ${modoPagamento}, o produto sairá por R$${(calcularPrecoFinal(precoNormal, 10)).toFixed(2)}.`;
    }
    
    else if (modoPagamento.toLowerCase() === "dinheiro" || modoPagamento.toLowerCase() === "pix"){
        return `No ${modoPagamento}, o produto sairá por R$${(calcularPrecoFinal(precoNormal, 15)).toFixed(2)}.`;
    }
    
    else if (modoPagamento.toLowerCase() === "em duas vezes"){
        return `No crédito, ${modoPagamento}, o produto sairá por R$${(calcularPrecoFinal(precoNormal,0)).toFixed(2)}.`;
    }
    
    else if (modoPagamento.toLowerCase() === "acima de duas vezes"){
        return `No crédito, ${modoPagamento}, o produto sairá por R$${(calcularPrecoFinal(precoNormal, -10)).toFixed(2)}.`;
    }
    
    else{
        return "Os métodos de pagamento válidos são: 1. débito, 2. dinheiro, 3. Pix, 4. em duas vezes e 5. acima de duas vezes. Tente novamente.";
    }
}

//Main
(function main(){
    let precoNormal = 100;
    let modoPagamento = "acima de duas vezes";

    console.log(identificarTipoPagameto(modoPagamento, precoNormal));
})()




