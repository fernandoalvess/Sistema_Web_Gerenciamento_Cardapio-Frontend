document.addEventListener('DOMContentLoaded', function() {

    const openEditProfileBtn = document.querySelector('[data-modal-target="edit-profile-modal"]');
    const editForm = document.getElementById('edit-profile-form');
    
    function populateEditForm() {
        const formNome = document.getElementById('edit-nome');
        const formEmail = document.getElementById('edit-email');
        const formTelefone = document.getElementById('edit-telefone');

        // DADOS FICTÍCIOS (simulando)
        const currentUser = {
            nome: "Fernando Umbilino Alves",
            email: "exemplo@gmail.com",
            telefone: "(88) 94002-8922"
        };
        formNome.value = currentUser.nome;
        formEmail.value = currentUser.email;
        formTelefone.value = currentUser.telefone;
    }

    if (openEditProfileBtn) {
        openEditProfileBtn.addEventListener('click', populateEditForm);
    }
    
    // Lógica para o envio do formulário (simulando)
    if(editForm) {
        editForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Dados atualizados (simulação)!');
            
            const modal = editForm.closest('.modal-overlay');
            if(modal) modal.classList.add('hidden');
        });
    }
});