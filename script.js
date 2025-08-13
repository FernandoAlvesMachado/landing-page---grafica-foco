// Dados dos produtos baseados no catálogo
const produtos = [
    {
        id: 1,
        imagem: 'imgs/1.jpg',
        titulo: 'CAIXA PANETONE + ALÇA',
        descricao: 'Caixa personalizada para panetone com alça. Disponível em dois tamanhos: PEQUENA (12,5x20x10,5 cm) e GRANDE (23x25x19,5 cm). Personalização completa com sua marca. Código: 31',
        preco: 'A partir de R$ 3,96',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 8,71', total: 'R$ 1.742,00' },
                '500': { unitario: 'R$ 5,12', total: 'R$ 2.560,00' },
                '1000': { unitario: 'R$ 3,96', total: 'R$ 3.960,00' }
            },
            grande: {
                '200': { unitario: 'R$ 16,35', total: 'R$ 3.270,00' },
                '500': { unitario: 'R$ 9,99', total: 'R$ 4.995,00' },
                '1000': { unitario: 'R$ 7,96', total: 'R$ 7.960,00' }
            }
        },
        dimensoes: {
            pequena: '12,5x20x10,5 cm',
            grande: '23x25x19,5 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 2,
        imagem: 'imgs/2.jpg',
        titulo: 'CAIXA PANETONE CASA',
        descricao: 'Caixa personalizada para panetone em formato de casa. Disponível em dois tamanhos: PEQUENA (12,5x18x12,5 cm) e GRANDE (17x26x17 cm). Personalização completa com sua marca. Código: 32',
        preco: 'A partir de R$ 3,33',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,44', total: 'R$ 1.488,00' },
                '500': { unitario: 'R$ 4,36', total: 'R$ 2.180,00' },
                '1000': { unitario: 'R$ 3,33', total: 'R$ 3.330,00' }
            },
            grande: {
                '200': { unitario: 'R$ 13,29', total: 'R$ 2.658,00' },
                '500': { unitario: 'R$ 8,06', total: 'R$ 4.030,00' },
                '1000': { unitario: 'R$ 6,33', total: 'R$ 6.330,00' }
            }
        },
        dimensoes: {
            pequena: '12,5x18x12,5 cm',
            grande: '17x26x17 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 3,
        imagem: 'imgs/3.jpg',
        titulo: 'CAIXA PANETONE SEXTAVADA',
        descricao: 'Caixa personalizada para panetone em formato hexagonal. Disponível em dois tamanhos: PEQUENA (12,5x15x10,5 cm) e GRANDE (20,5x21x17,5 cm). Personalização completa com sua marca. Código: 33',
        preco: 'A partir de R$ 2,75',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,09', total: 'R$ 1.418,00' },
                '500': { unitario: 'R$ 3,80', total: 'R$ 1.900,00' },
                '1000': { unitario: 'R$ 2,75', total: 'R$ 2.750,00' }
            },
            grande: {
                '200': { unitario: 'R$ 11,91', total: 'R$ 2.382,00' },
                '500': { unitario: 'R$ 6,79', total: 'R$ 3.395,00' },
                '1000': { unitario: 'R$ 5,10', total: 'R$ 5.100,00' }
            }
        },
        dimensoes: {
            pequena: '12,5x15x10,5 cm',
            grande: '20,5x21x17,5 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 4,
        imagem: 'imgs/4.jpg',
        titulo: 'CAIXA SEXTAVADA C/ TAMPA',
        descricao: 'Caixa hexagonal personalizada com tampa. Disponível em dois tamanhos: PEQUENA (12x13,5x11 cm) e GRANDE (21x21,7x17,8 cm). Personalização completa com sua marca. Código: 34',
        preco: 'A partir de R$ 5,03',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 12,37', total: 'R$ 2.474,00' },
                '500': { unitario: 'R$ 6,85', total: 'R$ 3.425,00' },
                '1000': { unitario: 'R$ 5,03', total: 'R$ 5.030,00' }
            },
            grande: {
                '200': { unitario: 'R$ 20,31', total: 'R$ 4.062,00' },
                '500': { unitario: 'R$ 11,00', total: 'R$ 5.500,00' },
                '1000': { unitario: 'R$ 8,08', total: 'R$ 8.080,00' }
            }
        },
        dimensoes: {
            pequena: '12x13,5x11 cm',
            grande: '21x21,7x17,8 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 5,
        imagem: 'imgs/5.jpg',
        titulo: 'CAIXA PANETONE QUADRADA',
        descricao: 'Caixa quadrada personalizada para panetone. Disponível em dois tamanhos: PEQUENA (11x16,5x11 cm) e GRANDE (19x23x19 cm). Personalização completa com sua marca. Código: 35',
        preco: 'A partir de R$ 2,75',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,09', total: 'R$ 1.418,00' },
                '500': { unitario: 'R$ 3,80', total: 'R$ 1.900,00' },
                '1000': { unitario: 'R$ 2,75', total: 'R$ 2.750,00' }
            },
            grande: {
                '200': { unitario: 'R$ 13,68', total: 'R$ 2.736,00' },
                '500': { unitario: 'R$ 8,22', total: 'R$ 4.110,00' },
                '1000': { unitario: 'R$ 6,41', total: 'R$ 6.410,00' }
            }
        },
        dimensoes: {
            pequena: '11x16,5x11 cm',
            grande: '19x23x19 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 6,
        imagem: 'imgs/6.jpg',
        titulo: 'Boné Personalizado',
        descricao: 'Boné de qualidade com bordado personalizado. Perfeito para uniformes corporativos.',
        preco: 'R$ 32,00',
        categoria: 'Vestuário'
    },
    {
        id: 7,
        imagem: 'imgs/7.jpg',
        titulo: 'Agenda 2025 Personalizada',
        descricao: 'Agenda executiva com capa personalizada. Inclui calendário completo e espaço para anotações.',
        preco: 'R$ 55,00',
        categoria: 'Papelaria'
    },
    {
        id: 8,
        imagem: 'imgs/8.jpg',
        titulo: 'Mouse Pad Personalizado',
        descricao: 'Mouse pad de alta qualidade com impressão personalizada. Superfície suave e antiderrapante.',
        preco: 'R$ 18,00',
        categoria: 'Tecnologia'
    },
    {
        id: 9,
        imagem: 'imgs/9.jpg',
        titulo: 'Pendrive Personalizado',
        descricao: 'Pendrive de 16GB com impressão personalizada. Ideal para distribuir materiais promocionais.',
        preco: 'R$ 42,00',
        categoria: 'Tecnologia'
    },
    {
        id: 10,
        imagem: 'imgs/10.jpg',
        titulo: 'Power Bank Personalizado',
        descricao: 'Power bank de 10.000mAh com impressão personalizada. Carregamento rápido e seguro.',
        preco: 'R$ 95,00',
        categoria: 'Tecnologia'
    },
    {
        id: 12,
        imagem: 'imgs/12.jpg',
        titulo: 'Kit Higiene Personalizado',
        descricao: 'Kit completo com sabonete, shampoo e condicionador em embalagens personalizadas.',
        preco: 'R$ 38,00',
        categoria: 'Higiene'
    },
    {
        id: 13,
        imagem: 'imgs/13.jpg',
        titulo: 'Taca de Vinho Personalizada',
        descricao: 'Taça de cristal com gravação personalizada. Elegante para eventos especiais.',
        preco: 'R$ 65,00',
        categoria: 'Decoração'
    },
    {
        id: 14,
        imagem: 'imgs/14.jpg',
        titulo: 'Vela Aromática Personalizada',
        descricao: 'Vela aromática com embalagem personalizada. Perfeita para presentear no Natal.',
        preco: 'R$ 22,00',
        categoria: 'Decoração'
    },
    {
        id: 15,
        imagem: 'imgs/15.jpg',
        titulo: 'Kit Chá Personalizado',
        descricao: 'Kit com chás especiais em embalagens personalizadas. Ideal para momentos de relaxamento.',
        preco: 'R$ 28,00',
        categoria: 'Alimentos'
    },
    {
        id: 16,
        imagem: 'imgs/16.jpg',
        titulo: 'Chocolate Personalizado',
        descricao: 'Chocolates finos em embalagens personalizadas. Delicioso presente natalino.',
        preco: 'R$ 35,00',
        categoria: 'Alimentos'
    },
    {
        id: 17,
        imagem: 'imgs/17.jpg',
        titulo: 'Kit Café Gourmet',
        descricao: 'Kit com café gourmet em embalagens personalizadas. Para os amantes de café.',
        preco: 'R$ 48,00',
        categoria: 'Alimentos'
    },
    {
        id: 18,
        imagem: 'imgs/18.jpg',
        titulo: 'Porta-chaves Personalizado',
        descricao: 'Porta-chaves de metal com impressão personalizada. Prático e durável.',
        preco: 'R$ 15,00',
        categoria: 'Acessórios'
    },
    {
        id: 19,
        imagem: 'imgs/19.jpg',
        titulo: 'Relógio Personalizado',
        descricao: 'Relógio de pulso com pulseira personalizada. Elegante e funcional.',
        preco: 'R$ 120,00',
        categoria: 'Acessórios'
    },
    {
        id: 20,
        imagem: 'imgs/20.jpg',
        titulo: 'Óculos de Sol Personalizado',
        descricao: 'Óculos de sol com case personalizado. Proteção UV e estilo.',
        preco: 'R$ 75,00',
        categoria: 'Acessórios'
    },
    {
        id: 21,
        imagem: 'imgs/21.jpg',
        titulo: 'Kit Beleza Personalizado',
        descricao: 'Kit com produtos de beleza em embalagens personalizadas. Para cuidar da aparência.',
        preco: 'R$ 68,00',
        categoria: 'Beleza'
    },
    {
        id: 22,
        imagem: 'imgs/22.jpg',
        titulo: 'Perfume Personalizado',
        descricao: 'Perfume em frasco personalizado. Fragrância exclusiva para sua marca.',
        preco: 'R$ 150,00',
        categoria: 'Beleza'
    },
    {
        id: 23,
        imagem: 'imgs/23.jpg',
        titulo: 'Kit Spa Personalizado',
        descricao: 'Kit completo com produtos para spa em embalagens personalizadas. Relaxamento total.',
        preco: 'R$ 85,00',
        categoria: 'Beleza'
    }
];

