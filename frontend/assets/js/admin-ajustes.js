document.addEventListener('DOMContentLoaded', function() {

    const deleteAccountModal = document.getElementById('delete-account-modal');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    const changePasswordForm = document.getElementById('change-password-form');
    
    const originalUrl = window.location.pathname;

    // Ação de deletar a conta (simulando)
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            
            alert('Conta deletada (simulação)! Enviando requisição para o backend...');
            
            if (deleteAccountModal) {
                deleteAccountModal.classList.add('hidden');
            }

            // Reverte a URL após a ação
            history.pushState({}, '', originalUrl);
        });
    }

    // Lógica para o envio do formulário de alterar senha (aviso)
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Senha atualizada (simulação)!'); 

            const modal = changePasswordForm.closest('.modal-overlay');
            if(modal) modal.classList.add('hidden');

            // Reverte a URL para a original
            history.pushState({}, '', originalUrl);
        });
    }
});