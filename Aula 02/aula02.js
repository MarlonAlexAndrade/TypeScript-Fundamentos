import { Aluno } from "./Aluno.js";
import { Monitor } from "./Monitor.js";
$("#botao01").on("click", function () {
    alert("Funcionou");
});
//$ jquery
//("") consulta seletor, #id. .class
//.on("tipo_acao", function anonima)
$("#botao02").on("click", function () {
    $("<p>", { text: "Clicou", style: "color:red", title: "foi gerado" }).appendTo("body");
});
//abstracao de um monitor
//atributos
//resolução:number
//marca:string
//preço:number
//tamanho:number|string
//cor:string
//status:boolean
//possuiAutoFalante :boolean
//Metodos
//ligar :void
//desigar :void
//podeExecutarAudio :boolean
//aumentarBrilho :number
//diminuirBrilho :number
let monitor1;
let monitor2;
let monitor3;
monitor1 = new Monitor("MS", "Samsung", 4000);
monitor2 = new Monitor("Morrodia", "KuXaiSang", 300);
console.log("monitor1", monitor1);
console.log("monitor2", monitor2);
console.log("monitor3", monitor3);
console.log("atributos individualmente", monitor1.nome);
console.log("atributos individualmente", monitor1.marca);
console.log("atributos individualmente", monitor1.preco);
monitor1.cor = "#ff00ff";
console.log("atributos individualmente", monitor1.cor);
monitor1.ligar();
console.log("Status do monitor1 ao tentar Ligar", monitor1.ligar());
console.log("Status do monitor1 ao tentar Desligar", monitor1.desligar());
let alunoZe = new Aluno("Ze", 45, [7, 9, 10]);
console.log("Aluno zé", alunoZe);
console.log("Individualmente cada atributo", alunoZe.nome);
alunoZe.nome = "Zezinho";
console.log("Aluno idade", alunoZe.idade);
console.log("Aluno notas", alunoZe.notas);
console.log("Como o Zé se apresenta ", alunoZe.apresentar("Professor"));
console.log("Qual será a media do zé", alunoZe.calcularMedia());
//Criar um objeto do tipo aluno - qe seja sobre voce
//exemplo let alunoEu -----> com seus daos
//depois exibir esses dados em log
//depois alterar esses dadis
//depois consumir os metodos apresentar e calcular media
let alunoEu; //Undefned
alunoEu = new Aluno("Marlon", 25, [7, 9, 7]); //Object Aluno
console.log("Aluno Marlon", alunoEu);
console.log(alunoEu.nome); //Individualmente cada atributo
console.log(alunoEu.idade); //Individualmente cada atributo
console.log(alunoEu.notas); //Individualmente cada atributo
alunoEu.nome = "Marlon Andrade";
alunoEu.idade = 26;
alunoEu.notas = [10, 9, 10];
console.log(alunoEu.nome); //Individualmente cada atributo
console.log(alunoEu.idade); //Individualmente cada atributo
console.log(alunoEu.notas); //Individualmente cada atributo
console.log(alunoEu.apresentar("Exercicio"));
console.log("Media do aluno", alunoEu.calcularMedia());