// Elementos do DOM
const produtosGrid = document.getElementById('produtosGrid');
const modal = document.getElementById('produtoModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.querySelector('.close');
const contatoForm = document.getElementById('contatoForm');

// Carregar produtos na página
function carregarProdutos() {
    produtosGrid.innerHTML = '';
    
    produtos.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'produto-card';
        
        // Verificar se é o produto da caixa de panetone para mostrar preços especiais
        let precoHTML = `<div class="produto-price">${produto.preco}</div>`;
        
        if ((produto.id === 1 || produto.id === 2 || produto.id === 3 || produto.id === 4 || produto.id === 5) && produto.precos) {
            let precoInicial;
            if (produto.id === 1) precoInicial = 'R$ 3,96';
            else if (produto.id === 2) precoInicial = 'R$ 3,33';
            else if (produto.id === 3) precoInicial = 'R$ 2,75';
            else if (produto.id === 4) precoInicial = 'R$ 5,03';
            else if (produto.id === 5) precoInicial = 'R$ 2,75';
            precoHTML = `
                <div class="produto-price">
                    <div class="price-highlight">A partir de ${precoInicial}</div>
                    <div class="price-note">${produto.pagamento}</div>
                </div>
            `;
        }
        
        produtoCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}" class="produto-image">
            <h3 class="produto-title">${produto.titulo}</h3>
            <p class="produto-description">${produto.descricao}</p>
            ${precoHTML}
            <button class="btn-primary" onclick="abrirModal(${produto.id})">Ver Detalhes</button>
        `;
        produtosGrid.appendChild(produtoCard);
    });
}

// Abrir modal do produto
function abrirModal(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        modalImage.src = produto.imagem;
        modalImage.alt = produto.titulo;
        modalTitle.textContent = produto.titulo;
        modalDescription.textContent = produto.descricao;
        
        // Verificar se é o produto da caixa de panetone para mostrar tabela de preços
        if ((produto.id === 1 || produto.id === 2 || produto.id === 3 || produto.id === 4 || produto.id === 5) && produto.precos) {
            let precosHTML = `
                <div class="price-table">
                    <h4>Tabela de Preços</h4>
                    <div class="price-sections">
                        <div class="price-section">
                            <h5>PEQUENA (${produto.dimensoes.pequena})</h5>
                            <table>
                                <tr><th>Quantidade</th><th>Valor Unitário</th><th>Valor Total</th></tr>
                                <tr><td>200 unidades</td><td>${produto.precos.pequena['200'].unitario}</td><td>${produto.precos.pequena['200'].total}</td></tr>
                                <tr><td>500 unidades</td><td>${produto.precos.pequena['500'].unitario}</td><td>${produto.precos.pequena['500'].total}</td></tr>
                                <tr><td>1000 unidades</td><td>${produto.precos.pequena['1000'].unitario}</td><td>${produto.precos.pequena['1000'].total}</td></tr>
                            </table>
                        </div>
                        <div class="price-section">
                            <h5>GRANDE (${produto.dimensoes.grande})</h5>
                            <table>
                                <tr><th>Quantidade</th><th>Valor Unitário</th><th>Valor Total</th></tr>
                                <tr><td>200 unidades</td><td>${produto.precos.grande['200'].unitario}</td><td>${produto.precos.grande['200'].total}</td></tr>
                                <tr><td>500 unidades</td><td>${produto.precos.grande['500'].unitario}</td><td>${produto.precos.grande['500'].total}</td></tr>
                                <tr><td>1000 unidades</td><td>${produto.precos.grande['1000'].unitario}</td><td>${produto.precos.grande['1000'].total}</td></tr>
                            </table>
                        </div>
                    </div>
                    <div class="payment-info">${produto.pagamento}</div>
                </div>
            `;
            modalPrice.innerHTML = precosHTML;
        } else {
            modalPrice.textContent = produto.preco;
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Fechar modal
function fecharModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Solicitar orçamento
function solicitarOrcamento() {
    fecharModal();
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Formulário de contato
contatoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simular envio do formulário
    const formData = new FormData(this);
    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const telefone = this.querySelector('input[type="tel"]').value;
    const mensagem = this.querySelector('textarea').value;
    
    // Aqui você pode adicionar a lógica para enviar os dados
    alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!`);
    
    // Limpar formulário
    this.reset();
});

