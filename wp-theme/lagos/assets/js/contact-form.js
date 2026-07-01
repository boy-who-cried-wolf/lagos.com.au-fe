/**
 * Lagos Financial — shared contact form validation.
 */
(function () {
  'use strict';

  var messages = {
    full_name: 'Please enter your first name.',
    contact_number: 'Please enter your phone number.',
    email: 'Please enter your email address.',
    loanOption: 'Please select a loan type.',
  };

  document.querySelectorAll('[data-contact-form]').forEach(function (form) {
    function showError(field, message) {
      var el = form.querySelector('[data-error="' + field + '"]');
      var input = form.querySelector('[data-field="' + field + '"]');
      if (el) el.textContent = message || '';
      if (input) input.classList.toggle('is-invalid', Boolean(message));
    }

    function validate() {
      var valid = true;
      var name = form.full_name.value.trim();
      var phone = form.contact_number.value.trim().replace(/\D/g, '');
      var email = form.email.value.trim();
      var loan = form.loanOption.value;

      showError('full_name', name ? '' : messages.full_name);
      if (!name) valid = false;

      if (!phone) {
        showError('contact_number', messages.contact_number);
        valid = false;
      } else if (!/^0[23478]\d{8}$/.test(phone)) {
        showError('contact_number', 'Invalid phone number. Enter a 10-digit number starting with 0.');
        valid = false;
      } else {
        showError('contact_number', '');
      }

      if (!email) {
        showError('email', messages.email);
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
      } else {
        showError('email', '');
      }

      showError('loanOption', loan ? '' : messages.loanOption);
      if (!loan) valid = false;

      return valid;
    }

    form.contact_number.addEventListener('keypress', function (e) {
      if (!/[0-9]/.test(e.key)) e.preventDefault();
    });

    form.querySelectorAll('[data-field]').forEach(function (input) {
      input.addEventListener('input', function () {
        showError(input.getAttribute('data-field'), '');
      });
      input.addEventListener('change', function () {
        showError(input.getAttribute('data-field'), '');
      });
    });

    form.addEventListener('submit', function (e) {
      if (!validate()) e.preventDefault();
    });
  });
})();
