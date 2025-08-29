document.addEventListener('DOMContentLoaded', function() {
    const dishesDatabase = {
        "1": {
            nome: "Bruschetta Italiana",
            categoria: "entrada",
            compartilhamento: "privado",
            descricao: "Pão italiano tostado com tomate, manjericão e azeite extra virgem."
        }
    };

    const originalUrl = window.location.pathname;

    const dishFormModal = document.getElementById('dish-form-modal');
    const dishForm = document.getElementById('dish-form');
    const modalTitle = document.getElementById('dish-modal-title');
    const modalSubmitText = document.getElementById('dish-modal-submit-text');

    const openCreateDishBtn = document.getElementById('open-create-dish-modal');
    const editDishBtns = document.querySelectorAll('.edit-btn');

    const deleteDishModal = document.getElementById('delete-dish-modal');
    const confirmDeleteDishBtn = document.getElementById('confirm-delete-dish-btn');

    function setupCreateMode() {
        dishForm.reset();
        modalTitle.textContent = "Criar prato";
        modalSubmitText.textContent = "Criar";
        dishForm.dataset.mode = 'create';
        dishForm.dataset.dishId = '';
    }

    function setupEditMode(dishId) {
        const dishData = dishesDatabase[dishId];
        if (!dishData) return;

        document.getElementById('dish-name').value = dishData.nome;
        document.getElementById('dish-category').value = dishData.categoria;
        document.getElementById('dish-sharing').value = dishData.compartilhamento;
        document.getElementById('dish-description').value = dishData.descricao;

        modalTitle.textContent = "Editar prato";
        modalSubmitText.textContent = "Atualizar";
        dishForm.dataset.mode = 'edit';
        dishForm.dataset.dishId = dishId;
    }

    if (openCreateDishBtn) {
        openCreateDishBtn.addEventListener('click', setupCreateMode);
    }

    editDishBtns.forEach(button => {
        button.addEventListener('click', function() {
            const dishId = this.dataset.dishId;
            setupEditMode(dishId);
        });
    });

    if (dishForm) {
        dishForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const mode = this.dataset.mode;
            const dishId = this.dataset.dishId;

            if (mode === 'create') {
                alert('Prato criado (simulação)!');
            } else if (mode === 'edit') {
                alert(`Prato com ID ${dishId} atualizado (simulação)!`);
            }
            
            if (dishFormModal) {
                dishFormModal.classList.add('hidden');
            }

            history.pushState({}, '', originalUrl);
        });
    }
    
    if (confirmDeleteDishBtn) {
        confirmDeleteDishBtn.addEventListener('click', function() {
            alert('Prato excluído (simulação)!');

            if (deleteDishModal) {
                deleteDishModal.classList.add('hidden');
            }

            history.pushState({}, '', originalUrl);
        });

    }
});