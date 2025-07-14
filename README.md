# Shooping-Cart---Vanilla-JS
A Shopping cart made using only vanilla javascript, HTML and CSS

# 🛒 Shopping Cart - Vanilla JavaScript (Stock Limit Feature)

Um carrinho de compras interativo, leve e funcional desenvolvido 100% em **JavaScript puro (Vanilla JS)**. Este projeto inclui persistência de dados via `localStorage` e controle de **limite de estoque** em tempo real.

> ✅ Sem frameworks ou bibliotecas  
> 🎯 Ideal para aprendizado de DOM, eventos, lógica e armazenamento local  
> 📦 Suporte a limite de estoque por item

---

## 🚀 Funcionalidades

- Listagem de produtos gerada dinamicamente
- Adição, remoção e alteração de quantidade no carrinho
- Atualização em tempo real do total de itens e preço
- Persistência via `localStorage`
- 🔥 Controle de estoque: usuário não pode exceder o limite de unidades disponíveis
- Interface com feedback dinâmico do estoque restante

---

## 🧠 Tecnologias Utilizadas

- **HTML5** – estrutura da página  
- **CSS3** – estilo e layout  
- **JavaScript (ES6)** – lógica e interações  
- **LocalStorage API** – persistência de dados no navegador

---

## 📁 Estrutura do Projeto

```plaintext
Shooping-Cart---Vanilla-JS/
│
├── index.html             # Página principal com os produtos
├── cart.html              # Página do carrinho
├── style.css              # Estilos gerais
├── src/
│   ├── script.js          # Lógica de exibição dos produtos
│   ├── cart.js            # Lógica do carrinho
│   └── data.js            # Dados dos produtos
├── imgs/                  # Imagens dos produtos
└── README.md              # Este arquivo
```

➕ Adicionar Novo Produto
Abra data.js e adicione um novo objeto:

{
  id: "product-id",
  name: "Nome do Produto",
  price: 99,
  desc: "Descrição curta",
  img: "imgs/sua-imagem.jpg",
  stock: 10
}

Coloque a imagem correspondente na pasta /imgs.

🔄 Resetar Carrinho
Abra o console do navegador e digite:

localStorage.removeItem("shop-products");

👤 Autor
Samuel Werlang
GitHub: @Ssamueell
