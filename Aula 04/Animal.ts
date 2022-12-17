
export class Animal{
private _nome: string
private _raca: string
private _cor: string
private _idade: number


constructor(
    nome: string
    , raca: string
    , cor: string
    , idade: number
) {
    this._nome = nome
    this._idade = idade
    this._raca = raca
    this._cor = cor
}


get nome(): string {
    return this._nome
}

set nome(valor: string) {
    this._nome = valor
}

get raca(): string {
    return this._raca
}
set raca(valor: string) {
    this._raca = valor
}

get cor(): string {
    return this._cor
}
set cor(valor: string) {
    this._cor = valor
}

get idade(): number {
    return this._idade
}
set idade(valor: number) {
    this._idade = valor
}

comunicar():string {
    return `Padrão de comunicação fazer um barulho`
}
locomover():string {
    return `Padrão de locomover para sair do lugar`
}
reproduzir():string {
    return `Compartilhar os gametas perpetuar a especie`
}
alimentar():string {
    return `Realizar a alimentação`
}
}

