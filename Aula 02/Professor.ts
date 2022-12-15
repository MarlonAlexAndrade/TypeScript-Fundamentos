//professor
//nome
//disciplina
//Lista de assuntos

//Se apresenta
//faz um bla bla sobre os assuntos que ele ensinar

export class Professor {

    private _nome: string
    private _disciplina: string
    private _assuntos: Array<string>

    constructor(nome: string
        ,disciplina: string
        ,assuntos: Array<string>) {
        this._nome = nome
        this._disciplina = disciplina
        this._assuntos = assuntos
    }

    get nome(): string {
        return this.nome
    }

    set nome(valor: string) {
        this._nome = valor
    }

    get disciplina(): string {
        return this.disciplina
    }

    set disciplina(valor: string) {
        this._disciplina = valor
    }
    get assuntos(): Array<string> {
        return this.assuntos

    }
    set assuntos(valor: Array<string>) {
        this._assuntos = valor
    }

    public apresentar(quemQuerSaber:string):string{
        return `Olá ${quemQuerSaber},só digo o meu nome mesmo, ${this.nome}`
    }

  blablabla():string{
    let frase=""
    this.assuntos.forEach(assunto=>{
        frase+=`Eu sei falar sobre${assunto} e vou ensnar nesse modulo${this.disciplina}`
    })
    return frase
  }

}