document.addEventListener('DOMContentLoaded', function() {

    const openEditProfileBtn = document.querySelector('[data-modal-target="edit-profile-modal"]');
    const editForm = document.getElementById('edit-profile-form');
    const formNome = document.getElementById('edit-nome');
    const formEmail = document.getElementById('edit-email');
    const formTelefone = document.getElementById('edit-telefone');
    const originalUrl = window.location.pathname;

    let phoneMask;
    if (formTelefone) {
        const maskOptions = {
            mask: '(00) 00000-0000'
        };
        phoneMask = IMask(formTelefone, maskOptions);
    }

    function populateEditForm() {

        const currentUser = {
            nome: "Lucas Mairon Oliveira Camilo",
            email: "lucas.mairon@seudominio.br",
            telefone: "(41) 98877-6655"
        };
        formNome.value = currentUser.nome;
        formEmail.value = currentUser.email;
        
        if (phoneMask) {
            phoneMask.unmaskedValue = currentUser.telefone;
        } else {
            formTelefone.value = currentUser.telefone;
        }
    }

    if (openEditProfileBtn) {
        openEditProfileBtn.addEventListener('click', populateEditForm);
    }
    
    if(editForm) {
        editForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Dados atualizados (simulação)!');
            
            const modal = editForm.closest('.modal-overlay');
            if(modal) modal.classList.add('hidden');

            history.pushState({}, '', originalUrl);
        });
    }
});