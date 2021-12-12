const headerContainer = document.querySelector('.header');
const footerContainer = document.querySelector('.footer');

/**
 * A function that is used to generate the html of the header
 * @returns A string that has the html of the header section of the webpage
 */
const generateHeaderMarkup = function (userName) {
  const firstLetter = userName?.slice(0, 1).toUpperCase();
  const lastLetters = userName?.slice(1, userName?.length);
  const name = firstLetter?.concat(lastLetters);
  return `
    <a href="index.html"><img class="logo" src="${require('../images/logo.png')}" alt="logo"></img></a>
    <a href="#toCalendar" class="menu-icon"><img class="menu-icon" src="${require('../images/calendar-icon.png')}" alt="icono menu"></a>
    <img class="menu-icon login-icon" src="${require('../images/user-icon.png')}" alt="icono menu">
    <img class="menu-icon" src="${require('../images/cart-icon.png')}" alt="icono menu">
    <img class="nav-btn menu-icon" src="${require('../images/menu-icon.png')}" alt="icono menu">
    <nav class="nav-section">
      <img class="nav-btn x-close" src="${require('../images/x-close.png')}" alt="icono cerrar">
      <a href="./all-events.html">Events</a>
      <a href="./all-news.html">News</a>
      <a href="Prices">Prices</a>
      <a href="About us">About us</a>
      <a href="Contact">Contact</a>
    </nav>
    ${userName ? `<p class="user-name">${name}</p>` : ''}
    `;
};

/**
 * A function that is used to generate the html of the footer
 * @returns A string that has the html of the webpage's footer section
 */
const generateFooterMarkup = function () {
  return `
  <div class="footer-container">
    <div class= "footer-info">
    <img src="${require('../images/map.png')}" alt="map" class="map">
    <div class="contact">
      <p>Times Square, 4th, New York</p>
      <p>555-66245567</p>
      <p>thecodetheater@mail.com </p>
    </div>
    <div class="social-links">
      <div class="social-icons">
        <i class="fab fa-instagram "></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
        <i class="fas fa-rss"></i>
      </div>
      <div class="footer-links">
        <a href="http://PrivacyPolicy" class="link-footer">Privacy Policy</a>
        <a href="http://webdesign" class="link-footer">Web Design</a>
        <a href="http://cookies" class="link-footer">Cookies</a>
      </div>
      </div>
      </div>
    <div class="footer-refrn">
    All the data and images used come from&nbsp<a href="https://www.liceubarcelona.cat/">www.liceubarcelona.cat</a>
    </div>
  </div>`;
};

/**
 * A function that add the header generated html into the header container
 */
export const renderHeader = function (userName) {
  if (!headerContainer) return;
  headerContainer.insertAdjacentHTML(
    'afterbegin',
    generateHeaderMarkup(userName)
  );
};

/**
 * A function that add the footer generated html into the header container
 */
export const renderFooter = function () {
  if (!footerContainer) return;
  footerContainer.insertAdjacentHTML('afterbegin', generateFooterMarkup());
};

/**
 * A function to show or hide the header's nav menu
 */
const toggleMenu = function () {
  const headerMenu = document.querySelector('.nav-section');
  if (!headerMenu) return;
  headerMenu.classList.toggle('menu2');
};

/**
 * A handler for the menu icons of the header
 */
const menuHandler = function () {
  if (!headerContainer) return;
  headerContainer.addEventListener('click', e => {
    const btn = e.target;
    if (!btn) return;
    if (btn.classList.contains('nav-btn')) toggleMenu();
    if (btn.classList.contains('login-icon')) sendToLoginPage();
  });
};
menuHandler();

/**
 * A function to send the user from the frontpage to the login page
 */
const sendToLoginPage = function () {
  window.location.replace('login.html');
};
