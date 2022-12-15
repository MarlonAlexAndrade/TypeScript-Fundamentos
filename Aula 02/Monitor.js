export class Monitor {
    //construtor
    constructor(nome, marca, preco) {
        this.marca = marca;
        this.preco = preco;
        this.nome = nome;
    }
    //metodos
    //gets e sets
    //customizados
    ligar() {
        this.status = true;
        return "Ligado";
    }
    desligar() {
        this.status = false;
        return "Desligado";
    }
}
