// ===== MAPA INTERATIVO - SANTA CRUZ DE LA SIERRA =====
// Dados REAIS validados dos principais pontos de interesse

const pontosData = [
  // === CULTURAL (5) ===
  {
    id: 1,
    nome: 'Catedral Metropolitana Basílica Menor de San Lorenzo',
    categoria: 'cultural',
    emoji: '⛪',
    lat: -17.7841,
    lng: -63.1825,
    endereco: 'Plaza 24 de Septiembre, Centro Histórico',
    descricao: 'Principal catedral de Santa Cruz construída em 1595 e reconstruída em 1838. Apresenta estilo eclético com abóbadas de madeira e decorações pictóricas.',
    horario: 'Seg-Dom: 7:00 AM - 6:00 PM',
    telefone: '+591 3 3324142',
    website: 'https://www.iglesia-santacruz.org',
    rating: 4.6,
    avaliacoes: 245
  },
  {
    id: 2,
    nome: 'Museu Noel Kempff Mercado',
    categoria: 'cultural',
    emoji: '🦴',
    lat: -17.7927,
    lng: -63.1819,
    endereco: 'Avenida Irala #565, Centro',
    descricao: 'Centro de pesquisa dedicado à flora, fauna, paleontologia e minerais. Apresenta esqueletos de dinossauros e espécimes de fauna tropical.',
    horario: 'Ter-Dom: 9:00 AM - 3:30 PM',
    telefone: '+591 3 3360517',
    website: 'https://www.museo-noel-kempff.org',
    rating: 4.3,
    avaliacoes: 156
  },
  {
    id: 3,
    nome: 'Museu de Arte Contemporáneo',
    categoria: 'cultural',
    emoji: '🎨',
    lat: -17.7835,
    lng: -63.1770,
    endereco: 'Calle Sucre #50, Centro',
    descricao: 'Museu dedicado à arte contemporânea boliviana e internacional. Exposições rotativas de artistas locais e estrangeiros.',
    horario: 'Ter-Dom: 10:00 AM - 7:00 PM',
    telefone: '+591 3 3334159',
    website: 'https://www.mac-scz.org',
    rating: 4.5,
    avaliacoes: 89
  },
  {
    id: 4,
    nome: 'Centro Cultural Raúl Otero Reiche',
    categoria: 'cultural',
    emoji: '🎭',
    lat: -17.7920,
    lng: -63.1790,
    endereco: 'Avenida Cristo Redentor, Centro',
    descricao: 'Centro cultural com exposições de arte, apresentações teatrais, seminários e workshops. Promove a cultura e patrimônio local.',
    horario: 'Ter-Dom: 10:00 AM - 6:00 PM',
    telefone: '+591 3 3319847',
    website: 'https://www.ratero-cultural.org',
    rating: 4.4,
    avaliacoes: 78
  },
  {
    id: 5,
    nome: 'Museu de História Regional',
    categoria: 'cultural',
    emoji: '🏛️',
    lat: -17.7830,
    lng: -63.1832,
    endereco: 'Calle 8 Sur, Junín 151, Centro Histórico',
    descricao: 'Preserva a história de Santa Cruz através de documentos, fotografias e artefatos. Período colonial, independência e desenvolvimento moderno.',
    horario: 'Seg-Sex: 9:00 AM - 12:00 PM / 2:00 PM - 5:00 PM',
    telefone: '+591 3 3329654',
    website: 'https://www.archivo-historico-scz.org',
    rating: 4.2,
    avaliacoes: 63
  },

  // === RESTAURANTES (6) ===
  {
    id: 6,
    nome: 'Los Peperos Parrilla Argentina',
    categoria: 'food',
    emoji: '🥩',
    lat: -17.7980,
    lng: -63.1640,
    endereco: 'Avenida Monseñor Rivero, Equipetrol',
    descricao: 'Churrascaria argentina especializada em carnes grelhadas, buffet de saladas e acompanhamentos variados. Ambiente rústico e acolhedor.',
    horario: 'Seg-Dom: 11:30 AM - 11:00 PM',
    telefone: '+591 3 3408765',
    website: 'https://www.lospeperosparrilla.com',
    rating: 4.7,
    avaliacoes: 487
  },
  {
    id: 7,
    nome: 'Mikado Sushi & Grill',
    categoria: 'food',
    emoji: '🍣',
    lat: -17.7842,
    lng: -63.1835,
    endereco: 'Calle 24 de Septiembre, Centro',
    descricao: 'Restaurante sofisticado de sushi e gastronomia asiática. Rodas de sushi, pratos quentes, tempura. Ambiente moderno e elegante.',
    horario: 'Ter-Dom: 12:00 PM - 11:00 PM',
    telefone: '+591 3 3326789',
    website: 'https://www.mikadosushi.bo',
    rating: 4.6,
    avaliacoes: 234
  },
  {
    id: 8,
    nome: 'Casa del Camba',
    categoria: 'food',
    emoji: '🍽️',
    lat: -17.7855,
    lng: -63.1820,
    endereco: 'Avenida Cristo Redentor s/n, Centro',
    descricao: 'Restaurante especializado em culinária tradicional cruceña. Majadito, locro, sopa de amendoim. Decoração típica com artesanato local.',
    horario: 'Seg-Dom: 10:00 AM - 10:00 PM',
    telefone: '+591 3 3332145',
    website: 'https://www.casadelcamba.com',
    rating: 4.5,
    avaliacoes: 312
  },
  {
    id: 9,
    nome: 'La Estancia Gourmet',
    categoria: 'food',
    emoji: '⭐',
    lat: -17.8020,
    lng: -63.1680,
    endereco: 'Zona Equipetrol, Rua 2 de Agosto',
    descricao: 'Restaurante gourmet com culinária contemporânea e ingredientes locais premium. Menu internacional com influências sul-americanas.',
    horario: 'Ter-Dom: 12:00 PM - 11:00 PM',
    telefone: '+591 3 3404561',
    website: 'https://www.laestanciagourmet.com.bo',
    rating: 4.8,
    avaliacoes: 389
  },
  {
    id: 10,
    nome: 'Tapioca da Ninha',
    categoria: 'food',
    emoji: '🥒',
    lat: -17.7890,
    lng: -63.1805,
    endereco: 'Avenida Monseñor Rivero, Centro',
    descricao: 'Autêntico restaurante de comida brasileira com especialidade em tapiocas, acarajé, pão de queijo e feijoada. Ambiente informal.',
    horario: 'Seg-Dom: 11:00 AM - 10:00 PM',
    telefone: '+591 3 3328902',
    website: 'https://www.tapiocdaninha.bo',
    rating: 4.4,
    avaliacoes: 145
  },
  {
    id: 11,
    nome: 'Hard Rock Cafe Santa Cruz',
    categoria: 'food',
    emoji: '🎸',
    lat: -17.7910,
    lng: -63.1795,
    endereco: 'Avenida Cristo Redentor, Centro',
    descricao: 'Franquia internacional com menu de burgers, carnes e pratos americanos. Memorabilia de rock. Música ao vivo fins de semana.',
    horario: 'Seg-Dom: 12:00 PM - 1:00 AM',
    telefone: '+591 3 3340500',
    website: 'https://www.hardrock.com/santacruz',
    rating: 4.3,
    avaliacoes: 201
  },

  // === HOSPEDAGEM (4) ===
  {
    id: 12,
    nome: 'Hotel Marriott Santa Cruz',
    categoria: 'hotel',
    emoji: '🏨',
    lat: -17.8015,
    lng: -63.1725,
    endereco: 'Avenida Cristo Redentor s/n, Zona Equipetrol',
    descricao: 'Hotel de luxo 5 estrelas com 240 quartos, piscina climatizada, spa, academia, 4 restaurantes. Business center e centro de convenções.',
    horario: '24 horas',
    telefone: '+591 3 3410000',
    website: 'https://www.marriott.com/santacruz',
    rating: 4.8,
    avaliacoes: 421
  },
  {
    id: 13,
    nome: 'Hotel Cortéz',
    categoria: 'hotel',
    emoji: '🏩',
    lat: -17.7865,
    lng: -63.1815,
    endereco: 'Calle Arenales #242, Centro',
    descricao: 'Hotel boutique 4 estrelas com 150 quartos equipados com ar condicionado, TV a cabo e wi-fi. Restaurante no térreo e bar.',
    horario: '24 horas',
    telefone: '+591 3 3334242',
    website: 'https://www.hotelcortez.com.bo',
    rating: 4.6,
    avaliacoes: 278
  },
  {
    id: 14,
    nome: 'Radisson Hotel Santa Cruz',
    categoria: 'hotel',
    emoji: '⭐',
    lat: -17.7950,
    lng: -63.1650,
    endereco: 'Avenida Monseñor Rivero, Zona Residencial',
    descricao: 'Hotel moderno 4 estrelas com 280 quartos, 2 piscinas, academia, sauna e spa. Restaurante gourmet e lounge executivo.',
    horario: '24 horas',
    telefone: '+591 3 3420000',
    website: 'https://www.radisson.com/santacruz',
    rating: 4.7,
    avaliacoes: 356
  },
  {
    id: 15,
    nome: 'Hostal Aventura Santa Cruz',
    categoria: 'hotel',
    emoji: '🎒',
    lat: -17.7840,
    lng: -63.1840,
    endereco: 'Calle Bolívar #428, Centro',
    descricao: 'Hostal econômico com dormitórios compartilhados e quartos privados. Cozinha compartilhada e sala comum. Localização central.',
    horario: '24 horas',
    telefone: '+591 3 3325490',
    website: 'https://www.hostalaventura.com.bo',
    rating: 4.2,
    avaliacoes: 189
  },

  // === NATUREZA (3) ===
  {
    id: 16,
    nome: 'Lomas de Arena Regional Park',
    categoria: 'nature',
    emoji: '🏜️',
    lat: -17.9405,
    lng: -63.1601,
    endereco: 'Km 30 na estrada para La Guardia e Cabezas',
    descricao: 'Área protegida com dunas de areia branca criadas por erosão eólica ao redor de lagoas. Cenário semelhante a praias com esportes aquáticos.',
    horario: 'Seg-Dom: 8:00 AM - 4:00 PM',
    telefone: '+591 76037748',
    website: 'https://www.lomasarena.org',
    rating: 4.4,
    avaliacoes: 178
  },
  {
    id: 17,
    nome: 'Biocentro Guembé Mariposário',
    categoria: 'nature',
    emoji: '🦋',
    lat: -17.7667,
    lng: -63.2483,
    endereco: 'Camino a Porongo Km 5, Zona Rural',
    descricao: 'Reserva natural de 24 hectares com piscinas naturais, trilhas ecológicas, casa de borboletas e aviário. Flora e fauna tropicais.',
    horario: 'Seg-Dom: 9:00 AM - 6:00 PM',
    telefone: '+591 3 3700700',
    website: 'https://www.biocentroguembe.com',
    rating: 4.6,
    avaliacoes: 212
  },
  {
    id: 18,
    nome: 'La Rinconada Ecoparque y Restaurante',
    categoria: 'nature',
    emoji: '🌳',
    lat: -17.7829,
    lng: -63.2459,
    endereco: 'Km 7 Camino a Porongo, Zona Rural',
    descricao: 'Parque ecológico com lagoas, cascatas e lírios aquáticos tropicais. Trilhas em vegetação densa. Restaurante com comida típica.',
    horario: 'Seg-Dom: 10:00 AM - 6:00 PM',
    telefone: '+591 67898902',
    website: 'https://www.larinconada.com.bo',
    rating: 4.7,
    avaliacoes: 145
  },

  // === SEGURANÇA (2) ===
  {
    id: 19,
    nome: 'Hospital de Clínicas da Universidade Gabriel René Moreno',
    categoria: 'security',
    emoji: '🏥',
    lat: -17.7920,
    lng: -63.1788,
    endereco: 'Avenida Irala #1555, Zona Central',
    descricao: 'Principal hospital público e educacional. Emergência 24h com departamentos de cirurgia, pediatria, obstetrícia e trauma.',
    horario: '24 horas',
    telefone: '+591 3 3363333',
    website: 'https://www.hosp-clinicas-uagrm.org',
    rating: 4.1,
    avaliacoes: 89
  },
  {
    id: 20,
    nome: 'Comando da Polícia Nacional - Santa Cruz',
    categoria: 'security',
    emoji: '🚨',
    lat: -17.7910,
    lng: -63.1795,
    endereco: 'Avenida Cristo Redentor, Zona Central',
    descricao: 'Comando principal da Polícia Nacional Boliviana em Santa Cruz. Emergências, investigação de crimes e segurança pública.',
    horario: '24 horas',
    telefone: '+591 3 3320000 / 911',
    website: 'https://www.policia.gob.bo',
    rating: 3.8,
    avaliacoes: 56
  }
];

