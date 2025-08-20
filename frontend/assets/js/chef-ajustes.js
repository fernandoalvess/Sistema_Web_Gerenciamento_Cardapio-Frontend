document.addEventListener('DOMContentLoaded', function() {
    const changePasswordModal = document.getElementById('change-password-modal');
    const deleteAccountModal = document.getElementById('delete-account-modal');
    const successNoticeModal = document.getElementById('success-notice-modal'); 
    const openChangePasswordBtn = document.querySelector('[data-modal-target="change-password-modal"]');
    const openDeleteAccountBtn = document.querySelector('[data-modal-target="delete-account-modal"]');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    // Lógica de Abrir/Fechar 
    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    // Lógica da exclusão 

    // "Confirmar" no primeiro modal para deletar a contaa
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            closeModal(deleteAccountModal);
            
            console.log('Solicitação de exclusão enviada para o backend...');
            
            // Abre o modal de aviso
            openModal(successNoticeModal);
        });
    }

    // fechamento do segundo modal (Aviso)
    if (successNoticeModal) {
        const closeNoticeTriggers = successNoticeModal.querySelectorAll('[data-close-modal], .close-modal-btn');
        
        closeNoticeTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
                closeModal(successNoticeModal);
                window.location.href = '../../index.html';
            });
        });

        successNoticeModal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal(successNoticeModal);
                window.location.href = '../../index.html';
            }
        });
    }
});