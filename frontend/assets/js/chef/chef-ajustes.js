document.addEventListener('DOMContentLoaded', function() {
    
    const changePasswordModal = document.getElementById('change-password-modal');
    const deleteAccountModal = document.getElementById('delete-account-modal');
    const successNoticeModal = document.getElementById('success-notice-modal'); 
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
    const changePasswordForm = document.getElementById('change-password-form');

    const originalUrl = window.location.pathname;

    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Senha atualizada (simulação)!'); 

            closeModal(changePasswordModal);

            history.pushState({}, '', originalUrl);
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            closeModal(deleteAccountModal);
                      
            openModal(successNoticeModal);

            history.pushState({}, '', originalUrl);
        });
    }

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