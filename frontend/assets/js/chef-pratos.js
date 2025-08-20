document.addEventListener('DOMContentLoaded', function() {
    // SIMULAÇÃO
    const dishesDatabase = {
        "1": {
            nome: "Bruschetta Italiana",
            categoria: "entrada",
            compartilhamento: "privado",
            descricao: "Pão italiano tostado com tomate, manjericão e azeite extra virgem."
        }
    };

    const dishFormModal = document.getElementById('dish-form-modal');
    const dishForm = document.getElementById('dish-form');
    const modalTitle = document.getElementById('dish-modal-title');
    const modalSubmitText = document.getElementById('dish-modal-submit-text');

    // Botões que abrem o modal
    const openCreateDishBtn = document.getElementById('open-create-dish-modal');
    const editDishBtns = document.querySelectorAll('.edit-btn');

    // Prepara o modal para o modo "CRIAR"
    function setupCreateMode() {
        dishForm.reset();
        modalTitle.textContent = "Criar prato";
        modalSubmitText.textContent = "Criar";
        dishForm.dataset.mode = 'create';
        dishForm.dataset.dishId = '';
    }

    // Prepara o modal para o modo "EDITAR"
    function setupEditMode(dishId) {
        const dishData = dishesDatabase[dishId];
        if (!dishData) return;

        // Preenche o formulário
        document.getElementById('dish-name').value = dishData.nome;
        document.getElementById('dish-category').value = dishData.categoria;
        document.getElementById('dish-sharing').value = dishData.compartilhamento;
        document.getElementById('dish-description').value = dishData.descricao;

        modalTitle.textContent = "Editar prato";
        modalSubmitText.textContent = "Atualizar";
        dishForm.dataset.mode = 'edit';
        dishForm.dataset.dishId = dishId;
    }

    // Para o botão "Criar Prato"
    if (openCreateDishBtn) {
        openCreateDishBtn.addEventListener('click', setupCreateMode);
    }

    // Para todos os botões de "Editar"
    editDishBtns.forEach(button => {
        button.addEventListener('click', function() {
            const dishId = this.dataset.dishId;
            setupEditMode(dishId);
        });
    });

    // Para o envio do formulário
    if (dishForm) {
        dishForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const mode = this.dataset.mode;
            const dishId = this.dataset.dishId;

            // Simulação de envio para o backend
            if (mode === 'create') {
                alert('Prato criado (simulação)!');
            } else if (mode === 'edit') {
                alert(`Prato com ID ${dishId} atualizado (simulação)!`);
            }
            
            if (dishFormModal) {
                dishFormModal.classList.add('hidden');
            }
        });
    }
});