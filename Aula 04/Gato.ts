import { Animal } from "./Animal.js";

export class Gato extends Animal {
    private _tamanho_do_bigode: number|string


    constructor(
        nome: string
        , raca: string
        , cor: string
        , idade: number
        , tamanho_do_bigode: number|string
    ) {
        super(nome, raca, cor, idade)
        this._tamanho_do_bigode =  tamanho_do_bigode
    }
    get tamano_do_bigode(): number|string{
        return this._tamanho_do_bigode
    }
    
    set tamanho_do_bigode(valor: number|string) {
        this._tamanho_do_bigode = valor
    }
    comunicar():string {
        return `Miando quando quer`
    }
    locomover():string {
        return `Quase sempre dormindo, quase nunca se locomovendo`
    }
    reproduzir():string {
        return `no telhado as 03:00 am`
    }
    alimentar():string {
        return `So sache caro, e ração premium`
    }
}