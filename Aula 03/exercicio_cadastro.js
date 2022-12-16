import { Estagiario } from "./Estagiario.js";
let estagiarios = new Array;
$("#editar").hide();
$("#limpar").on("click", function ({}) { });
$("#adicionar").on("click", function () {
    let nome = String($("#nome").val());
    let idade = Number($("#idade").val());
    estagiarios.push(new Estagiario(nome, idade));
    escreverTabela();
});
function escreverTabela() {
    $("tbody").empty();
    estagiarios.forEach(estagiario => {
        $("<tr>").append($("<td>", { text: estagiario.nome }), $("<td>", { text: estagiario.idade })).appendTo("tbody");
    });
}
