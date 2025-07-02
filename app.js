// form validationMore actions
const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('contact');
const email = document.getElementById('mail');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
  if (!emailRegex.test(email.value)) {
    e.preventDefault();
    errorMessage.style.display = 'block';
    email.style.border = '#dd5353 2px solid';
  }
});
// local storage

let localData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const messageInput = document.getElementById('msg');

function dataLocalStore() {
  localStorage.setItem('name', JSON.stringify(localData));
}

form.addEventListener('change', () => {
  localData.name = nameInput.value;
  localData.email = emailInput.value;
  localData.message = messageInput.value;
  dataLocalStore();
});