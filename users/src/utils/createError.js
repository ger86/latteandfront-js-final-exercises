export default function createError(message) {
  const div = document.createElement('div');
  div.classList.add('alert', 'alert-danger');
  div.textContent = message;
  return div;
}