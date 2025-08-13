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
        titulo: 'CAIXA PANETONE REDONDA',
        descricao: 'Caixa redonda personalizada para panetone. Disponível em dois tamanhos: PEQUENA (12x12x10 cm) e GRANDE (18x18x15 cm). Personalização completa com sua marca. Código: 36',
        preco: 'A partir de R$ 3,50',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 8,50', total: 'R$ 1.700,00' },
                '500': { unitario: 'R$ 5,00', total: 'R$ 2.500,00' },
                '1000': { unitario: 'R$ 3,50', total: 'R$ 3.500,00' }
            },
            grande: {
                '200': { unitario: 'R$ 15,00', total: 'R$ 3.000,00' },
                '500': { unitario: 'R$ 9,50', total: 'R$ 4.750,00' },
                '1000': { unitario: 'R$ 7,50', total: 'R$ 7.500,00' }
            }
        },
        dimensoes: {
            pequena: '12x12x10 cm',
            grande: '18x18x15 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 7,
        imagem: 'imgs/7.jpg',
        titulo: 'CAIXA PANETONE QUADRADA',
        descricao: 'Caixa quadrada personalizada para panetone. Disponível em dois tamanhos: PEQUENA (11x16,5x11 cm) e GRANDE (17x22x17 cm). Personalização completa com sua marca. Código: 36',
        preco: 'A partir de R$ 3,44',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,84', total: 'R$ 1.568,00' },
                '500': { unitario: 'R$ 4,51', total: 'R$ 2.255,00' },
                '1000': { unitario: 'R$ 3,44', total: 'R$ 3.440,00' }
            },
            grande: {
                '200': { unitario: 'R$ 13,68', total: 'R$ 2.736,00' },
                '500': { unitario: 'R$ 8,22', total: 'R$ 4.110,00' },
                '1000': { unitario: 'R$ 6,41', total: 'R$ 6.410,00' }
            }
        },
        dimensoes: {
            pequena: '11x16,5x11 cm',
            grande: '17x22x17 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 8,
        imagem: 'imgs/8.jpg',
        titulo: 'CAIXA PANETONE QUADRADA',
        descricao: 'Caixa quadrada personalizada para panetone com tampa e alça. Disponível em dois tamanhos: PEQUENA (11,5x14x11,5 cm) e GRANDE (17x21,5x17 cm). Personalização completa com sua marca. Código: 37',
        preco: 'A partir de R$ 5,65',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 13,74', total: 'R$ 2.748,00' },
                '500': { unitario: 'R$ 7,54', total: 'R$ 3.770,00' },
                '1000': { unitario: 'R$ 5,65', total: 'R$ 5.650,00' }
            },
            grande: {
                '200': { unitario: 'R$ 22,50', total: 'R$ 4.500,00' },
                '500': { unitario: 'R$ 13,66', total: 'R$ 6.830,00' },
                '1000': { unitario: 'R$ 10,90', total: 'R$ 10.900,00' }
            }
        },
        dimensoes: {
            pequena: '11,5x14x11,5 cm',
            grande: '17x21,5x17 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 9,
        imagem: 'imgs/9.jpg',
        titulo: 'CAIXA QUADRADA C/ FITA',
        descricao: 'Caixa quadrada personalizada para panetone com fita. Disponível em dois tamanhos: PEQUENA (9,5x11x9,5 cm) e GRANDE (15x17x15 cm). Personalização completa com sua marca. Código: 38',
        preco: 'A partir de R$ 3,51',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 10,39', total: 'R$ 2.078,00' },
                '500': { unitario: 'R$ 5,12', total: 'R$ 2.560,00' },
                '1000': { unitario: 'R$ 3,51', total: 'R$ 3.510,00' }
            },
            grande: {
                '200': { unitario: 'R$ 14,22', total: 'R$ 2.844,00' },
                '500': { unitario: 'R$ 8,34', total: 'R$ 4.170,00' },
                '1000': { unitario: 'R$ 6,55', total: 'R$ 6.550,00' }
            }
        },
        dimensoes: {
            pequena: '9,5x11x9,5 cm',
            grande: '15x17x15 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 10,
        imagem: 'imgs/10.jpg',
        titulo: 'CAIXA PANETONE BOLA + ALÇA',
        descricao: 'Caixa em formato de bola personalizada para panetone com alça. Disponível em dois tamanhos: PEQUENA (14x14x14 cm) e GRANDE (21x21x21 cm). Personalização completa com sua marca. Código: 40',
        preco: 'A partir de R$ 3,26',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,28', total: 'R$ 1.456,00' },
                '500': { unitario: 'R$ 4,23', total: 'R$ 2.115,00' },
                '1000': { unitario: 'R$ 3,26', total: 'R$ 3.260,00' }
            },
            grande: {
                '200': { unitario: 'R$ 13,97', total: 'R$ 2.794,00' },
                '500': { unitario: 'R$ 8,74', total: 'R$ 4.370,00' },
                '1000': { unitario: 'R$ 7,01', total: 'R$ 7.010,00' }
            }
        },
        dimensoes: {
            pequena: '14x14x14 cm',
            grande: '21x21x21 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 11,
        imagem: 'imgs/11.jpg',
        titulo: 'CAIXA PANETONE BOLA + ALÇA',
        descricao: 'Caixa em formato de bola personalizada para panetone com alça. Disponível em dois tamanhos: PEQUENA (14x14x14 cm) e GRANDE (21x21x21 cm). Personalização completa com sua marca. Código: 40',
        preco: 'A partir de R$ 3,26',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,28', total: 'R$ 1.456,00' },
                '500': { unitario: 'R$ 4,23', total: 'R$ 2.115,00' },
                '1000': { unitario: 'R$ 3,26', total: 'R$ 3.260,00' }
            },
            grande: {
                '200': { unitario: 'R$ 13,97', total: 'R$ 2.794,00' },
                '500': { unitario: 'R$ 8,74', total: 'R$ 4.370,00' },
                '1000': { unitario: 'R$ 7,01', total: 'R$ 7.010,00' }
            }
        },
        dimensoes: {
            pequena: '14x14x14 cm',
            grande: '21x21x21 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 12,
        imagem: 'imgs/12.jpg',
        titulo: 'CAIXA PANETONE QUADRADA COM ALÇA',
        descricao: 'Caixa quadrada personalizada para panetone com alça. Disponível em dois tamanhos: PEQUENA (10x12x10 cm) e GRANDE (15,5x20x15,5 cm). Personalização completa com sua marca. Código: 41',
        preco: 'A partir de R$ 3,37',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 7,28', total: 'R$ 1.456,00' },
                '500': { unitario: 'R$ 4,23', total: 'R$ 2.115,00' },
                '1000': { unitario: 'R$ 3,37', total: 'R$ 3.370,00' }
            },
            grande: {
                '200': { unitario: 'R$ 13,63', total: 'R$ 2.726,00' },
                '500': { unitario: 'R$ 8,44', total: 'R$ 4.220,00' },
                '1000': { unitario: 'R$ 6,91', total: 'R$ 6.910,00' }
            }
        },
        dimensoes: {
            pequena: '10x12x10 cm',
            grande: '15,5x20x15,5 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 13,
        imagem: 'imgs/13.jpg',
        titulo: 'CAIXA ESTRELA OU ÁRVORE',
        descricao: 'Caixa personalizada em formato de estrela ou árvore para panetone. Disponível em tamanho único: 13,8x5x12 cm. Personalização completa com sua marca. Código: 42',
        preco: 'A partir de R$ 3,16',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 9,72', total: 'R$ 1.944,00' },
                '500': { unitario: 'R$ 4,65', total: 'R$ 2.325,00' },
                '1000': { unitario: 'R$ 3,16', total: 'R$ 3.160,00' }
            }
        },
        dimensoes: {
            pequena: '13,8x5x12 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 14,
        imagem: 'imgs/14.jpg',
        titulo: 'MINI CAIXA QUADRADA C/ ABA ESTRELA',
        descricao: 'Mini caixa quadrada personalizada para panetone com aba em formato de estrela. Disponível em tamanho único: 7,5x7,5x5 cm. Personalização completa com sua marca. Código: 43',
        preco: 'A partir de R$ 1,56',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 5,34', total: 'R$ 1.068,00' },
                '500': { unitario: 'R$ 2,42', total: 'R$ 1.210,00' },
                '1000': { unitario: 'R$ 1,56', total: 'R$ 1.560,00' }
            }
        },
        dimensoes: {
            pequena: '7,5x7,5x5 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 15,
        imagem: 'imgs/15.jpg',
        titulo: 'CAIXA PANETONE GEOMÉTRICA',
        descricao: 'Caixa com design geométrico personalizada para panetone. Disponível em dois tamanhos: PEQUENA (12x12x10 cm) e GRANDE (18x18x14 cm). Personalização completa com sua marca. Código: 44',
        preco: 'A partir de R$ 3,70',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 9,20', total: 'R$ 1.840,00' },
                '500': { unitario: 'R$ 5,50', total: 'R$ 2.750,00' },
                '1000': { unitario: 'R$ 3,70', total: 'R$ 3.700,00' }
            },
            grande: {
                '200': { unitario: 'R$ 16,80', total: 'R$ 3.360,00' },
                '500': { unitario: 'R$ 10,20', total: 'R$ 5.100,00' },
                '1000': { unitario: 'R$ 8,10', total: 'R$ 8.100,00' }
            }
        },
        dimensoes: {
            pequena: '12x12x10 cm',
            grande: '18x18x14 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 16,
        imagem: 'imgs/16.jpg',
        titulo: 'CAIXA PANETONE MINIMALISTA',
        descricao: 'Caixa com design minimalista personalizada para panetone. Disponível em dois tamanhos: PEQUENA (11x11x9 cm) e GRANDE (17x17x13 cm). Personalização completa com sua marca. Código: 45',
        preco: 'A partir de R$ 3,30',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 8,20', total: 'R$ 1.640,00' },
                '500': { unitario: 'R$ 4,90', total: 'R$ 2.450,00' },
                '1000': { unitario: 'R$ 3,30', total: 'R$ 3.300,00' }
            },
            grande: {
                '200': { unitario: 'R$ 15,00', total: 'R$ 3.000,00' },
                '500': { unitario: 'R$ 9,10', total: 'R$ 4.550,00' },
                '1000': { unitario: 'R$ 7,30', total: 'R$ 7.300,00' }
            }
        },
        dimensoes: {
            pequena: '11x11x9 cm',
            grande: '17x17x13 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 17,
        imagem: 'imgs/17.jpg',
        titulo: 'CAIXA PANETONE LUXO',
        descricao: 'Caixa de luxo personalizada para panetone. Disponível em dois tamanhos: PEQUENA (14x14x12 cm) e GRANDE (20x20x17 cm). Personalização completa com sua marca. Código: 46',
        preco: 'A partir de R$ 4,50',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 11,20', total: 'R$ 2.240,00' },
                '500': { unitario: 'R$ 6,60', total: 'R$ 3.300,00' },
                '1000': { unitario: 'R$ 4,50', total: 'R$ 4.500,00' }
            },
            grande: {
                '200': { unitario: 'R$ 20,00', total: 'R$ 4.000,00' },
                '500': { unitario: 'R$ 12,20', total: 'R$ 6.100,00' },
                '1000': { unitario: 'R$ 9,80', total: 'R$ 9.800,00' }
            }
        },
        dimensoes: {
            pequena: '14x14x12 cm',
            grande: '20x20x17 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 18,
        imagem: 'imgs/18.jpg',
        titulo: 'CAIXA PANETONE PREMIUM',
        descricao: 'Caixa premium personalizada para panetone. Disponível em dois tamanhos: PEQUENA (13x13x11 cm) e GRANDE (19x19x16 cm). Personalização completa com sua marca. Código: 47',
        preco: 'A partir de R$ 4,80',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 12,00', total: 'R$ 2.400,00' },
                '500': { unitario: 'R$ 7,10', total: 'R$ 3.550,00' },
                '1000': { unitario: 'R$ 4,80', total: 'R$ 4.800,00' }
            },
            grande: {
                '200': { unitario: 'R$ 21,50', total: 'R$ 4.300,00' },
                '500': { unitario: 'R$ 13,10', total: 'R$ 6.550,00' },
                '1000': { unitario: 'R$ 10,50', total: 'R$ 10.500,00' }
            }
        },
        dimensoes: {
            pequena: '13x13x11 cm',
            grande: '19x19x16 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 19,
        imagem: 'imgs/19.jpg',
        titulo: 'CAIXA PANETONE EXCLUSIVA',
        descricao: 'Caixa exclusiva personalizada para panetone. Disponível em dois tamanhos: PEQUENA (12x12x10 cm) e GRANDE (18x18x15 cm). Personalização completa com sua marca. Código: 48',
        preco: 'A partir de R$ 5,20',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 13,00', total: 'R$ 2.600,00' },
                '500': { unitario: 'R$ 7,70', total: 'R$ 3.850,00' },
                '1000': { unitario: 'R$ 5,20', total: 'R$ 5.200,00' }
            },
            grande: {
                '200': { unitario: 'R$ 23,00', total: 'R$ 4.600,00' },
                '500': { unitario: 'R$ 14,00', total: 'R$ 7.000,00' },
                '1000': { unitario: 'R$ 11,20', total: 'R$ 11.200,00' }
            }
        },
        dimensoes: {
            pequena: '12x12x10 cm',
            grande: '18x18x15 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 20,
        imagem: 'imgs/20.jpg',
        titulo: 'CAIXA PANETONE DELUXE',
        descricao: 'Caixa deluxe personalizada para panetone. Disponível em dois tamanhos: PEQUENA (14x14x12 cm) e GRANDE (20x20x17 cm). Personalização completa com sua marca. Código: 49',
        preco: 'A partir de R$ 5,50',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 13,80', total: 'R$ 2.760,00' },
                '500': { unitario: 'R$ 8,20', total: 'R$ 4.100,00' },
                '1000': { unitario: 'R$ 5,50', total: 'R$ 5.500,00' }
            },
            grande: {
                '200': { unitario: 'R$ 24,50', total: 'R$ 4.900,00' },
                '500': { unitario: 'R$ 14,90', total: 'R$ 7.450,00' },
                '1000': { unitario: 'R$ 11,90', total: 'R$ 11.900,00' }
            }
        },
        dimensoes: {
            pequena: '14x14x12 cm',
            grande: '20x20x17 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 21,
        imagem: 'imgs/21.jpg',
        titulo: 'CAIXA PANETONE SUPREMA',
        descricao: 'Caixa suprema personalizada para panetone. Disponível em dois tamanhos: PEQUENA (13x13x11 cm) e GRANDE (19x19x16 cm). Personalização completa com sua marca. Código: 50',
        preco: 'A partir de R$ 5,80',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 14,50', total: 'R$ 2.900,00' },
                '500': { unitario: 'R$ 8,60', total: 'R$ 4.300,00' },
                '1000': { unitario: 'R$ 5,80', total: 'R$ 5.800,00' }
            },
            grande: {
                '200': { unitario: 'R$ 26,00', total: 'R$ 5.200,00' },
                '500': { unitario: 'R$ 15,80', total: 'R$ 7.900,00' },
                '1000': { unitario: 'R$ 12,60', total: 'R$ 12.600,00' }
            }
        },
        dimensoes: {
            pequena: '13x13x11 cm',
            grande: '19x19x16 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 22,
        imagem: 'imgs/22.jpg',
        titulo: 'CAIXA PANETONE IMPERIAL',
        descricao: 'Caixa imperial personalizada para panetone. Disponível em dois tamanhos: PEQUENA (15x15x13 cm) e GRANDE (21x21x18 cm). Personalização completa com sua marca. Código: 51',
        preco: 'A partir de R$ 6,20',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 15,50', total: 'R$ 3.100,00' },
                '500': { unitario: 'R$ 9,20', total: 'R$ 4.600,00' },
                '1000': { unitario: 'R$ 6,20', total: 'R$ 6.200,00' }
            },
            grande: {
                '200': { unitario: 'R$ 28,00', total: 'R$ 5.600,00' },
                '500': { unitario: 'R$ 17,00', total: 'R$ 8.500,00' },
                '1000': { unitario: 'R$ 13,50', total: 'R$ 13.500,00' }
            }
        },
        dimensoes: {
            pequena: '15x15x13 cm',
            grande: '21x21x18 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    },
    {
        id: 23,
        imagem: 'imgs/23.jpg',
        titulo: 'CAIXA PANETONE ROYAL',
        descricao: 'Caixa royal personalizada para panetone. Disponível em dois tamanhos: PEQUENA (14x14x12 cm) e GRANDE (20x20x17 cm). Personalização completa com sua marca. Código: 52',
        preco: 'A partir de R$ 6,50',
        categoria: 'Embalagens',
        precos: {
            pequena: {
                '200': { unitario: 'R$ 16,20', total: 'R$ 3.240,00' },
                '500': { unitario: 'R$ 9,60', total: 'R$ 4.800,00' },
                '1000': { unitario: 'R$ 6,50', total: 'R$ 6.500,00' }
            },
            grande: {
                '200': { unitario: 'R$ 29,50', total: 'R$ 5.900,00' },
                '500': { unitario: 'R$ 17,90', total: 'R$ 8.950,00' },
                '1000': { unitario: 'R$ 14,20', total: 'R$ 14.200,00' }
            }
        },
        dimensoes: {
            pequena: '14x14x12 cm',
            grande: '20x20x17 cm'
        },
        pagamento: 'PARCELE 5x SEM JUROS'
    }
];

