document
  .querySelector('.scroll-up-icon')
  .addEventListener('click', function () {
    scrollUp();
  });

function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
    buttonUp.style.transform = 'scale(0)';
  }
}

let buttonUp = document.querySelector('.scroll-up-icon');

window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 200) {
    buttonUp.style.transform = 'scale(1)';
  } else if (scroll < 200) {
    buttonUp.style.transform = 'scale(0)';
  }
};
