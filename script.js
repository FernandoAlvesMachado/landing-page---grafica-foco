// Dados dos produtos baseados no catálogo
const produtos = [
    {
        id: 1,
        imagem: 'imgs/1.jpg',
        titulo: 'CAIXA PANETONE + ALÇA',
        descricao: 'Caixa personalizada para panetone com alça. Disponível em dois tamanhos: PEQUENA (12,5x20x10,5 cm) e GRANDE (23x25x19,5 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 2,
        imagem: 'imgs/2.jpg',
        titulo: 'CAIXA PANETONE CASA',
        descricao: 'Caixa personalizada para panetone em formato de casa. Disponível em dois tamanhos: PEQUENA (12,5x18x12,5 cm) e GRANDE (17x26x17 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 3,
        imagem: 'imgs/3.jpg',
        titulo: 'CAIXA PANETONE SEXTAVADA',
        descricao: 'Caixa personalizada para panetone em formato hexagonal. Disponível em dois tamanhos: PEQUENA (12,5x15x10,5 cm) e GRANDE (20,5x21x17,5 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 4,
        imagem: 'imgs/4.jpg',
        titulo: 'CAIXA SEXTAVADA C/ TAMPA',
        descricao: 'Caixa hexagonal personalizada com tampa. Disponível em dois tamanhos: PEQUENA (12x13,5x11 cm) e GRANDE (21x21,7x17,8 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 5,
        imagem: 'imgs/5.jpg',
        titulo: 'CAIXA PANETONE TRADICIONAL',
        descricao: 'Caixa tradicional para panetone personalizada. Disponível em dois tamanhos: PEQUENA (12x18x10 cm) e GRANDE (20x25x15 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 6,
        imagem: 'imgs/6.jpg',
        titulo: 'CAIXA PANETONE LUXO',
        descricao: 'Caixa de luxo para panetone com acabamento premium. Disponível em dois tamanhos: PEQUENA (15x20x12 cm) e GRANDE (25x30x18 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 7,
        imagem: 'imgs/7.jpg',
        titulo: 'CAIXA PANETONE MODERNA',
        descricao: 'Caixa moderna para panetone com design contemporâneo. Disponível em dois tamanhos: PEQUENA (13x19x11 cm) e GRANDE (22x27x16 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 8,
        imagem: 'imgs/8.jpg',
        titulo: 'CAIXA PANETONE ELEGANTE',
        descricao: 'Caixa elegante para panetone com acabamento sofisticado. Disponível em dois tamanhos: PEQUENA (14x21x13 cm) e GRANDE (24x29x17 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 9,
        imagem: 'imgs/9.jpg',
        titulo: 'CAIXA PANETONE CLASSICA',
        descricao: 'Caixa clássica para panetone com design atemporal. Disponível em dois tamanhos: PEQUENA (12x17x9 cm) e GRANDE (21x26x14 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 10,
        imagem: 'imgs/10.jpg',
        titulo: 'CAIXA PANETONE PREMIUM',
        descricao: 'Caixa premium para panetone com acabamento de luxo. Disponível em dois tamanhos: PEQUENA (16x22x14 cm) e GRANDE (26x31x19 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 11,
        imagem: 'imgs/12.jpg',
        titulo: 'CAIXA PANETONE ESPECIAL',
        descricao: 'Caixa especial para panetone com design único. Disponível em dois tamanhos: PEQUENA (13x20x12 cm) e GRANDE (23x28x16 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 12,
        imagem: 'imgs/13.jpg',
        titulo: 'CAIXA PANETONE EXCLUSIVA',
        descricao: 'Caixa exclusiva para panetone com acabamento diferenciado. Disponível em dois tamanhos: PEQUENA (15x21x13 cm) e GRANDE (25x30x17 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 13,
        imagem: 'imgs/14.jpg',
        titulo: 'CAIXA PANETONE UNICA',
        descricao: 'Caixa única para panetone com design inovador. Disponível em dois tamanhos: PEQUENA (14x19x11 cm) e GRANDE (24x29x15 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 14,
        imagem: 'imgs/15.jpg',
        titulo: 'CAIXA PANETONE DIFERENCIADA',
        descricao: 'Caixa diferenciada para panetone com acabamento especial. Disponível em dois tamanhos: PEQUENA (12x18x10 cm) e GRANDE (22x27x14 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 15,
        imagem: 'imgs/16.jpg',
        titulo: 'CAIXA PANETONE INOVADORA',
        descricao: 'Caixa inovadora para panetone com design moderno. Disponível em dois tamanhos: PEQUENA (13x20x12 cm) e GRANDE (23x28x16 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 16,
        imagem: 'imgs/17.jpg',
        titulo: 'CAIXA PANETONE SOFISTICADA',
        descricao: 'Caixa sofisticada para panetone com acabamento refinado. Disponível em dois tamanhos: PEQUENA (15x22x13 cm) e GRANDE (25x31x17 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 17,
        imagem: 'imgs/18.jpg',
        titulo: 'CAIXA PANETONE REFINADA',
        descricao: 'Caixa refinada para panetone com design elegante. Disponível em dois tamanhos: PEQUENA (14x21x12 cm) e GRANDE (24x29x16 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 18,
        imagem: 'imgs/19.jpg',
        titulo: 'CAIXA PANETONE DISTINTA',
        descricao: 'Caixa distinta para panetone com acabamento exclusivo. Disponível em dois tamanhos: PEQUENA (13x19x11 cm) e GRANDE (23x28x15 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 19,
        imagem: 'imgs/20.jpg',
        titulo: 'CAIXA PANETONE EXCLUSIVA',
        descricao: 'Caixa exclusiva para panetone com design premium. Disponível em dois tamanhos: PEQUENA (16x23x14 cm) e GRANDE (26x32x18 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 20,
        imagem: 'imgs/21.jpg',
        titulo: 'CAIXA PANETONE PREMIUM',
        descricao: 'Caixa premium para panetone com acabamento de luxo. Disponível em dois tamanhos: PEQUENA (15x20x12 cm) e GRANDE (25x30x16 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 21,
        imagem: 'imgs/22.jpg',
        titulo: 'CAIXA PANETONE LUXUOSA',
        descricao: 'Caixa luxuosa para panetone com acabamento sofisticado. Disponível em dois tamanhos: PEQUENA (14x22x13 cm) e GRANDE (24x31x17 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    },
    {
        id: 22,
        imagem: 'imgs/23.jpg',
        titulo: 'CAIXA PANETONE ELEGANTE',
        descricao: 'Caixa elegante para panetone com design refinado. Disponível em dois tamanhos: PEQUENA (13x21x12 cm) e GRANDE (23x29x15 cm). Personalização completa com sua marca.',
        categoria: 'Embalagens'
    }
];

// Array com as imagens dos clientes
const clientes = [
    'Clientes/Ativo 3.png',
    'Clientes/Ativo 4.png',
    'Clientes/Ativo 5.png',
    'Clientes/Ativo 6.png',
    'Clientes/Ativo 7.png',
    'Clientes/Ativo 8.png',
    'Clientes/Ativo 9.png',
    'Clientes/Ativo 10.png',
    'Clientes/Ativo 11.png',
    'Clientes/Ativo 12.png',
    'Clientes/Ativo 13.png',
    'Clientes/Ativo 14.png'
];

// Elementos do DOM
const produtosGrid = document.getElementById('produtosGrid');
const carrosselClientes = document.getElementById('carrosselClientes');

// Função para carregar produtos
function carregarProdutos() {
    produtosGrid.innerHTML = '';
    
    produtos.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'produto-card';
        produtoCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}" class="produto-image">
            <h3 class="produto-title">${produto.titulo}</h3>
            <p class="produto-description">${produto.descricao}</p>
            <button class="btn-primary" onclick="enviarWhatsApp('${produto.titulo}')">Solicitar Orçamento</button>
        `;
        produtosGrid.appendChild(produtoCard);
    });
}

// Função para enviar mensagem no WhatsApp
function enviarWhatsApp(produto) {
    const mensagem = `Olá! Gostaria de solicitar um orçamento para o produto: ${produto}`;
    const numeroWhatsApp = '5562994719124'; // Número da Gráfica Foco
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função para criar carrossel infinito dos clientes
function criarCarrosselClientes() {
    // Duplicar as imagens para criar o efeito infinito
    const imagensDuplicadas = [...clientes, ...clientes, ...clientes];
    
    imagensDuplicadas.forEach(cliente => {
        const clienteItem = document.createElement('div');
        clienteItem.className = 'cliente-item';
        clienteItem.innerHTML = `
            <img src="${cliente}" alt="Cliente" class="cliente-logo">
        `;
        carrosselClientes.appendChild(clienteItem);
    });
}

// Função para animar o carrossel
function animarCarrossel() {
    const carrossel = document.querySelector('.carrossel');
    if (carrossel) {
        carrossel.style.animation = 'scroll 30s linear infinite';
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos();
    criarCarrosselClientes();
    animarCarrossel();
});

// Efeito de digitação no título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Aplicar efeito de digitação ao título principal
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});
