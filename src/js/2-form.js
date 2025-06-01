`use strict`;
const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};
const savedData = localStorage.getItem(storageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(storageKey, JSON.stringify(formData));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Submitted:', formData);
  formData = { email: '', message: '' };
  localStorage.removeItem(storageKey);
  form.reset();
});