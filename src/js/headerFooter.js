const headerContainer = document.querySelector('.header');
const footerContainer = document.querySelector('.footer');

const generateHeaderMarkup = function () {
  return `
    <a href="index.html"><img class="logo" src="src/images/logo.png" alt="logo"></img></a>
    <div class="search"><input type="search" name="q" id="search" placeholder="Search events"><i class="fas fa-search"></i></div>
    <img src="src/images/menu-icon.png" alt="icono menu" class="menu-icon">
    <nav class="nav-section">
      <img src="src/images/x-close.png" alt="icono cerrar" class="x-close">
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
        <a href="http://PrivacyPolicy" class="link-footer">Privacy Policy</a>
        <a href="http://webdesign" class="link-footer">Web Design</a>
        <a href="http://cookies" class="link-footer">Cookies</a>
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
