import createError from '../utils/createError';
import createLoader from '../utils/createLoader';
import api from '../utils/api';

const userDiv = document.querySelector('.user');

function renderUser(user) {
  const avatar = document.createElement('img');
  avatar.src = user.avatar;
  const p1 = document.createElement('p');
  p1.textContent = `${user.first_name} ${user.last_name}`;
  const p2 = document.createElement('p');
  p2.textContent = `${user.email}`;
  const div = document.createElement('div');
  div.append(avatar, p1, p2);
  return div;
}

async function fetchUser(id) {
  return await api.get(`https://reqres.in/api/users/${id}`);
}

async function render(id) {
  userDiv.classList.remove('hidden');
  userDiv.innerHTML = '';
  const loader = createLoader('Cargando usuario');
  userDiv.appendChild(loader);
  try {
    const user = await fetchUser(id);
    const userContent = renderUser(user);
    userDiv.appendChild(userContent);
  } catch (error) {
    const divError = createError('Se produjo un error recuperando el usuario');
    userDiv.appendChild(divError);
  } finally {
    userDiv.removeChild(loader);
  }
}

export default {
  renderUser: render
}