const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.side-nav');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

close.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
