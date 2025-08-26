document.addEventListener('DOMContentLoaded', function() {
    // SIMULAÇÃO DE BANCO DE DADOS DE PRATOS
    const allDishes = [
        { id: 1, nome: "Bruschetta Italiana", categoria: "entradas", desc: "Pão italiano tostado com tomate, manjericão e azeite extra virgem." },
        { id: 2, nome: "Salada César", categoria: "entradas", desc: "Alface romana com molho césar, croutons e parmesão." },
        { id: 3, nome: "Carpaccio de Salmão", categoria: "entradas", desc: "Finas fatias de salmão fresco com alcaparras e molho de mostarda e mel." },
        { id: 4, nome: "Risotto de Cogumelos", categoria: "principais", desc: "Arroz arbóreo cremoso com cogumelos frescos e parmesão." },
        { id: 5, nome: "Filet Mignon au Poivre", categoria: "principais", desc: "Medalhão de filé mignon grelhado com molho de pimenta verde." },
        { id: 6, nome: "Salmão Grelhado com Legumes", categoria: "principais", desc: "Posta de salmão grelhado na manteiga de ervas, servido com legumes." },
        { id: 7, nome: "Spaghetti Carbonara", categoria: "principais", desc: "Massa italiana com pancetta, queijo pecorino, ovos e pimenta do reino." },
        { id: 8, nome: "Tiramisù", categoria: "sobremesas", desc: "Sobremesa italiana com camadas de biscoito, café e creme mascarpone." },
        { id: 9, nome: "Panna Cotta", categoria: "sobremesas", desc: "Doce de creme de leite cozido com calda de frutas vermelhas." },
    ];

    const stepperBtns = document.querySelectorAll('.stepper-btn');
    const generateMenuBtn = document.getElementById('generate-menu-btn');
    const generatedMenuContainer = document.getElementById('generated-menu-container');
    const menuPreview = document.getElementById('menu-preview');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const exportBtn = document.getElementById('export-btn');
    const exportOptions = document.getElementById('export-options');

    // Variável para guardar o cardápio que está sendo exibido na tela
    let currentMenu = null;

    // LÓGICA DOS (+/-) 
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
    
    // Função para um cardápio do zero
    function generateAndRenderMenu() {
        const quantities = {
            entradas: parseInt(document.getElementById('entradas-count').value),
            principais: parseInt(document.getElementById('principais-count').value),
            sobremesas: parseInt(document.getElementById('sobremesas-count').value)
        };

        // Guarda o cardápio gerado na variável
        currentMenu = generateMenu(quantities);
        renderMenu(currentMenu);
        generatedMenuContainer.classList.remove('hidden');
    }

    // Função para embaralhar o cardápio que está na telaa
    function shuffleAndRenderMenu() {
        if (!currentMenu) return;

        // Embaralha a ordem dos pratos
        for (const category in currentMenu) {
            currentMenu[category].sort(() => 0.5 - Math.random());
        }

        // Renderiza o cardápio novo
        renderMenu(currentMenu);
    }
    
    // Função auxiliar que sorteia os pratos do "banco de dados"
    function generateMenu(quantities) {
        const menu = { entradas: [], principais: [], sobremesas: [] };
        
        for (const category in quantities) {
            const availableDishes = allDishes.filter(dish => dish.categoria === category);
            const selectedDishes = availableDishes.sort(() => 0.5 - Math.random()).slice(0, quantities[category]);
            menu[category] = selectedDishes;
        }
        return menu;
    }

    // Função que exibe o cardápio no HTML
    function renderMenu(menu) {
        menuPreview.innerHTML = `
            <div class="menu-preview-header">
                <h1>Cardápio do Chef</h1>
                <p>Gerado em: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div class="menu-category">
                <h2>Entradas</h2>
                ${menu.entradas.map(dish => `
                    <div class="menu-item">
                        <h3>${dish.nome}</h3>
                        <p>${dish.desc}</p>
                    </div>
                `).join('')}
            </div>

            <div class="menu-category">
                <h2>Pratos Principais</h2>
                ${menu.principais.map(dish => `
                    <div class="menu-item">
                        <h3>${dish.nome}</h3>
                        <p>${dish.desc}</p>
                    </div>
                `).join('')}
            </div>

            <div class="menu-category">
                <h2>Sobremesas</h2>
                ${menu.sobremesas.map(dish => `
                    <div class="menu-item">
                        <h3>${dish.nome}</h3>
                        <p>${dish.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // O botão de gerar novo cardápio
    generateMenuBtn.addEventListener('click', generateAndRenderMenu);
    
    // O botão de embaralhar
    shuffleBtn.addEventListener('click', shuffleAndRenderMenu);

    // O botão de exportar
    exportBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        exportOptions.classList.toggle('hidden');
    });

    document.addEventListener('click', function() {
        if (!exportOptions.classList.contains('hidden')) {
            exportOptions.classList.add('hidden');
        }
    });
});