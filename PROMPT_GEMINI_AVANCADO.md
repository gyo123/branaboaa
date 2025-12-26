# Prompt Avançado para Gemini AI - Criação de Landing Page Santa Cruz

## 1. PAPEL
Você é um **Expert em Web Design & Development** especializado em criar landing pages de alta conversão para produtos digitais (ebooks, cursos, guias). Você domina HTML semântico, CSS moderno (Grid, Flexbox, animações), UX/UI design, e otimização para conversão. Você pensa como um designer e desenvolvedor profissional, considerando acessibilidade, performance e experiência do usuário em todos os dispositivos.

---

## 2. TAREFA PRINCIPAL
**Crie uma landing page profissional e moderna para um ebook de viagem chamado "Guia BranaBoa — Santa Cruz de la Sierra".**

### Ação Esperada:
- Gere 3 arquivos: `index.html`, `style.css`, `script.js`
- Use **HTML5 semântico** com boas práticas de acessibilidade (ARIA labels, alt text, semantic tags)
- Implemente **CSS responsivo** com mobile-first approach
- Crie animações e interações sutis com **JavaScript vanilla**
- Otimize para **conversão**: CTAs claros, urgência, prova social
- Garanta **performance**: lazy loading, imagens otimizadas, CSS crítico

---

## 3. CONTEXTO & REQUISITOS

### 3.1 Identidade Visual
**Paleta de Cores:**
- **Verde Primário (Floresta Bolívia):** #0B8A3E
- **Amarelo Ouro (Accent):** #FFD400
- **Branco:** #FFFFFF
- **Tons Neutros:** #F8F9FA (fundo claro), #1A1A1A (texto escuro)

**Tipografia:**
- **Headings:** Montserrat (700, 800, 900 weight) — bold, modern, impactful
- **Body:** Poppins (400, 500, 600, 700 weight) — clean, readable, friendly
- Importar via Google Fonts

