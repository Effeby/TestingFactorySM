function toggleLoginPassword() {
  const pwd = document.getElementById('loginPassword');
  const icon = document.getElementById('togglePwdIcon');
  if (pwd.type === 'password') {
    pwd.type = 'text';
    icon.classList.remove('bi-eye');
    icon.classList.add('bi-eye-slash');
  } else {
    pwd.type = 'password';
    icon.classList.remove('bi-eye-slash');
    icon.classList.add('bi-eye');
  }
}