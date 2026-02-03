const ratingBackdrop = document.querySelector('[data-rating-backdrop]');
const ratingCloseBtn = document.querySelector('[data-rating-close]');
const ratingForm = document.querySelector('.ratingForm');

export function openRatingModal() {
  ratingBackdrop.classList.remove('isHidden');
  document.addEventListener('keydown', handleEscape);
}

export function closeRatingModal() {
  ratingBackdrop.classList.add('isHidden');
  document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    closeRatingModal();
  }
}

ratingBackdrop.addEventListener('click', event => {
  if (event.target === ratingBackdrop) {
    closeRatingModal();
  }
});

ratingCloseBtn.addEventListener('click', closeRatingModal);

ratingForm.addEventListener('submit', event => {
  event.preventDefault();
  alert('Rating sent successfully!');
  closeRatingModal();
});
