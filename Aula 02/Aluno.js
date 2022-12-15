export class Aluno {
    constructor(nome, idade, notas) {
        this._nome = nome;
        this._idade = idade;
        this._notas = notas;
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
    get notas() {
        return this._notas;
    }
    set notas(valor) {
        this._notas = valor;
    }
    apresentar(quemPerguntou) {
        return `Olá ${quemPerguntou}, Meu nome é ${this.nome} tenho ${this.idade} anos`;
    }
    somarNotas() {
        let soma = 0;
        //Arrow function
        this.notas.forEach(nota => {
            soma = soma + nota;
        });
        //Mesma função 
        // return this.notas.reduce((total,atual)=> total+atual)
        return soma;
    }
    calcularMedia() {
        return this.somarNotas() / this._notas.length;
    }
}
