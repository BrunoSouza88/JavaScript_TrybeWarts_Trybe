const email = document.getElementById('email');
const senha = document.getElementById('password');
const button = document.getElementById('send');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const enviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

enviar.disabled = true;

checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    enviar.disabled = false;
  }
  if (checkbox.checked === false) {
    enviar.disabled = true;
  }
});
