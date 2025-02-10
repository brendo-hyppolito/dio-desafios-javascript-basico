let nota1 = 6;
let nota2 = 9;
let nota3 = 8;

let notaMedia = (nota1 + nota2 + nota3) / 3;

if (0 <= notaMedia && notaMedia < 5){
    console.log(`A média das notas do aluno foi ${notaMedia.toFixed(1)} e, portanto, ele está reprovado.`);
}

else if (5 <= notaMedia && notaMedia <7){
    console.log(`A média das notas do aluno foi ${notaMedia.toFixed(1)} e, portanto, ele está de recuperação.`);
}

else if (notaMedia >= 7){
    console.log(`A média das notas do aluno foi ${notaMedia.toFixed(1)} e, portanto, ele está aprovado.`);
}

else{
    console.log("Verifique as notas inseridas e tente novamente.")
}