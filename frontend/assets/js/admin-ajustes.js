document.addEventListener('DOMContentLoaded', function() {

    const deleteAccountModal = document.getElementById('delete-account-modal');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    // Ação de deletar a conta (simulando)
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            
            alert('Conta deletada (simulação)! Enviando requisição para o backend...');
            
            if (deleteAccountModal) {
                deleteAccountModal.classList.add('hidden');
            }
        });
    }
});