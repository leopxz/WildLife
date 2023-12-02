//Implementação do PWA(versão Hibrida)
   
     if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(reg => {
      reg.addEventListener('updatefound', () => {
        newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          switch (newWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                
                console.log('Novo service worker instalado. Aguarde a próxima visita para ativar a atualização.');
              } else {
                
                console.log('Novo service worker ativado. A página será atualizada.');
                newWorker.postMessage({ action: 'skipWaiting' });
              }
              break;
          }
        });
      });
    });

    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
      }
    