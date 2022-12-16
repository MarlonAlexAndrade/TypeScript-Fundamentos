import { Pleno } from "./Pleno.js";
import { Trabalhador } from "./Trabalhador.js";

export class Senior extends Trabalhador{
    
    private _plenos: Array<Pleno>
    private _camadas: Array<string>

    constructor(
        nome: string
        ,idade: number
        ,plenos?: Array<Pleno>
        ,camadas?: Array<string>
    ){
        super(nome,idade)
        this._plenos = plenos? plenos: new Array<Pleno>
        this._camadas = camadas? camadas: new Array<string>
    }

    get plenos():Array<Pleno>{
        return this._plenos
    }

    set plenos(valor:Array<Pleno>){
        this._plenos = valor
    }

    get camadas():Array<string>{
        return this._camadas
    }

    set camadas(valor:Array<string>){
        this._camadas = valor
    }
}

