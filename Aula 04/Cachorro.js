import { Animal } from "./Animal.js";
export class Cachorro extends Animal {
    constructor(nome, raca, cor, idade, gosto_por_bola) {
        super(nome, raca, cor, idade);
        this._gosto_por_bola = gosto_por_bola;
    }
    get gosto_por_bola() {
        return this._gosto_por_bola;
    }
    set gosto_por_bola(valor) {
        this._gosto_por_bola = valor;
    }
    comunicar() {
        return `Late toda hora`;
    }
    locomover() {
        return `Corre pra todo lado, a toda hora`;
    }
    reproduzir() {
        return `Se reproduz igual coelho`;
    }
    alimentar() {
        return `Come qualquer coisa até sofá`;
    }
}
