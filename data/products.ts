import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: {
      en: 'Wireless Gaming Mouse',
      es: 'Ratón Gaming Inalámbrico',
      pt: 'Mouse Gamer Sem Fio'
    },
    description: {
      en: 'High-precision wireless gaming mouse with RGB lighting, 16000 DPI, and programmable buttons. Perfect for professional gamers.',
      es: 'Ratón gaming inalámbrico de alta precisión con iluminación RGB, 16000 DPI y botones programables. Perfecto para jugadores profesionales.',
      pt: 'Mouse gamer sem fio de alta precisão com iluminação RGB, 16000 DPI e botões programáveis. Perfeito para jogadores profissionais.'
    },
    category: {
      en: 'Gaming Peripherals',
      es: 'Periféricos Gaming',
      pt: 'Periféricos para Jogos'
    },
    price: 79.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    stock: 45,
    rating: 4.8,
    reviews: 234,
    features: [
      { en: '16000 DPI sensor', es: 'Sensor de 16000 DPI', pt: 'Sensor de 16000 DPI' },
      { en: 'RGB lighting', es: 'Iluminación RGB', pt: 'Iluminação RGB' },
      { en: 'Rechargeable battery', es: 'Batería recargable', pt: 'Bateria recarregável' },
      { en: '8 programmable buttons', es: '8 botones programables', pt: '8 botões programáveis' }
    ]
  },
  {
    id: 2,
    name: {
      en: 'Mechanical Keyboard RGB',
      es: 'Teclado Mecánico RGB',
      pt: 'Teclado Mecânico RGB'
    },
    description: {
      en: 'Premium mechanical keyboard with customizable RGB backlighting, Cherry MX switches, and aluminum frame.',
      es: 'Teclado mecánico premium con retroiluminación RGB personalizable, switches Cherry MX y marco de aluminio.',
      pt: 'Teclado mecânico premium com retroiluminação RGB personalizável, switches Cherry MX e estrutura de alumínio.'
    },
    category: {
      en: 'Gaming Peripherals',
      es: 'Periféricos Gaming',
      pt: 'Periféricos para Jogos'
    },
    price: 149.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    stock: 32,
    rating: 4.9,
    reviews: 456,
    features: [
      { en: 'Cherry MX Red switches', es: 'Switches Cherry MX Red', pt: 'Switches Cherry MX Red' },
      { en: 'Full RGB customization', es: 'Personalización RGB completa', pt: 'Personalização RGB completa' },
      { en: 'Aluminum frame', es: 'Marco de aluminio', pt: 'Estrutura de alumínio' },
      { en: 'N-key rollover', es: 'N-key rollover', pt: 'N-key rollover' }
    ]
  },
  {
    id: 3,
    name: {
      en: '27" 4K Gaming Monitor',
      es: 'Monitor Gaming 4K 27"',
      pt: 'Monitor Gamer 4K 27"'
    },
    description: {
      en: 'Ultra HD 4K gaming monitor with 144Hz refresh rate, 1ms response time, and HDR support for immersive gaming.',
      es: 'Monitor gaming Ultra HD 4K con tasa de refresco de 144Hz, tiempo de respuesta de 1ms y soporte HDR para gaming inmersivo.',
      pt: 'Monitor gamer Ultra HD 4K com taxa de atualização de 144Hz, tempo de resposta de 1ms e suporte HDR para jogos imersivos.'
    },
    category: {
      en: 'Monitors',
      es: 'Monitores',
      pt: 'Monitores'
    },
    price: 499.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
    stock: 18,
    rating: 4.7,
    reviews: 189,
    features: [
      { en: '4K UHD resolution', es: 'Resolución 4K UHD', pt: 'Resolução 4K UHD' },
      { en: '144Hz refresh rate', es: 'Tasa de refresco 144Hz', pt: 'Taxa de atualização 144Hz' },
      { en: '1ms response time', es: 'Tiempo de respuesta 1ms', pt: 'Tempo de resposta 1ms' },
      { en: 'HDR10 support', es: 'Soporte HDR10', pt: 'Suporte HDR10' }
    ]
  },
  {
    id: 4,
    name: {
      en: 'Wireless Noise-Canceling Headphones',
      es: 'Auriculares Inalámbricos con Cancelación de Ruido',
      pt: 'Fones de Ouvido Sem Fio com Cancelamento de Ruído'
    },
    description: {
      en: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality.',
      es: 'Auriculares inalámbricos premium con cancelación activa de ruido, 30 horas de batería y calidad de sonido excepcional.',
      pt: 'Fones de ouvido sem fio premium com cancelamento ativo de ruído, 30 horas de bateria e qualidade de som excepcional.'
    },
    category: {
      en: 'Audio',
      es: 'Audio',
      pt: 'Áudio'
    },
    price: 299.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    stock: 56,
    rating: 4.9,
    reviews: 678,
    features: [
      { en: 'Active noise cancellation', es: 'Cancelación activa de ruido', pt: 'Cancelamento ativo de ruído' },
      { en: '30-hour battery', es: 'Batería de 30 horas', pt: 'Bateria de 30 horas' },
      { en: 'Premium sound quality', es: 'Calidad de sonido premium', pt: 'Qualidade de som premium' },
      { en: 'Comfortable design', es: 'Diseño cómodo', pt: 'Design confortável' }
    ]
  },
  {
    id: 5,
    name: {
      en: 'USB-C Docking Station',
      es: 'Estación de Acoplamiento USB-C',
      pt: 'Estação de Acoplamento USB-C'
    },
    description: {
      en: 'Multi-port USB-C docking station with dual 4K display support, 100W power delivery, and multiple connectivity options.',
      es: 'Estación de acoplamiento USB-C multipuerto con soporte para doble pantalla 4K, entrega de energía de 100W y múltiples opciones de conectividad.',
      pt: 'Estação de acoplamento USB-C multiporta com suporte para duas telas 4K, entrega de energia de 100W e várias opções de conectividade.'
    },
    category: {
      en: 'Accessories',
      es: 'Accesorios',
      pt: 'Acessórios'
    },
    price: 189.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
    stock: 28,
    rating: 4.6,
    reviews: 145,
    features: [
      { en: 'Dual 4K display support', es: 'Soporte para doble pantalla 4K', pt: 'Suporte para duas telas 4K' },
      { en: '100W power delivery', es: 'Entrega de energía de 100W', pt: 'Entrega de energia de 100W' },
      { en: 'Multiple USB ports', es: 'Múltiples puertos USB', pt: 'Múltiplas portas USB' },
      { en: 'Ethernet port', es: 'Puerto Ethernet', pt: 'Porta Ethernet' }
    ]
  },
  {
    id: 6,
    name: {
      en: 'External SSD 2TB',
      es: 'SSD Externo 2TB',
      pt: 'SSD Externo 2TB'
    },
    description: {
      en: 'Ultra-fast external SSD with 2TB storage, USB 3.2 Gen 2 interface, and transfer speeds up to 1050MB/s.',
      es: 'SSD externo ultrarrápido con 2TB de almacenamiento, interfaz USB 3.2 Gen 2 y velocidades de transferencia de hasta 1050MB/s.',
      pt: 'SSD externo ultrarrápido com 2TB de armazenamento, interface USB 3.2 Gen 2 e velocidades de transferência de até 1050MB/s.'
    },
    category: {
      en: 'Storage',
      es: 'Almacenamiento',
      pt: 'Armazenamento'
    },
    price: 249.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500',
    stock: 62,
    rating: 4.8,
    reviews: 312,
    features: [
      { en: '2TB capacity', es: 'Capacidad de 2TB', pt: 'Capacidade de 2TB' },
      { en: '1050MB/s read speed', es: 'Velocidad de lectura 1050MB/s', pt: 'Velocidade de leitura 1050MB/s' },
      { en: 'Compact design', es: 'Diseño compacto', pt: 'Design compacto' },
      { en: 'Password protection', es: 'Protección por contraseña', pt: 'Proteção por senha' }
    ]
  },
  {
    id: 7,
    name: {
      en: 'Smart Watch Pro',
      es: 'Reloj Inteligente Pro',
      pt: 'Relógio Inteligente Pro'
    },
    description: {
      en: 'Advanced smartwatch with fitness tracking, heart rate monitoring, GPS, and 7-day battery life.',
      es: 'Reloj inteligente avanzado con seguimiento de fitness, monitoreo de frecuencia cardíaca, GPS y batería de 7 días.',
      pt: 'Relógio inteligente avançado com rastreamento de fitness, monitoramento de frequência cardíaca, GPS e bateria de 7 dias.'
    },
    category: {
      en: 'Wearables',
      es: 'Wearables',
      pt: 'Vestíveis'
    },
    price: 349.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    stock: 41,
    rating: 4.7,
    reviews: 523,
    features: [
      { en: 'Advanced fitness tracking', es: 'Seguimiento avanzado de fitness', pt: 'Rastreamento avançado de fitness' },
      { en: 'Heart rate monitor', es: 'Monitor de frecuencia cardíaca', pt: 'Monitor de frequência cardíaca' },
      { en: 'GPS navigation', es: 'Navegación GPS', pt: 'Navegação GPS' },
      { en: '7-day battery', es: 'Batería de 7 días', pt: 'Bateria de 7 dias' }
    ]
  },
  {
    id: 8,
    name: {
      en: 'Webcam 4K Pro',
      es: 'Webcam 4K Pro',
      pt: 'Webcam 4K Pro'
    },
    description: {
      en: 'Professional 4K webcam with autofocus, dual microphones, and excellent low-light performance for streaming and video calls.',
      es: 'Webcam 4K profesional con autoenfoque, micrófonos duales y excelente rendimiento en poca luz para streaming y videollamadas.',
      pt: 'Webcam 4K profissional com autofoco, microfones duplos e excelente desempenho em baixa luminosidade para streaming e videochamadas.'
    },
    category: {
      en: 'Accessories',
      es: 'Accesorios',
      pt: 'Acessórios'
    },
    price: 129.99,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500',
    stock: 33,
    rating: 4.6,
    reviews: 287,
    features: [
      { en: '4K video quality', es: 'Calidad de video 4K', pt: 'Qualidade de vídeo 4K' },
      { en: 'Autofocus', es: 'Autoenfoque', pt: 'Autofoco' },
      { en: 'Dual microphones', es: 'Micrófonos duales', pt: 'Microfones duplos' },
      { en: 'Low-light correction', es: 'Corrección en poca luz', pt: 'Correção de baixa luminosidade' }
    ]
  }
];
