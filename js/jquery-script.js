//efeito de esconder formulário de cadastro
$(document).ready(function () {

    $("#form-cadastrar").hide();

    $("#botao-cadastrar button").click(function () {
        $("#form-cadastrar").slideToggle();
    });

});