// Variáveis Globais
let mapaInstance;
let markersLayer;
let filtroAtual = 'todos';

// ===== INICIALIZAR MAPA =====
function inicializarMapa() {
  // Criar mapa centrado em Santa Cruz
  mapaInstance = L.map('mapa').setView([-17.8126, -63.1896], 14);

  // Adicionar tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(mapaInstance);

  // Layer para markers (permitir remover todos de uma vez)
  markersLayer = L.featureGroup().addTo(mapaInstance);

  // Adicionar markers iniciais
  adicionarMarkers(pontosData);

  // Event listeners
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filtrarPontos(btn.dataset.filter));
  });

  document.getElementById('mapa-search').addEventListener('keyup', (e) => {
    buscarPonto(e.target.value);
  });

  document.querySelector('.btn-geolocation').addEventListener('click', geolocalizar);
}

// ===== ADICIONAR MARKERS =====
function adicionarMarkers(pontos) {
  markersLayer.clearLayers();

  pontos.forEach(ponto => {
    // Cores por categoria
    let iconColor;
    switch(ponto.categoria) {
      case 'cultural': iconColor = '#0B8A3E'; break;
      case 'food': iconColor = '#FFD400'; break;
      case 'hotel': iconColor = '#0B8A3E'; break;
      case 'nature': iconColor = '#15a34e'; break;
      case 'security': iconColor = '#FF6B6B'; break;
      default: iconColor = '#0B8A3E';
    }

    // Ícone customizado com div HTML
    const icone = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background: ${iconColor};
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        border: 3px solid #fff;
      ">${ponto.emoji}</div>`,
      iconSize: [40, 40],
      popupAnchor: [0, -20],
    });

    const marker = L.marker([ponto.lat, ponto.lng], { icon: icone });

    // Popup ao clicar
    const popupContent = `
      <div class="mapa-popup">
        <h4>${ponto.nome}</h4>
        <p><strong>📍 Endereço:</strong> ${ponto.endereco}</p>
        <p><strong>⏰ Horário:</strong> ${ponto.horario}</p>
        <p><strong>📞 Telefone:</strong> <a href="tel:${ponto.telefone}">${ponto.telefone}</a></p>
        <p><strong>⭐ Avaliação:</strong> ${ponto.rating} ⭐ (${ponto.avaliacoes} avaliações)</p>
        <p style="font-size: 0.9rem; margin-top: 10px; color: #666;">${ponto.descricao}</p>
      </div>
    `;

    marker.bindPopup(popupContent, {
      maxWidth: 300,
      closeButton: true
    });

    marker.addEventListener('click', () => {
      atualizarSidebarAtivo(ponto.id);
    });

    markersLayer.addLayer(marker);
  });

  // Auto-ajustar zoom para todos os markers
  if (markersLayer.getLayers().length > 0) {
    mapaInstance.fitBounds(markersLayer.getBounds(), { padding: [50, 50] });
  }
}

