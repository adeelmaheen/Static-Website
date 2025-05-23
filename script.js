const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

function toggleMenu() {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  if (expanded) {
    hamburger.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    setMenuTabIndex(-1);
  } else {
    hamburger.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    hamburger.classList.add('active');
    menu.classList.add('active');
    setMenuTabIndex(0);
  }
}

function setMenuTabIndex(value) {
  menu.querySelectorAll('a').forEach(a => a.tabIndex = value);
}

hamburger.addEventListener('click', toggleMenu);

hamburger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

setMenuTabIndex(-1);
