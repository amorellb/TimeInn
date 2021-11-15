const menu = document.querySelector('.nav-section');
let iconMenu = document.querySelector('.menu-icon');
let iconClose = document.querySelector('.x-close');

const toggleMenu = () => {
  menu.classList.toggle('menu2');
  menu.style.transition = 'transform 0.5s ease-in-out';
};

const openMenuHandler = function () {
  if (!iconMenu) return;
  iconMenu.addEventListener('click', () => {
    console.log(iconMenu);
    toggleMenu();
  });
};
openMenuHandler();

const closeMenuHandler = function () {
  if (!iconClose) return;
  iconClose.addEventListener('click', () => {
    console.log(iconClose);
    toggleMenu();
  });
};
closeMenuHandler();
