import createError from '../utils/createError';
import createLoader from '../utils/createLoader';
import api from '../utils/api';
import userComponent from './user';

const usersList = document.querySelector('.users-list');

function createUserLi(user) {
  const li = document.createElement('li');
  li.textContent = `${user.first_name} ${user.last_name}`;
  li.addEventListener('click', () => userComponent.renderUser(user.id));
  return li;
}

async function fetchUsers() {
  return await api.get('https://reqres.in/api/users');
}

async function render() {
  usersList.innerHTML = '';
  const loader = createLoader('Cargando usuarios');
  usersList.appendChild(loader);
  try {
    const users = await fetchUsers();
    const userListItems = users.map(createUserLi);
    usersList.append(...userListItems);
  } catch (error) {
    const divError = createError('Se produjo un error recuperando los usuarios');
    usersList.appendChild(divError);
  } finally {
    usersList.removeChild(loader);
  }
}

export default {
  render
};