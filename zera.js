// Zera Art Film - Lina'dan bağımsız fotoğrafçı hizmet kartı.
const zeraCatalog = {
  title: { tr: 'Zera Art Film', en: 'Zera Art Film' },
  description: {
    tr: 'Lina Organizasyon 28’in anlaşmalı fotoğraf ve video hizmeti.',
    en: 'Lina Organization 28’s partner photography and video service.'
  },
  images: [],
  offers: [
    { title: { tr: 'Fotoğraf & Video', en: 'Photography & Video' }, src: 'imageszeraartfilm-kapak.jpg', alt: { tr: 'Zera Art Film fotoğraf ve video', en: 'Zera Art Film photography and video' } },
    { title: { tr: 'Fotoğraf & Video', en: 'Photography & Video' }, src: 'imageszeraartfilm-2.jpg', alt: { tr: 'Zera Art Film ikinci fotoğraf', en: 'Zera Art Film second photo' } }
  ]
};
if (typeof conceptCatalogs !== 'undefined') conceptCatalogs.zera = zeraCatalog;
document.querySelectorAll('.zera-scroll-modal, #zeraModal').forEach(el => el.remove());
