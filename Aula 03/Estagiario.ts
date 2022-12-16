import { Trabalhador } from "./Trabalhador"

export class Estagiario extends Trabalhador {

    private _habilidades: Array<string>
    private _listaDeCagadas: Array<string>
 
    constructor(
        nome: string,
        idade: number,
        habilidades?: Array<string>,
        listaDeCagadas?: Array<string>

    ) {
        super(nome,idade)
        this._habilidades = habilidades
        this._listaDeCagadas = listaDeCagadas
    }
    //Todos os gets e sets
    //Que foram deletados são Herados do SUPER

    get habilidades(): Array<string> {
        return this._habilidades
    }

    set habilidades(valor: Array<string>) {
        this._habilidades = valor
    }

    get listaDeCagadas(): Array<string> {
        return this._listaDeCagadas
    }

    set listaDeCagadas(valor: Array<string>) {
        this._listaDeCagadas = valor
    }


    apresentar(): string {
        return ` Oi meu nome é ${this.nome} e tenho ${this.idade} anos`
    }

    listarHabilidades(): string {

        let frase = "Olha só o que eu já sei fazer"


        this.habilidades.forEach(habilidade => {
            frase  = `\n -  ${habilidade}`
        });

        return frase

    }


}