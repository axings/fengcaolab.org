'use strict';
const navigation = document.querySelector('#navigation');
const menuButton = document.querySelector('.menu-toggle');
function closeMenu() {
  navigation.removeAttribute('data-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '＋';
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  if (expanded) closeMenu();
  else {
    navigation.setAttribute('data-open', '');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.querySelector('span').textContent = '−';
  }
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.hasAttribute('data-open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('main section[id]');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navigation.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-18% 0px -60% 0px', threshold: 0});
  sections.forEach(section => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
