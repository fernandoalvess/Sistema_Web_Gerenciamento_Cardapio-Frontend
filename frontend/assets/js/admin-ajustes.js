document.addEventListener('DOMContentLoaded', function() {
    // Elementos do Modal de ALTERAR SENHA 
    const changePasswordModal = document.getElementById('change-password-modal');
    const openChangePasswordBtn = document.getElementById('open-change-password-modal');

    // Elementos do Modal de DELETAR CONTA
    const deleteAccountModal = document.getElementById('delete-account-modal');
    const openDeleteAccountBtn = document.getElementById('open-delete-account-modal');
    const confirmDeleteBtn = document.getElementById('confirm-delete-btn');

    // Elementos para FECHAR os modais
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');

    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }
    
    // Abre o modal de ALTERAR SENHA
    if (openChangePasswordBtn) {
        openChangePasswordBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            openModal(changePasswordModal);
        });
    }

    // Abre o modal de DELETAR CONTA
    if (openDeleteAccountBtn) {
        openDeleteAccountBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openModal(deleteAccountModal);
        });
    }

    // Fecha qualquer modal ao clicar no botão de cancelar
    closeModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    // Fecha qualquer modal se o usuário clicar fora
    [changePasswordModal, deleteAccountModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === this) {
                    closeModal(this);
                }
            });
        }
    });

    // Mostrar/Esconder a senha
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);

            if (type === 'password') {
                this.src = '../../assets/images/icons/eye-off.svg';
            } else {
                this.src = '../../assets/images/icons/eye-on.svg';
            }
        });
    });

    // Ação de deletar a conta (simulação)
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            alert('Conta deletada (simulação)! Enviando requisição para o backend...');
            closeModal(deleteAccountModal);
        });
    }

});