// Event listeners
closeModal.addEventListener('click', fecharModal);
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        fecharModal();
    }
});

// Filtro de produtos por categoria
function filtrarPorCategoria(categoria) {
    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoria);
    
    produtosGrid.innerHTML = '';
    
    produtosFiltrados.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.className = 'produto-card';
        produtoCard.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}" class="produto-image">
            <h3 class="produto-title">${produto.titulo}</h3>
            <p class="produto-description">${produto.descricao}</p>
            <div class="produto-price">${produto.preco}</div>
            <button class="btn-primary" onclick="abrirModal(${produto.id})">Ver Detalhes</button>
        `;
        produtosGrid.appendChild(produtoCard);
    });
}

// Animação de contagem regressiva para o Natal
function iniciarContagemRegressiva() {
    const agora = new Date();
    const natal = new Date(agora.getFullYear(), 11, 25); // 25 de dezembro
    
    if (agora.getMonth() === 11 && agora.getDate() > 25) {
        natal.setFullYear(agora.getFullYear() + 1);
    }
    
    const diferenca = natal - agora;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    
    // Adicionar contagem regressiva ao hero se desejar
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && dias > 0) {
        const contador = document.createElement('div');
        contador.className = 'contador-natal';
        contador.innerHTML = `
            <p>Faltam ${dias} dias para o Natal!</p>
        `;
        contador.style.cssText = `
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 1rem 2rem;
            border-radius: 25px;
            margin-top: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            font-weight: 600;
        `;
        heroContent.appendChild(contador);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos();
    iniciarContagemRegressiva();
    
    // Adicionar efeito de parallax suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
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
