function togglePassword(spanId, btn) {
  const span = document.getElementById(spanId);
  const password = span.getAttribute('data-password');
  if (span.textContent.includes('•')) {
    span.textContent = password;
    btn.querySelector('i').classList.remove('bi-eye');
    btn.querySelector('i').classList.add('bi-eye-slash');
  } else {
    span.textContent = '••••••••';
    btn.querySelector('i').classList.remove('bi-eye-slash');
    btn.querySelector('i').classList.add('bi-eye');
  }
}

function copyPassword(spanId, btn) {
  const span = document.getElementById(spanId);
  const password = span.getAttribute('data-password');
  navigator.clipboard.writeText(password);

  // Change l'icône en check vert pendant 1s
  const icon = btn.querySelector('i');
  const originalClass = icon.className;
  icon.className = 'bi bi-check-circle-fill text-success';
  setTimeout(() => {
    icon.className = originalClass;
  }, 1000);
}