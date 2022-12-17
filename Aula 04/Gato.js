import { Animal } from "./Animal.js";
export class Gato extends Animal {
    constructor(nome, raca, cor, idade, tamanho_do_bigode) {
        super(nome, raca, cor, idade);
        this._tamanho_do_bigode = tamanho_do_bigode;
    }
    get tamano_do_bigode() {
        return this._tamanho_do_bigode;
    }
    set tamanho_do_bigode(valor) {
        this._tamanho_do_bigode = valor;
    }
    comunicar() {
        return `Miando quando quer`;
    }
    locomover() {
        return `Quase sempre dormindo, quase nunca se locomovendo`;
    }
    reproduzir() {
        return `no telhado as 03:00 am`;
    }
    alimentar() {
        return `So sache caro, e ração premium`;
    }
}
