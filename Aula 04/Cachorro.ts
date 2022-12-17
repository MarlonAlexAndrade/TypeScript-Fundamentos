import { Animal } from "./Animal.js";

export class Cachorro extends Animal {
    private _gosto_por_bola: boolean


    constructor(
        nome: string
        , raca: string
        , cor: string
        , idade: number
        , gosto_por_bola: boolean
    ) {
        super(nome, raca, cor, idade)
        this._gosto_por_bola =  gosto_por_bola
    }
    get gosto_por_bola(): boolean{
        return this._gosto_por_bola
    }
    
    set gosto_por_bola(valor: boolean) {
        this._gosto_por_bola = valor
    }
    comunicar():string {
        return `Late toda hora`
    }
    locomover():string {
        return `Corre pra todo lado, a toda hora`
    }
    reproduzir():string {
        return `Se reproduz igual coelho`
    }
    alimentar():string {
        return `Come qualquer coisa até sofá`
    }
}