document.addEventListener('DOMContentLoaded', function() {
    const addUserModal = document.getElementById('add-user-modal');
    const openAddUserModalBtn = document.querySelector('.page-header .button-primary');
    const deleteUserModal = document.getElementById('delete-user-modal');
    const deleteUserBtns = document.querySelectorAll('.delete-btn');
    const closeModalBtns = document.querySelectorAll('[data-close-modal]');

    function openModal(modal) {
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    openAddUserModalBtn.addEventListener('click', function() {
        openModal(addUserModal);
    });

    deleteUserBtns.forEach(button => {
        button.addEventListener('click', function() {
            openModal(deleteUserModal);
        });
    });

    closeModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    [addUserModal, deleteUserModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === this) {
                    closeModal(this);
                }
            });
        }
    });
});