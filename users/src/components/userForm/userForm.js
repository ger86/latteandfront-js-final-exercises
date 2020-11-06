import alert from '../alert';
import api from '../../utils/api';
import './styles.css';

const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const jobInput = document.getElementById('job');
let divError = null;
let divSuccess = null;

function clean() {
  if (divError) {
    form.removeChild(divError);
    divError = null;
  }
  if (divSuccess) {
    form.removeChild(divSuccess);
    divSuccess = null;
  }
}

async function postUser(user) {
  return await api.post('https://reqres.in/api/users', user);
}

function initForm(onCreate) {
  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    clean();
    const user = {
      name: nameInput.value,
      job: jobInput.value
    }
    if (user.name === '') {
      divError = alert.createError('El nombre del usuario no puede estar vacío');
      form.appendChild(divError);
      return;
    }
    if (user.job === '') {
      divError = alert.createError('El trabajo del usuario no puede estar vacío');
      form.appendChild(divError);
      return;
    }
    const loader = alert.createLoader('Creando usuario');
    form.appendChild(loader);
    try {
      await postUser(user);
      divSuccess = alert.createSuccess('El usuario fue creado');
      form.appendChild(divSuccess);
      if (onCreate) {
        onCreate();
      }
    } catch (error) {
      divError = alert.createError('Error creando el usuario' + error.message);
      form.appendChild(divError);
    } finally {
      form.removeChild(loader);
    }
  })
}


export default {
  initForm
}