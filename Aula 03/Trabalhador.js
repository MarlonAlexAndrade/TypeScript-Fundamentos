export class Trabalhador {
    constructor(nome, idade, matricula) {
        this._nome = nome;
        this._idade = idade;
        this._matricula = matricula;
        this._salario = 1200;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(valor) {
        this._matricula = valor;
    }
    get salario() {
        return this._salario;
    }
    set salario(valor) {
        this._salario = valor;
    }
}
