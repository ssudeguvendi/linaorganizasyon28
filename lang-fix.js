(() => {
  const dict = {
    tr: {
      navHome:'Ana Sayfa',navAbout:'Hakkımızda',navGallery:'Galeri',navContact:'İletişim',navQuote:'Teklif Al',
      heroScript:'En özel anlarınız',heroTitle:'ZARAFETLE<br>TASARLANIR',heroText:'Hayallerinizi gerçeğe dönüştürüyor, en kıymetli anlarınıza zarif dokunuşlarla değer katıyoruz.',heroCta:'Konseptleri Keşfedin',
      conceptsEyebrow:'Konseptler',conceptsTitle:'<span class="concepts-title-main">Her hikâyeye özel</span><span class="concepts-title-accent">bir atmosfer</span>',conceptsIntro:'Hayalinizdeki kutlamaya dokunun, seçkin detaylardan oluşan kataloğu keşfedin.',
      aboutTitle:'Zarafet,<br>detaylarda gizlidir.',aboutText:'Özel günlerinizi unutulmaz kılmak için her ayrıntıyı özenle planlıyor; estetik, sıcak ve size özel organizasyonlar tasarlıyoruz.',
      catalogEyebrow:'Lina özel seçkisi',catalogClose:'Kataloğu kapat',contactEyebrow:'Birlikte planlayalım',contactTitle:'Özel gününüz için<br>ilk adımı atalım.',contactText:'Tarih, konsept ve hayalinizdeki detayları bize anlatın. Lina Organizasyon 28 olarak size özel bir plan oluşturalım.',contactCta:'Mesaj Gönder'
    },
    en: {
      navHome:'Home',navAbout:'About Us',navGallery:'Gallery',navContact:'Contact',navQuote:'Get a Quote',
      heroScript:'Your most precious moments',heroTitle:'DESIGNED<br>WITH ELEGANCE',heroText:'We bring your dreams to life and add value to your most precious moments with refined touches.',heroCta:'Explore the Concepts',
      conceptsEyebrow:'Concepts',conceptsTitle:'<span class="concepts-title-main">A unique atmosphere</span><span class="concepts-title-accent">for every story</span>',conceptsIntro:'Choose the celebration you imagine and discover a catalogue of carefully curated details.',
      aboutTitle:'Elegance<br>lives in the details.',aboutText:'We thoughtfully plan every detail to make your special days unforgettable, creating warm, aesthetic celebrations designed exclusively for you.',
      catalogEyebrow:'The Lina signature collection',catalogClose:'Close catalogue',contactEyebrow:'Let’s plan together',contactTitle:'Let’s take the first step<br>for your special day.',contactText:'Tell us your date, concept and the details you imagine. Lina Organization 28 will create a plan designed especially for you.',contactCta:'Send a Message'
    }
  };
  const apply = language => {
    const d = dict[language] || dict.tr;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { if (d[el.dataset.i18n] !== undefined) el.textContent = d[el.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { if (d[el.dataset.i18nHtml] !== undefined) el.innerHTML = d[el.dataset.i18nHtml]; });
    document.querySelectorAll('[data-language]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.language === language)));
    document.title = language === 'en' ? 'Lina Organization 28 | Moments Designed with Elegance' : 'Lina Organizasyon 28 | Zarafetle Tasarlanan Anlar';
    try { localStorage.setItem('lina-language', language); } catch(e) {}
  };
  document.querySelectorAll('[data-language]').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); apply(btn.dataset.language); }));
  let saved = 'tr';
  try { saved = localStorage.getItem('lina-language') || 'tr'; } catch(e) {}
  apply(saved);
})();
