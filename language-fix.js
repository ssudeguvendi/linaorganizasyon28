(() => {
  const texts = {
    tr: {
      navHome:'Ana Sayfa', navAbout:'Hakkımızda', navGallery:'Galeri', navContact:'İletişim', navQuote:'Teklif Al',
      heroScript:'En özel anlarınız', heroTitle:'ZARAFETLE<br>TASARLANIR', heroText:'Hayallerinizi gerçeğe dönüştürüyor, en kıymetli anlarınıza zarif dokunuşlarla değer katıyoruz.', heroCta:'Konseptleri Keşfedin',
      conceptsEyebrow:'Konseptler', conceptsIntro:'Hayalinizdeki kutlamaya dokunun, seçkin detaylardan oluşan kataloğu keşfedin.',
      aboutTitle:'Zarafet,<br>detaylarda gizlidir.', aboutText:'Özel günlerinizi unutulmaz kılmak için her ayrıntıyı özenle planlıyor; estetik, sıcak ve size özel organizasyonlar tasarlıyoruz.', aboutLink:'Bizi tanıyın',
      f1:'Kişiye Özel Tasarım', f1t:'Tarzınıza ve hayallerinize göre özgün konseptler oluşturuyoruz.', f2:'Profesyonel Ekip', f2t:'Planlamadan uygulamaya kadar tüm süreci özenle yönetiyoruz.', f3:'Kusursuz Organizasyon', f3t:'Her ayrıntıyı düşünerek gününüzü rahat ve unutulmaz hale getiriyoruz.',
      contactEyebrow:'Birlikte planlayalım', contactTitle:'Özel gününüz için<br>ilk adımı atalım.', contactText:'Tarih, konsept ve hayalinizdeki detayları bize anlatın. Lina Organizasyon 28 olarak size özel bir plan oluşturalım.', contactCta:'Mesaj Gönder', footer:'En özel anlarınız, zarif dokunuşlarla.',
      kinaSmall:'Geleneksel zarafet', kinaTitle:'Kına', dugunSmall:'Zamansız bir masal', dugunTitle:'Düğün', nisanSmall:'Birlikte ilk adım', nisanTitle:'Nişan', zeraSmall:'Fotoğraf & Video', zeraTitle:'Zera Art Film', zeraAction:'Kataloğu incele'
    },
    en: {
      navHome:'Home', navAbout:'About Us', navGallery:'Gallery', navContact:'Contact', navQuote:'Get a Quote',
      heroScript:'Your most precious moments', heroTitle:'DESIGNED<br>WITH ELEGANCE', heroText:'We bring your dreams to life and add value to your most precious moments with refined touches.', heroCta:'Explore the Concepts',
      conceptsEyebrow:'Concepts', conceptsIntro:'Choose the celebration you imagine and discover a catalogue of carefully curated details.',
      aboutTitle:'Elegance<br>lives in the details.', aboutText:'We thoughtfully plan every detail to make your special days unforgettable, creating warm, aesthetic celebrations designed exclusively for you.', aboutLink:'Get to know us',
      f1:'Bespoke Design', f1t:'We create original concepts inspired by your style and dreams.', f2:'Professional Team', f2t:'We carefully manage every step, from planning through execution.', f3:'Flawless Events', f3t:'We consider every detail so your day feels effortless and unforgettable.',
      contactEyebrow:'Let’s plan together', contactTitle:'Let’s take the first step<br>for your special day.', contactText:'Tell us your date, concept and the details you imagine. Lina Organization 28 will create a plan designed especially for you.', contactCta:'Send a Message', footer:'Your most precious moments, finished with elegant touches.',
      kinaSmall:'Traditional elegance', kinaTitle:'Henna Night', dugunSmall:'A timeless fairytale', dugunTitle:'Wedding', nisanSmall:'The first step together', nisanTitle:'Engagement', zeraSmall:'Photography & Video', zeraTitle:'Zera Art Film', zeraAction:'View catalogue'
    }
  };

  const set = (sel, value, html=false) => { const el=document.querySelector(sel); if(el) html ? el.innerHTML=value : el.textContent=value; };
  function apply(lang){
    const t=texts[lang] || texts.tr;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.language===lang)));
    set('[data-i18n="navHome"]',t.navHome); set('[data-i18n="navAbout"]',t.navAbout); set('[data-i18n="navGallery"]',t.navGallery); set('[data-i18n="navContact"]',t.navContact); set('[data-i18n="navQuote"]',t.navQuote);
    set('[data-i18n="heroScript"]',t.heroScript); set('[data-i18n-html="heroTitle"]',t.heroTitle,true); set('[data-i18n="heroText"]',t.heroText); set('[data-i18n="heroCta"]',t.heroCta);
    set('[data-i18n="conceptsEyebrow"]',t.conceptsEyebrow); set('[data-i18n="conceptsIntro"]',t.conceptsIntro); set('[data-i18n-html="aboutTitle"]',t.aboutTitle,true); set('[data-i18n="aboutText"]',t.aboutText); set('.intro .text-link span:first-child',t.aboutLink);
    set('.feature-card:nth-child(1) h3',t.f1); set('.feature-card:nth-child(1) p',t.f1t); set('.feature-card:nth-child(2) h3',t.f2); set('.feature-card:nth-child(2) p',t.f2t); set('.feature-card:nth-child(3) h3',t.f3); set('.feature-card:nth-child(3) p',t.f3t);
    set('.contact .eyebrow',t.contactEyebrow); set('.contact h2',t.contactTitle,true); set('.contact-copy>p:last-child',t.contactText); set('.contact-box .btn',t.contactCta); set('footer>p:first-of-type',t.footer);

    const cards = document.querySelectorAll('.concept-card');
    if(cards[0]) { set('.concept-card:nth-child(1) small',t.kinaSmall); set('.concept-card:nth-child(1) strong',t.kinaTitle); }
    if(cards[1]) { set('.concept-card:nth-child(2) small',t.dugunSmall); set('.concept-card:nth-child(2) strong',t.dugunTitle); }
    if(cards[2]) { set('.concept-card:nth-child(3) small',t.nisanSmall); set('.concept-card:nth-child(3) strong',t.nisanTitle); }
    if(cards[3]) { set('.concept-card:nth-child(4) small',t.zeraSmall); set('.concept-card:nth-child(4) strong',t.zeraTitle); set('.concept-card:nth-child(4) i',t.zeraAction); }

    // Sayfanın altında görünen eski "Lina özel seçkisi" başlığını kaldır.
    document.querySelectorAll('.catalog-head .eyebrow').forEach(el => el.remove());
    try{localStorage.setItem('lina-language',lang)}catch(e){}
  }
  document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();apply(b.dataset.language);}));
  let lang='tr'; try{lang=localStorage.getItem('lina-language')||'tr'}catch(e){} apply(lang);
})();
