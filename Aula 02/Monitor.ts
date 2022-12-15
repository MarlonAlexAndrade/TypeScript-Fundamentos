export class Monitor {

    //atributos
    resolucao: number
    marca: string
    preco: number
    tamanho: number | string
    cor: string
    status: boolean
    possuiAutoFalante: boolean
    nome: string

    //construtor
    constructor(nome: string, marca: string, preco: number) {
        this.marca = marca
        this.preco = preco
        this.nome = nome
    }

    //metodos


    //gets e sets


    //customizados

    ligar(): string {
        this.status = true
        return "Ligado"
    }

    desligar():string{
        this.status = false
        return "Desligado"
    }
}