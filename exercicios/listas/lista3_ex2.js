
class pessoas {
    nome;
    peso;
    altura;
    imc;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = peso / (Math.pow(altura,2));
    }

    descreverPessoas() {
        return `Meu nome é José e meu IMC é ${this.imc.toFixed(2)}.`;
    }

    classificarImc(){
        if (0 <= this.imc && this.imc < 18.5){
            return `Meu nome é ${this.nome} e estou abaixo do peso.`;
        }
        
        else if (18.5 <= this.imc && this.imc <= 25 ){
            return `Meu nome é ${this.nome} e estou no peso ideal.`;        }
        
        else if (25 <= this.imc && this.imc <= 30){
            return `Meu nome é ${this.nome} e estou acima do peso.`;
        }
        
        else if (30 <= this.imc && this.imc <= 40){
            return `Meu nome é ${this.nome} e com obesidade.`;
        }
        
        else if (this.imc > 40){
            return `Meu nome é ${this.nome} e com obesidade grave.`;
        }
        
        else{
            console.log("Verifique os dados inseridos para peso (Kg) e altura (m) e tente novamente.");
        }
    }
}

//Main

(function(){
    const jose = new pessoas('Jose', 90, 1.75);

    console.log(jose)
    console.log(jose.descreverPessoas())
    console.log(jose.classificarImc())

})()