document.addEventListener('DOMContentLoaded', function() {

    const addUserForm = document.getElementById('add-user-form');
    const deleteUserModal = document.getElementById('delete-user-modal');
    const confirmDeleteBtn = document.querySelector('#delete-user-modal .button-danger');
    const phoneInput = document.getElementById('add-telefone');
    
    //Guarda a URL original da página 
    const originalUrl = window.location.pathname;

    // Ação de cadastrar usuário (simulação)
    let phoneMask;
    if (phoneInput) {
        const maskOptions = {
            mask: '(00) 00000-0000'
        };
        phoneMask = IMask(phoneInput, maskOptions);
    }

    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            // Captura o envio para que a página não recarregue
            event.preventDefault();

            // Pega o número limpo (sem máscara)
            const telefoneLimpo = phoneMask ? phoneMask.unmaskedValue : phoneInput.value;

            // simulação de envio
            alert('Usuário cadastrado com sucesso (simulação)!');
            
            const modal = addUserForm.closest('.modal-overlay');
            if(modal) modal.classList.add('hidden');
            addUserForm.reset();

            // Muda a URL para a original
            history.pushState({}, '', originalUrl);
        });
    }

    //Pega o ID depois de clicar
    const allDeleteButtons = document.querySelectorAll('.delete-btn');
    allDeleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            //Pega o ID do usuário do botão que foi clicado
            const userId = this.dataset.userId;
            
            //Coloca o ID no botão "Remover" de dentro do modal
            if (confirmDeleteBtn) {
                confirmDeleteBtn.dataset.userIdToDelete = userId;
            }
        });
    });

    // Ação de remover usuário (simulação)
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {

            //Pega o ID
            const userIdToDelete = this.dataset.userIdToDelete;

            alert('Usuário removido com sucesso (simulação)!');

            // Aqui Lucas pode fazr a chamada do back
            // fetch(`/api/usuario/remover/${userIdToDelete}`, { method: 'DELETE' })
            //     .then(response => ...);

            if (deleteUserModal) {
                deleteUserModal.classList.add('hidden');
            }
            // Muda a URL para a original
            history.pushState({}, '', originalUrl);
        });
    }
});