**Efeitos & Estilo:**
- Sombras profundas e modernas: `box-shadow: 0 8px 24px rgba(11,138,62,0.12)`
- Border-radius: 16px (cards), 20px (images), 50px (buttons)
- Gradientes: `linear-gradient(135deg, #0B8A3E 0%, #FFD400 100%)`
- Transições suaves: `transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

---

### 3.2 Estrutura da Página (Seções Obrigatórias)

#### **A. Header Fixo (Sticky Navigation)**
- Logo "✈ SANTA CRUZ" alinhado à esquerda
- Menu de navegação: "Como Funciona", "Depoimentos", "Conteúdo", "FAQ"
- CTA Principal: "Comprar o Guia Prático" (botão gradient verde/amarelo)
- Mobile: menu hamburger animado
- Backdrop blur e sombra sutil quando scrollado

#### **B. Hero Section (Full-Bleed Background)**
- **Layout:** Imagem de fundo em paralaxe (background-attachment: fixed)
- **Overlay:** Gradiente escuro da esquerda (rgba(0,0,0,0.5)) para direita (rgba(0,0,0,0.1))
- **Conteúdo (lado esquerdo):**
  - H1 grande e impactante: "Viaje para Santa Cruz de la Sierra com segurança, autonomia e ZERO perrengue."
  - Parágrafo descritivo elegante
  - 2 Botões: "Comprar Agora" (primário) + "Ver Demonstração" (secundário)
  - Subtext: "✓ Acesso imediato ao PDF · ✓ 50 páginas · ✓ Atualizações gratuitas"
- **Badge (fixo top-right):** "🎯 NOVO" com animação de bounce
- **Responsivo:** Em mobile, background-attachment muda para scroll; overlay mais escuro para legibilidade

**Imagem Hero:** `assets/hero.jpg` (Use fallback para SVG se não encontrar)

#### **C. Seção Problema & Solução (Split Layout)**
- **Lado Esquerdo (Conteúdo):**
  - Título: "Você provavelmente já se perguntou"
  - Lista com 4 problemas (❌ em vermelho)
  - Subtítulo: "Apresentamos a solução"
  - Descrição do produto
  - Lista de benefícios (com ✓ e emojis)
  - 2 Botões: "Ver Conteúdo" + "Comprar Agora"
- **Lado Direito (Imagem):**
  - Imagem: `assets/santa-cruz-street-1.jpg`
  - Border-radius: 20px, sombra profunda
  - Hover effect: scale(1.04), lift shadow
- **Fundo:** Cor clara (#F8F9FA)

#### **D. Seção "Como Funciona" (Grid de Cards)**
- Título: "Como Funciona em 5 Passos Simples"
- **5 Cards** com numeração grande e sutil (::before pseudo-element)
- Cada card: número circular (gradient primário), título, descrição
- Cards em grid 5 colunas (desktop), 2 colunas (tablet), 1 coluna (mobile)
- Animação: cards fade-in ao scroll (use IntersectionObserver ou AOS)
- Hover: translateY(-12px), sombra aumenta

#### **E. Seção "Explore Santa Cruz" (Showcase Split)**
- **Lado Esquerdo (Desktop):** Imagem grande `assets/catedral.jpg`
- **Lado Direito (Desktop):** Conteúdo com H2, parágrafos, lista de features com emojis
- No mobile: imagem em cima, texto embaixo
- Imagem: border-radius 20px, sombra 0 32px 72px

#### **F. Seção "O que Você Encontra" (Highlights Grid)**
- Título: "O que você encontra no Guia Prático"
- **4 Cards:** cada um com ícone emoji grande, título, descrição
- Cards com border-top colorido (#0B8A3E)
- Grid responsivo: 4 colunas (desktop), 2 (tablet), 1 (mobile)

#### **G. Seção "Módulos e Formato" (Lista de Módulos)**
- Título: "Módulos e Formato"
- **6 Módulos** em cards com ícone + emoji + descrição
- Cards com border-left verde, hover efetivo (translateX +6px)
- Exemplo de estrutura:
  - 📘 Módulo 01: Curiosidades culturais e contexto local
  - ✈️ Módulo 02: Checklist, transporte, câmbio e dicas
  - (etc...)

#### **H. Seção "Depoimentos" (Carousel)**
- Título: "Depoimentos dos Primeiros Leitores"
- **Carousel horizontal** com scroll suave (scroll-snap-type: x mandatory)
- 3+ Cards de depoimento:
  - Avatar circular (50x50px) com imagem real `assets/testimonial-*.jpg`
  - Nome + Profissão + Estrelas (5★)
  - Texto do depoimento em itálico
- No desktop: 33.33% width (3 visíveis), tablet 50%, mobile 100%
- Scrollbar customizado (cor verde)

#### **I. Seção "Compre Agora" (CTA Primária)**
- Fundo em gradient (verde → amarelo)
- Conteúdo centrado:
  - H2: "Transforme Sua Viagem"
  - Descrição
  - **Preço Grande:** "R$ 57,90" em XXL
  - Botão CTA grande: "Comprar Agora"
  - Subtext: "✓ Acesso imediato · ✓ Garantia 7 dias · ✓ Atualizações grátis"

#### **J. Seção "Garantia" (Trust/Reassurance)**
- Ícone de escudo com checkmark ✓
- H2: "Garantia de Satisfação — 7 dias"
- Descrição: promessa de devolução 100% sem perguntas
- Ícone simples, background neutro

#### **K. Seção "FAQ" (Accordion)**
- Título: "Perguntas Frequentes"
- 8 Accordion items com toggle suave (JavaScript)
- Ícone + / − que muda
- Exemplo de perguntas:
  1. Como recebo o guia?
  2. Posso acessar pelo celular?
  3. O guia é atualizado?
  4. Tem suporte?
  5. Posso usar offline?
  6. É indicado para viajantes solos ou famílias?
  7. Tempo de entrega
  8. Segurança e privacidade

#### **L. Seção "CTA Final"**
- Fundo levemente diferente (#F8F9FA)
- Título: "Pronto para Planejar Sua Viagem dos Sonhos?"
- Descrição
- Botão: "Quero meu Guia Agora"

#### **M. Footer**
- Layout em 4 colunas (desktop), 2 (tablet), 1 (mobile)
- **Col 1:** Logo/Brand + descrição + link Instagram
- **Col 2:** Links rápidos (Como Funciona, Depoimentos, Conteúdo, FAQ)
- **Col 3:** Links legais (Termos, Política de Privacidade, Contato, Reembolso)
- **Col 4:** Newsletter signup (email input + botão Subscribe)
- Copyright no rodapé

---

### 3.3 Imagens (Estrutura de Assets)
**Pasta `assets/`** deve conter:
- `hero.jpg` — Foto grande de praça/catedral (fundo hero full-bleed)
- `santa-cruz-street-1.jpg` — Rua/arquitetura (split section)
- `catedral.jpg` — Catedral/paisagem (showcase section)
- `palmetum.jpg` — Parque/jardins (fallback para outras seções)
- `plaza.jpg` — Praça central (opcional)
- `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg` — Avatares de depoimentos (círculo 50x50)

**Tratamento de Imagens:**
- Use `<picture>` element com fallbacks: `.webp` → `.jpg` → `.svg`
- Lazy loading: `loading="lazy"` + `decoding="async"`
- Responsivo: `object-fit: cover`, `object-position: center`

---

### 3.4 Animações & Interações
**CSS Animations:**
- `fade-in` (opacity 0 → 1, 0.8s ease)
- `slideUp` (translateY 30px → 0, 0.8s ease)
- `bounce` (translateY ±8px, 2s ease-in-out infinite) — badge hero
- `float` (translateY ±20px, 4s ease-in-out infinite) — cards
- `pulse` (scale 1 → 1.05 → 1, 2.5s ease-in-out infinite) — CTAs

**JavaScript Interações:**
- **Header:** adicione classe `.scrolled` ao scroll para mudar background/sombra
- **Menu hamburger:** toggle `.active` para animar 3 spans (X shape)
- **Accordion:** toggle `.open` classe para expandir/recolher (smooth height transition)
- **Smooth scroll:** links com `#` rolam suave (scroll-behavior: smooth já em CSS)
- **AOS (Animate On Scroll):** integre biblioteca AOS para animar seções ao entrar na viewport

