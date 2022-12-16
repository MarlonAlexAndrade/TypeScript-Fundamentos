import { Trabalhador } from "./Trabalhador.js";
export class Senior extends Trabalhador {
    constructor(nome, idade, plenos, camadas) {
        super(nome, idade);
        this._plenos = plenos ? plenos : new Array;
        this._camadas = camadas ? camadas : new Array;
    }
    get plenos() {
        return this._plenos;
    }
    set plenos(valor) {
        this._plenos = valor;
    }
    get camadas() {
        return this._camadas;
    }
    set camadas(valor) {
        this._camadas = valor;
    }
}
