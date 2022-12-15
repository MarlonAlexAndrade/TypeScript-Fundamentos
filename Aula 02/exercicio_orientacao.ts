//Criar 3 professores 
//Exibir os dados de cada 1
//Consumir os metodos de cada 1

import { Professor } from "./Professor.js"

let oliota:Professor= new Professor("Rubem","TypeScript",["Tipagem","Orientação a objetos","Herança"])
console.log(oliota);

console.log(oliota.nome);
console.log(oliota.disciplina);
console.log(oliota.assuntos);
console.log(oliota.apresentar("Aula Acabando"));
console.log(oliota.blablabla());




