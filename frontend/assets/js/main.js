document.addEventListener('DOMContentLoaded', function() {
    
    const originalUrl = window.location.href; 
    
    /**
     * Abre um modal específico.
     * @param {HTMLElement} modal
     */
    function openModal(modal) {
        if (modal) modal.classList.remove('hidden');
    }

    /**
     * Fecha um modal específico.
     * @param {HTMLElement} modal
     */
    function closeModal(modal) {
        if (modal) modal.classList.add('hidden');
    }

    const openModalTriggers = document.querySelectorAll('[data-modal-target]');
    openModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            if (trigger.tagName === 'A') event.preventDefault();
            
            const modalId = trigger.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            openModal(modal);

            const newUrlPath = trigger.getAttribute('data-url');
            if (newUrlPath) {
                history.pushState({ modalId: modalId }, '', newUrlPath);
            }
        });
    });

    const closeModalTriggers = document.querySelectorAll('[data-modal-close]');
    closeModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modal = trigger.closest('.modal-overlay');
            closeModal(modal);
            history.pushState({}, '', originalUrl);
        });
    });

    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModal(overlay);
                history.pushState({}, '', originalUrl);
            }
        });
    });

    window.addEventListener('popstate', function() {
        const openModals = document.querySelectorAll('.modal-overlay:not(.hidden)');
        openModals.forEach(closeModal);
    });

    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);

            if (type === 'password') {
                this.src = '/assets/images/icons/eye-off.svg';
            } else {
                this.src = '/assets/images/icons/eye-on.svg';
            }
        });
    });

    const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', function() {
            window.location.href = '../../index.html'; 
        });
    }

});