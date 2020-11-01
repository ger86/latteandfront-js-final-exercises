import createError from '../utils/createError';
import createLoader from '../utils/createLoader';
import createSuccess from '../utils/createSuccess';
import api from '../utils/api';

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
      divError = createError('El nombre del usuario no puede estar vacío');
      form.appendChild(divError);
      return;
    }
    if (user.job === '') {
      divError = createError('El trabajo del usuario no puede estar vacío');
      form.appendChild(divError);
      return;
    }
    const loader = createLoader('Creando usuario');
    form.appendChild(loader);
    try {
      await postUser(user);
      divSuccess = createSuccess('El usuario fue creado');
      form.appendChild(divSuccess);
      if (onCreate) {
        onCreate();
      }
    } catch (error) {
      divError = createError('Error creando el usuario' + error.message);
      form.appendChild(divError);
    } finally {
      form.removeChild(loader);
    }
  })
}


export default {
  initForm
}