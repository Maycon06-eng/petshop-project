// Script personalizado para o PetShop

// Dados dos produtos
const produtos = {
    acessorios: [
        {
            nome: "Coleira de Couro",
            preco: "R$ 45,90",
            descricao: "Coleira de couro legítimo com fivela de segurança.",
            imagem: "images/produtos/acessorio1.jpg",
            alt: "Coleira de couro marrom para cães de médio e grande porte"
        },
        {
            nome: "Brinquedo Interativo",
            preco: "R$ 32,50",
            descricao: "Brinquedo que dispensa petiscos, mantendo seu pet entretido.",
            imagem: "images/produtos/acessorio2.jpg",
            alt: "Brinquedo interativo azul para cães, com compartimento para petiscos"
        }
    ],
    racoes: [
        {
            nome: "Ração Premium para Cães",
            preco: "R$ 189,90",
            descricao: "Ração super premium com ingredientes naturais para cães adultos.",
            imagem: "images/produtos/racao1.jpg",
            alt: "Saco de ração premium para cães adultos, sabor frango e arroz"
        },
        {
            nome: "Ração para Gatos Castrados",
            preco: "R$ 125,50",
            descricao: "Fórmula especial para gatos castrados, controle de peso.",
            imagem: "images/produtos/racao2.jpg",
            alt: "Saco de ração para gatos castrados, controle de peso, sabor salmão"
        }
    ],
    higiene: [
        {
            nome: "Tapete Higiênico",
            preco: "R$ 39,90",
            descricao: "Pacote com 30 unidades de tapete higiênico super absorvente.",
            imagem: "images/produtos/higiene1.jpg",
            alt: "Pacote de tapetes higiênicos para cães, 30 unidades, super absorvente"
        },
        {
            nome: "Shampoo para Pelos Longos",
            preco: "R$ 28,75",
            descricao: "Shampoo especial para pets de pelos longos, desembaraçante.",
            imagem: "images/produtos/higiene2.jpg",
            alt: "Frasco de shampoo para pets de pelos longos, fórmula desembaraçante"
        }
    ]
};

// Função para mostrar produtos por categoria
function mostrarProdutos(categoria) {
    const listaProdutos = document.getElementById('lista-produtos');
    const tituloCategoria = document.getElementById('titulo-categoria');
    const conteudoProdutos = document.getElementById('conteudo-produtos');
    
    // Define o título da categoria
    switch(categoria) {
        case 'acessorios':
            tituloCategoria.textContent = 'Acessórios';
            break;
        case 'racoes':
            tituloCategoria.textContent = 'Rações';
            break;
        case 'higiene':
            tituloCategoria.textContent = 'Higiene e Limpeza';
            break;
    }
    
    // Limpa o conteúdo anterior
    conteudoProdutos.innerHTML = '';
    
    // Adiciona os produtos da categoria selecionada
    produtos[categoria].forEach(produto => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-4';
        
        col.innerHTML = `
            <div class="card h-100">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.alt}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <p class="h5 text-primary">${produto.preco}</p>
                    <button class="btn btn-outline-primary mt-2" onclick="adicionarAoCarrinho('${produto.nome}', '${produto.preco}')">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        
        conteudoProdutos.appendChild(col);
    });
    
    // Mostra a seção de produtos
    listaProdutos.style.display = 'block';
    
    // Rola a página para a seção de produtos
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

// Função para adicionar produto ao carrinho (simulação)
function adicionarAoCarrinho(nome, preco) {
    alert(`Produto "${nome}" adicionado ao carrinho!\nPreço: ${preco}`);
}

// Função para mostrar data e hora atual
function atualizarDataHora() {
    const agora = new Date();
    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const dataHoraFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    
    // Se quiser exibir em algum lugar na página, pode criar um elemento para isso
    // Por exemplo, no footer
    const elementoDataHora = document.getElementById('data-hora');
    if (elementoDataHora) {
        elementoDataHora.textContent = dataHoraFormatada;
    }
}

// Validação do formulário de cadastro
document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const nomePet = document.getElementById('nome-pet').value;
    
    if (nome && cpf && telefone && email && nomePet) {
        alert('Cadastro realizado com sucesso! Em breve entraremos em contato.');
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// Validação do formulário de agendamento
document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const servico = document.getElementById('servico').value;
    const metodo = document.querySelector('input[name="metodo"]:checked');
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    
    if (servico && metodo && data && hora) {
        alert(`Agendamento realizado com sucesso!\n\nServiço: ${servico}\nMétodo: ${metodo.value}\nData: ${data}\nHorário: ${hora}`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// Configuração mínima da data no agendamento (apenas datas futuras)
document.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('data');
    const hoje = new Date().toISOString().split('T')[0];
    dataInput.min = hoje;
    
    // Atualiza data e hora a cada minuto
    atualizarDataHora();
    setInterval(atualizarDataHora, 60000);
});

// Função para alternar modo de alto contraste (acessibilidade)
function alternarContraste() {
    document.body.classList.toggle('high-contrast');
    
    // Salva a preferência no localStorage
    if (document.body.classList.contains('high-contrast')) {
        localStorage.setItem('alto-contraste', 'ativo');
    } else {
        localStorage.setItem('alto-contraste', 'inativo');
    }
}

// Verifica se o usuário já tinha ativado o alto contraste
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('alto-contraste') === 'ativo') {
        document.body.classList.add('high-contrast');
    }
    
    // Adiciona botão de acessibilidade se não existir
    if (!document.getElementById('btn-contraste')) {
        const btnContraste = document.createElement('button');
        btnContraste.id = 'btn-contraste';
        btnContraste.className = 'btn btn-outline-secondary position-fixed';
        btnContraste.style.bottom = '20px';
        btnContraste.style.right = '20px';
        btnContraste.style.zIndex = '1000';
        btnContraste.textContent = 'Alto Contraste';
        btnContraste.onclick = alternarContraste;
        
        document.body.appendChild(btnContraste);
    }
});
