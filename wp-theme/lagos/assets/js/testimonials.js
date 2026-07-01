/**
 * Testimonials Swiper — matches TestimonialsSection.tsx
 */
(function () {
  'use strict';

  var root = document.querySelector('.reviews-swiper');
  if (!root || typeof Swiper === 'undefined') {
    return;
  }

  new Swiper(root, {
    slidesPerView: 1.1,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.reviews-pagination',
      clickable: true,
      bulletClass: 'reviews-bullet',
      bulletActiveClass: 'reviews-bullet-active',
      renderBullet: function (index, className) {
        return (
          '<button type="button" class="' +
          className +
          '" aria-label="Testimonial slide ' +
          (index + 1) +
          '"></button>'
        );
      },
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.2,
        spaceBetween: 24,
        centeredSlides: false,
      },
      1280: {
        slidesPerView: 2.5,
        spaceBetween: 28,
        centeredSlides: false,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 28,
        centeredSlides: false,
      },
    },
  });
})();
