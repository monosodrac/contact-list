# 📇 Lista de Contatos – React + Vite + Redux + Styled-Components

Uma aplicação web para gerenciamento de contatos, desenvolvida com **React** e **Vite**. A aplicação permite **adicionar**, **editar** e **remover** contatos com campos de **nome**, **e-mail** e **telefone**. O gerenciamento de estado é feito com **Redux**, e o layout é estilizado com **styled-components**.

---

## ✨ Funcionalidades

- ✅ Adicionar novos contatos com nome, e-mail e telefone  
- ✅ Editar contatos existentes  
- ✅ Remover contatos da lista  
- ✅ Gerenciamento de estado global com React Redux  
- ✅ Estilização com styled-components  
- ✅ Interface limpa e intuitiva  
- ✅ Projeto inicializado com Vite para desenvolvimento ágil

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Redux](https://redux.js.org/)  
- [React Redux](https://react-redux.js.org/)  
- [Styled-Components](https://styled-components.com/)  
- TypeScript   
- HTML5 + TSX

---

## 📁 Estrutura do Projeto

```bash
📂 lista-contatos/
├── public/
├── src/
│   ├── components/
│   │   ├── Botoes/
│   │   └── Contato/
│   ├── containers/
│   │   ├── Formulario/
│   │   ├── Header/
│   │   └── ListaContatos/
│   ├── models/
│   │   └── Contato.ts
│   ├── pages/
│   │   ├── Cadastro/
│   │   └── Home/
│   ├── store/
│   │   ├── reducers/
│   │   │   ├── contatos.ts
│   │   │   └── filtro.ts
│   │   └── index.tsx
│   ├── styles/
│   │   ├── index.ts
│   │   └── variaveis.ts
│   ├── App.tsx
│   └── main.tsx
└── index.html
├── package.json
├── vite.config.js
└── ...
