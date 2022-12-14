let nome: string = "Marlon"

let idade: number = 33

let altura: number = 1.8

let ja_sei_ts: boolean = true

console.log("Tipo da variavel nome", typeof (nome));

console.warn("Tipo da variavel nome", typeof (idade));

console.error(`Tipo de variavel altura ${typeof (altura)}`);

console.log(`%c Tipo de variavel ja_sei_ts ${typeof (ja_sei_ts)}`
    , `color:blue;`
);


let nome_completo: string

nome_completo = "Marlon Alex Andrade"

idade = 34

let profissao: string

profissao = "Vigilante"
//preferencia é um Array do tipo string vazio
let preferencias: Array<string> = []

preferencias.push("JavaScript")
preferencias.push("TypeScritp")
preferencias.push("Python")

console.table(preferencias);

console.log(`Tipo de variavel prefencias ${typeof (preferencias)}`);

console.log(`Meu nome é ${nome_completo} trabalho como ${profissao} goste de ${preferencias.join()}`);




function procedimento() {

}
// pode ser usado any
function retorna10(): number | string | boolean {

    return "10"
}

console.log(`A funcao retornou ${retorna10()}`);

let retorno = retorna10();

console.log(`A varivel retorno aproveito a funcao e resultou em ${retorno}`);

//Somar
function somar(numeroA: number, numeroB: number): number {
    return numeroA + numeroB
}

console.log(`Ao somar 5 com 6 deu ${somar(5, 6)}`);

//Subtrair
function subtrair(numeroA: number, numeroB: number): number {
    return numeroA - numeroB
}

console.log(`Ao subtrair 10 com 6 deu ${subtrair(10, 6)}`);

//Multiplicar
function multiplicar(numeroA: number, numeroB: number): number {
    return numeroA * numeroB
}

console.log(`Ao multiplicar 10 com 10 deu ${multiplicar(10, 10)}`);

//Divir
function divir(numeroA: number, numeroB: number): number {
    return numeroA / numeroB
}

console.log(`Ao divir 100 por 10 deu ${divir(100, 10)}`);

function ehPar(numero: number):boolean {
    
        return numero%2==0
    
    /* if (numero % 2 == 0) {
         return "Par"
    } else {
         return "Impar"
    } */
    //Mesma funcao
   // return (numero%2==0)?"Par":"Impar"
}

function salvarNoLocalStorage(valor:string,chave:string):void{
    localStorage.setItem(chave,valor)
}

function capturarValor(titulo:string):string{
    return prompt(`Informe o valor de ${titulo}`)
}

salvarNoLocalStorage(
    capturarValor("Chave do local storage"),
    capturarValor("Valor a ser salvo no local storage")
)