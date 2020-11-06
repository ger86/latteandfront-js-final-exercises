import './styles.css';

function createAlert(type, message) {
  const div = document.createElement('div');
  div.classList.add('alert', `alert-${type}`);
  div.textContent = message;
  return div;
}

function createError(message) {
  return createAlert('error', message);
}

function createLoader(message) {
  return createAlert('info', message);
}

function createSuccess(message) {
  return createAlert('success', message);
}

export default {
  createError,
  createLoader,
  createSuccess
}

