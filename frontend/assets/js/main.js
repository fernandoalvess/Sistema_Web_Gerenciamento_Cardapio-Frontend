document.addEventListener('DOMContentLoaded', function() {
    //  Lógica do Modal de sair

    const logoutModal = document.getElementById('logout-modal');
    const openLogoutBtn = document.getElementById('logout-btn');
    const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');

    // Função genérica para fechar qualquer modal
    function closeModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    // Abre o modal sair
    if (openLogoutBtn) {
        openLogoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            logoutModal.classList.remove('hidden');
        });
    }

    // Confirma o sair e redireciona para a página de login
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', function() {
            // A ação de "Sair": redirecionar para a página de login
            window.location.href = '../../index.html';
        });
    }

    // Fecha o modal de sair ao clicar em "Cancelar"
    closeModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    // Fecha o modal de sair se clicar fora dele
    if (logoutModal) {
        logoutModal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal(this);
            }
        });
    }
});