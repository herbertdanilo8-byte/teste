// ==================== LER DADOS DO ADMIN (localStorage) ====================
function getProducts() {
  const stored = localStorage.getItem('km_products');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return PRODUCTS_DEFAULT;
}

function getConfig() {
  const stored = localStorage.getItem('km_config');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return CONFIG_DEFAULT;
}

function getBanners() {
  const stored = localStorage.getItem('km_banners');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return BANNERS_DEFAULT;
}

function getPromo() {
  const stored = localStorage.getItem('km_promo');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return PROMO_DEFAULT;
}

// ==================== DEFAULTS (fallback se admin nunca foi aberto) ====================
const PRODUCTS_DEFAULT = [
  { id:1, name:'Classic KM Burguer', desc:'Pão brioche, hambúrguer 150g, queijo cheddar, alface, tomate e molho especial.', price:22.90, cat:'burguer', badge:'Mais Pedido', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
  { id:2, name:'Double Smash', desc:'Dois burguers smashados 120g, duplo cheddar, cebola caramelizada e pickle.', price:29.90, cat:'burguer', badge:'', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80' },
  { id:3, name:'Chicken Crispy', desc:'Frango empanado crocante, maionese da casa, coleslaw e pão de gergelim.', price:24.90, cat:'burguer', badge:'', img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80' },
  { id:4, name:'Bacon Supreme', desc:'Hambúrguer artesanal, bacon crispy, barbecue defumado, cheddar e cebola frita.', price:31.90, cat:'burguer', badge:'🔥 Hot', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80' },
  { id:5, name:'Veggie Burguer', desc:'Hambúrguer de grão-de-bico, cheddar vegano, rúcula, tomate seco e pão integral.', price:26.90, cat:'burguer', badge:'Veggie', img:'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=400&q=80' },
  { id:6, name:'X-Tudo KM', desc:'O clássico completo: ovo, presunto, bacon, queijo, alface, tomate, milho e batata palha.', price:27.90, cat:'burguer', badge:'', img:'https://images.unsplash.com/photo-1600555379765-f6d3b10ff0e7?w=400&q=80' },
  { id:7, name:'Pizza Margherita', desc:'Molho de tomate artesanal, mussarela fresca e manjericão. Clássico italiano.', price:38.90, cat:'pizza', badge:'', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
  { id:8, name:'Pizza Pepperoni', desc:'Muito pepperoni, mussarela derretida e orégano. Sabor irresistível!', price:42.90, cat:'pizza', badge:'Favorita', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
  { id:9, name:'Pizza 4 Queijos', desc:'Mussarela, provolone, gorgonzola e parmesão. Para os amantes de queijo!', price:44.90, cat:'pizza', badge:'', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
  { id:10, name:'Pizza Frango com Catupiry', desc:'Frango desfiado temperado com catupiry cremoso e azeitonas. Clássico brasileiro.', price:41.90, cat:'pizza', badge:'', img:'https://images.unsplash.com/photo-1571066811602-716837d681de?w=400&q=80' },
  { id:11, name:'Pizza Calabresa', desc:'Calabresa fatiada, cebola roxa, mussarela e orégano. Pedida certinha!', price:39.90, cat:'pizza', badge:'', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' },
  { id:12, name:'Porção de Frango Frito', desc:'400g de frango crocante frito, acompanha molho barbecue e maionese.', price:32.90, cat:'frango', badge:'', img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
  { id:13, name:'Filé Grelhado', desc:'Filé de frango grelhado temperado com ervas, acompanha arroz e farofa.', price:28.90, cat:'frango', badge:'Saudável', img:'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=80' },
  { id:14, name:'Frango na Chapa', desc:'Frango na chapa com temperos especiais da casa. Macio e suculento.', price:25.90, cat:'frango', badge:'', img:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&q=80' },
  { id:15, name:'Wrap de Frango', desc:'Tortilla recheada com frango desfiado, queijo, alface e molho ranch.', price:23.90, cat:'frango', badge:'', img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80' },
  { id:16, name:'Coca-Cola Lata 350ml', desc:'Geladinha e refrescante. A parceira perfeita de qualquer pedido.', price:6.90, cat:'bebida', badge:'', img:'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80' },
  { id:17, name:'Suco Natural 500ml', desc:'Laranja, limão, acerola ou maracujá. Feito na hora!', price:12.90, cat:'bebida', badge:'Natural', img:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80' },
  { id:18, name:'Milkshake 400ml', desc:'Chocolate, morango ou baunilha. Cremoso e delicioso!', price:18.90, cat:'bebida', badge:'', img:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80' },
  { id:19, name:'Água Mineral 500ml', desc:'Água mineral natural gelada.', price:4.00, cat:'bebida', badge:'', img:'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80' },
  { id:20, name:'Guaraná Antarctica 350ml', desc:'O clássico brasileiro bem gelado.', price:6.00, cat:'bebida', badge:'', img:'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80' },
  { id:21, name:'Brownie com Sorvete', desc:'Brownie de chocolate quente com sorvete de creme e calda de chocolate.', price:16.90, cat:'sobremesa', badge:'🍫', img:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80' },
  { id:22, name:'Petit Gateau', desc:'Bolo de chocolate com centro derretido, sorvete de baunilha e frutas vermelhas.', price:19.90, cat:'sobremesa', badge:'Premium', img:'https://images.unsplash.com/photo-1601972599748-31a3c3eb9f46?w=400&q=80' },
  { id:23, name:'Açaí 300ml', desc:'Açaí cremoso com granola, banana e leite condensado. Direto do Pará!', price:18.00, cat:'sobremesa', badge:'', img:'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&q=80' },
  { id:24, name:'Sorvete 2 Bolas', desc:'Escolha 2 sabores: chocolate, morango, creme ou flocos.', price:10.90, cat:'sobremesa', badge:'', img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80' },
  { id:25, name:'Churros com Doce de Leite', desc:'Churros crocante recheado com doce de leite e canela.', price:12.90, cat:'sobremesa', badge:'', img:'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80' },
  { id:26, name:'Combo Família', desc:'2 Burguers Classic + 2 Fritas + 2 Refrigerantes. Perfeito para dois!', price:55.90, cat:'combo', badge:'🎉 Promoção', img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80' },
  { id:27, name:'Combo KM Individual', desc:'1 Burguer + 1 Fritas Média + 1 Refrigerante 350ml.', price:32.90, cat:'combo', badge:'Popular', img:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80' },
  { id:28, name:'Combo Pizza + Bebida', desc:'1 Pizza M (8 fatias) + 2 latas de Coca-Cola.', price:48.90, cat:'combo', badge:'', img:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80' },
  { id:29, name:'Combo Frangão', desc:'Porção de Frango Frito + Fritas + 2 Molhos + Bebida.', price:42.90, cat:'combo', badge:'', img:'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80' },
  { id:30, name:'Combo KM Especial', desc:'Burguer Double Smash + Batata Rústica + Milk Shake 300ml.', price:62.90, cat:'combo', badge:'⭐ Top', img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80' },
];

const CONFIG_DEFAULT = {
  nome: 'KM Delivery', wpp: '5583999999999',
  abertura: '11:00', fechamento: '01:00',
  area: 'Ingá e região – PB', minimo: 20, frete: 50,
  title: 'KM Delivery – Rápido, Quente e na Sua Porta',
  slogan: 'Rápido, quente e sempre na sua porta.',
  sobre: 'A KM Delivery nasceu da paixão por comida de qualidade.',
  aberto: true, delivery: true
};

const BANNERS_DEFAULT = [
  { tag:'🔥 Destaque do dia', title:'BURGUER DUPLO', titleSpan:'NA BRASA', sub:'Carne artesanal, queijo cheddar derretido e bacon crocante.', btn:'Ver Cardápio', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1400&q=80' },
  { tag:'⚡ Entrega Rápida', title:'PIZZA QUENTE', titleSpan:'ATÉ VOCÊ', sub:'Massa artesanal, molho especial e os melhores ingredientes. Chegando em até 40 minutos!', btn:'Pedir Agora', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=80' },
  { tag:'🎉 Promoção', title:'COMBO ESPECIAL', titleSpan:'KM', sub:'Burger + Fritas + Bebida com 20% de desconto toda semana. Aproveite!', btn:'Aproveitar', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1400&q=80' },
];

const PROMO_DEFAULT = {
  text: 'Delivery até 01h da madrugada! Frete grátis acima de R$ 50,00',
  visible: true
};

// ==================== APLICAR DADOS DO ADMIN ====================
const cfg = getConfig();
const promo = getPromo();
const BANNERS = getBanners();

// Aplicar título da página
if (cfg.title) document.title = cfg.title;

// Aplicar promo bar
const promoBar = document.getElementById('promo-bar');
if (promoBar) {
  if (!promo.visible) {
    promoBar.style.display = 'none';
  } else {
    const fires = promoBar.querySelectorAll('i');
    if (promo.text) {
      promoBar.childNodes.forEach(node => {
        if (node.nodeType === 3) node.textContent = ' ' + promo.text + ' ';
      });
    }
  }
}

// Aplicar banners/slides ao carousel
function applyBanners() {
  const carousel = document.getElementById('carousel');
  if (!carousel) return;
  const slides = carousel.querySelectorAll('.slide');
  BANNERS.forEach((b, i) => {
    if (!slides[i]) return;
    const bg = slides[i].querySelector('.slide-bg');
    if (bg && b.img) bg.style.backgroundImage = `url('${b.img}')`;
    const tag = slides[i].querySelector('.slide-tag');
    if (tag && b.tag) tag.textContent = b.tag;
    const title = slides[i].querySelector('.slide-title');
    if (title && b.title) {
      const span = title.querySelector('span');
      title.childNodes.forEach(node => { if (node.nodeType === 3) node.textContent = b.title + ' '; });
      if (span && b.titleSpan) span.textContent = b.titleSpan;
    }
    const sub = slides[i].querySelector('.slide-sub');
    if (sub && b.sub) sub.textContent = b.sub;
    const btn = slides[i].querySelector('.slide-btn');
    if (btn && b.btn) btn.textContent = b.btn;
  });
}

// Aplicar WhatsApp correto nos botões
function applyWpp() {
  const wpp = cfg.wpp || '5583999999999';
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    const url = new URL(a.href);
    const text = url.searchParams.get('text') || '';
    a.href = `https://wa.me/${wpp}?text=${encodeURIComponent(text)}`;
  });
}

// Aplicar info de contato
function applyContactInfo() {
  // Horário no footer
  document.querySelectorAll('.footer-col ul li, .info-card p').forEach(el => {
    if (el.textContent.includes('11h') || el.textContent.includes('01h')) {
      if (cfg.abertura && cfg.fechamento) {
        el.textContent = el.textContent
          .replace(/\d{2}h/g, '')
          .replace('–', '')
          .trim();
      }
    }
    if (el.textContent.includes('Ingá') && cfg.area) {
      el.textContent = cfg.area;
    }
  });

  // Badge aberto/fechado
  const hoursBadge = document.querySelector('.hours-badge');
  if (hoursBadge) {
    const circle = hoursBadge.querySelector('i');
    if (cfg.aberto) {
      if (circle) circle.style.color = '#4caf50';
      hoursBadge.innerHTML = `<i class="fas fa-circle" style="font-size:0.5rem;color:#4caf50"></i> Aberto agora!`;
    } else {
      hoursBadge.innerHTML = `<i class="fas fa-circle" style="font-size:0.5rem;color:#e01c1c"></i> Fechado no momento`;
    }
  }
}

// ==================== PRODUCTS (carregado do admin) ====================
const PRODUCTS = getProducts();

// ==================== STATE ====================
let cart = [];
let currentCat = 'todos';
let currentSearch = '';
let currentSlide = 0;
let slideInterval;

// ==================== CAT ICON HELPER ====================
function getCatIcon(cat) {
  const icons = {
    burguer: '🍔', pizza: '🍕', frango: '🍗',
    bebida: '🥤', sobremesa: '🍨', combo: '📦'
  };
  return icons[cat] || '🍽️';
}

// ==================== RENDER PRODUCTS ====================
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const search = currentSearch.toLowerCase();
  const filtered = PRODUCTS.filter(p =>
    (currentCat === 'todos' || p.cat === currentCat) &&
    (!search || p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search))
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)"><i class="fas fa-search" style="font-size:2.5rem;margin-bottom:12px;display:block"></i>Nenhum item encontrado.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      ${p.img
        ? `<div class="product-img-wrap"><img class="product-img" src="${p.img}" alt="${p.name}" loading="lazy"></div>`
        : `<div class="product-cat-icon">${getCatIcon(p.cat)}</div>`
      }
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            <small>R$</small>${p.price.toFixed(2).replace('.', ',')}
          </div>
          <button class="add-btn" onclick="addToCart(${p.id})" title="Adicionar ao carrinho">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterCat(cat, el) {
  currentCat = cat;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}

function filterProducts() {
  currentSearch = document.getElementById('search-input').value;
  renderProducts();
}

// ==================== CART ====================
function addToCart(id) {
  // verificar se delivery está ativo
  if (!cfg.delivery) {
    showToast('Pedidos temporariamente suspensos. Tente mais tarde!');
    return;
  }
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCart();
  showToast(`${p.name} adicionado! 🔥`);
  bumpBadge();
}

function updateCart() {
  const badge = document.getElementById('cart-badge');
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = totalQty;

  const totalVal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cart-total').textContent = totalVal.toFixed(2).replace('.', ',');

  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty" id="cart-empty">
      <i class="fas fa-shopping-bag"></i>
      <p>Seu carrinho está vazio</p>
      <small style="color:var(--text-muted);font-size:0.75rem">Adicione itens do cardápio!</small>
    </div>`;
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&q=60'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)"><i class="fas fa-minus"></i></button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="rm-btn" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i></button>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  updateCart();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  updateCart();
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-sidebar').classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-sidebar').classList.remove('open');
}

function bumpBadge() {
  const b = document.getElementById('cart-badge');
  b.classList.remove('bump');
  void b.offsetWidth;
  b.classList.add('bump');
}

function showCheckout() {
  if (cart.length === 0) { showToast('Adicione itens primeiro!'); return; }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (total < (cfg.minimo || 20)) {
    showToast(`Pedido mínimo: R$ ${(cfg.minimo || 20).toFixed(2).replace('.', ',')}!`);
    return;
  }
  document.getElementById('step-checkout').style.display = 'none';
  const f = document.getElementById('step-form');
  f.classList.add('visible');
  f.style.display = 'block';
}

function hideCheckout() {
  document.getElementById('step-checkout').style.display = '';
  const f = document.getElementById('step-form');
  f.classList.remove('visible');
  f.style.display = 'none';
}

function finalizarPedido() {
  const nome = document.getElementById('p-nome').value.trim();
  const end = document.getElementById('p-end').value.trim();
  const ref = document.getElementById('p-ref').value.trim();
  const pag = document.getElementById('p-pag').value;

  if (!nome || !end) {
    showToast('Preencha nome e endereço!');
    return;
  }

  const items = cart.map(i => `• ${i.qty}x ${i.name} – R$ ${(i.price * i.qty).toFixed(2).replace('.', ',')}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalStr = total.toFixed(2).replace('.', ',');

  // Salvar pedido no localStorage para o admin ver
  const pedidoId = 'PED-' + Date.now();
  const pedidoData = {
    id: pedidoId,
    cliente: nome,
    endereco: end + (ref ? ` (${ref})` : ''),
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    total: total,
    pagamento: pag,
    status: 'pendente',
    data: new Date().toLocaleString('pt-BR')
  };
  const pedidos = JSON.parse(localStorage.getItem('km_pedidos') || '[]');
  pedidos.push(pedidoData);
  localStorage.setItem('km_pedidos', JSON.stringify(pedidos));

  // Montar mensagem WhatsApp
  const msg = `🍔 *NOVO PEDIDO – ${cfg.nome || 'KM DELIVERY'}*\n\n` +
    `👤 *Cliente:* ${nome}\n` +
    `📍 *Endereço:* ${end}\n` +
    `🏠 *Referência:* ${ref || 'Não informado'}\n` +
    `💳 *Pagamento:* ${pag}\n\n` +
    `🛒 *Itens do Pedido:*\n${items}\n\n` +
    `💰 *Total: R$ ${totalStr}*\n\n` +
    `🆔 *ID do Pedido:* ${pedidoId}\n` +
    `⏱️ Aguardo confirmação. Obrigado!`;

  const wpp = cfg.wpp || '5583999999999';
  const url = `https://wa.me/${wpp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  cart = [];
  updateCart();
  hideCheckout();
  closeCart();
  showToast('Pedido enviado! ✅');
}

function enviarContato() {
  const nome = document.getElementById('c-nome').value.trim();
  const tel = document.getElementById('c-tel').value.trim();
  const assunto = document.getElementById('c-assunto').value;
  const msg = document.getElementById('c-msg').value.trim();

  if (!nome || !msg) { showToast('Preencha nome e mensagem!'); return; }

  const text = `📩 *Contato via Site – ${cfg.nome || 'KM Delivery'}*\n\n👤 *Nome:* ${nome}\n📞 *Telefone:* ${tel || 'Não informado'}\n📌 *Assunto:* ${assunto}\n\n💬 *Mensagem:*\n${msg}`;
  const wpp = cfg.wpp || '5583999999999';
  window.open(`https://wa.me/${wpp}?text=${encodeURIComponent(text)}`, '_blank');
  showToast('Mensagem enviada! 💬');
}

// ==================== TOAST ====================
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ==================== CAROUSEL ====================
function moveSlide(dir) {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  document.querySelectorAll('.dot')[currentSlide].classList.add('active');
  document.getElementById('carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function goSlide(n) {
  const diff = n - currentSlide;
  if (diff !== 0) moveSlide(diff);
}

function startCarousel() {
  slideInterval = setInterval(() => moveSlide(1), 5000);
}

// carousel removido

// ==================== FAQ ====================
function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle('open');
}

// ==================== MOBILE NAV ====================
function toggleMobile() {
  document.getElementById('nav-links').classList.toggle('mobile-open');
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('mobile-open');
  });
});

// ==================== SCROLL REVEAL ====================
(function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => el.classList.add('visible'), Number(delay));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  // Observe product cards (re-run after render via MutationObserver)
  function observeCards() {
    document.querySelectorAll('.product-card:not([data-observed])').forEach((card, i) => {
      card.dataset.delay = (i % 6) * 60;
      card.dataset.observed = '1';
      observer.observe(card);
    });
  }

  // Also observe section-level elements
  function observeReveal() {
    document.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
      el.dataset.observed = '1';
      observer.observe(el);
    });
  }

  // Watch for new cards added dynamically
  const grid = document.getElementById('product-grid');
  if (grid) {
    new MutationObserver(() => { observeCards(); }).observe(grid, { childList: true });
  }

  observeCards();
  observeReveal();

  // Add reveal class to section headings & key blocks
  const revealTargets = [
    '.section-title', '.divider', '.section-sub',
    '.category-chips', '.sobre-grid', '.stat-box',
    '.faq-item', '.info-card', '.form-card', '.wpp-btn'
  ];
  revealTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        el.dataset.delay = i * 80;
        observer.observe(el);
        el.dataset.observed = '1';
      }
    });
  });
})();

// ==================== INIT ====================
applyBanners();
applyWpp();
applyContactInfo();
renderProducts();
// startCarousel removido
updateCart();
