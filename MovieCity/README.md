<div align="center">
  <h1>🎬 MovieCity</h1>
  <p><strong>Grandes histórias. Uma tela de cada vez.</strong></p>
  <p>Landing page responsiva de catálogo de filmes construída com React + Vite.</p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS-Responsivo-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS responsivo" />
</div>

## ✨ Sobre o projeto

A MovieCity é um projeto educacional para praticar componentização, renderização de listas, importação de imagens, estado com React e responsividade. A interface foi pensada para ser mais interativa do que uma página estática.

## 🚀 Funcionalidades

- Catálogo com seis títulos e pôsteres locais.
- Busca por nome do filme ou categoria.
- Filtro por categoria.
- Lista de favoritos com contador e filtro dedicado.
- Modal com detalhes do título selecionado.
- Modal de login demonstrativo com validação básica do formulário.
- Menu responsivo para dispositivos móveis.
- Estado vazio e opção para limpar filtros.
- Animações suaves, acessibilidade básica e suporte a preferência por movimento reduzido.

> **Importante:** este é um front-end demonstrativo. O login não se conecta a um servidor, não cria contas e não salva os favoritos após atualizar a página. A reprodução de filmes também não está implementada.

## 🧰 Tecnologias

- React
- Vite
- JavaScript (ES Modules)
- CSS puro com media queries
- Lucide React para ícones

## 📂 Estrutura

```text
MovieCity/
├── public/
├── src/
│   ├── assets/          # Pôsteres usados nos cards
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   └── MovieCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 💻 Como executar

Pré-requisito: Node.js instalado (recomendado Node.js 20.19+ ou 22.12+).

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal, geralmente `http://localhost:5173`.

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## 📱 Teste de responsividade

No navegador, abra as ferramentas do desenvolvedor (`F12`) e teste as larguras de 1440px, 1024px, 768px, 600px e 375px. Verifique o menu mobile, os filtros, a busca e os modais.

## 📌 Entrega no GitHub

1. Crie um repositório público chamado `MovieCity` no GitHub.
2. Extraia esta pasta e abra-a no VS Code.
3. Abra o terminal dentro da pasta e execute `npm install`.
4. Inicialize o Git, faça o commit e envie os arquivos para o repositório.

```bash
git init
git add .
git commit -m "Cria landing page MovieCity com React"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/MovieCity.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.
