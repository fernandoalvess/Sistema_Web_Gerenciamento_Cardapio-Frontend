document.addEventListener('DOMContentLoaded', function() {
    
    // CONTROLE DOS MODAIS
    
    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    // Procura por qualquer botão que tenha o atributo 'data-modal-target' para ABRIR
    const openModalTriggers = document.querySelectorAll('[data-modal-target]');
    openModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            if (trigger.tagName === 'A') event.preventDefault();
            
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    // Procura por qualquer botão que tenha o atributo 'data-modal-close' para FECHAR
    const closeModalTriggers = document.querySelectorAll('[data-modal-close]');
    closeModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modal = trigger.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    // Fecha o modal se o usuário clicar fora
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    //MOSTRAR/ESCONDER SENHA
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);

            const basePath = this.src.substring(0, this.src.lastIndexOf('/'));
            this.src = type === 'password' ? `${basePath}/eye-off.svg` : `${basePath}/eye-on.svg`;
        });
    });

    // LÓGICA DO SAIR (ação de confirmar)
    const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', function() {
            window.location.href = '../../index.html'; 
        });
    }

});