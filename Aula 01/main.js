let nome = "Marlon";
let idade = 33;
let altura = 1.8;
let ja_sei_ts = true;
console.log("Tipo da variavel nome", typeof (nome));
console.warn("Tipo da variavel nome", typeof (idade));
console.error(`Tipo de variavel altura ${typeof (altura)}`);
console.log(`%c Tipo de variavel ja_sei_ts ${typeof (ja_sei_ts)}`, `color:blue;`);
let nome_completo;
nome_completo = "Marlon Alex Andrade";
idade = 34;
let profissao;
profissao = "Vigilante";
//preferencia é um Array do tipo string vazio
let preferencias = [];
preferencias.push("JavaScript");
preferencias.push("TypeScritp");
preferencias.push("Python");
console.table(preferencias);
console.log(`Tipo de variavel prefencias ${typeof (preferencias)}`);
console.log(`Meu nome é ${nome_completo} trabalho como ${profissao} goste de ${preferencias.join()}`);
function exemplo() {
}
