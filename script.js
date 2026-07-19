// Rok w stopce
document.getElementById('year').textContent = new Date().getFullYear();

// Delikatne pojawianie się sekcji przy scrollu (jeśli przeglądarka wspiera)
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.service, .why-item, .contact-card');
  targets.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => io.observe(el));
}