**Biblioteca externa (recomendada):**
```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({ duration: 800, offset: 100, once: true, easing: 'ease-in-out' });
</script>
```

---

### 3.5 Acessibilidade & SEO
**Obrigatórios:**
- Todas as imagens: `alt` text descritivo
- Buttons & links: `aria-label` onde apropriado
- Headings: hierarquia correta (h1 → h2 → h3, não pule níveis)
- Contraste: texto branco em fundo escuro, razão 4.5:1 mínima
- Formulário newsletter: `<form>`, `<input type="email">`, `<button type="submit">`
- Meta tags: `<meta name="description">`, Open Graph, Twitter Card
- JSON-LD Schema: Product schema para o ebook
- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

**SEO Essencial:**
- `<title>` único e descritivo (60 chars)
- H1 único por página
- URLs limpas (use `id` para seções)
- Links internos com `smooth-scroll` class
- Favicon: incluir SVG inline ou data-uri

---

### 3.6 Responsividade (Mobile-First)
**Breakpoints:**
- **Mobile:** 0px - 480px (1 coluna, stacked)
- **Tablet:** 481px - 1024px (2 colunas, partial grid)
- **Desktop:** 1025px+ (full layout, 3-4 colunas, paralaxe)

**Critério Mobile:**
- Header: stack logo, menu hamburger (não horizontal menu)
- Hero: background-attachment: scroll (não fixed), overlay mais escuro
- Buttons: full-width em mobile (não min-width)
- Grid: 1 coluna em mobile, 2 em tablet, 3+ em desktop
- Font-sizes: use `clamp(min, calc, max)` para escalonamento fluído
- Touch-friendly: min 44x44px para botões/links

---

### 3.7 Performance & Otimização
**Críticos:**
- CSS crítico inline (estilos above-the-fold)
- Minifique CSS/JS para produção
- Use `background-attachment: fixed` apenas em desktop (paralaxe)
- Lazy load: imagens, AOS library (não bloqueie render)
- Fonts: usar Google Fonts com `display=swap`
- Evite animações no scroll crítico (use `will-change` com moderação)

---

## 4. ESTRUTURA DE CÓDIGO ESPERADA

### 4.1 HTML Semântico (Exemplo de Estrutura)
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>Guia BranaBoa — Santa Cruz</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header"><!-- nav--></header>
  <section class="hero"><!-- hero content --></section>
  <section class="problem-solution"><!-- split content --></section>
  <section class="how-it-works"><!-- grid cards --></section>
  <!-- ... mais seções ... -->
  <footer class="footer"><!-- footer --></footer>
  <script src="script.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</body>
