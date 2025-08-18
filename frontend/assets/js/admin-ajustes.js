document.addEventListener('DOMContentLoaded', function() {
    const changePasswordModal = document.getElementById('change-password-modal');
    const openChangePasswordBtn = document.getElementById('open-change-password-modal');
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');

    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    if (openChangePasswordBtn) {
        openChangePasswordBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            openModal(changePasswordModal);
        });
    }

    closeModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    if (changePasswordModal) {
        changePasswordModal.addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal(this);
            }
        });
    }

    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);

            if (type === 'password') {
                this.src = '../../assets/images/icons/eye-off.svg';
            } else {
                this.src = '../../assets/images/icons/eye-on.svg';
            }
        });
    });

});