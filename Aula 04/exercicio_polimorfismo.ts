import { Animal } from "./Animal.js";
import { Cachorro } from "./Cachorro.js";
import { Gato } from "./Gato.js";
import { Pato } from "./Pato.js";

let animalQualquer:Animal= new Animal("Bixo","drozofila melanogsta", "preto", 1)

console.log("Quem é esse animal?", animalQualquer);

console.log("Atributos",animalQualquer.nome);
console.log("Atributos",animalQualquer.raca);
console.log("Atributos",animalQualquer.cor);
console.log("Atributos",animalQualquer.idade);

console.log("Como o animal se comunica?", animalQualquer.comunicar());
console.log("Como o animal se comunica?", animalQualquer.locomover());
console.log("Como o animal se comunica?", animalQualquer.reproduzir());
console.log("Como o animal se comunica?", animalQualquer.alimentar());

let vezu:Gato=new Gato("Vézu","amor bandido","branco",3,"6cm")

console.log("Quem é esse animal?", vezu);


console.log("Atributos",vezu.nome);
console.log("Atributos",vezu.raca);
console.log("Atributos",vezu.cor);
console.log("Atributos",vezu.idade);
console.log("Atributos",vezu.tamanho_do_bigode);

console.log("Como o animal se comunica?", vezu.comunicar());
console.log("Como o animal se comunica?", vezu.locomover());
console.log("Como o animal se comunica?", vezu.reproduzir());
console.log("Como o animal se comunica?", vezu.alimentar());

let toto:Cachorro= new Cachorro("Totó","Caramelo","caramelho",8,true)

console.log("Quem é esse animal?", toto);

console.log("Atributos",toto.nome);
console.log("Atributos",toto.raca);
console.log("Atributos",toto.cor);
console.log("Atributos",toto.idade);
console.log("Atributos",toto.gosto_por_bola?"Sim":"Não");

console.log("Como o animal se comunica?", toto.comunicar());
console.log("Como o animal se comunica?", toto.locomover());
console.log("Como o animal se comunica?", toto.reproduzir());
console.log("Como o animal se comunica?", toto.alimentar());

let patolino:Pato= new Pato("Totó","Caramelo","caramelho",4,100)

console.log("Quem é esse animal?", patolino);

console.log("Atributos",patolino.nome);
console.log("Atributos",patolino.raca);
console.log("Atributos",patolino.cor);
console.log("Atributos",patolino.idade);
console.log("Atributos",patolino.distancia_maxima_percorrida);

console.log("Como o animal se comunica?", patolino.comunicar());
console.log("Como o animal se comunica?", patolino.locomover());
console.log("Como o animal se comunica?", patolino.reproduzir());
console.log("Como o animal se comunica?", patolino.alimentar());







