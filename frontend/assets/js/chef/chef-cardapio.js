document.addEventListener('DOMContentLoaded', function() {

    const stepperBtns = document.querySelectorAll('.stepper-btn');
    const generateMenuBtn = document.getElementById('generate-menu-btn');
    const generatedMenuContainer = document.getElementById('generated-menu-container');
    const pdfPreviewFrame = document.getElementById('pdf-preview');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const exportBtn = document.getElementById('export-btn');
    const exportOptions = document.getElementById('export-options');

    stepperBtns.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            let currentValue = parseInt(input.value);
            if (action === 'increment') {
                currentValue++;
            } else if (action === 'decrement' && currentValue > 0) {
                currentValue--;
            }
            input.value = currentValue;
        });
    });

    async function handleMenuGeneration() {
        const quantities = {
            entradas: parseInt(document.getElementById('entradas-count').value),
            principais: parseInt(document.getElementById('principais-count').value),
            sobremesas: parseInt(document.getElementById('sobremesas-count').value)
        };

        const pdfBase64 = await getMenuFromBackend(quantities);
        
        renderPdfPreview(pdfBase64);
    }

    async function getMenuFromBackend(quantities) {
        console.log("FRONTEND: Pedindo ao backend um PDF com as quantidades:", quantities);
        const fakeBase64Response = "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";
        console.log("FRONTEND: PDF Base64 recebido (simulação).");
        return fakeBase64Response;
    }

    function renderPdfPreview(base64String) {
        if (!base64String) {
            pdfPreviewFrame.src = "";
            return;
        }
        pdfPreviewFrame.src = `data:application/pdf;base64,${base64String}`;
    }


    async function fetchMenuForExport(format) {
        console.log(`FRONTEND: Pedindo ao backend o cardápio no formato: ${format}`);
        if (format === 'pdf') {
            const base64 = await getMenuFromBackend({}); 
            return { fileName: 'cardapio.pdf', mimeType: 'application/pdf', base64: base64 };
        }
        alert(`Exportação para ${format.toUpperCase()} ainda não implementada pelo backend (simulação).`);
        return null;
    }

    function downloadFileFromBase64(fileName, mimeType, base64) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: mimeType});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    generateMenuBtn.addEventListener('click', handleMenuGeneration);
    shuffleBtn.addEventListener('click', handleMenuGeneration); 

    exportBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        exportOptions.classList.toggle('hidden');
    });
    
    exportOptions.addEventListener('click', async function(event) {
        event.preventDefault();
        const target = event.target.closest('a');
        if (!target) return;

        const format = target.dataset.format;
        if (format) {
            const fileData = await fetchMenuForExport(format);
            if (fileData) {
                downloadFileFromBase64(fileData.fileName, fileData.mimeType, fileData.base64);
            }
            exportOptions.classList.add('hidden');
        }
    });

    document.addEventListener('click', () => {
        if (!exportOptions.classList.contains('hidden')) {
            exportOptions.classList.add('hidden');
        }
    });
});