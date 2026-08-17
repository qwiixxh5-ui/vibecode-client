const dialog = document.querySelector('#download-dialog');
document.querySelectorAll('[data-download]').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelectorAll('.close').forEach((button) => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
