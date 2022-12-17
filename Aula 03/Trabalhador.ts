export class Trabalhador {
    private _nome: string
    private _idade: number
    private _matricula:number
    private _salario:number

    constructor(
        nome: string
        , idade: number
        , matricula?:number

    ) {
        this._nome = nome
        this._idade = idade
        this._matricula = matricula
        this._salario = 1200

    }
    get nome(): string {
        return this._nome
    }

    set nome(valor: string) {
        this._nome = valor
    }


    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        this._idade = valor
    }

    get matricula(): number {
        return this._matricula
    }

    set matricula(valor: number) {
        this._matricula = valor
    }

    get salario(): number {
        return this._salario
    }

    set salario(valor: number) {
        this._salario = valor
    }

    
}