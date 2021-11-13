const menu = document.getElementsByClassName('nav-section')[0];
let iconoMenu = document.getElementsByClassName('menu-icon')[0];
let iconoClose = document.getElementsByClassName('x-close')[0];

const toggleMenu = () => {
  menu.classList.toggle('menu2');
  menu.style.transition = 'transform 0.5s ease-in-out';
};
iconoMenu.addEventListener('click', function () {
  toggleMenu();
});

iconoClose.addEventListener('click', function () {
  toggleMenu();
});
