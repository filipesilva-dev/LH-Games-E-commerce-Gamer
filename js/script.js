//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("scroll", function () {
    var botao = document.getElementById("voltar-topo");
    if (window.scrollY > 200) {
        botao.style.display = "block";
    } else {
        botao.style.display = "none";
    }
});


//Validação de Login
function login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Login realizado com sucesso!");
}


//Ativar alert no botão cadastrar
function cadastro() {
    var usuario = document.getElementById("usuario2").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha2").value;

    if (usuario === "" || email === "" || senha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
}
