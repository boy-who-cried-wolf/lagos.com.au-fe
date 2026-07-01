/**
 * Lagos Financial theme — header navigation interactions.
 */
(function () {
  'use strict';

  var shell = document.querySelector('[data-nav-shell]');
  var mobileToggle = document.querySelector('[data-mobile-toggle]');
  var mobilePanel = document.querySelector('[data-mobile-panel]');

  function setMobileOpen(isOpen) {
    if (!mobileToggle || !mobilePanel || !shell) return;
    mobileToggle.classList.toggle('is-open', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobilePanel.hidden = !isOpen;
    mobilePanel.classList.toggle('is-open', isOpen);
    shell.classList.toggle('is-menu-open', isOpen);
  }

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', function () {
      setMobileOpen(mobilePanel.hidden);
    });
  }

  document.querySelectorAll('[data-nav-dropdown]').forEach(function (dropdown) {
    var trigger = dropdown.querySelector('[data-dropdown-trigger]');
    var panel = dropdown.querySelector('[data-dropdown-panel]');
    var icon = trigger ? trigger.querySelector('.nav-dropdown-trigger-icon') : null;
    if (!trigger || !panel) return;

    var open = false;

    function setOpen(next) {
      open = next;
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('is-open', open);
      if (icon) icon.classList.toggle('is-open', open);
    }

    dropdown.addEventListener('mouseenter', function () {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(true);
    });

    dropdown.addEventListener('mouseleave', function () {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false);
    });

    trigger.addEventListener('click', function () {
      setOpen(!open);
    });
  });

  document.querySelectorAll('[data-mobile-group]').forEach(function (group) {
    var trigger = group.querySelector('[data-mobile-group-trigger]');
    var sub = group.querySelector('[data-mobile-sub]');
    var icon = trigger ? trigger.querySelector('.nav-dropdown-trigger-icon') : null;
    if (!trigger || !sub) return;

    trigger.addEventListener('click', function () {
      var isOpen = sub.hidden;
      sub.hidden = !isOpen;
      sub.classList.toggle('is-open', isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (icon) icon.classList.toggle('is-open', isOpen);
    });
  });

  document.querySelectorAll('.site-header__mobile-link, .site-header__mobile-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      setMobileOpen(false);
    });
  });

  document.querySelectorAll('[data-faq-accordion]').forEach(function (accordion) {
    accordion.querySelectorAll('[data-accordion-item]').forEach(function (item) {
      var trigger = item.querySelector('[data-accordion-trigger]');
      var panel = item.querySelector('[data-accordion-panel]');
      if (!trigger || !panel) return;

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        accordion.querySelectorAll('[data-accordion-item]').forEach(function (other) {
          var otherTrigger = other.querySelector('[data-accordion-trigger]');
          var otherPanel = other.querySelector('[data-accordion-panel]');
          if (!otherTrigger || !otherPanel) return;
          other.classList.remove('is-open');
          otherTrigger.setAttribute('aria-expanded', 'false');
          otherPanel.hidden = true;
        });

        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
          panel.hidden = false;
        }
      });
    });
  });
})();
