document.addEventListener('DOMContentLoaded', function() {

    const phoneInput = document.getElementById('add-telefone');
    
    let phoneMask;
    if (phoneInput) {
        const maskOptions = {
            mask: '(00) 00000-0000'
        };
        phoneMask = IMask(phoneInput, maskOptions);
    }

    const deleteUserForm = document.getElementById('delete-user-form');

    const allDeleteButtons = document.querySelectorAll('.delete-btn');
    allDeleteButtons.forEach(button => {
        button.addEventListener('click', function() {

            const userId = this.dataset.userId;
            
            const actionUrl = `/usuarios/remover/${userId}/`; // <- LUCAS, AJUSTE AQUI PARA TESTAR SE DELETA

            if (deleteUserForm) {
                deleteUserForm.setAttribute('action', actionUrl);
            }
        });
    });
});