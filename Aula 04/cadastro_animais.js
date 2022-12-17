import { Animal } from "./Animal.js";
let animais = [];
$("#editar").hide();
$("#limpar").on("click", function () {
    $("input").val("");
    $("#edit").hide("");
    $("#add").val("");
});
$("#add").on("click", function () {
    let nome = String($("#nome").val());
    let raca = String($("#raca").val());
    let cor = String($("#cor").val());
    let idade = Number($("#idade").val());
    let especifico = String($("#especifico").val());
    let animal = new Animal(nome, raca, cor, idade);
    animais.push(animal);
    $("#limpar").trigger("click");
    escreverTabela();
});
$("#editar").on("click", function () {
    let nome = String($("#nome").val());
    let raca = String($("#raca").val());
    let cor = String($("#cor").val());
    let idade = Number($("#idade").val());
    let especifico = String($("#especifico").val());
    let especifico = String(especifico).valueOf();
    animais.push(animal);
    $("#limpar").trigger("click");
    escreverTabela();
});
function escreverTabela() {
    $("tbody").empty();
    animais.forEach(animal => $("<tr>").append($("<td>", { text: animal.nome }), $("<td>", { text: animal.raca }), $("<td>", { text: animal.cor }), $("<td>", { text: animal.idade }), $("<td>"), $("<td>").append($("<button>", {
        class: "btn btn-danger", text: "deletar", click: function () {
            let posicao = animais.indexOf(animal);
            animais.splice(posicao, 1);
            escreverTabela();
        }
    }), $("<button>", {
        class: "btn btn-success", text: "Editar", click: function () {
            $("#add").hide();
            $("#edit").show();
            $("#nome").val(animal.nome);
            $("#raca").val(animal.raca);
            $("#cor").val(animal.cor);
            $("#idade").val();
            $("#especifico").val();
        }
    }))).appendTo("tbody"));
}
