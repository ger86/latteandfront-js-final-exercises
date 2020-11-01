export default function createSuccess(message) {
  const div = document.createElement('div');
  div.classList.add('alert', 'alert-success');
  div.textContent = message;
  return div;
}