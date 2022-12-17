export class Animal {
    constructor(nome, raca, cor, idade) {
        this._nome = nome;
        this._idade = idade;
        this._raca = raca;
        this._cor = cor;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get raca() {
        return this._raca;
    }
    set raca(valor) {
        this._raca = valor;
    }
    get cor() {
        return this._cor;
    }
    set cor(valor) {
        this._cor = valor;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
    comunicar() {
        return `Padrão de comunicação fazer um barulho`;
    }
    locomover() {
        return `Padrão de locomover para sair do lugar`;
    }
    reproduzir() {
        return `Compartilhar os gametas perpetuar a especie`;
    }
    alimentar() {
        return `Realizar a alimentação`;
    }
}
