function salvarInformacoes(event) {
    // Evita o envio do formulário padrão
            event.preventDefault();

    // Exibe a mensagem de sucesso
           document.getElementById("successMessage").style.display = "block";
  }

  //Conectando Front com Back

const formulario = document.querySelector(".form");
const botao = document.querySelector(".button");
const nome = document.querySelector(".nome");
const telefone = document.querySelector(".telefone");
const nomeDoAnimal = document.querySelector(".nomeDoAnimal");
const cidade = document.querySelector(".cidade");
const uf = document.querySelector(".uf");
const bairro = document.querySelector(".bairro");
const LocalQueOAnimalSeEncontra = document.querySelector(".LocalQueOAnimalSeEncontra");
const dataDoChamado = document.querySelector(".dataDoChamado");
const ObservacoesSobreOAnimal = document.querySelector(".ObservacoesSobreOAnimal");

function cadastrar (){
    fetch("http//localhost:8080/chamados",
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: nome.value,
            telefone: telefone.value,
            nomeDoAnimal: nomeDoAnimal.value,
            cidade: cidade.value,
            uf: uf.value,
            bairro: bairro.value,
            LocalQueOAnimalSeEncontra: LocalQueOAnimalSeEncontra.value,
            dataDoChamado: dataDoChamado.value,
            ObservacoesSobreOAnimal: ObservacoesSobreOAnimal.value
            
        })
    
    })
    .then (function (res) {console.log(res) })
    .catch (function (res) {console.log(res) })
}

function limpar() {
    nome.value ="",
    telefone.value ="",
    especie.value ="",
    cidade.value ="",
    uf.value ="",
    bairro.value ="",
    LocalQueOAnimalSeEncontra.value ="",
    dataDoChamado.value ="",
    ObservacoesSobreOAnimal.value =""
    

}


chamados.addEventListener("Submit"), function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
};