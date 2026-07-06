/* ==========================================================================
   ValeBorne Inc. — Shared JavaScript
   Handles: mobile navigation, scroll-triggered reveal animations,
   and demo form submissions (contact + newsletter).
   No frameworks. No dependencies.
   ========================================================================== */

(function () {
  'use strict';

  /* ---- 1. Mobile navigation toggle ---- */
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the menu when a link is tapped (mobile UX nicety)
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- 2. Scroll-triggered reveal animations ----
     Elements with the class .reveal fade/slide in when they enter the
     viewport. Respects prefers-reduced-motion via CSS (see style.css). */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback for very old browsers: show everything immediately
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- 3. Demo form handling ----
     Forms with [data-demo-form] show a confirmation message instead of
     posting anywhere. Replace with a real backend (Formspree, Netlify
     Forms, etc.) before launch — see the README. */
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic HTML5 validity check
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const note = form.querySelector('.form-note');
      if (note) {
        note.classList.add('show');
        note.setAttribute('role', 'status');
      }
      form.reset();
    });
  });
})();
