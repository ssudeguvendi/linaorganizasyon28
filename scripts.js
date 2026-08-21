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

const translations = {
  tr: {
    pageTitle: 'Lina Organizasyon 28 | Zarafetle Tasarlanan Anlar',
    pageDescription: 'Lina Organizasyon 28 - Düğün, nişan, kına, söz ve özel davet organizasyonları.',
    menuOpen: 'Menüyü aç', languageLabel: 'Dil seçimi', scrollDown: 'Aşağı kaydır',
    navHome: 'Ana Sayfa', navAbout: 'Hakkımızda', navGallery: 'Galeri', navContact: 'İletişim', navQuote: 'Teklif Al',
    heroScript: 'En özel anlarınız', heroTitle: 'ZARAFETLE<br>TASARLANIR',
    heroText: 'Hayallerinizi gerçeğe dönüştürüyor, en kıymetli anlarınıza zarif dokunuşlarla değer katıyoruz.', heroCta: 'Konseptleri Keşfedin',
    aboutTitle: 'Zarafet,<br>detaylarda gizlidir.', aboutText: 'Özel günlerinizi unutulmaz kılmak için her ayrıntıyı özenle planlıyor; estetik, sıcak ve size özel organizasyonlar tasarlıyoruz.', aboutLink: 'Bizi tanıyın',
    featureOneTitle: 'Kişiye Özel Tasarım', featureOneText: 'Tarzınıza ve hayallerinize göre özgün konseptler oluşturuyoruz.',
    featureTwoTitle: 'Profesyonel Ekip', featureTwoText: 'Planlamadan uygulamaya kadar tüm süreci özenle yönetiyoruz.',
    featureThreeTitle: 'Kusursuz Organizasyon', featureThreeText: 'Her ayrıntıyı düşünerek gününüzü rahat ve unutulmaz hale getiriyoruz.',
    conceptsEyebrow: 'Konseptler', conceptsTitle: 'Her hikâyeye özel bir atmosfer', conceptsIntro: 'Hayalinizdeki kutlamaya dokunun, seçkin detaylardan oluşan kataloğu keşfedin.',
    kinaKicker: 'Geleneksel zarafet', kinaTitle: 'Kına', kinaAlt: 'Lüks kına gecesi konsepti',
    dugunKicker: 'Zamansız bir masal', dugunTitle: 'Düğün', dugunAlt: 'Şampanya tonlarında lüks düğün konsepti',
    nisanKicker: 'Birlikte ilk adım', nisanTitle: 'Nişan', nisanAlt: 'Çiçeklerle hazırlanmış lüks nişan konsepti',
    proposalKicker: 'Unutulmaz bir evet', proposalTitle: 'Evlilik Teklifi', proposalAlt: 'Romantik ve lüks evlilik teklifi konsepti',
    exploreGallery: 'Galeriyi keşfet', catalogClose: 'Kataloğu kapat', catalogEyebrow: 'Lina özel seçkisi', catalogPhotos: 'Katalog fotoğrafları', photoLabel: 'fotoğrafı', offerCta: 'WhatsApp’tan Teklif Al',
    contactEyebrow: 'Birlikte planlayalım', contactTitle: 'Özel gününüz için<br>ilk adımı atalım.', contactText: 'Tarih, konsept ve hayalinizdeki detayları bize anlatın. Lina Organizasyon 28 olarak size özel bir plan oluşturalım.', contactCta: 'Mesaj Gönder',
    footerText: 'En özel anlarınız, zarif dokunuşlarla.'
  },
  en: {
    pageTitle: 'Lina Organization 28 | Moments Designed with Elegance',
    pageDescription: 'Lina Organization 28 - Weddings, engagements, henna nights, proposals and private event styling.',
    menuOpen: 'Open menu', languageLabel: 'Language selection', scrollDown: 'Scroll down',
    navHome: 'Home', navAbout: 'About Us', navGallery: 'Gallery', navContact: 'Contact', navQuote: 'Get a Quote',
    heroScript: 'Your most precious moments', heroTitle: 'DESIGNED<br>WITH ELEGANCE',
    heroText: 'We bring your dreams to life and add value to your most precious moments with refined touches.', heroCta: 'Explore the Concepts',
    aboutTitle: 'Elegance<br>lives in the details.', aboutText: 'We thoughtfully plan every detail to make your special days unforgettable, creating warm, aesthetic celebrations designed exclusively for you.', aboutLink: 'Get to know us',
    featureOneTitle: 'Bespoke Design', featureOneText: 'We create original concepts inspired by your style and dreams.',
    featureTwoTitle: 'Professional Team', featureTwoText: 'We carefully manage every step, from planning through execution.',
    featureThreeTitle: 'Flawless Events', featureThreeText: 'We consider every detail so your day feels effortless and unforgettable.',
    conceptsEyebrow: 'Concepts', conceptsTitle: 'A unique atmosphere for every story', conceptsIntro: 'Choose the celebration you imagine and discover a catalogue of carefully curated details.',
    kinaKicker: 'Traditional elegance', kinaTitle: 'Henna Night', kinaAlt: 'Luxury henna night concept',
    dugunKicker: 'A timeless fairytale', dugunTitle: 'Wedding', dugunAlt: 'Luxury wedding concept in champagne tones',
    nisanKicker: 'The first step together', nisanTitle: 'Engagement', nisanAlt: 'Luxury floral engagement concept',
    proposalKicker: 'An unforgettable yes', proposalTitle: 'Marriage Proposal', proposalAlt: 'Romantic luxury marriage proposal concept',
    exploreGallery: 'Explore the gallery', catalogClose: 'Close catalogue', catalogEyebrow: 'The Lina signature collection', catalogPhotos: 'Catalogue photos', photoLabel: 'photo', offerCta: 'Get a Quote on WhatsApp',
    contactEyebrow: 'Let’s plan together', contactTitle: 'Let’s take the first step<br>for your special day.', contactText: 'Tell us your date, concept and the details you imagine. Lina Organization 28 will create a plan designed especially for you.', contactCta: 'Send a Message',
    footerText: 'Your most precious moments, finished with elegant touches.'
  }
};

