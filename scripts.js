const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const conceptCatalogs = {
  kina: {
    title: 'Kına',
    description: 'Geleneksel ritüelleri modern detaylar, zengin dokular ve etkileyici bir atmosferle buluşturan seçkin kına konseptleri.',
    images: [
      { src: 'konseptler/kina.jpg', alt: 'Lüks kına gecesi konsepti' }
    ]
  },
  dugun: {
    title: 'Düğün',
    description: 'Şampanya tonları, zarif çiçekler ve ışığın büyüsüyle hayatınızın en özel gününe zamansız bir sahne.',
    images: [
      { src: 'konseptler/dugun.jpg', alt: 'Şampanya tonlarında lüks düğün konsepti' }
    ]
  },
  nisan: {
    title: 'Nişan',
    description: 'İlk adımınızın heyecanını sofistike çiçek tasarımları ve size özel inceliklerle tamamlayan nişan seçkisi.',
    images: [
      { src: 'konseptler/nisan.jpg', alt: 'Çiçeklerle hazırlanmış lüks nişan konsepti' }
    ]
  },
  'evlilik-teklifi': {
    title: 'Evlilik Teklifi',
    description: 'Hayatınızın en anlamlı sorusunu romantik, kişisel ve unutulmaz bir deneyime dönüştüren özel tasarımlar.',
    images: [
      { src: 'konseptler/evlilik-teklifi.jpg', alt: 'Romantik ve lüks evlilik teklifi konsepti' }
    ]
  }
};

const catalog = document.getElementById('conceptCatalog');
const catalogTitle = document.getElementById('catalogTitle');
const catalogDescription = document.getElementById('catalogDescription');
const catalogMainImage = document.getElementById('catalogMainImage');
const catalogCounter = document.getElementById('catalogCounter');
const catalogThumbnails = document.getElementById('catalogThumbnails');
let catalogTrigger = null;

function selectCatalogImage(entry, index, total) {
  catalogMainImage.src = entry.src;
  catalogMainImage.alt = entry.alt;
  catalogCounter.textContent = `${index + 1} / ${total}`;
  catalogThumbnails.querySelectorAll('.catalog-thumb').forEach((thumb, thumbIndex) => {
    const isActive = thumbIndex === index;
    thumb.classList.toggle('active', isActive);
    thumb.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function openCatalog(category, trigger) {
  const selectedCatalog = conceptCatalogs[category];
  if (!selectedCatalog) return;

  catalogTrigger = trigger;
  catalogTitle.textContent = selectedCatalog.title;
  catalogDescription.textContent = selectedCatalog.description;
  catalogThumbnails.replaceChildren();

  selectedCatalog.images.forEach((entry, index) => {
    const thumb = document.createElement('button');
    const image = document.createElement('img');
    thumb.type = 'button';
    thumb.className = 'catalog-thumb';
    thumb.setAttribute('aria-label', `${selectedCatalog.title} fotoğrafı ${index + 1}`);
    image.src = entry.src;
    image.alt = '';
    thumb.appendChild(image);
    thumb.addEventListener('click', () => selectCatalogImage(entry, index, selectedCatalog.images.length));
    catalogThumbnails.appendChild(thumb);
  });

  selectCatalogImage(selectedCatalog.images[0], 0, selectedCatalog.images.length);
  catalog.hidden = false;
  document.body.classList.add('catalog-open');
  catalog.querySelector('.catalog-close').focus();
}

function closeCatalog() {
  catalog.hidden = true;
  document.body.classList.remove('catalog-open');
  catalogMainImage.removeAttribute('src');
  if (catalogTrigger) catalogTrigger.focus();
}

document.querySelectorAll('.concept-card').forEach(card => {
  card.addEventListener('click', () => openCatalog(card.dataset.concept, card));
});

catalog.querySelectorAll('[data-catalog-close]').forEach(control => {
  control.addEventListener('click', closeCatalog);
});

document.addEventListener('keydown', event => {
  if (catalog.hidden) return;

  if (event.key === 'Escape') {
    closeCatalog();
    return;
  }

  if (event.key === 'Tab') {
    const focusable = [...catalog.querySelectorAll('button:not([disabled])')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
