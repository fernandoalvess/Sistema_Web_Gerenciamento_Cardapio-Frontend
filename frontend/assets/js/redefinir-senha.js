document.addEventListener('DOMContentLoaded', function() {
    const resetForm = document.getElementById('reset-password-form');

    if (resetForm) {
        resetForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (newPassword !== confirmPassword) {
                alert('As senhas não conferem. Por favor, tente novamente.');
                return;
            }

            alert('Senha redefinida com sucesso (simulação)!');

            window.location.href = '/index.html';
        });
    }
});