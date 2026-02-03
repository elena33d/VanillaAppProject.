import { loadExerciseCards, initCardsEventListener, initSearch } from './js/exercises.js';
import { displayQuote } from './js/quote.js';
import { initHeader } from './js/header.js';
import { initExerciseModal } from './js/exercise-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initExerciseModal();
});

document.addEventListener('DOMContentLoaded', async function() {
  console.log("DOM ready");

  // Инициализация навигации Home/Favorites
  initHeader();

  // Инициализация клика по карточкам
  initCardsEventListener();

  // Инициализация поиска
  initSearch();

  // Инициализация фильтров (Muscles, Body parts, Equipment)
  const filterButtons = document.querySelectorAll('.exercises__content__header-filters-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('exercises__content__header-filters-item--active'));
      this.classList.add('exercises__content__header-filters-item--active');
      const filter = this.dataset.filter;
      loadExerciseCards(filter, 1);
    });
  });

  // Загружаем цитату дня
  await displayQuote();

  // Загружаем карточки упражнений по умолчанию
  loadExerciseCards('Muscles', 1);
  
});