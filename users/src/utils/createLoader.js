export default function createLoader(message) {
  const div = document.createElement('div');
  div.classList.add('alert', 'alert-info');
  div.textContent = message;
  return div;
}