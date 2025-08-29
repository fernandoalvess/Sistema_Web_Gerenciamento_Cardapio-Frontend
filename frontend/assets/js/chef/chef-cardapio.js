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

    // LÓGICA DE GERAÇÃO E RENDERIZAÇÃO  
    // Função principal que será chaamada ao gerar ou embaralharr
    async function handleMenuGeneration() {
        const quantities = {
            entradas: parseInt(document.getElementById('entradas-count').value),
            principais: parseInt(document.getElementById('principais-count').value),
            sobremesas: parseInt(document.getElementById('sobremesas-count').value)
        };

        // Simulei aqui uma chamada para o backend pedindo o PDF
        const pdfBase64 = await getMenuFromBackend(quantities);
        
        // Renderizando
        renderPdfPreview(pdfBase64);
        generatedMenuContainer.classList.remove('hidden');
    }

    // SIMULAÇÃO DA FUNÇÃO QUE CONVERSA COM O BACKEND PARA GERAR O PREVIEW
    async function getMenuFromBackend(quantities) {
        console.log("FRONTEND: Pedindo ao backend um PDF com as quantidades:", quantities);
        // O backend geraria o PDF e me retornaria o Base64.
        // um exemplo de string Base64 de um PDF para teste.
        const fakeBase64Response = "JVBERi0xLjcgCiXi48/TIAoxIDAgb2JqIAo8PCAKL1R5cGUgL0NhdGFsb2cgCi9QYWdlcyAyIDAgUiAKL1ZpZXdlclByZWZlcmVuY2VzIDw8IAovRGlyZWN0aW9uIC9MMlIgCj4+IAo+PiAKZW5kb2JqIAoyIDAgb2JqIAo8PCAKL1R5cGUgL1BhZ2VzIAovQ291bnQgMSAKL0tpZHMgWyAzIDAgUiBdIAo+PiAKZW5kb2JqIAozIDAgb2JqIAo8PCAKL1R5cGUgL1BhZ2UgCi9QYXJlbnQgMiAwIFIgCi9SZXNvdXJjZXMgPDwgCi9Gb250IDw8IAovRjEgNCAwIFIgCj4+IAo+PiAKL01lZGlhQm94IFsgMCAwIDYxMiA3OTIgXSAKL0NvbnRlbnRzIDUgMCBSIAo+PiAKZW5kb2JqIAo0IDAgb2JqIAo8PCAKL1R5cGUgL0ZvbnQgCi9TdWJ0eXBlIC9UeXBlMSAKL0Jhc2VGb250IC9IZWx2ZXRpY2EgCj4+IAplbmRvYmogCjUgMCBvYmogCjw8IC9MZW5ndGggNTggPj4gCnN0cmVhbSAKQkQgCi9GMSAyNCBUZiAKNTcgNzAwIFRkIChIZWxsbywgV29ybGQhKSBUaiAKRUQgCmVuZHN0cmVhbSAKZW5kb2JqIAp4cmVmIAowIDYgCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAwMDc0IDAwMDAwIG4gCjAwMDAwMDAxMjMgMDAwMDAgbiAKMDAwMDAwMDI3MyAwMDAwMCBuIAowMDAwMDAwMzM0IDAwMDAwIG4gCnRyYWlsZXIgCjw8IC9TaXplIDYgCi9Sb290IDEgMCBSIAo+PiAKc3RhcnR4cmVmIAo0NDYgCiUlRU9GIAo=";
        console.log("FRONTEND: PDF Base64 recebido (simulação).");
        return fakeBase64Response;
    }

    // Função que renderiza o PDF Base64 no iframe
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
            const base64 = await getMenuFromBackend({}); // Reutilizei a função do preview
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