    const forgotPasswordForm = document.getElementById('forgot-password-form');
    
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const email = document.getElementById('recovery-email').value;
            
            alert(`Instruções de recuperação enviadas para ${email} (simulação)!`);

            forgotPasswordForm.reset();
            const modal = forgotPasswordForm.closest('.modal-overlay');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }