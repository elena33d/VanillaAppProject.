import { addToFavorites } from './favorites';

const backdrop = document.querySelector('[data-modal-backdrop]');
const closeBtn = document.querySelector('[data-modal-close]');

export function openModal() {
  backdrop.classList.remove('isHidden');
  document.addEventListener('keydown', handleEscape);
}

export function closeModal() {
  backdrop.classList.add('isHidden');
  document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    closeModal();
  }
});

closeBtn.addEventListener('click', closeModal);
const favoriteBtn = document.querySelector('.favoriteBtn');

favoriteBtn.addEventListener('click', () => {
  const exercise = {
    id: '1',
    name: 'Push-ups',
    bodyPart: 'Chest',
    target: 'Pectorals',
    calories: 45,
  };

  addToFavorites(exercise);
  alert('Added to favorites ❤️');
});
