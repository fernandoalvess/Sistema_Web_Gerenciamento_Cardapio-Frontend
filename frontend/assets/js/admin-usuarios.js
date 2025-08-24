document.addEventListener('DOMContentLoaded', function() {

    const addUserForm = document.getElementById('add-user-form');
    const deleteUserModal = document.getElementById('delete-user-modal');
    const confirmDeleteBtn = document.querySelector('#delete-user-modal .button-danger');
    const originalUrl = window.location.pathname;

    // Ação de cadastrar usuário (FETCH)
    if (addUserForm) {
        addUserForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            // Pega os dados do formulário de cadastro
            const userData = {
                nome: document.getElementById('add-nome').value,
                email: document.getElementById('add-email').value,
                telefone: document.getElementById('add-telefone').value,
                senha: document.getElementById('add-senha').value
            };

            try {
                const response = await fetch('http://127.0.0.1:8000/user/singin/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });

                if (response.ok) {
                    alert('Usuário cadastrado com sucesso!');
                    addUserForm.reset();
                    const modal = addUserForm.closest('.modal-overlay');
                    if(modal) modal.classList.add('hidden');
                    history.pushState({}, '', originalUrl);
                    // window.location.reload(); 
                } else {
                    const error = await response.json();
                    alert(`Erro ao cadastrar: ${error.message || 'Verifique os dados'}`);
                }

            } catch (error) {
                alert('Erro de conexão com o servidor.');
                console.error('Erro:', error);
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
            history.pushState({}, '', originalUrl);
        });
    }
});