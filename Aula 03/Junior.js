import { Trabalhador } from "./Trabalhador";
export class Junior extends Trabalhador {
    constructor(nome, idade, nivelEscolaridade, responsabilidade) {
        super(nome, idade);
        this._nivelEscolaridade = nivelEscolaridade;
        this._responsabilidade = responsabilidade;
    }
    get nivelEscolaridade() {
        return this._nivelEscolaridade;
    }
    set nivelEscolaridade(valor) {
        this._nivelEscolaridade = valor;
    }
    get responsabilidades() {
        return this._responsabilidade;
    }
    set responsabilidade(valor) {
        this._responsabilidade = valor;
    }
    apresentar(quemPerguntou) {
        return `Olá prezado(a) ${quemPerguntou}. Me chamo ${this.nome} e tenho ${this.idade} - nivel escolaridade ${this.nivelEscolaridade}`;
    }
    listarResponsabilidades(quemPerguntou) {
        let frase = `Olá  ${quemPerguntou}, segue a lista de atividades que sou responsavel por manter`;
        this.responsabilidades.forEach(responsabilidade => {
            frase += `\n -${responsabilidade}`;
        });
        return frase;
    }
}