</html>
```

### 4.2 CSS Arquitetura
- **Reset & Variables:** CSS custom properties para cores, fontes, sombras
- **Typography:** regras de h1-h6, p, links
- **Components:** buttons, cards, badges, modals
- **Layout:** header, hero, sections, footer
- **Animations:** @keyframes globais
- **Responsive:** media queries ao final (mobile-first)
- **Utility:** classes para margin, padding, text-align, etc (opcional)

### 4.3 JavaScript Modular
- **Header:** scroll listener para adicionar classe `.scrolled`
- **Menu:** toggle hamburger com animação
- **Accordion:** expandir/recolher FAQ
- **Smooth Scroll:** já funciona com CSS `scroll-behavior: smooth`
- **AOS init:** inicializar library de scroll animations

---

## 5. DIRETRIZES DE DESIGN & UX

### Conversão (CRO - Conversion Rate Optimization)
1. **CTA Claro:** botões verde/amarelo em todas as seções
2. **Urgência:** badge "NOVO", "Garantia 7 dias", "Acesso imediato"
3. **Prova Social:** depoimentos com avatares reais, rating 5★
4. **Confiança:** seção garantia, FAQ completo, contatos legais
5. **Clarity:** copiar direto, sem jargão técnico

### Design Principles
1. **Hierarquia Visual:** headings grandes, texto legível
2. **Whitespace:** padding/margin generoso para respirar
3. **Consistência:** cores, tipos de fonte, spacing units (8px grid)
4. **Feedback:** hover states em botões/links, animações suaves
5. **Inclusividade:** alto contraste, texto alt, keyboard navigation

---

## 6. TEXTO & CONTEÚDO PADRÃO

### Headlines & Copys
- **Hero H1:** "Viaje para Santa Cruz de la Sierra com segurança, autonomia e ZERO perrengue."
- **Hero p:** "O Guia BranaBoa é o material mais completo feito por brasileiros que vivem na Bolívia, com tudo o que você precisa para explorar, economizar e aproveitar a cidade — sem buscas infinitas ou informações desatualizadas."
- **CTA Primário:** "Comprar Agora" (hero, showcase, purchase section)
- **CTA Secundário:** "Ver Demonstração", "Ver Conteúdo", "Ver Mais Detalhes"
- **Preço:** "R$ 57,90"

### Depoimentos (Exemplos)
1. **Rafaela Freitas:** "No primeiro hostel conheci @fitsampaito que me ajudou na aclimatação... Ela criou o @branaboa para ajudar outros viajantes também!"
2. **Tereza:** "Me salvou nessa viagem! Tudo ficou muito mais claro e seguro."
3. **Gyo:** "Fiquei realmente satisfeito com o serviço... Sem dúvidas eu recomendaria o BranaBoa!"

### FAQ (8 Perguntas)
1. Como recebo o guia?
2. Posso acessar pelo celular?
3. O guia é atualizado?
4. Tem suporte?
5. Posso usar offline?
6. É indicado para viajantes solos ou famílias?
7. Tempo de entrega
8. Segurança e privacidade

---

## 7. ARQUIVO DE SAÍDA ESPERADO

**3 Arquivos a entregar:**
1. **index.html** — Semântico, bem-estruturado, com comentários nas seções
2. **style.css** — Bem-organizado com comentários, variáveis CSS, media queries
3. **script.js** — Vanilla JS puro (sem dependências além de AOS), comentado

**Requisitos de qualidade:**
- ✓ Validação HTML (W3C)
- ✓ CSS sem conflitos ou especificidade excessiva
- ✓ Sem console.log() deixado para trás
- ✓ Código comentado em seções críticas
- ✓ Performance: Lighthouse score > 80

---

## 8. INSTRUÇÕES FINAIS

1. **Use imagens fornecidas:** `assets/hero.jpg`, `assets/santa-cruz-street-1.jpg`, etc.
   - Se não encontrar, use `assets/[nome].svg` como fallback
   - Use `<picture>` com fallbacks: `.webp` → `.jpg` → `.svg`

2. **Teste responsividade:** Mobile (375px), Tablet (768px), Desktop (1200px+)

3. **Validação:** Certifique-se que o código valida em W3C HTML & CSS validators

4. **Performance:** Imagens otimizadas, CSS minificado, lazy loading habilitado

5. **Documentação:** Incluir comentários no código para facilitar manutenção futura

---

## 9. DICAS EXTRAS (Opcional mas Valorizado)

- Adicione scroll-to-top button flutuante em mobile (baixo em tela)
- Integre formulário de newsletter real (pode deixar placeholder para action)
- Adicione micro-interações (cursor hover effects em cards)
- Use CSS Grid para layouts complexos
- Considere dark mode toggle (opcional)
- Adicione analytics placeholder (Google Analytics tag)

---

## RESUMO DO BRIEFING

**Você está criando:**
Uma landing page de **alta conversão** para vender um ebook de viagem.

**Style:**
Moderno, profissional, leve, com foco em **imagens de qualidade**, **tipografia elegante** (Montserrat + Poppins), e **cores vibrantes** (verde + amarelo).

**Público-alvo:**
Viajantes brasileiros interessados em Santa Cruz de la Sierra; buscam segurança, informação prática e economia.

**Objetivo:**
Converter visitantes em compradores através de prova social, urgência, garantia de satisfação, e CTAs claros.

**Entrega:**
3 arquivos prontos para produção (HTML, CSS, JS vanilla).

---

**Boa sorte! Crie algo extraordinário. 🚀**
