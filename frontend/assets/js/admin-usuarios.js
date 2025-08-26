document.addEventListener('DOMContentLoaded', function() {

    const addUserForm = document.getElementById('add-user-form');
    const deleteUserModal = document.getElementById('delete-user-modal');
    const confirmDeleteBtn = document.querySelector('#delete-user-modal .button-danger');
    const phoneInput = document.getElementById('telefone');
    
    //Guarda a URL original da página 
    const originalUrl = window.location.pathname;

    // Ação de cadastrar usuário (simulação)
    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Usuário cadastrado com sucesso (simulação)!');
            
            const modal = addUserForm.closest('.modal-overlay');
            if(modal) modal.classList.add('hidden');
            addUserForm.reset();

            // Muda a URL para a original
            history.pushState({}, '', originalUrl);
        });
    }

    if (phoneInput) {

        const maskOptions = {
            mask: '(00) 00000-0000'
        };
        const phoneMask = IMask(phoneInput, maskOptions);
    }

    // O NÚMERO LIMPO PARA O BACKEND
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Pega a instância da máscara 
            const phoneMask = IMask.instances.find(mask => mask.el === phoneInput);

            if (phoneMask) {
                // Pega apenas os números, sem a formatação
                const unmaskedValue = phoneMask.unmaskedValue;

                // Cria um campo de input escondido para enviar o número limpo
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'telefone_limpo'; //oq o backend vai receber
                hiddenInput.value = unmaskedValue;

                form.appendChild(hiddenInput);
            }
        });
    }

    // Ação de remover usuário (simulação)
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            alert('Usuário removido com sucesso (simulação)!');

            if (deleteUserModal) {
                deleteUserModal.classList.add('hidden');
            }
            // Muda a URL para a original
            history.pushState({}, '', originalUrl);
        });
    }
});