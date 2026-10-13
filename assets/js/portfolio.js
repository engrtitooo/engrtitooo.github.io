'use strict';

// Navigation and filtering enhance a site whose links and content work without JavaScript.
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menu && navigation) {
  document.documentElement.classList.add('js');
  menu.hidden = false;
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);
}

const filters = document.querySelector('.product-filters');
if (filters) {
  const buttons = filters.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-categories]');
  const status = document.querySelector('#filter-status');
  filters.hidden = false;
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      let count = 0;
      cards.forEach((card) => {
        const matches = category === 'all' || card.dataset.categories.split(' ').includes(category);
        card.hidden = !matches;
        if (matches) count += 1;
      });
      if (status) status.textContent = count + ' project' + (count === 1 ? '' : 's') + ' shown';
    });
  });
}
