import { Estagiario } from "./Estagiario.js";

let estagiarios: Array<Estagiario>= new Array<Estagiario>

$("#editar").hide()

$("#limpar").on("click",function({

}))

$("#adicionar").on("click",function(){
    let nome:string =String($("#nome").val()) 
    let idade:number = Number($("#idade").val())

    estagiarios.push(new Estagiario(nome,idade))

    escreverTabela()
})

function escreverTabela() {
    $("tbody").empty()
    
    estagiarios.forEach(estagiario =>{
        $("<tr>").append(
            $("<td>",{text:estagiario.nome})
            $("<td>",{text:estagiario.idade})
        ).appendTo("tbody");
    })
}
