// === Theme: respect saved preference or system ===
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (saved === 'light' || (!saved && prefersLight)) {
    root.classList.add('light');
  }
  document.getElementById('themeToggle').addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

// === Mobile nav toggle + close on link click ===
(function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  const links = document.querySelectorAll('.nav-link');
  if (!toggle || !list) return;

  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.forEach(link => link.addEventListener('click', () => {
    list.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
})();

// === Scroll spy: highlight active nav link ===
(function initScrollSpy() {
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = new Map(
    [...document.querySelectorAll('.nav-link')].map(a => [a.getAttribute('href').slice(1), a])
  );

  const onScroll = () => {
    let current = sections[0]?.id;
    for (const sec of sections) {
      const top = sec.getBoundingClientRect().top;
      if (top <= 100) current = sec.id;
    }
    navLinks.forEach(link => link.classList.remove('active'));
    if (current && navLinks.get(current)) {
      navLinks.get(current).classList.add('active');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// === Reveal on scroll ===
(function initReveal() {
  const els = document.querySelectorAll('[data-animate]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

// === Footer year auto-update ===
document.getElementById('year').textContent = new Date().getFullYear();
