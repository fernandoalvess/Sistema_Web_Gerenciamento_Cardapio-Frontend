// Tela de carregamento
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

// LÓGICA PARA O MODAL "ESQUECEU A SENHA" 
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página

            const email = document.getElementById('recovery-email').value;
            
            // Simula o envio
            alert(`Instruções de recuperação enviadas para ${email} (simulação)!`);

            // Limpa o formulário e fecha o modal
            forgotPasswordForm.reset();
            const modal = forgotPasswordForm.closest('.modal-overlay');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }