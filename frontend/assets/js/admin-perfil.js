document.addEventListener('DOMContentLoaded', function() {
    const editProfileModal = document.getElementById('edit-profile-modal');
    const openEditProfileBtn = document.getElementById('open-edit-profile-btn');
    
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');

    const formNome = document.getElementById('edit-nome');
    const formEmail = document.getElementById('edit-email');
    const formTelefone = document.getElementById('edit-telefone');

    // DADOS FICTÍCIOS (simulando o que vai vir do back)
    const currentUser = {
        nome: "Fernando Umbilino Alves",
        email: "exemplo@gmail.com",
        telefone: "(88) 94002-8922"
    };

    // Função para preencher
    function populateEditForm() {
        formNome.value = currentUser.nome;
        formEmail.value = currentUser.email;
        formTelefone.value = currentUser.telefone;
    }

    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    openEditProfileBtn.addEventListener('click', function() {
        populateEditForm();
        openModal(editProfileModal); 
    });

    closeModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    // Fecha o modal se o usuário clicar fora
    editProfileModal.addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal(this);
        }
    });

    // Lógica para o envio do formulário (por enquanto, apenas previne o recarregamento)
    const editForm = document.getElementById('edit-profile-form');
    editForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Dados atualizados (simulação)!'); 
        closeModal(editProfileModal);
    });
});