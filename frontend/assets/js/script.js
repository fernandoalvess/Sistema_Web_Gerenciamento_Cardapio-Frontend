// Aguarda o conteúdo da página carregar completamente
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Simula um tempo de carregamento (ex: 3 segundos)
    setTimeout(function() {
        loader.style.display = 'none'; // Esconde a tela de carregamento
        mainContent.classList.remove('hidden'); // Mostra a tela de login
    }, 3000); // 3000 milissegundos = 3 segundos
});