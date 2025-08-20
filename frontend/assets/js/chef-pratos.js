document.addEventListener('DOMContentLoaded', function() {
    const createDishModal = document.getElementById('create-dish-modal');
    const createDishForm = document.getElementById('create-dish-form');

    if (createDishForm) {
        createDishForm.addEventListener('submit', function(event) {
            event.preventDefault();

            //Reúne os dados preenchidos
            const dishData = {
                nome: document.getElementById('dish-name').value,
                categoria: document.getElementById('dish-category').value,
                compartilhamento: document.getElementById('dish-sharing').value,
                descricao: document.getElementById('dish-description').value
            };

            console.log("Dados do prato a serem enviados para o backend:", dishData);

            //Simula o envio para o backend
            alert('Prato "' + dishData.nome + '" criado com sucesso (simulação)!');

            //Limpa os campos do formulário
            createDishForm.reset();

            //Fecha o modal
            if (createDishModal) {
                createDishModal.classList.add('hidden');
            }
        });
    }
});