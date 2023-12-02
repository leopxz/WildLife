
         // Recuperar as informações do localStorage 
         
        var docIdentificacaoSalvo = localStorage.getItem("docIdentificacao");
        var datetimeLocalSalvo = localStorage.getItem("datetimeLocal");
        var responsavelEntregaSalvo= localStorage.getItem("responsavelEntrega");
        var tipoEntregaSalvo = localStorage.getItem("tipoEntrega");
        var nomeSalvo = localStorage.getItem("nome");
        var cientificoSalvo = localStorage.getItem("cientifico");
        var sexoSalvo = localStorage.getItem("sexo");
        var encontradoSalvo = localStorage.getItem("encontrado");
        var cativeiroSalvo = localStorage.getItem("cativeiro");
        var tempoCativeiroSalvo = localStorage.getItem("tempoCativeiro");
        var estadoSaudeSalvo = localStorage.getItem("estadoSaude");
        var entreguePorSalvo= localStorage.getItem("entreguePor");
        var recebidoPorSalvo= localStorage.getItem("recebidoPor");
     
        // Exibir as informações na página
         
        document.getElementById("spandocIdentificacao").innerText = docIdentificacaoSalvo;
        document.getElementById("spanDatetimeLocal").innerText = datetimeLocalSalvo;
        document.getElementById("spanresponsavelEntrega").innerText = responsavelEntregaSalvo;
        document.getElementById("spantipoEntrega").innerText = tipoEntregaSalvo;
        document.getElementById("spanNome").innerText = nomeSalvo;
        document.getElementById("spanCientifico").innerText = cientificoSalvo;
        document.getElementById("spanSexo").innerText = sexoSalvo;
        document.getElementById("spanEncontrado").innerText = encontradoSalvo;
        document.getElementById("spanCativeiro").innerText = cativeiroSalvo;
        document.getElementById("spanTempoCativeiro").innerText = tempoCativeiroSalvo;
        document.getElementById("spanEstadoSaude").innerText = estadoSaudeSalvo;
        document.getElementById("spanEntreguePor").innerText = entreguePorSalvo;
        document.getElementById("spanRecebidoPor").innerText = recebidoPorSalvo;
              
       
         // Recuperar a imagem do localStorage
    var animalPhoto = localStorage.getItem("animalPhoto");

// Exibir a imagem na página
if (animalPhoto) {
    var img = document.createElement("img");
    img.src = animalPhoto;
    img.style.maxWidth = "50%"; // Ajuste o tamanho conforme necessário
    img.style.borderRadius = "50px";
    document.getElementById("photoContainer").appendChild(img);
    
    

}

        // função para baixar a pagina em formato de PDF.
         
        var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};


function gerarPDF() {
        // Esconda os botões ao gerar o PDF
        var buttons = document.querySelectorAll('.hide-on-pdf');
        buttons.forEach(function(button) {
            button.style.display = 'none';
        });

        var element = document.getElementById("main");

        // Adicione uma classe temporária para os estilos do PDF
        element.classList.add("pdf-style");

        html2pdf(element).then(function (pdf) {
            // Remova a classe original após o download do PDF
            element.classList.remove("pdf-style");

            // Restaure a visibilidade dos botões após a geração do PDF
            buttons.forEach(function(button) {
                button.style.display = 'block';
            });

            var a = document.createElement("a");
            a.href = pdf.output('bloburl');
            a.download = 'exemplo-pdf.pdf';
            a.click();
        });
    }
   