const menu = document.getElementsByClassName('nav-section')[0];
let iconMenu = document.getElementsByClassName('menu-icon')[0];
let iconClose = document.getElementsByClassName('x-close')[0];

const toggleMenu = () => {
  menu.classList.toggle('menu2');
  menu.style.transition = 'transform 0.5s ease-in-out';
};

const openMenuHandler = function () {
  if (!iconMenu) return;
  iconMenu.addEventListener('click', toggleMenu());
};
openMenuHandler();

const closeMenuHandler = function () {
  if (!iconClose) return;
  iconClose.addEventListener('click', toggleMenu());
};
closeMenuHandler();
