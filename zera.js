(() => {
  const card = document.querySelector('[data-zera-open]');
  if (!card) return;

  const modal = document.createElement('div');
  modal.className = 'zera-scroll-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="zera-scroll-backdrop" data-zera-close></div>
    <div class="zera-scroll-panel" role="dialog" aria-modal="true" aria-labelledby="zeraScrollTitle">
      <button class="zera-scroll-close" type="button" data-zera-close aria-label="Kapat">×</button>
      <div class="zera-scroll-heading">
        <p class="eyebrow">Lina Organizasyon 28</p>
        <p class="zera-scroll-kicker">Anlaşmalı Fotoğraf &amp; Video Hizmeti</p>
        <h2 id="zeraScrollTitle">Zera Art Film</h2>
        <p>Organizasyonunuzun en özel anlarını profesyonel fotoğraf ve video çekimleriyle ölümsüzleştiriyoruz.</p>
      </div>
      <div class="zera-scroll-gallery">
        <figure><img src="imageszeraartfilm-kapak.jpg" alt="Zera Art Film fotoğraf ve video hizmeti" loading="eager"></figure>
        <figure><img src="imageszeraartfilm-2.jpg" alt="Zera Art Film ikinci fotoğraf" loading="lazy"></figure>
      </div>
      <div class="zera-scroll-contact">
        <div><span>Instagram</span><strong>@zeraartfilm</strong></div>
        <div><span>İletişim</span><strong>0551 368 36 28</strong></div>
      </div>
      <div class="zera-scroll-actions">
        <a class="btn btn-primary" href="https://www.instagram.com/zeraartfilm/" target="_blank" rel="noreferrer">Instagram'ı İncele</a>
        <a class="btn zera-phone" href="tel:+905513683628">Ara</a>
      </div>
    </div>`;

  document.body.appendChild(modal);

  const open = () => {
    modal.hidden = false;
    document.body.classList.add('zera-modal-open');
    requestAnimationFrame(() => modal.classList.add('is-open'));
  };
  const close = () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('zera-modal-open');
    setTimeout(() => { modal.hidden = true; }, 280);
  };

  card.addEventListener('click', open);
  modal.querySelectorAll('[data-zera-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
})();
