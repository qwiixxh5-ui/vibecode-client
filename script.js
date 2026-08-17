const dialog = document.querySelector('#download-dialog');
document.querySelectorAll('[data-download]').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelectorAll('.close').forEach((button) => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

const authDialog = document.querySelector('#auth-dialog');
const authTitle = document.querySelector('[data-auth-title]');
const authText = document.querySelector('[data-auth-text]');
const authSubmit = document.querySelector('[data-auth-submit]');
const authSwitch = document.querySelector('[data-auth-switch]');
let mode = 'login';
function setAuthMode(nextMode) {
  mode = nextMode;
  const registering = mode === 'register';
  authTitle.textContent = registering ? 'Регистрация' : 'Войти';
  authText.textContent = 'Это демонстрационное окно. Аккаунты и данные не сохраняются.';
  authSubmit.innerHTML = `${registering ? 'Создать аккаунт' : 'Войти'} <span>→</span>`;
  authSwitch.textContent = registering ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться';
}
document.querySelectorAll('[data-auth]').forEach((button) => button.addEventListener('click', () => { setAuthMode(button.dataset.auth); authDialog.showModal(); }));
authSwitch.addEventListener('click', () => setAuthMode(mode === 'login' ? 'register' : 'login'));
authDialog.addEventListener('click', (event) => { if (event.target === authDialog) authDialog.close(); });
