document.addEventListener('DOMContentLoaded', function() {
    const dishesDatabase = {
        "1": {
            nome: "Bruschetta Italiana",
            categoria: "entrada",
            compartilhamento: "privado",
            descricao: "Pão italiano tostado com tomate, manjericão e azeite extra virgem."
        }
    };

    const dishForm = document.getElementById('dish-form');
    const editDishForm = document.getElementById('edit-dish-form');
    const deleteDishForm = document.getElementById('delete-dish-form');
    
    const modalTitle = document.getElementById('dish-modal-title');
    const modalSubmitText = document.getElementById('dish-modal-submit-text');

    const openCreateDishBtn = document.querySelector('[data-url="/usuario/criar-prato"]');
    const editDishBtns = document.querySelectorAll('.edit-btn');
    const deleteDishBtns = document.querySelectorAll('.delete-btn');

    if (openCreateDishBtn) {
        openCreateDishBtn.addEventListener('click', function() {
            dishForm.reset();
            modalTitle.textContent = "Criar prato";
            modalSubmitText.textContent = "Criar";
            dishForm.setAttribute('action', '/usuario/criar-prato/');
        });
    }

    editDishBtns.forEach(button => {
        button.addEventListener('click', function() {
            const actionUrl = this.dataset.url;
            const dishId = this.dataset.dishId;
            const dishData = dishesDatabase[dishId];
            if (!dishData) return;

            document.getElementById('edit-dish-name').value = dishData.nome;
            document.getElementById('edit-dish-category').value = dishData.categoria;
            document.getElementById('edit-dish-sharing').value = dishData.compartilhamento;
            document.getElementById('edit-dish-description').value = dishData.descricao;


            if (editDishForm && actionUrl) {
                editDishForm.setAttribute('action', actionUrl);
            }

        });
    });

    deleteDishBtns.forEach(button => {
        button.addEventListener('click', function() {
            const actionUrl = this.dataset.url;
            if (deleteDishForm && actionUrl) {
                deleteDishForm.setAttribute('action', actionUrl);
            }
        });
    });
});