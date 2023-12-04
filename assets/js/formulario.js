
 function salvarInformacoes(event) {
    event.preventDefault();

    // Obter os valores do formulário
    
    var nome = document.getElementById("nome").value;
    var nomeUsuario = document.getElementById("nomeUsuario").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cargo = document.getElementById("cargo").value;

    // Salvar as informações no localStorage
    
    localStorage.setItem("nome", nome);
    localStorage.setItem("nomeUsuario", nomeUsuario);
    localStorage.setItem("dataNascimento", dataNascimento);
    localStorage.setItem("email", email);
    localStorage.setItem("telefone", telefone);
    localStorage.setItem("cargo", cargo);
    
     // Redirecionar para a próxima página
     window.location.href = "dashboard.html";
        }



        //Conecatando front com back

const formulario = document.querySelector(".form");
const botao = document.querySelector(".button");
const Xnome = document.querySelector(".Xnome");
const XnomeUsuario = document.querySelector(".XnomeUsuario");
const Xcpf = document.querySelector(".Xcpf");
const Xsenha = document.querySelector(".Xsenha");
const XconfirmeSuaSenha = document.querySelector(".XconfirmeSuaSenha");
const XdataDeNascimento = document.querySelector(".XdataDeNascimento");
const Xemail = document.querySelector(".Xemail");
const Xtelefone = document.querySelector(".Xtelefone");
const Xcargo = document.querySelector(".Xcargo");

function cadastrar (){
    fetch("http//localhost:8080/funcionarios",
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            Xnome: Xnome.value,
            XnomeUsuario: XnomeUsuario.value,
            Xcpf: cpf.value,
            Xsenha: senha.value,
            XconfirmeSuaSenha: confirmeSuaSenha.value,
            XdataDeNascimento: dataDeNascimento.value,
            Xemail: Xemail.value,
            Xtelefone: Xtelefone.value,
            Xcargo: Xcargo.value,
            
        })
    
    })
    .then (function (res) {console.log(res) })
    .catch (function (res) {console.log(res) })
}

function limpar() {
    Xnome.value ="",
    XnomeUsuario.value ="",
    Xcpf.value ="",
    Xsenha.value ="",
    XconfirmeSuaSenha.value ="",
    XdataDeNascimento.value ="",
    Xemail.value ="",
    Xtelefone.value ="",
    Xcargo.value =""
    

}


formulario.addEventListener("Submit"), function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
}