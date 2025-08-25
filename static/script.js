(function () {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('site-menu');
  const backdrop = document.getElementById('menu-backdrop');

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    backdrop.hidden = false;
    const first = menu.querySelector('.menu__item');
    if (first) first.focus();
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    backdrop.hidden = true;
    btn.focus();
  }

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) { closeMenu(); } else { openMenu(); }
  });

  backdrop.addEventListener('click', closeMenu);

  // Închidere cu Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Închidere după click pe item
  menu.addEventListener('click', (e) => {
    const item = e.target.closest('.menu__item');
    if (item) closeMenu();
  });

  // 🔥 Închidere cu click dreapta oriunde
  document.addEventListener('contextmenu', (e) => {
    if (menu.classList.contains('open')) {
      e.preventDefault();  // opțional: blochează meniul standard browser
      closeMenu();
    }
  });
})();

// === COUNTDOWN ===
// Setează data lansării (YYYY-MM-DDTHH:MM:SS)
const DROP_TARGET_ISO = '2025-09-01T20:00:00'; // exemplu: 1 sept 2025, 20:00

function startCountdown() {
  const t = document;
  const elD = t.getElementById('cd-days');
  const elH = t.getElementById('cd-hours');
  const elM = t.getElementById('cd-mins');
  const elS = t.getElementById('cd-secs');
  if (!elD || !elH || !elM || !elS) return;

  const target = new Date(DROP_TARGET_ISO).getTime();

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = Date.now();
    let delta = Math.max(0, target - now);

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    delta -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(delta / (1000 * 60 * 60));
    delta -= hours * (1000 * 60 * 60);

    const mins = Math.floor(delta / (1000 * 60));
    delta -= mins * (1000 * 60);

    const secs = Math.floor(delta / 1000);

    elD.textContent = pad(days);
    elH.textContent = pad(hours);
    elM.textContent = pad(mins);
    elS.textContent = pad(secs);
  }

  tick();
  setInterval(tick, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);

// === OPTIONAL: reveal on scroll pentru secțiuni (aplică clasa .reveal în HTML)
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => io.observe(el));
})();
