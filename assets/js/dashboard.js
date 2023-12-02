               
// Recuperar as informações do localStorage 

var nomeSalvo = localStorage.getItem("nome");
var nomeUsuarioSalvo = localStorage.getItem("nomeUsuario");
var dataNascimentoSalvo= localStorage.getItem("dataNascimento");
var emailSalvo = localStorage.getItem("email");
var telefoneSalvo = localStorage.getItem("telefone");
var cargoSalvo = localStorage.getItem("cargo");

// Exibir as informações na página

document.getElementById("spannome").innerText = nomeSalvo;
document.getElementById("spannomeUsuario").innerText = nomeUsuarioSalvo;
document.getElementById("spandataNascimento").innerText = dataNascimentoSalvo;
document.getElementById("spanemail").innerText = emailSalvo;
document.getElementById("spantelefone").innerText = telefoneSalvo;
document.getElementById("spancargo").innerText = cargoSalvo;
          
//Escolher a imagem a partir da galeria

            function selectImage() {
                 const inputFile = document.getElementById("inputFile");
                 const selectedImage = document.getElementById("selectedImage");

             inputFile.onchange = function (e) {
                 const file = e.target.files[0];
         if (file) {
                 const reader = new FileReader();
           reader.onload = function (e) {
               selectedImage.src = e.target.result;
               selectedImage.style.display = "block";
           };
           reader.readAsDataURL(file);
       }
   };

   inputFile.click();
}

// Pede permissão para o usuário abrir a camera, é salva a foto no perfil do dashboard
           
           function getUserMedia(options, successCallback, failureCallback) {
               var api = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
               if (api) {
                   return api.bind(navigator)(options, successCallback, failureCallback);
               }
           }

           var theStream;
           var bordavideo = document.getElementById('divdevideo');
           async function getStream() {
               var botaoft = document.getElementById('botaoTirarFoto');
               botaoft.style.display = "none";

               if (!navigator.getUserMedia && !navigator.webkitGetUserMedia && !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
                   alert('User Media API not supported.');
                   return;
               }

               var constraints = {
                   video: true

               };

               getUserMedia(constraints, function (stream) {
                   var mediaControl = document.querySelector('video');
                   if ('srcObject' in mediaControl) {
                       mediaControl.srcObject = stream;
                       bordavideo.style.display = "block";
                       aperecerBtn()

                   } else if (navigator.mozGetUserMedia) {
                       mediaControl.mozSrcObject = stream;
                       bordavideo.style.display = "block";
                       aperecerBtn()
                   } else {
                       mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
                       bordavideo.style.display = "block";
                       aperecerBtn()
                   }
                   theStream = stream;
                   bordavideo.style.display = "block";
                   aperecerBtn()
               }, function (err) {
                   alert('Error: ' + err);
               });

           }

           async function aperecerBtn() {

               var btn = document.getElementById('botaoClick');
               btn.style.display = "block";
           }
           async function esconderBtn() {

               var btn = document.getElementById('botaoClick');
               btn.style.display = "none";
           }


           // Seleciona a foto é exibe na tela
           function takePhoto() {
               bordavideo.style.display = "none";
               esconderBtn();
               if (!('ImageCapture' in window)) {
                   alert('ImageCapture is not available');
                   return;
               }

               if (!theStream) {
                   alert('Grab the video stream first!');
                   return;
               }

               var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);

               theImageCapturer
                   .takePhoto()
                   .then(blob => {
                       var theImageTag = document.getElementById("imagemExibida");
                       theImageTag.src = URL.createObjectURL(blob);
                       theImageTag.style.display = "block";
                   })
                   .catch(err => alert('Error: ' + err));
           }


           var map;

function initMap() { // Inicializa o mapa

map = new google.maps.Map(document.getElementById('map'), {
zoom: 14
});

// Obtém a localização do usuário e centraliza o mapa
getLocation();
}

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function (position) {
var userLocation = {
lat: position.coords.latitude,
lng: position.coords.longitude
};

// Adiciona um marcador para a posição do usuário
var marker = new google.maps.Marker({
position: userLocation,
map: map,
title: 'Sua localização'
});

// Centraliza o mapa na localização do usuário
map.setCenter(userLocation);
}, function () {
// Tratamento de erro ao obter a localização
alert('Erro ao obter a localização do usuário.');
});
} else {
alert('Geolocalização não é suportada pelo seu navegador.');
}
}
