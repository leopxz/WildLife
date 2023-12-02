
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