let currentLanguage = 'tr';

const conceptCatalogs = {
  kina: {
    title: { tr: 'Kına', en: 'Henna Night' },
    description: {
      tr: 'Geleneksel ritüelleri modern detaylar, zengin dokular ve etkileyici bir atmosferle buluşturan seçkin kına konseptleri.',
      en: 'Distinctive henna night concepts blending traditional rituals with modern details, rich textures and a captivating atmosphere.'
    },
    images: [
      { src: 'konseptler/kina.jpg', alt: { tr: 'Lüks kına gecesi konsepti', en: 'Luxury henna night concept' } }
    ]
  },
  dugun: {
    title: { tr: 'Düğün', en: 'Wedding' },
    description: {
      tr: 'Şampanya tonları, zarif çiçekler ve ışığın büyüsüyle hayatınızın en özel gününe zamansız bir sahne.',
      en: 'A timeless setting for your most special day, shaped by champagne tones, graceful florals and the magic of light.'
    },
    images: [
      { src: 'konseptler/dugun.jpg', alt: { tr: 'Şampanya tonlarında lüks düğün konsepti', en: 'Luxury wedding concept in champagne tones' } }
    ],
    offers: [
      {
        title: { tr: 'Düğün Konsepti I', en: 'Wedding Concept I' },
        src: 'konseptler/dugun-konsept-1.png',
        alt: { tr: 'Beyaz güller ve şampanya detaylı düğün sahnesi', en: 'Wedding stage with white roses and champagne details' }
      },
      {
        title: { tr: 'Düğün Konsepti II', en: 'Wedding Concept II' },
        src: 'konseptler/dugun-konsept-2.png',
        alt: { tr: 'Büyük beyaz çiçeklerle hazırlanan düğün masası', en: 'Wedding table styled with oversized white flowers' }
      }
    ]
  },
  nisan: {
    title: { tr: 'Nişan', en: 'Engagement' },
    description: {
      tr: 'İlk adımınızın heyecanını sofistike çiçek tasarımları ve size özel inceliklerle tamamlayan nişan seçkisi.',
      en: 'An engagement collection completing the excitement of your first step with sophisticated florals and details chosen just for you.'
    },
    images: [
      { src: 'konseptler/nisan.jpg', alt: { tr: 'Çiçeklerle hazırlanmış lüks nişan konsepti', en: 'Luxury floral engagement concept' } }
    ]
  },
  'evlilik-teklifi': {
    title: { tr: 'Evlilik Teklifi', en: 'Marriage Proposal' },
    description: {
      tr: 'Hayatınızın en anlamlı sorusunu romantik, kişisel ve unutulmaz bir deneyime dönüştüren özel tasarımlar.',
      en: 'Bespoke designs turning life’s most meaningful question into a romantic, personal and unforgettable experience.'
    },
    images: [
      { src: 'konseptler/evlilik-teklifi.jpg', alt: { tr: 'Romantik ve lüks evlilik teklifi konsepti', en: 'Romantic luxury marriage proposal concept' } }
    ]
  }
};

