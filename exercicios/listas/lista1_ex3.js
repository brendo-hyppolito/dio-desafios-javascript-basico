let preçoNormal = 100;
let modoPagamento = "Pix";
let preçoPagamento;

if (modoPagamento.toLowerCase() === "débito"){
    preçoPagamento = preçoNormal - (0.1*preçoNormal)
    console.log(`No débito, o produto sairá por R$${preçoPagamento.toFixed(2)}.`)
}

else if (modoPagamento.toLowerCase() === "dinheiro" || modoPagamento.toLowerCase() === "pix"){
    preçoPagamento = preçoNormal - (0.15*preçoNormal)
    console.log(`No ${modoPagamento}, o produto sairá por R$${preçoPagamento.toFixed(2)}.`)
}

else if (modoPagamento.toLowerCase() === "em duas vezes"){
    preçoPagamento = preçoNormal
    console.log(`Em duas vezes no crédito, o produto sairá por R$${preçoPagamento.toFixed(2)}.`)
}

else if (modoPagamento.toLowerCase() === "acima de duas vezes"){
    preçoPagamento = preçoNormal + (0.1*preçoNormal)
    console.log(`Acima de duas vezes no crédito, o produto sairá por R$${preçoPagamento.toFixed(2)}.`)
}

else{
    console.log("Os métodos de pagamento válidos são: 1. débito, 2. dinheiro, 3. Pix, 4. em duas vezes e 5. acima de duas vezes. Tente novamente.")
}