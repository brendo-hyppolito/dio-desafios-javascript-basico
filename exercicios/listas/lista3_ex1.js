
class carros {
    marca;
    cor;
    litroKm;

    constructor (marca, cor, litroKm) {
        this.marca = marca;
        this.cor = cor;
        this.litroKm = litroKm;
    }

    calcularGastoCombustivel(precoCombustivel, distanciaViagem) {
        return `Com o carro ${this.cor} da marca ${this.marca} a viagem saírá por R$${((distanciaViagem * precoCombustivel) * this.litroKm).toFixed(2)}.`;
    }
}

//Main
(function () {
    const agile = new carros('Chevrolet', 'preto', 1/12);
    const uno = new carros('Fiat', 'vermelho', 1/14);

    console.log(agile)
    console.log(uno)

    console.log(uno.calcularGastoCombustivel(300, 4.5))
})();
