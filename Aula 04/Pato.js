import { Animal } from "./Animal.js";
export class Pato extends Animal {
    constructor(nome, raca, cor, idade, distancia_maxima_percorrida) {
        super(nome, raca, cor, idade);
        this._distancia_maxima_percorrida = distancia_maxima_percorrida;
    }
    get distancia_maxima_percorrida() {
        return this._distancia_maxima_percorrida;
    }
    set distancia_maxima_percorrida(valor) {
        this._distancia_maxima_percorrida = valor;
    }
    comunicar() {
        return `${super.comunicar()} \n Quack`;
    }
    locomover() {
        return `${super.locomover()} \n Voa, nada Corre`;
    }
}
