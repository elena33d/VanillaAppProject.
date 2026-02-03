import { getFavorites, removeFromFavorites } from './js/favorites';

const list = document.querySelector('.favoritesList');
const emptyMessage = document.querySelector('.emptyMessage');

function renderFavorites() {
  const favorites = getFavorites();

  list.innerHTML = '';

  if (favorites.length === 0) {
    emptyMessage.classList.remove('isHidden');
    return;
  }

  emptyMessage.classList.add('isHidden');

  favorites.forEach(item => {
    const li = document.createElement('li');
    li.className = 'exerciseCard';

    li.innerHTML = `
      <h3>${item.name}</h3>
      <p><b>Body part:</b> ${item.bodyPart}</p>
      <p><b>Target:</b> ${item.target}</p>
      <p><b>Calories:</b> ${item.calories}</p>
      <button data-id="${item.id}" class="removeBtn">Remove</button>
    `;

    list.appendChild(li);
  });
}

list.addEventListener('click', event => {
  if (event.target.classList.contains('removeBtn')) {
    removeFromFavorites(event.target.dataset.id);
    renderFavorites();
  }
});

renderFavorites();
