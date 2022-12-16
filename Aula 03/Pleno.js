import { Trabalhador } from "./Trabalhador.js";
export class Pleno extends Trabalhador {
    constructor(nome, idade, juniors, camada) {
        super(nome, idade);
        this._juniors = juniors ? juniors : new Array;
        this._camada = camada;
    }
    get juniors() {
        return this._juniors;
    }
    set juniors(valor) {
        this._juniors = valor;
    }
    get camada() {
        return this._camada;
    }
    set camada(valor) {
        this._camada = valor;
    }
    apresentar(quemPerguntou) {
        return `E ai ${quemPerguntou}. Meu  ${this.nome} e tenho ${this.idade} - 
        prefiro a canada ${this.camada}
        `;
    }
    listarJuniores(quemPerguntou) {
        let frase = `Olá ${quemPerguntou} segue a lista de juniors que tenho para capacitar`;
        this.juniors.forEach(junior => {
            frase += `\n -${junior}`;
        });
        return frase;
    }
}
