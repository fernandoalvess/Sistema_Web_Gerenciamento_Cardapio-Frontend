// Aguarda o conteúdo da página carregar completamente
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const typingTextElement = document.getElementById('typing-text');
    const textToType = "SISTEMA WEB PARA GERENCIAMENTO DE CARDÁPIO";
    const typingSpeed = 100;

    function typeWriter(text, i) {
        if (i < text.length) {
            typingTextElement.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), typingSpeed);
        } else {
            setTimeout(() => {
                loader.style.display = 'none';
                mainContent.classList.remove('hidden');
            }, 1000);
        }
    }

    typeWriter(textToType, 0);
});