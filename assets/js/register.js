// Toggle mot de passe visible / masqué
function togglePassword() {
  const pwdInput = document.getElementById('password');
  const icon = document.getElementById('togglePwdIcon');
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    icon.classList.remove('bi-eye');
    icon.classList.add('bi-eye-slash');
  } else {
    pwdInput.type = 'password';
    icon.classList.remove('bi-eye-slash');
    icon.classList.add('bi-eye');
  }
}

// Validation bootstrap
(() => {
  'use strict';
  const form = document.getElementById('registerForm');
  form.addEventListener(
    'submit',
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    },
    false
  );
})();
