/**
 * Scroll-triggered animations — mirrors AnimateOnScroll.tsx
 */
(function () {
  'use strict';

  var selector =
    '.animate-on-scroll, .animate-fade-in, .animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-zoom-in';

  function markInView(el) {
    el.classList.add('in-view');
  }

  function initPageContentSectionAnimations() {
    var roots = document.querySelectorAll('[data-page-content-sections]');
    roots.forEach(function (root) {
      var units = root.querySelectorAll('.page-intro, .page-section, .page-accreditations');
      units.forEach(function (el, index) {
        el.classList.add('animate-fade-up');
        el.style.setProperty('--aos-delay', String((index % 6) * 80) + 'ms');
      });
    });
  }

  function initAnimations() {
    initPageContentSectionAnimations();

    var elements = document.querySelectorAll(selector);
    if (!elements.length) {
      return;
    }

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var desktop = window.matchMedia('(min-width: 1024px)').matches;

    document.querySelectorAll('.page-hero [class*="animate-"], .home-hero [class*="animate-"]').forEach(markInView);

    if (reducedMotion || !desktop) {
      elements.forEach(markInView);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            markInView(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-page-content-sections] .animate-fade-up').forEach(function (el) {
      observer.observe(el);
    });

    elements.forEach(function (el) {
      if (el.closest('[data-page-content-sections]')) {
        return;
      }
      observer.observe(el);
    });
  }

  function initHeroImageFallbacks() {
    document.querySelectorAll('img[data-hero-fallback]').forEach(function (img) {
      img.addEventListener('error', function onError() {
        var fallback = img.getAttribute('data-hero-fallback');
        if (fallback && img.src !== fallback) {
          img.removeEventListener('error', onError);
          img.src = fallback;
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAnimations();
      initHeroImageFallbacks();
    });
  } else {
    initAnimations();
    initHeroImageFallbacks();
  }
})();