const catalog = document.getElementById('conceptCatalog');
const catalogTitle = document.getElementById('catalogTitle');
const catalogDescription = document.getElementById('catalogDescription');
const catalogFeature = document.querySelector('.catalog-feature');
const catalogMainImage = document.getElementById('catalogMainImage');
const catalogCounter = document.getElementById('catalogCounter');
const catalogThumbnails = document.getElementById('catalogThumbnails');
const catalogOffers = document.getElementById('catalogOffers');
let catalogTrigger = null;
let currentCatalogCategory = null;

function selectCatalogImage(entry, index, total) {
  catalogMainImage.src = entry.src;
  catalogMainImage.alt = entry.alt[currentLanguage];
  catalogCounter.textContent = `${index + 1} / ${total}`;
  catalogThumbnails.querySelectorAll('.catalog-thumb').forEach((thumb, thumbIndex) => {
    const isActive = thumbIndex === index;
    thumb.classList.toggle('active', isActive);
    thumb.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function renderCatalogOffers(offers) {
  const whatsappMessage = encodeURIComponent('Merhaba bu düğün konsepti için fiyat alabilir miyim');
  const whatsappUrl = `https://wa.me/905454501028?text=${whatsappMessage}`;

  offers.forEach(offer => {
    const card = document.createElement('article');
    const image = document.createElement('img');
    const content = document.createElement('div');
    const title = document.createElement('h3');
    const link = document.createElement('a');

    card.className = 'catalog-offer-card';
    image.src = offer.src;
    image.alt = offer.alt[currentLanguage];
    title.textContent = offer.title[currentLanguage];
    link.className = 'catalog-offer-button';
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = translations[currentLanguage].offerCta;

    content.append(title, link);
    card.append(image, content);
    catalogOffers.appendChild(card);
  });
}

function openCatalog(category, trigger) {
  const selectedCatalog = conceptCatalogs[category];
  if (!selectedCatalog) return;

  catalogTrigger = trigger;
  currentCatalogCategory = category;
  catalogTitle.textContent = selectedCatalog.title[currentLanguage];
  catalogDescription.textContent = selectedCatalog.description[currentLanguage];
  catalogThumbnails.replaceChildren();
  catalogOffers.replaceChildren();

  const hasOffers = Boolean(selectedCatalog.offers && selectedCatalog.offers.length);
  catalogFeature.hidden = hasOffers;
  catalogThumbnails.hidden = hasOffers;
  catalogOffers.hidden = !hasOffers;

  if (hasOffers) {
    renderCatalogOffers(selectedCatalog.offers);
  } else {
    selectedCatalog.images.forEach((entry, index) => {
      const thumb = document.createElement('button');
      const image = document.createElement('img');
      thumb.type = 'button';
      thumb.className = 'catalog-thumb';
      thumb.setAttribute('aria-label', `${selectedCatalog.title[currentLanguage]} ${translations[currentLanguage].photoLabel} ${index + 1}`);
      image.src = entry.src;
      image.alt = '';
      thumb.appendChild(image);
      thumb.addEventListener('click', () => selectCatalogImage(entry, index, selectedCatalog.images.length));
      catalogThumbnails.appendChild(thumb);
    });

    selectCatalogImage(selectedCatalog.images[0], 0, selectedCatalog.images.length);
  }
  catalog.hidden = false;
  document.body.classList.add('catalog-open');
  catalog.querySelector('.catalog-close').focus();
}

function closeCatalog() {
  catalog.hidden = true;
  document.body.classList.remove('catalog-open');
  catalogMainImage.removeAttribute('src');
  currentCatalogCategory = null;
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

function applyLanguage(language, persist = true) {
  if (!translations[language]) return;

  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;
  document.querySelector('meta[name="description"]').content = dictionary.pageDescription;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = dictionary[element.dataset.i18n];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = dictionary[element.dataset.i18nHtml];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', dictionary[element.dataset.i18nAria]);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    element.alt = dictionary[element.dataset.i18nAlt];
  });

  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });

  if (persist) {
    try {
      localStorage.setItem('lina-language', language);
    } catch (error) {
      // The language still works when browser storage is unavailable.
    }
  }

  if (!catalog.hidden && currentCatalogCategory) {
    openCatalog(currentCatalogCategory, catalogTrigger);
  }
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

let savedLanguage = 'tr';
try {
  savedLanguage = localStorage.getItem('lina-language') || 'tr';
} catch (error) {
  savedLanguage = 'tr';
}
applyLanguage(savedLanguage, false);
