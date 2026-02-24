# Portal de Utilidades

## Visão do Produto

O Portal de Utilidades é uma aplicação web desenvolvida com React e TypeScript que centraliza ferramentas essenciais de organização pessoal. O sistema permite ao utilizador gerir tarefas, cadastrar contactos e controlar despesas, garantindo praticidade, produtividade e persistência dos dados mesmo após o recarregamento da página.

---

## User Stories – TaskMaster

1. Como utilizador, eu quero adicionar uma nova tarefa para organizar minhas atividades diárias.

2. Como utilizador, eu quero definir uma categoria para cada tarefa para identificar sua prioridade.

3. Como utilizador, eu quero remover tarefas concluídas para manter minha lista atualizada.

4. Como utilizador, eu quero que minhas tarefas permaneçam salvas após atualizar a página para não perder informações.

5. Como utilizador, eu quero que o sistema valide o título da tarefa para evitar registros incompletos.

---

## Critérios de Aceitação

### História 1 – Adicionar tarefa
- O campo título deve aceitar no mínimo 5 caracteres.
- O botão deve adicionar a tarefa na lista.
- A tarefa deve aparecer imediatamente na interface.

### História 2 – Categorizar tarefa
- A categoria deve ser obrigatória.
- As opções devem ser Trabalho, Pessoal ou Urgente.
- A categoria deve ser exibida junto ao título.

### História 3 – Remover tarefa
- Deve existir um botão de remoção.
- Ao clicar, a tarefa deve ser removida.
- A interface deve atualizar automaticamente.

### História 4 – Persistência
- As tarefas devem ser armazenadas no localStorage.
- Ao recarregar a página, as tarefas devem continuar visíveis.
- O sistema não deve perder dados salvos.

### História 5 – Validação
- O sistema deve impedir títulos com menos de 5 caracteres.
- Uma mensagem de erro deve ser exibida.
- A tarefa inválida não deve ser adicionada.

---

## Milestones

M1 – Estrutura Inicial
- Configuração do React + TypeScript
- Implementação das rotas
- Criação da Home e Navbar

M2 – Implementação dos Módulos
- Desenvolvimento do TaskMaster com persistência
- Implementação do ConnectHub com validação
- Implementação do MoneyFlow com cálculo de saldo