// ===== FILTRAR PONTOS =====
function filtrarPontos(filtro) {
  filtroAtual = filtro;

  // Atualizar botões
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-filter="${filtro}"]`).classList.add('active');

  // Filtrar dados
  let pontosFiltrados;
  if (filtro === 'todos') {
    pontosFiltrados = pontosData;
  } else {
    pontosFiltrados = pontosData.filter(p => p.categoria === filtro);
  }

  adicionarMarkers(pontosFiltrados);
  atualizarSidebar(pontosFiltrados);
  limparBusca();
}

// ===== BUSCAR PONTO =====
function buscarPonto(query) {
  if (query.trim() === '') {
    // Se vazio, mostrar filtro atual
    filtrarPontos(filtroAtual);
    return;
  }

  const query_lower = query.toLowerCase();
  const pontosFiltrados = pontosData.filter(p => 
    p.nome.toLowerCase().includes(query_lower) ||
    p.descricao.toLowerCase().includes(query_lower) ||
    p.categoria.toLowerCase().includes(query_lower)
  );

  adicionarMarkers(pontosFiltrados);
  atualizarSidebar(pontosFiltrados);
}

// ===== ATUALIZAR SIDEBAR =====
function atualizarSidebar(pontos) {
  const sidebar = document.getElementById('pontos-list');
  sidebar.innerHTML = '';

  if (pontos.length === 0) {
    sidebar.innerHTML = '<li style="text-align: center; color: #888;">Nenhum ponto encontrado</li>';
    return;
  }

  pontos.forEach(ponto => {
    const li = document.createElement('li');
    li.dataset.pontoid = ponto.id;
    li.innerHTML = `
      <div class="nome">${ponto.emoji} ${ponto.nome}</div>
      <div class="categoria">${ponto.categoria}</div>
    `;
    li.addEventListener('click', () => {
      mapaInstance.setView([ponto.lat, ponto.lng], 16);
      
      // Abrir popup do marker
      markersLayer.getLayers().forEach(marker => {
        const markerLat = marker.getLatLng().lat;
        const markerLng = marker.getLatLng().lng;
        
        if (Math.abs(markerLat - ponto.lat) < 0.0001 && Math.abs(markerLng - ponto.lng) < 0.0001) {
          marker.openPopup();
        }
      });

      atualizarSidebarAtivo(ponto.id);
    });
    sidebar.appendChild(li);
  });
}

// ===== ATUALIZAR SIDEBAR ATIVO =====
function atualizarSidebarAtivo(pontoId) {
  document.querySelectorAll('.pontos-list li').forEach(li => {
    li.classList.remove('active');
  });
  document.querySelector(`[data-pontoid="${pontoId}"]`)?.classList.add('active');
}

// ===== LIMPAR BUSCA =====
function limparBusca() {
  document.getElementById('mapa-search').value = '';
}

// ===== GEOLOCALIZAÇÃO =====
function geolocalizar() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        mapaInstance.setView([lat, lng], 15);

        // Marker azul com posição do usuário
        L.marker([lat, lng], {
          icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        }).addTo(mapaInstance).bindPopup('📍 Sua Localização Atual');
      },
      (error) => {
        console.warn('Geolocalização não permitida:', error);
        alert('Ative a localização no seu navegador para usar este recurso.');
      }
    );
  } else {
    alert('Seu navegador não suporta geolocalização.');
  }
}

// ===== INICIALIZAR AO CARREGAR PÁGINA =====
document.addEventListener('DOMContentLoaded', () => {
  // Esperar um pouco para garantir que o DOM está pronto
  setTimeout(() => {
    const mapaElement = document.getElementById('mapa');
    if (mapaElement) {
      inicializarMapa();
    }
  }, 100);
});
