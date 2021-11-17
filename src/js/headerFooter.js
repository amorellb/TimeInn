const headerContainer = document.querySelector('.header');
const footerContainer = document.querySelector('.footer');

const generateHeaderMarkup = function () {
  return `
    <a href="index.html"><img class="logo" src="src/images/logo.png" alt="logo"></img></a>
    <div class="search"><input type="search" name="q" id="search" placeholder="Search events"><i class="fas fa-search"></i></div>
    <img class="nav-btn menu-icon" src="src/images/menu-icon.png" alt="icono menu">
    <nav class="nav-section">
      <img class="nav-btn x-close" src="src/images/x-close.png" alt="icono cerrar">
      <a href="Login">Login</a>
      <a href="Programming">Programming</a>
      <a href="Calendar">Calendar</a>
      <a href="Prices">Prices</a>
      <a href="About us">About us</a>
      <a href="Contact">Contact</a>
    </nav>
  `;
};

const generateFooterMarkup = function () {
  return `
  <div class="footer-container">
    <div class= "footer-info">
    <img src="src/images/map.png" alt="map" class="map">
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
        <a href="http://PrivacyPolicy" class="link-footer">Privacy Policy - </a>
        <a href="http://webdesign" class="link-footer">Web Design - </a>
        <a href="http://cookies" class="link-footer">Cookies</a>
      </div>
      </div>
      </div>
    <div class="footer-refrn">
    All the data and images used come from&nbsp<a href="https://www.liceubarcelona.cat/">www.liceubarcelona.cat</a>
    </div>
  </div>`;
};

export const renderHeader = function () {
  if (!headerContainer) return;
  headerContainer.insertAdjacentHTML('afterbegin', generateHeaderMarkup());
};

export const renderFooter = function () {
  if (!footerContainer) return;
  footerContainer.insertAdjacentHTML('afterbegin', generateFooterMarkup());
};

const toggleMenu = function () {
  const headerMenu = document.querySelector('.nav-section');
  if (!headerMenu) return;
  headerMenu.classList.toggle('menu2');
  headerMenu.style.transition = 'transform 0.5s ease-in-out';
};

const menuHandler = function () {
  if (!headerContainer) return;
  headerContainer.addEventListener('click', e => {
    const btn = e.target.closest('.nav-btn');
    if (!btn) return;
    toggleMenu();
  });
};
menuHandler();
