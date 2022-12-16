import { Trabalhador } from "./Trabalhador"

export class Junior extends Trabalhador {

    private _nivelEscolaridade: string
    private _responsabilidade: Array<string>

    constructor(
        nome: string
    ,idade: number
    ,nivelEscolaridade?: string
    ,responsabilidade?: Array<string>

    ) {
        super(nome,idade)
        this._nivelEscolaridade = nivelEscolaridade
        this._responsabilidade = responsabilidade
    }

    get nivelEscolaridade(): string {
        return this._nivelEscolaridade
    }

    set nivelEscolaridade(valor: string) {
        this._nivelEscolaridade = valor
    }

    get responsabilidades(): Array<string> {
        return this._responsabilidade
    }
    set responsabilidade(valor: Array<string>) {
        this._responsabilidade = valor
    }

    apresentar(quemPerguntou: string): string {
        return `Olá prezado(a) ${quemPerguntou}. Me chamo ${this.nome} e tenho ${this.idade} - nivel escolaridade ${this.nivelEscolaridade}`
    }

    listarResponsabilidades(quemPerguntou: string): string {
        let frase = `Olá  ${quemPerguntou}, segue a lista de atividades que sou responsavel por manter`

        this.responsabilidades.forEach(responsabilidade => {
            frase += `\n -${responsabilidade}`
        });
        return frase
    }
}
