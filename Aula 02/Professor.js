//professor
//nome
//disciplina
//Lista de assuntos
//Se apresenta
//faz um bla bla sobre os assuntos que ele ensinar
export class Professor {
    constructor(nome, disciplina, assuntos) {
        this._nome = nome;
        this._disciplina = disciplina;
        this._assuntos = assuntos;
    }
    get nome() {
        return this.nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get disciplina() {
        return this.disciplina;
    }
    set disciplina(valor) {
        this._disciplina = valor;
    }
    get assuntos() {
        return this.assuntos;
    }
    set assuntos(valor) {
        this._assuntos = valor;
    }
    apresentar(quemQuerSaber) {
        return `Olá ${quemQuerSaber},só digo o meu nome mesmo, ${this.nome}`;
    }
    blablabla() {
        let frase = "";
        this.assuntos.forEach(assunto => {
            frase += `Eu sei falar sobre${assunto} e vou ensnar nesse modulo${this.disciplina}`;
        });
        return frase;
    }
}
