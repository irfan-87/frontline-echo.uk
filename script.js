document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.main-nav')?.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.main-nav')?.classList.remove('open'));
});
