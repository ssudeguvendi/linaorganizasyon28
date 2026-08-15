const links = document.querySelectorAll('.desktop-nav a');
const sections = [...links].map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
window.addEventListener('scroll', () => {
  let current = 'anasayfa';
  sections.forEach(section => { if (window.scrollY >= section.offsetTop - 180) current = section.id; });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
});
