/**
 * Lagos Financial homepage interactions.
 */
(function () {
  'use strict';

  var contactUrl = (window.lagosFeHome && window.lagosFeHome.contactUrl) || '/contact';

  document.querySelectorAll('[data-hero-card]').forEach(function (card) {
    card.addEventListener('click', function () {
      var action = card.getAttribute('data-action');
      if (action === 'equity') {
        window.location.href = contactUrl;
        return;
      }

      if (document.querySelector('script[data-hailo-widget]')) {
        return;
      }

      try {
        localStorage.setItem('brokerId', '114');
      } catch (e) {
        /* ignore */
      }

      var script = document.createElement('script');
      script.src =
        'https://loanoptions-widget.s3.ap-southeast-2.amazonaws.com/hailo-distribution/main/hailo-distribution-build.js';
      script.setAttribute('data-hailo-widget', 'true');
      document.body.appendChild(script);
    });
  });

})();
