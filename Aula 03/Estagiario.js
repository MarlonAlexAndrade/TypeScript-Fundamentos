import { Trabalhador } from "./Trabalhador";
export class Estagiario extends Trabalhador {
    constructor(nome, idade, habilidades, listaDeCagadas) {
        super(nome, idade);
        this._habilidades = habilidades;
        this._listaDeCagadas = listaDeCagadas;
    }
    //Todos os gets e sets
    //Que foram deletados são Herados do SUPER
    get habilidades() {
        return this._habilidades;
    }
    set habilidades(valor) {
        this._habilidades = valor;
    }
    get listaDeCagadas() {
        return this._listaDeCagadas;
    }
    set listaDeCagadas(valor) {
        this._listaDeCagadas = valor;
    }
    apresentar() {
        return ` Oi meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
    listarHabilidades() {
        let frase = "Olha só o que eu já sei fazer";
        this.habilidades.forEach(habilidade => {
            frase = `\n -  ${habilidade}`;
        });
        return frase;
    }
}