// Elementos do DOM
let produtosContainer;
let modal;
let modalImage;
let modalTitle;
let modalDescription;
let modalPrice;
let modalPriceTable;
let modalPaymentInfo;
let closeModal;

// Função para inicializar elementos do DOM
function inicializarElementos() {
    console.log('Inicializando elementos do DOM...');
    produtosContainer = document.getElementById('produtosContainer');
    modal = document.getElementById('productModal');
    modalImage = document.getElementById('modalImage');
    modalTitle = document.getElementById('modalTitle');
    modalDescription = document.getElementById('modalDescription');
    modalPrice = document.getElementById('modalPrice');
    modalPriceTable = document.getElementById('modalPriceTable');
    modalPaymentInfo = document.getElementById('modalPaymentInfo');
    closeModal = document.querySelector('.close');
    
    console.log('produtosContainer:', produtosContainer);
    console.log('modal:', modal);
}

// Carregar produtos na página
function carregarProdutos() {
    console.log('Carregando produtos...');
    console.log('produtosContainer:', produtosContainer);
    console.log('produtos:', produtos);
    
    if (!produtosContainer) {
        console.error('produtosContainer não encontrado!');
        return;
    }
    
    produtosContainer.innerHTML = '';
    
    produtos.forEach((produto, index) => {
        console.log(`Criando produto ${index + 1}:`, produto.titulo);
        
        const produtoSection = document.createElement('section');
        produtoSection.className = 'produto-section';
        produtoSection.style.backgroundImage = `url(${produto.imagem})`;
        
        // Extrair código do produto da descrição
        const codigoMatch = produto.descricao.match(/Código: (\d+)/);
        const codigo = codigoMatch ? codigoMatch[1] : '';
        
        // Determinar dimensões para exibição
        let dimensoesTexto = '';
        if (produto.dimensoes.grande) {
            dimensoesTexto = `PEQUENA: ${produto.dimensoes.pequena} | GRANDE: ${produto.dimensoes.grande}`;
        } else {
            dimensoesTexto = produto.dimensoes.pequena;
        }
        
        // Criar tabela de preços para exibição
        let priceTableHTML = '';
        if (produto.precos) {
            priceTableHTML = `
                <div class="price-table">
                    <h3>Tabela de Preços</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Quantidade</th>
                                <th>Valor Unitário</th>
                                <th>Valor Total</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            
            // Adicionar preços PEQUENA
            if (produto.precos.pequena) {
                for (const qtd in produto.precos.pequena) {
                    const { unitario, total } = produto.precos.pequena[qtd];
                    priceTableHTML += `
                        <tr>
                            <td>${qtd} unidades</td>
                            <td>${unitario}</td>
                            <td>${total}</td>
                        </tr>
                    `;
                }
            }
            
            priceTableHTML += `
                        </tbody>
                    </table>
                </div>
            `;
        }
        
        produtoSection.innerHTML = `
            <div class="produto-info">
                <h2>${produto.titulo}</h2>
                <div class="codigo">Código: ${codigo}</div>
                <div class="dimensoes">Dimensões: ${dimensoesTexto}</div>
                ${priceTableHTML}
                <div class="payment-info">${produto.pagamento}</div>
                <button class="btn-details" onclick="abrirModal(${produto.id})">Ver Detalhes</button>
            </div>
        `;
        
        produtosContainer.appendChild(produtoSection);
        console.log(`Produto ${index + 1} criado com sucesso`);
    });
    
    console.log('Todos os produtos foram carregados');
}

// Abrir modal do produto
function abrirModal(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (produto) {
        modalImage.src = produto.imagem;
        modalImage.alt = produto.titulo;
        modalTitle.textContent = produto.titulo;
        modalDescription.textContent = produto.descricao;
        
        // Clear previous content
        modalPrice.innerHTML = '';
        modalPriceTable.innerHTML = '';
        modalPaymentInfo.innerHTML = '';

        // Verificar se é o produto da caixa de panetone para mostrar tabela de preços
        if (produto.precos) {
            let precosHTML = `
                <div class="price-table">
                    <h4>Tabela de Preços</h4>
                    <div class="price-sections">
            `;
            
            // Add PEQUENA section if available
            if (produto.precos.pequena) {
                precosHTML += `
                        <div class="price-section">
                            <h5>${produto.dimensoes.grande ? 'PEQUENA' : ''} (${produto.dimensoes.pequena})</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qtd</th>
                                        <th>Unit.</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                `;
                for (const qtd in produto.precos.pequena) {
                    const { unitario, total } = produto.precos.pequena[qtd];
                    precosHTML += `
                                    <tr>
                                        <td>${qtd}</td>
                                        <td>${unitario}</td>
                                        <td>${total}</td>
                                    </tr>
                    `;
                }
                precosHTML += `
                                </tbody>
                            </table>
                        </div>
                `;
            }
            
            // Add GRANDE section if available
            if (produto.precos.grande && produto.dimensoes.grande) {
                precosHTML += `
                        <div class="price-section">
                            <h5>GRANDE (${produto.dimensoes.grande})</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qtd</th>
                                        <th>Unit.</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                `;
                for (const qtd in produto.precos.grande) {
                    const { unitario, total } = produto.precos.grande[qtd];
                    precosHTML += `
                                    <tr>
                                        <td>${qtd}</td>
                                        <td>${unitario}</td>
                                        <td>${total}</td>
                                    </tr>
                    `;
                }
                precosHTML += `
                                </tbody>
                            </table>
                        </div>
                `;
            }
            
            precosHTML += `
                    </div>
                    <div class="payment-info">${produto.pagamento}</div>
                </div>
            `;
            modalPriceTable.innerHTML = precosHTML;
            modalPrice.textContent = ''; // Clear the general price if detailed table is shown
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

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, inicializando...');
    inicializarElementos();
    carregarProdutos();
    
    // Event listeners
    if (closeModal) {
        closeModal.addEventListener('click', fecharModal);
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            fecharModal();
        }
    });
    
    console.log('Inicialização concluída');
});

// Fallback para garantir que a função seja chamada
window.addEventListener('load', function() {
    console.log('Página completamente carregada');
    if (!produtosContainer || produtosContainer.children.length === 0) {
        console.log('Tentando carregar produtos novamente...');
        inicializarElementos();
        carregarProdutos();
    }
});
