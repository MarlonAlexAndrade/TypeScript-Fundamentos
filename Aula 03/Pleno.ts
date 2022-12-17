import { Junior } from "./Junior.js";
import { Trabalhador } from "./Trabalhador.js";

export class Pleno extends Trabalhador {
    
    private _juniors: Array<Junior>
    private _camada: string


    constructor(
        nome: string
        , idade: number
        , juniors: Array<Junior>
        , camada: string
    ) {
        super(nome,idade)
        this._juniors = juniors? juniors: new Array<Junior>
        this._camada = camada
    }


    get juniors(): Array<Junior> {
        return this._juniors
    }

    set juniors(valor: Array<Junior>) {
        this._juniors = valor
    }

    get camada(): string {
        return this._camada
    }
    set camada(valor: string) {
        this._camada = valor
    }

    apresentar(quemPerguntou: string): string {
        return `E ai ${quemPerguntou}. Meu  ${this.nome} e tenho ${this.idade} - 
        prefiro a canada ${this.camada}
        `
    }

    listarJuniores(quemPerguntou: string): string {
        let frase = `Olá ${quemPerguntou} segue a lista de juniors que tenho para capacitar`

        this.juniors.forEach(junior =>{
            frase += `\n -${junior}`
        });
        return frase
    }

    mentirSalario(): string{
        return `Com a `
    }
}