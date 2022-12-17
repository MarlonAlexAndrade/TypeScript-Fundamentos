import { Animal } from "./Animal.js";

export class Pato extends Animal {
    private _distancia_maxima_percorrida: number


    constructor(
        nome: string
        , raca: string
        , cor: string
        , idade: number
        , distancia_maxima_percorrida: number
    ) {
        super(nome, raca, cor, idade)
        this._distancia_maxima_percorrida = distancia_maxima_percorrida
    }
    get distancia_maxima_percorrida(): number {
        return this._distancia_maxima_percorrida
    }

    set distancia_maxima_percorrida(valor: number) {
        this._distancia_maxima_percorrida = valor
    }
    comunicar(): string {
        return `${super.comunicar()} \n Quack`
    }
    locomover(): string {
        return `${super.locomover()} \n Voa, nada Corre`
    }
}