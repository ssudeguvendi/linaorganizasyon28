(() => {
  const modal = document.getElementById('zeraModal');
  if (!modal) return;
  const image = document.getElementById('zeraModalImage');
  const openButton = document.querySelector('[data-zera-open]');
  const closeButtons = modal.querySelectorAll('[data-zera-close]');
  const thumbs = modal.querySelectorAll('[data-zera-img]');

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

  openButton?.addEventListener('click', open);
  closeButtons.forEach(btn => btn.addEventListener('click', close));
  thumbs.forEach(btn => btn.addEventListener('click', () => {
    image.src = btn.dataset.zeraImg;
    thumbs.forEach(item => item.classList.remove('active'));
    btn.classList.add('active');
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
})();
