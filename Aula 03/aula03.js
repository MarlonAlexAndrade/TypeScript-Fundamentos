import { Estagiario } from "./Estagiario.js";
import { Junior } from "./Junior.js";
import { Pleno } from "./Pleno.js";
let juquinha;
console.log(juquinha);
juquinha = new Estagiario("Juquinha", 16);
console.log("Agora vai", juquinha);
console.log("Dados do juquiha", juquinha.nome, juquinha.idade, juquinha.habilidades, juquinha.listaDeCagadas);
juquinha.nome = "Juquinha da silva e silva";
juquinha.idade = 15;
juquinha.habilidades = ["Cafezinho sem acucar"];
juquinha.listaDeCagadas = ["Chamou o dono da empresa de Véi Burns"];
console.log("Dados do juquiha", juquinha.nome, juquinha.idade, juquinha.habilidades, juquinha.listaDeCagadas);
console.log("Juquinha solta a voz ai", juquinha.apresentar());
console.log("Juquinha conta ai tua historia", juquinha.listarHabilidades());
//------ junior
let fulano = new Junior("Mario", 22, "Superior Incompleto", ["Cuidar dos juninhos"]);
console.log(fulano);
let jose = new Junior("Zé", 25);
console.log(jose);
//------Pleno
let joao = new Pleno("João", 26, [fulano], "Backend");
console.log(joao);
joao.juniors.push(jose);
joao.juniors.push(new Junior("Novinho", 17));
console.log(joao);
