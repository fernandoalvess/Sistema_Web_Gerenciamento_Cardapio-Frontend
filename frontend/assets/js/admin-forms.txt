document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o campo de telefone
    const phoneInput = document.getElementById('telefone');

    if (phoneInput) {

        const maskOptions = {
            mask: '(00) 00000-0000'
        };
        const phoneMask = IMask(phoneInput, maskOptions);
    }

    // O NÚMERO LIMPO PARA O BACKEND
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Pega a instância da máscara 
            const phoneMask = IMask.instances.find(mask => mask.el === phoneInput);

            if (phoneMask) {
                // Pega apenas os números, sem a formatação
                const unmaskedValue = phoneMask.unmaskedValue;

                // Cria um campo de input escondido para enviar o número limpo
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'telefone_limpo'; //backend vai receber
                hiddenInput.value = unmaskedValue;

                form.appendChild(hiddenInput);
            }
        });
    }
});