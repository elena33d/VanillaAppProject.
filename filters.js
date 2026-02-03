const filterButtons = document.querySelectorAll('.filterBtn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('isActive'));
    button.classList.add('isActive');
  });
});
