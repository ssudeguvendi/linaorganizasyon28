// Zera Art Film, mevcut Lina katalog sistemiyle açılır.
// Ayrı pencere yok; iki fotoğraf katalog içinde aşağı doğru sıralanır.
const zeraCatalog = {
  title: { tr: 'Zera Art Film', en: 'Zera Art Film' },
  description: {
    tr: 'Lina Organizasyon 28’in anlaşmalı fotoğraf ve video hizmeti. Organizasyonunuzun en özel anlarını profesyonel çekimlerle ölümsüzleştiriyoruz.',
    en: 'Lina Organization 28’s partner photography and video service. We preserve your most special moments with professional photography and video.'
  },
  images: [],
  offers: [
    {
      title: { tr: 'Fotoğraf & Video — Kapak', en: 'Photography & Video — Cover' },
      src: 'imageszeraartfilm-kapak.jpg',
      alt: { tr: 'Zera Art Film fotoğraf ve video hizmeti', en: 'Zera Art Film photography and video service' }
    },
    {
      title: { tr: 'Fotoğraf & Video — 2', en: 'Photography & Video — 2' },
      src: 'imageszeraartfilm-2.jpg',
      alt: { tr: 'Zera Art Film ikinci fotoğraf', en: 'Zera Art Film second photo' }
    }
  ]
};

// scripts.js içindeki mevcut tek katalog sistemi bunu kullanır.
if (typeof conceptCatalogs !== 'undefined') {
  conceptCatalogs.zera = zeraCatalog;
}

// Eski ayrı Zera penceresinden kalmış eleman varsa kaldır.
document.querySelectorAll('.zera-scroll-modal, #zeraModal').forEach(element => element.remove());
