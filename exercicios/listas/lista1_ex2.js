let pesoKg = 102
let alturaM = 1.8

let imc = pesoKg / (Math.pow(alturaM,2));

if (0 <= imc && imc < 18.5){
    console.log(`${imc.toFixed(2)}: Abaixo do peso.`);
}

else if (18.5 <= imc && imc <= 25 ){
    console.log(`${imc.toFixed(2)}: Peso normal.`);
}

else if (25 <= imc && imc <= 30){
    console.log(`${imc.toFixed(2)}: Acima do peso.`);
}

else if (30 <= imc && imc <= 40){
    console.log(`${imc.toFixed(2)}: Obesidade.`);
}

else if (imc > 40){
    console.log(`${imc.toFixed(2)}: Obesidade grave.`);
}

else{
    console.log("Verifique os dados inseridos para peso (Kg) e altura (m) e tente novamente.");
}