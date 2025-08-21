document.addEventListener('DOMContentLoaded', function() {
    const addUserForm = document.getElementById('add-user-form');
    const deleteUserModal = document.getElementById('delete-user-modal');
    const confirmDeleteBtn = document.querySelector('#delete-user-modal .button-danger');

    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Usuário cadastrado com sucesso (simulação)!');
            
            const modal = addUserForm.closest('.modal-overlay');
            if(modal) modal.classList.add('hidden');
            addUserForm.reset();
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', function() {
            alert('Usuário removido com sucesso (simulação)!');

            if (deleteUserModal) {
                deleteUserModal.classList.add('hidden');
            }
        });
    }
});