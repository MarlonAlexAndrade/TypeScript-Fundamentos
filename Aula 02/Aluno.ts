export class Aluno {
    //nome, idade,notas

    private _nome: string
    private _idade: number
    private _notas: Array<number>


    constructor(nome: string, idade: number, notas: Array<number>) {
        this._nome = nome
        this._idade = idade
        this._notas = notas
    }

    get nome(): string {
        return this._nome
    }

    set nome(valor: string) {
        this._nome = valor
    }

    get idade(): number {
        return this._idade
    }

    set idade(valor:number){
         this._idade = valor
    }

    get notas():Array<number>{
        return this._notas
    }

    set notas(valor:Array<number>){
        this._notas = valor
    }

    public apresentar(quemPerguntou:string):string{
        return `Olá ${quemPerguntou}, Meu nome é ${this.nome} tenho ${this.idade} anos`
    }

    private somarNotas():number{
        let soma:number = 0
        //Arrow function
        this.notas.forEach(nota=>{
            soma=soma+nota
        });
        //Mesma função 
        // return this.notas.reduce((total,atual)=> total+atual)
        return soma
    }


    public calcularMedia():number{
        return this.somarNotas()/this._notas.length
    }

}