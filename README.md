# 🍽️ Sistema de Gerenciamento de Cardápio

Este projeto é a implementação do **Frontend** de um Sistema Web para o Gerenciamento de Cardápio. A aplicação está sendo desenvolvida com foco em uma arquitetura de código limpa, reutilizável e escalável, utilizando HTML5, CSS3 e JavaScript.

## ✨ Funcionalidades Implementadas

O sistema possui dois painéis distintos com diferentes níveis de acesso e funcionalidades:

### Painel do Administrador
O administrador tem controle total sobre os usuários do sistema.

* **Gerenciamento de Usuários (Chefs):**
    * Visualizar uma lista completa de todos os usuários cadastrados.
    * Cadastrar um novo usuário (Chef) através de um modal.
    * Remover um usuário existente com um modal de confirmação.
    * Buscar usuários pelo nome.
* **Gerenciamento de Perfil:**
    * Visualizar suas próprias informações.
    * Editar suas informações através de um modal.
* **Ajustes da Conta:**
    * Opção para alterar a senha (modal).
    * Opção para deletar a própria conta (modal de confirmação).
* **Autenticação:**
    * Sistema de logout com modal de confirmação.

### Painel do Chef (Usuário)
O Chef é o usuário principal, focado na criação e gerenciamento de pratos e cardápios.

* **Página de Início:**
    * Dashboard de boas-vindas com atalhos para as principais funcionalidades.
* **Gerenciamento de Pratos:**
    * Visualizar todos os pratos (seus e públicos de outros chefs) em um layout de grid.
    * Criar um novo prato através de um modal com campos de nome, categoria, compartilhamento e descrição.
    * Editar um prato existente (apenas os seus).
    * Excluir um prato (apenas os seus) com um modal de confirmação.
* **Montagem de Cardápio:**
    * Interface para definir a quantidade de pratos por categoria (Entradas, Pratos Principais, Sobremesas).
    * Geração de um cardápio aleatório com base nos pratos disponíveis.
    * Visualização prévia do cardápio gerado em um formato de documento.
    * Funcionalidade de "Embaralhar" para reordenar os pratos no cardápio já gerado.
    * Menu de "Exportar" com opções para PDF, DOCX e LATEX (funcionalidade de exportação a ser implementada).
* **Gerenciamento de Perfil e Ajustes:**
    * Funcionalidades idênticas às do admin para gerenciamento da própria conta.

## 💻 Tecnologias Utilizadas

* **HTML5** (Semântico)
* **CSS3** (Flexbox, Grid, Animações)
* **JavaScript** (Manipulação do DOM, Eventos)
* **Design:** Prototipado no Figma.
* **Ícones:** Biblioteca de ícones SVG.

## 🔮 Próximos Passos

* Integração com o backend para substituir os dados fictícios.
* Implementação da funcionalidade de exportação de arquivos (PDF, DOCX e LaTex).
* Validação de formulários.

## 👤 Autor

**Fernando Umbilino Alves**

* LinkedIn: https://www.linkedin.com/in/fernaando-alves/
* GitHub: https://github.com/fernandoalvess
* Email: [fernandoumalves@gmail.com]
