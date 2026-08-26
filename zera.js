// Zera Art Film - kendi iletişim bilgileri
const zeraCatalog = {
  title: { tr: 'Zera Art Film', en: 'Zera Art Film' },
  description: { tr: 'Profesyonel fotoğraf ve video hizmeti.', en: 'Professional photography and video service.' },
  images: [],
  offers: [
    { title: { tr: 'Fotoğraf & Video', en: 'Photography & Video' }, src: 'imageszeraartfilm-kapak.jpg', alt: { tr: 'Zera Art Film fotoğraf ve video', en: 'Zera Art Film photography and video' } },
    { title: { tr: 'Fotoğraf & Video', en: 'Photography & Video' }, src: 'imageszeraartfilm-2.jpg', alt: { tr: 'Zera Art Film ikinci fotoğraf', en: 'Zera Art Film second photo' } }
  ]
};
if (typeof conceptCatalogs !== 'undefined') conceptCatalogs.zera = zeraCatalog;

// Zera açıldığında mevcut Lina kişi listesini değil, Zera'nın kendi numarasını kullan.
const originalRenderCatalogOffers = renderCatalogOffers;
renderCatalogOffers = function(offers, category, selectedOfferIndex = null) {
  if (category !== 'zera') return originalRenderCatalogOffers(offers, category, selectedOfferIndex);
  const phone = '905513683628';
  const displayPhone = '0551 368 36 28';
  offers.forEach((offer, index) => {
    const card = document.createElement('article');
    card.className = 'catalog-offer-card';
    const image = document.createElement('img');
    image.src = offer.src;
    image.alt = offer.alt[currentLanguage];
    const content = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = offer.title[currentLanguage];
    const actions = document.createElement('div');
    actions.className = 'catalog-offer-actions';
    const contact = document.createElement('div');
    contact.className = 'catalog-contact-card';
    const name = document.createElement('strong');
    name.textContent = 'Zera Art Film';
    const number = document.createElement('span');
    number.textContent = displayPhone;
    const controls = document.createElement('div');
    controls.className = 'catalog-contact-controls';
    const call = document.createElement('a');
    call.className = 'catalog-contact-button call';
    call.href = `tel:+${phone}`;
    call.textContent = translations[currentLanguage].callCta;
    const instagram = document.createElement('a');
    instagram.className = 'catalog-contact-button whatsapp';
    instagram.href = 'https://www.instagram.com/zeraartfilm/';
    instagram.target = '_blank';
    instagram.rel = 'noreferrer';
    instagram.textContent = 'Instagram';
    controls.append(call, instagram);
    contact.append(name, number, controls);
    actions.appendChild(contact);
    content.append(title, actions);
    card.append(image, content);
    catalogOffers.appendChild(card);
  });
  if (selectedOfferIndex !== null) requestAnimationFrame(() => catalogOffers.querySelectorAll('.catalog-offer-card')[selectedOfferIndex]?.scrollIntoView({behavior:'smooth', block:'center'}));
};
